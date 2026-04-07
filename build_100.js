const fs = require('fs');
const path = require('path');

const backlogPath = path.join(__dirname, '100_INDUSTRY_VARIATIONS_BACKLOG.md');
const outputDir = path.join(__dirname, 'concept_100');

// Read backlog lines
const content = fs.readFileSync(backlogPath, 'utf-8');
const lines = content.split('\n');

const sites = [];
let category = "General";

for (const line of lines) {
    if (line.startsWith('## 📍')) {
        category = line.replace('## 📍', '').trim();
    }
    const match = line.match(/^(\d+)\.\s+\*\*(.*?)\*\*(?:[:：])\s*(.*)$/);
    if (match) {
        sites.push({ id: match[1], title: match[2], desc: match[3], category: category });
    }
}

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

let indexHtmlList = '';

sites.forEach((site, index) => {
    const slug = `site_${site.id}`;
    const siteDir = path.join(outputDir, slug);
    if (!fs.existsSync(siteDir)) fs.mkdirSync(siteDir, { recursive: true });

    const themeType = index % 3; // 0 = Glassmorphism, 1 = Minimal SaaS, 2 = Neo-style minimal
    let bgUrl = `https://picsum.photos/seed/aethel${site.id}/1600/900`;
    let htmlContent = '';

    if (themeType === 0) {
        htmlContent = `<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${site.title}</title><script src="https://cdn.tailwindcss.com"></script></head>
<body class="relative w-screen h-screen overflow-hidden font-sans bg-black">
    <div class="absolute inset-0 z-0"><img src="${bgUrl}" class="w-full h-full object-cover opacity-60" /></div>
    <div class="absolute top-0 w-full p-8 flex justify-between text-white z-20 mix-blend-difference">
        <div class="text-sm font-bold tracking-widest uppercase">${site.category}</div><div class="text-sm font-mono">NO. ${site.id} / 100</div>
    </div>
    <div class="absolute inset-0 z-10 flex flex-col items-center justify-center p-6">
        <div class="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[32px] p-12 max-w-4xl text-center shadow-2xl text-white transition-transform duration-700 hover:scale-105">
            <h1 class="text-5xl md:text-7xl font-semibold tracking-tighter mb-6">${site.title}</h1>
            <p class="text-lg md:text-xl font-light text-white/90 leading-relaxed">${site.desc}</p>
            <div class="mt-10"><a href="../index.html" class="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition">BACK TO GALLERY</a></div>
        </div>
    </div>
</body></html>`;
    } else if (themeType === 1) {
        htmlContent = `<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${site.title}</title><script src="https://cdn.tailwindcss.com"></script></head>
<body class="bg-[#f8f9fa] text-slate-800 p-6 md:p-16 font-sans min-h-screen">
    <header class="mb-12 flex justify-between items-end max-w-6xl mx-auto border-b border-slate-200 pb-8">
        <div><div class="text-sm font-medium text-blue-600 mb-2">${site.category} / Prototype ${site.id}</div><h1 class="text-4xl md:text-5xl font-bold tracking-tight">${site.title}</h1></div>
        <a href="../index.html" class="text-sm font-bold tracking-widest text-slate-400 hover:text-black uppercase">Close</a>
    </header>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div class="md:col-span-2 bg-white rounded-[24px] overflow-hidden shadow-lg border border-slate-100 flex flex-col justify-between">
            <div class="h-64 object-cover relative"><img src="${bgUrl}" class="w-full h-full object-cover"></div>
            <div class="p-10"><div class="text-2xl font-light leading-relaxed text-slate-600 mb-8">${site.desc}</div></div>
        </div>
        <div class="bg-indigo-600 text-white rounded-[24px] p-10 shadow-lg flex flex-col justify-center items-center text-center">
             <div class="w-24 h-24 rounded-full border-4 border-indigo-400/30 mb-6 flex items-center justify-center text-4xl">${site.id}</div>
             <h3 class="text-xl font-bold mb-2">Live Demo Ready</h3>
        </div>
    </div>
</body></html>`;
    } else {
        htmlContent = `<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${site.title}</title><script src="https://cdn.tailwindcss.com"></script><link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"></head>
<body class="bg-[#050505] text-[#ededed] min-h-screen flex items-center justify-center p-8">
    <a href="../index.html" class="absolute top-8 right-8 text-xs tracking-[0.2em] uppercase text-white/50 hover:text-white">Return</a>
    <div class="relative w-full max-w-6xl aspect-[21/9] rounded-xl overflow-hidden shadow-2xl">
        <img src="${bgUrl}" class="absolute inset-0 w-full h-full object-cover opacity-30 grayscale sepia-[.3]" />
        <div class="absolute inset-0 p-16 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent">
            <div class="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-4 font-bold border-l-2 border-[#d4af37] pl-4">${site.category} - 00${site.id}</div>
            <h1 class="text-5xl md:text-7xl font-bold tracking-wide mb-6" style="font-family: 'Playfair Display', serif;">${site.title}</h1>
            <p class="text-xl font-light max-w-3xl text-white/60 leading-loose">${site.desc}</p>
        </div>
    </div>
</body></html>`;
    }
    fs.writeFileSync(path.join(siteDir, 'index.html'), htmlContent);

    indexHtmlList += `
        <a href="${slug}/index.html" class="block group relative rounded-xl overflow-hidden bg-[#111] aspect-[4/5] hover:border-white/20 transition-all shadow-lg hover:scroll-m-1">
            <img src="${bgUrl}" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2s]" loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10"></div>
            <div class="absolute inset-0 p-5 flex flex-col justify-between z-20">
                <div class="flex justify-between items-start">
                    <span class="bg-white/10 backdrop-blur text-white text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded">${site.category.split(' ')[1] || 'UI'}</span>
                    <span class="text-white/40 text-[10px] font-mono tracking-widest">#${String(site.id).padStart(3, '0')}</span>
                </div>
                <div class="translate-y-2 group-hover:translate-y-0 transition duration-500">
                    <h3 class="text-xl font-bold text-white mb-2">${site.title.split('（')[0]}</h3>
                    <p class="text-[11px] text-white/60 line-clamp-3 opacity-0 group-hover:opacity-100 transition duration-700">${site.desc}</p>
                </div>
            </div>
        </a>
    `;
});

