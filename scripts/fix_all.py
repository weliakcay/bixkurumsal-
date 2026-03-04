import glob
import re

html_files = glob.glob("*.html")

social_ig = 'https://www.instagram.com/bixkurumsal/'
social_fb = 'https://www.facebook.com/BixKurumsal/'

print(f"Processing {len(html_files)} files...")

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False

    # 1. Navbar addition: Ekibimiz (if missing)
    if 'ekibimiz.html' not in content:
        # Match <a href="hakkimizda.html" ...>Hakkımızda</a>
        pattern = r'(<a\s+href="hakkimizda\.html"[^>]*>Hakkımızda</a>)'
        replacement = r'\1\n                <a href="ekibimiz.html" class="navbar__link">Ekibimiz</a>'
        new_content, n = re.subn(pattern, replacement, content)
        if n > 0:
            content = new_content
            modified = True
            
    # 2. Update Social Links
    # Note: the social links might not have lucide in the very next tag, so replacing via simple string match might be easier if standard.
    # Searching for `#` right before icons.
    
    # Simple regex for instagram: <a href="#"...><i data-lucide="instagram"
    content, n1 = re.subn(r'<a\s+href="[^"]*"\s*>\s*<i data-lucide="instagram"', f'<a href="{social_ig}" target="_blank"><i data-lucide="instagram"', content)
    content, n2 = re.subn(r'<a\s+href="[^"]*"\s*class="social-icon"\s*>\s*<i data-lucide="instagram"', f'<a href="{social_ig}" class="social-icon" target="_blank"><i data-lucide="instagram"', content)

    # Simple regex for facebook
    content, n3 = re.subn(r'<a\s+href="[^"]*"\s*>\s*<i data-lucide="facebook"', f'<a href="{social_fb}" target="_blank"><i data-lucide="facebook"', content)
    content, n4 = re.subn(r'<a\s+href="[^"]*"\s*class="social-icon"\s*>\s*<i data-lucide="facebook"', f'<a href="{social_fb}" class="social-icon" target="_blank"><i data-lucide="facebook"', content)

    if n1 > 0 or n2 > 0 or n3 > 0 or n4 > 0:
        modified = True

    if modified:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file}")
