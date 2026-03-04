import os
import re

txt_dir = "../bilgiler/txt"

def slugify(text):
    text = text.lower()
    text = text.replace(' ', '-').replace('ı', 'i').replace('ö', 'o').replace('ü', 'u').replace('ş', 's').replace('ğ', 'g').replace('ç', 'c')
    text = re.sub(r'[^a-z0-9-]', '', text)
    return text[:50].strip('-')

def get_category(text, filename):
    text_lower = (text + ' ' + filename).lower()
    if 'gıda' in text_lower or 'gida' in text_lower or 'hijyen' in text_lower or 'aflatoksin' in text_lower:
        return 'Gıda Güvenliği'
    elif 'strateji' in text_lower or 'ekonomi' in text_lower or 'pazarlama' in text_lower:
        return 'Strateji'
    elif 'sürdürülebilir' in text_lower or 'surdurulebilir' in text_lower or 'çevre' in text_lower:
        return 'Sürdürülebilirlik'
    else:
        return 'Yönetim'

articles = []
for file in sorted(os.listdir(txt_dir)):
    if not file.endswith('.txt') or 'BIX Kurumsal_web' in file:
        continue
    
    path = os.path.join(txt_dir, file)
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read().strip()
    
    lines = content.split('\n')
    lines = [l.strip() for l in lines if l.strip()]
    if not lines:
        continue
    
    title = lines[0]
    # some titles might be wrapped or weird. We'll clean it up if it's too long
    if len(title) > 100:
        title = title[:100] + "..."
        
    body_text = "\n".join(lines[1:])
    preview = body_text[:150] + "..." if len(body_text) > 150 else body_text
    
    cat = get_category(content, file)
    slug = slugify(title)
    if not slug:
        slug = slugify(file.replace('.txt', ''))
    
    articles.append({
        'title': title,
        'body': lines[1:],
        'preview': preview,
        'category': cat,
        'slug': slug
    })

with open("blog.html", "r", encoding='utf-8') as f:
    blog_html = f.read()

# Splitting blog.html at the grid
start_token = '<div class="grid grid--3">'
end_token = '</main>'

parts = blog_html.split(start_token)
head_part = parts[0] + start_token + "\n"
tail_part = parts[1].split(end_token)[1]
end_grid_token = "        </div>\n\n    </main>"

cards_html = ""
for idx, art in enumerate(articles):
    delay = (idx % 3) * 100
    delay_class = f" delay-{delay}" if delay > 0 else ""
    cat_data = art['category']
    
    cards_html += f'''            <!-- Blog Card -->
            <a href="makale-{art['slug']}.html" class="blog-card reveal{delay_class}" data-category="{cat_data}">
                <div class="blog-meta">
                    <span>{cat_data}</span> • Bülent Dokuzluoğlu
                </div>
                <h3 class="text-h4 mb-md">{art['title']}</h3>
                <p class="text-small text-muted mb-lg blog-card__text">{art['preview']}</p>
                <span class="text-orange font-medium text-small flex align-center gap-xs blog-card__btn">Devamını Oku <i
                        data-lucide="chevron-right" size="14"></i></span>
            </a>\n'''

# We also need to add a small JS script for the filtering button logic before the closing </body> tag
filter_js = """
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const filterBtns = document.querySelectorAll('.filter-btn');
            const blogCards = document.querySelectorAll('.blog-card');

            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterBtns.forEach(b => b.classList.remove('active'));
                    // Add active class to clicked button
                    btn.classList.add('active');

                    const category = btn.textContent.trim();

                    // Filter cards
                    blogCards.forEach(card => {
                        const cardCategory = card.getAttribute('data-category');
                        if (category === 'Tümü' || cardCategory === category) {
                            card.style.display = 'flex';
                            // Reset animation
                            card.style.animation = 'none';
                            card.offsetHeight; /* trigger reflow */
                            card.style.animation = null; 
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
        });
    </script>
"""

if "const filterBtns =" not in tail_part:
    tail_part = tail_part.replace("</body>", filter_js + "</body>")

new_blog_html = head_part + cards_html + end_grid_token + tail_part

with open("blog.html", "w", encoding='utf-8') as f:
    f.write(new_blog_html)

print(f"Updated blog.html with {len(articles)} articles.")

# Now generate individual pages
for art in articles:
    post_html = blog_html
    
    # Simple regexes to replace the hero text
    post_html = re.sub(r'<h1 class="text-h1 mb-md">.*?</h1>', f'<h1 class="text-h1 mb-md" style="font-size: clamp(1.5rem, 4vw, 2.5rem); max-width:800px; margin: 0 auto; line-height:1.2;">{art["title"]}</h1>', post_html, flags=re.DOTALL)
    post_html = re.sub(r'<p class="text-lead text-white opacity-80 mx-auto">.*?</p>', f'<p class="text-lead text-white opacity-80 mx-auto mt-md">{art["category"]} • Bülent Dokuzluoğlu</p>', post_html, flags=re.DOTALL)
    
    body_html = '<div style="max-width:800px; margin:0 auto; font-size:1.1rem; line-height:1.8; color: var(--bix-charcoal);">'
    for p in art['body']:
        if p.strip():
            body_html += f'<p class="mb-lg" style="color: var(--bix-body-text);">{p.strip()}</p>'
    body_html += '<div class="mt-4xl pt-xl text-center" style="border-top: 1px solid var(--bix-light-grey);"><a href="blog.html" class="btn btn--primary">Tüm Yazılara Dön</a></div>'
    body_html += '</div>'
    
    # replace main block
    post_html = re.sub(r'<main.*?</main>', f'<main class="container py-5xl" style="padding-top: var(--space-4xl); padding-bottom: var(--space-5xl);">\n{body_html}\n</main>', post_html, flags=re.DOTALL)
    
    with open(f"makale-{art['slug']}.html", "w", encoding='utf-8') as f:
        f.write(post_html)

print(f"Generated {len(articles)} individual article pages.")
