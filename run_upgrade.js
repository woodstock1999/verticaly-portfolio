const fs = require('fs');
const upgradeSite = require('./upgrade_template');
const cheerio = require('cheerio');

function parseSite(id) {
    const file = `concept_100/site_${id}/index.html`;
    const html = fs.readFileSync(file, 'utf-8');
    const $ = cheerio.load(html);
    
    // Extract colorTheme and tag from the tag span
    let colorTheme = "blue";
    let tag = "DEFAULT TAG";
    
    // Look for span containing uppercase tag
    const $tagSpan = $('span').first();
    if ($tagSpan.length > 0) {
        tag = $tagSpan.text().trim();
        const classes = $tagSpan.attr('class') || '';
        const match = classes.match(/text-([a-z]+)-600/);
        if (match) colorTheme = match[1];
    }
    
    const headline = $('h1').html()?.trim() || "";
    
    // subheadline is usually a p with max-w-3xl
    const subheadline = $('p').first().html()?.trim() || "";
    
    // btnText: use fallback based on tag
    const btnText = `START ${tag.split('/')[0].trim() || 'NOW'}`;
    
    // ctaTitle and ctaDesc from the last section
    const ctaSection = $('div.bg-gray-900').last();
    let ctaTitle = ctaSection.find('h2').text().trim();
    let ctaDesc = ctaSection.find('p').text().trim();
    
    if (!ctaTitle) {
        ctaTitle = $('h2').last().text().trim();
        ctaDesc = $('p').last().text().trim();
    }
    
    // Parse Blocks
    const blocks = [];
    
    // Features block or normal block
    // Normal block structure in light theme: 
    // <span class="... text-blue-600 ... uppercase">SUBTITLE</span>
    // <h2>TITLE</h2>
    // <p>CONTENT</p>
    
    // Let's iterate through all spans that look like subtitles
    $(`span.text-${colorTheme}-600`).each((i, el) => {
        if ($(el).hasClass('uppercase') && $(el).text() !== tag) {
            const subtitle = $(el).text().trim();
            const h2 = $(el).nextAll('h2').first();
            const title = h2.text().trim();
            
            // Check if it has features or content
            const nextP = $(el).parent().find('p').first();
            const nextGrid = $(el).parent().next('div.grid');
            
            if (nextGrid.length > 0 || $(el).parent().parent().find('div.grid').length > 0) {
                // Features block
                const features = [];
                const grid = nextGrid.length > 0 ? nextGrid : $(el).parent().parent().find('div.grid');
                grid.find('h4').each((idx, h4el) => {
                    features.push({
                        t: $(h4el).text().trim(),
                        d: $(h4el).next('p').text().trim()
                    });
                });
                blocks.push({ subtitle, title, features });
            } else {
                // Normal block
                blocks.push({ subtitle, title, content: nextP.html()?.trim() || "" });
            }
        }
    });

    const data = {
        colorTheme, tag, headline, subheadline, btnText, ctaTitle, ctaDesc, blocks
    };
    
    upgradeSite(id, data);
}

for (let i = 1; i <= 49; i++) {
    try {
        parseSite(i);
    } catch(e) {
        console.log(`Failed parsing site_${i}`, e.message);
    }
}
