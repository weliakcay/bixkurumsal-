import json

with open('/tmp/quotes_tr.json', 'r', encoding='utf-8') as f:
    quotes_tr = json.load(f)

js_code = f"""//Random Quote Generator
var quotes = {json.dumps(quotes_tr, ensure_ascii=False, indent=2)};

function getNewQuote() {{
    var random = quotes[Math.floor(Math.random() * quotes.length)];
    var quoteHTML = random.quote;
    var authorHTML = "-" + random.author;
    var imageHTML = random.image;
    
    // We update only what's inside the section
    $('#quote').fadeOut(800, function(){{ $('#quote').html(quoteHTML).fadeIn(800); }});
    $('#speaker').fadeOut(800, function(){{ $('#speaker').html(authorHTML).fadeIn(800); }});

    // We change the background of .earth-quotes-section instead of body
    $('.earth-quotes-section').css('background-image', 'url(https://sonorangirl.github.io/Earth-Quotes/img/' + imageHTML + ')');
}}

function preload(arrayOfImages) {{
    $(arrayOfImages).each(function () {{
        $('<img />').attr('src',this).appendTo('body').css('display','none');
    }});
}}

var preloadImages = [
    // We omit preloading all 97 images to prevent slowing down Bix Kurumsal's page load excessively.
    // Just a few if needed or none, letting the browser load them on demand.
    'https://sonorangirl.github.io/Earth-Quotes/img/google-earth-view-Orhangazi-Turkey.jpg'
];

$(window).load(function() {{
    preload(preloadImages);
}});

$(document).ready(function() {{
    $('#quote-button').click(function(e) {{
        e.preventDefault();
        getNewQuote();
    }});
}});
"""

with open('/tmp/earth_quotes_compiled.js', 'w', encoding='utf-8') as f:
    f.write(js_code)

