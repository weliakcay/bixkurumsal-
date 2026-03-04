import glob
import re
import sys

social_ig = 'https://www.instagram.com/bixkurumsal/'
social_fb = 'https://www.facebook.com/BixKurumsal/'

html_files = glob.glob("*.html")
print(f"Checking {len(html_files)} html files...")

# Regex to match anchor tag with any attributes that immediately precedes an <i> with data-lucide="facebook" or "instagram"
# We need to capture the href content specifically and replace it. Or simpler:
# Find: <a href="[^"]*"([^>]*)>\s*<i[^>]*data-lucide="(facebook|instagram)"
# Actually, since it has newlines, we should use re.DOTALL or handle whitespace.

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Change facebook link
    # This pattern matches any <a href="...">...<i data-lucide="facebook"
    # Wait, instead of regex that might break things, we can do something like:
    content_new = re.sub(
        r'<a\s+href="[^"]*"([^>]*?)(>\s*<i[^>]*?data-lucide="facebook")',
        rf'<a href="{social_fb}" target="_blank"\1\2',
        content,
        flags=re.IGNORECASE | re.DOTALL
    )
    
    # Change instagram link
    content_new = re.sub(
        r'<a\s+href="[^"]*"([^>]*?)(>\s*<i[^>]*?data-lucide="instagram")',
        rf'<a href="{social_ig}" target="_blank"\1\2',
        content_new,
        flags=re.IGNORECASE | re.DOTALL
    )

    if content != content_new:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content_new)
        print(f"Updated {file}")
print("Done!")
