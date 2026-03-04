import json

with open('/tmp/quotes_tr.json', 'r', encoding='utf-8') as f:
    quotes_tr = json.load(f)

js_code = f"""//Random Quote Generator
var quotes = {json.dumps(quotes_tr, ensure_ascii=False, indent=2)};

function fadeOutIn(selector, newHTML, duration) {{
    const el = document.querySelector(selector);
    if (!el) return;
    el.style.transition = 'opacity ' + duration + 'ms ease-in-out';
    el.style.opacity = '0';
    setTimeout(function() {{
        el.innerHTML = newHTML;
        el.style.opacity = '1';
    }}, duration);
}}

function getNewQuote() {{
    var random = quotes[Math.floor(Math.random() * quotes.length)];
    var quoteHTML = random.quote;
    var authorHTML = "-" + random.author;
    var imageHTML = random.image;
    
    fadeOutIn('#quote', quoteHTML, 800);
    fadeOutIn('#speaker', authorHTML, 800);

    const section = document.querySelector('.earth-quotes-section');
    if (section) {{
        section.style.backgroundImage = 'url(https://sonorangirl.github.io/Earth-Quotes/img/' + imageHTML + ')';
    }}
}}

document.addEventListener('DOMContentLoaded', function() {{
    const btn = document.getElementById('quote-button');
    if (btn) {{
        btn.addEventListener('click', function(e) {{
            e.preventDefault();
            getNewQuote();
        }});
    }}

    // Basic modal logic without Bootstrap / jQuery
    document.querySelectorAll('[data-toggle="modal"]').forEach(trigger => {{
        trigger.addEventListener('click', function(e) {{
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const modal = document.querySelector(targetId);
            if(modal) modal.classList.add('show');
        }});
    }});

    document.querySelectorAll('[data-dismiss="modal"]').forEach(closeBtn => {{
        closeBtn.addEventListener('click', function(e) {{
            e.preventDefault();
            const modal = this.closest('.modal');
            if(modal) modal.classList.remove('show');
        }});
    }});
}});
"""

with open('js/earth-quotes.js', 'w', encoding='utf-8') as f:
    f.write(js_code)

