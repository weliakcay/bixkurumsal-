import glob
import re

html_files = glob.glob("*.html")

link_to_add = '                <a href="ekibimiz.html" class="navbar__link">Ekibimiz</a>\n'

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # If it already has Ekibimiz, delete and re-add or skip
    if 'ekibimiz.html' in content:
        continue

    # Try matching <a href="hakkimizda.html" ...>Hakkımızda</a>
    # We can just string replace to be safe
    old_link = '                <a href="hakkimizda.html" class="navbar__link">Hakkımızda</a>\n'
    if old_link in content:
        content = content.replace(old_link, old_link + link_to_add)
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file}")
    else:
        # maybe some variable spacing
        old_link2 = '<a href="hakkimizda.html" class="navbar__link">Hakkımızda</a>'
        if old_link2 in content:
            content = content.replace(old_link2, old_link2 + '\n' + link_to_add)
            with open(file, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {file} (alt)")
        else:
            print(f"Could not find exact text in {file}")
