const fs = require('fs');
const cheerio = require('cheerio');

const file = 'concept_100/index.html';
const html = fs.readFileSync(file, 'utf-8');
const $ = cheerio.load(html);

// 1. Add premium CSS effects in <head>
const customStyle = `
    <style>
        .grid a img {
            filter: grayscale(100%) contrast(1.15) brightness(0.65);
            transition: filter 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .grid a:hover img {
            filter: grayscale(0%) contrast(1.0) brightness(0.9);
        }
        .grid a {
            border: 1px solid rgba(255, 255, 255, 0.03);
            transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .grid a:hover {
            border-color: rgba(255, 255, 255, 0.15);
            box-shadow: 0 10px 30px -10px rgba(255, 255, 255, 0.1);
        }
    </style>
`;
$('head').append(customStyle);

// 2. Update existing 100 site thumbnails to try local images first
$('a').each((i, el) => {
    const href = $(el).attr('href');
    if (href && href.startsWith('site_') && href.endsWith('/index.html')) {
        const match = href.match(/site_(\d+)/);
        if (match) {
            const id = match[1];
            const img = $(el).find('img');
            if (img.length > 0) {
                img.attr('src', `site_${id}/img/hero.png`);
                img.attr('onerror', `this.onerror=null; this.src='https://picsum.photos/seed/aethel${id}/1600/900';`);
            }
        }
    }
});

// 3. Append Site 101 (TAKUMI-CORE) at the end of the grid container
const grid = $('.grid').first();
if (grid.length > 0) {
    const site101HTML = `
        <a href="site_101/index.html" class="block group relative rounded-xl overflow-hidden bg-[#111] aspect-[4/5] md:aspect-auto md:h-[400px] xl:h-[480px] hover:border-white/20 transition-all shadow-lg hover:scroll-m-1 col-span-1 sm:col-span-2 md:col-span-4 xl:col-span-5">
            <img src="site_101/img/hero.png" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s]" loading="lazy" onerror="this.onerror=null; this.src='https://picsum.photos/seed/aethel101/1600/900';">
            <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent z-10"></div>
            <div class="absolute inset-0 p-8 flex flex-col justify-between z-20">
                <div class="flex justify-between items-start">
                    <span class="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded">Autonomous Agent</span>
                    <span class="text-white/40 text-[10px] font-mono tracking-widest">#101</span>
                </div>
                <div class="translate-y-2 group-hover:translate-y-0 transition duration-500 max-w-2xl text-left">
                    <h3 class="text-2xl md:text-3xl font-black text-white mb-3 tracking-wide">TAKUMI-CORE (自律型AIデザインエージェント)</h3>
                    <p class="text-xs text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition duration-700">この100のプロトタイプを自律的に高速生成した基幹AIエージェント。ビジネス要件の解釈から、UX設計、コード実装までを光の速さで完遂する意思決定エンジン。</p>
                </div>
            </div>
        </a>
    `;
    grid.append(site101HTML);
    console.log("Site 101 added to the grid.");
} else {
    console.log("Grid container not found!");
}

fs.writeFileSync(file, $.html());
console.log("concept_100/index.html updated successfully!");
