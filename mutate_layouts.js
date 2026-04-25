const fs = require('fs');
const cheerio = require('cheerio');

// Deterministic random based on site ID
function seededRandom(seed) {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function generateSite(id, data) {
    const file = `concept_100/site_${id}/index.html`;
    const siteTitle = data.tag.split('/')[0].trim() || `SITE-${id}`;
    
    // Choose layouts based on ID
    const r = seededRandom(id);
    const heroType = r < 0.33 ? 'CENTER' : (r < 0.66 ? 'SPLIT' : 'FULL_BG');
    
    const r2 = seededRandom(id * 2);
    const featuresType = r2 < 0.33 ? 'GRID_3' : (r2 < 0.66 ? 'BENTO' : 'STICKY');
    
    const r3 = seededRandom(id * 3);
    const blockType = r3 < 0.33 ? 'ALTERNATE' : (r3 < 0.66 ? 'OVERLAP' : 'CARDS');

    let html = `<!DOCTYPE html>
<html lang="ja" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.headline.replace(/<[^>]+>/g, '')} | ${siteTitle}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', 'Noto Sans JP', sans-serif; }
        .bento-1 { grid-column: span 2; grid-row: span 2; }
        .bento-2 { grid-column: span 1; grid-row: span 1; }
        .bento-3 { grid-column: span 1; grid-row: span 1; }
    </style>
</head>
<body class="bg-[#050505] text-gray-400 min-h-screen font-sans antialiased overflow-x-hidden selection:bg-${data.colorTheme}-500/30">

    <!-- Navigation -->
    <nav class="fixed w-full z-50 backdrop-blur-xl bg-[#050505]/80 border-b border-white/5 px-8 py-5 flex justify-between items-center transition-all">
        <div class="font-black text-2xl tracking-tighter text-white flex items-center gap-3">
            <div class="w-3 h-3 rounded-full bg-${data.colorTheme}-500 shadow-[0_0_15px_rgba(255,255,255,0.2)] shadow-${data.colorTheme}-500/50"></div>
            ${siteTitle}
        </div>
        <div class="hidden md:flex gap-10 text-sm font-bold text-gray-400">
            <a href="#" class="hover:text-white transition">FEATURES</a>
            <a href="#" class="hover:text-white transition">SOLUTIONS</a>
            <a href="#" class="hover:text-white transition">PRICING</a>
        </div>
        <div class="flex items-center gap-4">
            <a href="../index.html" class="text-xs font-bold text-gray-500 hover:text-white transition uppercase tracking-widest">HUB</a>
            <a href="#" class="bg-${data.colorTheme}-600 hover:bg-${data.colorTheme}-500 text-white px-6 py-2.5 rounded-full font-bold text-sm transition transform hover:scale-105">${data.btnText}</a>
        </div>
    </nav>

    <main class="pt-[160px] pb-24">
    `;

    // ---------------- HERO GENERATION ----------------
    if (heroType === 'CENTER') {
        html += `
        <div class="px-6 md:px-12 max-w-7xl mx-auto">
            <div class="text-center max-w-5xl mx-auto mb-20 relative">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-${data.colorTheme}-600/20 rounded-full blur-[120px] pointer-events-none"></div>
                <span class="relative z-10 bg-white/5 text-${data.colorTheme}-400 border border-white/10 px-6 py-2 text-xs font-black rounded-full tracking-widest uppercase mb-8 inline-block shadow-sm">${data.tag}</span>
                <h1 class="relative z-10 text-5xl md:text-[64px] font-black mb-8 leading-[1.1] tracking-tight text-white">${data.headline}</h1>
                <p class="relative z-10 text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto">${data.subheadline}</p>
            </div>
            <div class="relative w-full aspect-[21/9] md:aspect-video rounded-[32px] overflow-hidden shadow-2xl mb-32 border border-white/10 group bg-zinc-900">
                <img src="img/ui.png" class="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-[1.03]" onerror="this.src='https://picsum.photos/seed/hero_${id}/1600/900'">
                <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent pointer-events-none"></div>
            </div>
        </div>
        `;
    } else if (heroType === 'SPLIT') {
        html += `
        <div class="px-6 md:px-12 max-w-7xl mx-auto mb-32">
            <div class="flex flex-col lg:flex-row items-center gap-16 relative">
                <div class="absolute -left-32 top-0 w-[500px] h-[500px] bg-${data.colorTheme}-600/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div class="flex-1 relative z-10">
                    <span class="bg-white/5 text-${data.colorTheme}-400 border border-white/10 px-6 py-2 text-xs font-black rounded-full tracking-widest uppercase mb-8 inline-block shadow-sm">${data.tag}</span>
                    <h1 class="text-5xl md:text-[64px] font-black mb-8 leading-[1.1] tracking-tight text-white">${data.headline}</h1>
                    <p class="text-lg md:text-xl text-gray-400 font-medium leading-relaxed">${data.subheadline}</p>
                </div>
                <div class="flex-1 w-full relative z-10">
                    <div class="relative aspect-square md:aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border border-white/10 group bg-zinc-900">
                        <img src="img/ui.png" class="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-[1.05]" onerror="this.src='https://picsum.photos/seed/hero_${id}/800/800'">
                        <div class="absolute inset-0 bg-gradient-to-tr from-${data.colorTheme}-900/40 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </div>
        `;
    } else if (heroType === 'FULL_BG') {
        html += `
        <div class="relative w-full min-h-[80vh] flex items-center justify-center mb-32 -mt-[160px] pt-[160px] border-b border-white/10 overflow-hidden group">
            <div class="absolute inset-0 bg-zinc-900">
                <img src="img/ui.png" class="w-full h-full object-cover opacity-30 grayscale sepia-[.2] transition-transform duration-[10s] group-hover:scale-[1.05]" onerror="this.src='https://picsum.photos/seed/hero_${id}/1600/900'">
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
            <div class="relative z-10 text-center max-w-5xl px-6 md:px-12 mx-auto">
                <span class="bg-white/5 text-${data.colorTheme}-400 border border-white/10 px-6 py-2 text-xs font-black rounded-full tracking-widest uppercase mb-8 inline-block shadow-sm backdrop-blur-md">${data.tag}</span>
                <h1 class="text-5xl md:text-[72px] font-black mb-8 leading-[1.1] tracking-tight text-white drop-shadow-2xl">${data.headline}</h1>
                <p class="text-lg md:text-xl text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-md">${data.subheadline}</p>
            </div>
        </div>
        `;
    }

    html += `<div class="px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-32 mb-32">`;

    // ---------------- BLOCKS GENERATION ----------------
    data.blocks.forEach((blk, idx) => {
        const isReverse = idx % 2 === 1;
        
        if (blk.features) {
            // Feature Blocks
            if (featuresType === 'GRID_3') {
                html += `
                <div class="relative z-10">
                    <div class="text-center mb-16">
                        <span class="text-${data.colorTheme}-500 font-bold tracking-widest text-sm uppercase">${blk.subtitle}</span>
                        <h2 class="text-3xl md:text-4xl font-black mt-4 text-white">${blk.title}</h2>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        ${blk.features.map(f => `
                        <div class="bg-white/[0.02] border border-white/5 shadow-2xl p-10 rounded-3xl transition transform hover:-translate-y-2 duration-300 group">
                            <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-${data.colorTheme}-500/10 text-${data.colorTheme}-400 border border-${data.colorTheme}-500/20 group-hover:bg-${data.colorTheme}-500/20 transition-colors">
                                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <h4 class="text-xl font-bold mb-4 text-white tracking-wide">${f.t}</h4>
                            <p class="text-gray-400 text-base leading-relaxed">${f.d}</p>
                        </div>
                        `).join('\n')}
                    </div>
                </div>
                `;
            } else if (featuresType === 'BENTO') {
                html += `
                <div class="relative z-10">
                    <div class="mb-16">
                        <span class="text-${data.colorTheme}-500 font-bold tracking-widest text-sm uppercase">${blk.subtitle}</span>
                        <h2 class="text-3xl md:text-5xl font-black mt-4 text-white">${blk.title}</h2>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[500px]">
                        ${blk.features.map((f, i) => `
                        <div class="bg-white/[0.02] border border-white/5 p-10 rounded-[32px] transition transform hover:-translate-y-1 duration-300 group relative overflow-hidden bento-${(i%3)+1}">
                            <div class="absolute top-0 right-0 w-32 h-32 bg-${data.colorTheme}-600/10 rounded-bl-full pointer-events-none group-hover:bg-${data.colorTheme}-600/20 transition-colors"></div>
                            <h4 class="text-2xl font-bold mb-4 text-white relative z-10">${f.t}</h4>
                            <p class="text-gray-400 text-base leading-relaxed relative z-10">${f.d}</p>
                        </div>
                        `).join('\n')}
                    </div>
                </div>
                `;
            } else if (featuresType === 'STICKY') {
                html += `
                <div class="relative z-10 flex flex-col md:flex-row gap-16">
                    <div class="md:w-1/3">
                        <div class="sticky top-32">
                            <span class="text-${data.colorTheme}-500 font-bold tracking-widest text-sm uppercase">${blk.subtitle}</span>
                            <h2 class="text-3xl md:text-5xl font-black mt-4 text-white leading-tight">${blk.title}</h2>
                            <div class="w-12 h-1 bg-${data.colorTheme}-600 rounded mt-8"></div>
                        </div>
                    </div>
                    <div class="md:w-2/3 flex flex-col gap-8">
                        ${blk.features.map(f => `
                        <div class="bg-white/[0.02] border border-white/5 p-10 rounded-3xl flex gap-8 items-start group hover:border-${data.colorTheme}-500/30 transition-colors">
                            <div class="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center bg-${data.colorTheme}-500/10 text-${data.colorTheme}-400 border border-${data.colorTheme}-500/20">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div>
                                <h4 class="text-2xl font-bold mb-3 text-white">${f.t}</h4>
                                <p class="text-gray-400 text-lg leading-relaxed">${f.d}</p>
                            </div>
                        </div>
                        `).join('\n')}
                    </div>
                </div>
                `;
            }
        } else {
            // Content Blocks
            if (blockType === 'ALTERNATE') {
                html += `
                <div class="flex flex-col md:flex-row items-center gap-16 ${isReverse ? 'md:flex-row-reverse' : ''} relative z-10">
                    <div class="flex-1 space-y-6">
                        <span class="text-${data.colorTheme}-500 font-bold tracking-widest text-sm uppercase">${blk.subtitle}</span>
                        <h2 class="text-3xl md:text-5xl font-black text-white leading-tight">${blk.title}</h2>
                        <div class="w-16 h-1 bg-${data.colorTheme}-600 rounded"></div>
                        <p class="text-lg text-gray-400 leading-relaxed font-light">${blk.content}</p>
                    </div>
                    <div class="flex-1 relative aspect-square md:aspect-[4/3] rounded-[32px] overflow-hidden bg-zinc-900 border border-white/10 group">
                        <img src="img/ui.png" class="w-full h-full object-cover opacity-50 grayscale sepia-[.2] transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105" style="object-position: ${isReverse ? 'bottom right' : 'top left'};" onerror="this.src='https://picsum.photos/seed/block_${id}_${idx}/800/600'">
                        <div class="absolute inset-0 bg-gradient-to-tr from-${data.colorTheme}-900/40 to-transparent"></div>
                    </div>
                </div>
                `;
            } else if (blockType === 'OVERLAP') {
                html += `
                <div class="relative z-10 py-12">
                    <div class="absolute left-0 ${isReverse ? 'right-0 md:left-auto md:w-2/3' : 'md:w-2/3'} top-0 bottom-0 rounded-[32px] overflow-hidden bg-zinc-900 border border-white/10 group hidden md:block">
                        <img src="img/ui.png" class="w-full h-full object-cover opacity-40 transition-all duration-1000 group-hover:opacity-70 group-hover:scale-105" onerror="this.src='https://picsum.photos/seed/block_${id}_${idx}/1000/600'">
                        <div class="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
                    </div>
                    <div class="relative z-10 flex flex-col md:flex-row items-center ${isReverse ? '' : 'justify-end'}">
                        <div class="md:w-1/2 bg-[#0a0a0a] border border-white/10 shadow-2xl rounded-[32px] p-12 md:p-16 relative overflow-hidden group">
                            <div class="absolute top-0 right-0 w-64 h-64 bg-${data.colorTheme}-600/10 rounded-full blur-[60px]"></div>
                            <span class="relative z-10 text-${data.colorTheme}-500 font-bold tracking-widest text-sm uppercase block mb-4">${blk.subtitle}</span>
                            <h2 class="relative z-10 text-3xl md:text-4xl font-black text-white leading-tight mb-8">${blk.title}</h2>
                            <p class="relative z-10 text-lg text-gray-400 leading-relaxed">${blk.content}</p>
                        </div>
                    </div>
                </div>
                `;
            } else if (blockType === 'CARDS') {
                html += `
                <div class="relative z-10 w-full rounded-[40px] border border-white/10 overflow-hidden p-12 md:p-24 group">
                    <div class="absolute inset-0 bg-zinc-900">
                        <img src="img/ui.png" class="w-full h-full object-cover opacity-20 grayscale transition-transform duration-[10s] group-hover:scale-110" onerror="this.src='https://picsum.photos/seed/block_${id}_${idx}/1600/600'">
                        <div class="absolute inset-0 bg-[#050505]/80 backdrop-blur-sm"></div>
                    </div>
                    <div class="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                        <span class="text-${data.colorTheme}-500 font-bold tracking-widest text-sm uppercase block mb-4">${blk.subtitle}</span>
                        <h2 class="text-4xl md:text-6xl font-black text-white leading-tight mb-10">${blk.title}</h2>
                        <div class="w-16 h-1 bg-${data.colorTheme}-600 rounded mb-10"></div>
                        <p class="text-xl text-gray-300 leading-relaxed font-light">${blk.content}</p>
                    </div>
                </div>
                `;
            }
        }
    });

    html += `
        </div>

        <!-- CTA Section -->
        <div class="px-6 md:px-12 max-w-7xl mx-auto">
            <div class="text-center bg-zinc-900 border border-white/10 rounded-[3rem] p-16 md:p-32 relative overflow-hidden group shadow-2xl">
                <div class="absolute inset-0 bg-gradient-to-br from-${data.colorTheme}-900/40 via-transparent to-transparent"></div>
                <div class="absolute -top-24 -right-24 w-96 h-96 bg-${data.colorTheme}-600/20 rounded-full blur-[100px]"></div>
                <div class="relative z-10">
                    <h2 class="text-4xl md:text-5xl font-black mb-8 text-white">${data.ctaTitle}</h2>
                    <p class="text-gray-400 mb-12 max-w-xl mx-auto text-lg leading-relaxed">${data.ctaDesc}</p>
                    <a href="#" class="bg-${data.colorTheme}-500 hover:bg-${data.colorTheme}-400 text-white px-12 py-5 rounded-full font-bold text-lg inline-flex items-center gap-3 transition transform hover:-translate-y-1 shadow-[0_0_30px_rgba(var(--tw-colors-${data.colorTheme}-500),0.3)] shadow-${data.colorTheme}-500/50">
                        ${data.btnText}
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="py-12 text-center text-sm font-medium text-gray-600 border-t border-white/5 bg-[#050505]">
        <p>&copy; 2026 ${siteTitle}. ALL RIGHTS RESERVED.</p>
    </footer>

</body>
</html>
`;
    fs.writeFileSync(file, html);
    console.log(`Mutated site_${id} to ultra-premium layout`);
}

function parseAndMutate(id) {
    const file = `concept_100/site_${id}/index.html`;
    const html = fs.readFileSync(file, 'utf-8');
    const $ = cheerio.load(html);
    
    let colorTheme = "blue";
    let tag = "DEFAULT TAG";
    
    const $tagSpan = $('span').first();
    if ($tagSpan.length > 0) {
        tag = $tagSpan.text().trim();
        const classes = $tagSpan.attr('class') || '';
        const match = classes.match(/text-([a-z]+)-(?:400|500|600)/);
        if (match) colorTheme = match[1];
    }
    
    const headline = $('h1').html()?.trim() || "";
    const subheadline = $('p').first().html()?.trim() || "";
    
    let btnText = `START ${tag.split('/')[0].trim() || 'NOW'}`;
    const btnEl = $('a').filter((i, el) => $(el).text().includes('START')).first();
    if (btnEl.length > 0) btnText = btnEl.text().trim();
    
    const ctaSection = $('div.bg-zinc-900').last();
    let ctaTitle = ctaSection.find('h2').text().trim() || $('h2').last().text().trim();
    let ctaDesc = ctaSection.find('p').text().trim() || $('p').last().text().trim();
    
    const blocks = [];
    
    $(`span.text-${colorTheme}-500, span.text-${colorTheme}-600`).each((i, el) => {
        if ($(el).hasClass('uppercase') && $(el).text() !== tag) {
            const subtitle = $(el).text().trim();
            const h2 = $(el).nextAll('h2').first();
            const title = h2.text().trim();
            
            const nextP = $(el).parent().find('p').first();
            const nextGrid = $(el).parent().next('div.grid');
            
            if (nextGrid.length > 0 || $(el).parent().parent().find('div.grid').length > 0) {
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
                blocks.push({ subtitle, title, content: nextP.html()?.trim() || "" });
            }
        }
    });

    const data = {
        colorTheme, tag, headline, subheadline, btnText, ctaTitle, ctaDesc, blocks
    };
    
    generateSite(id, data);
}

for (let i = 1; i <= 49; i++) {
    try {
        parseAndMutate(i);
    } catch(e) {
        console.log(`Failed mutating site_${i}`, e.message);
    }
}