// Write the main 100 portfolio page
const galleryHtml = `<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Top 100 UX Concepts</title><script src="https://cdn.tailwindcss.com"></script></head>
<body class="bg-[#050505] text-white min-h-screen">
    <nav class="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/5 px-8 py-5 flex justify-between items-center text-[11px] font-bold tracking-widest uppercase">
        <a href="../index.html" class="flex items-center gap-2 text-white/50 hover:text-white transition">← Main Portfolio Hub</a>
        <div class="text-white/80">The 100 Exhibition</div>
    </nav>
    <main class="max-w-[1600px] mx-auto px-6 pt-40 pb-32">
        <header class="mb-24 text-center max-w-4xl mx-auto">
            <h1 class="text-6xl md:text-[80px] font-black tracking-tighter mb-8 leading-[0.9]">100 CONCEPTS</h1>
            <p class="text-xl text-white/50 font-light leading-relaxed">A massive prototype exhibition of 100 distinct future UI/UX models.</p>
        </header>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-6">${indexHtmlList}</div>
    </main>
</body></html>`;

fs.writeFileSync(path.join(outputDir, 'index.html'), galleryHtml);

// Link to it in the main index.html
const mainIndexPath = path.join(__dirname, 'index.html');
let mainIndexContent = fs.readFileSync(mainIndexPath, 'utf-8');
const linkInjection = `
        <!-- The 100 Concepts Banner -->
        <div class="mt-24 mb-10 w-full rounded-2xl overflow-hidden relative group aspect-[21/9] md:aspect-[21/6]">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-[2s]">
            <div class="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            <div class="absolute inset-0 flex flex-col justify-center p-10 md:p-20 z-10">
                <div class="text-xs tracking-[0.3em] text-[#00ffcc] font-bold uppercase mb-4">Ultimate Showcase</div>
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">THE 100 CONCEPTS</h2>
                <p class="text-white/70 max-w-xl text-lg font-light mb-8">AI自動生成によって具現化された、10業界・100パターンの未来のWeb UI表現を網羅した巨大エキシビション。</p>
                <a href="concept_100/index.html" class="inline-flex bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-gray-200 transition">View All 100 Previews</a>
            </div>
        </div>
`;
if (!mainIndexContent.includes("THE 100 CONCEPTS")) {
    fs.writeFileSync(mainIndexPath, mainIndexContent.replace('</main>', linkInjection + '\n    </main>'));
}
console.log('Successfully generated 100 concept sites!');
