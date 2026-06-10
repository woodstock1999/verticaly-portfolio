const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Seeded random for repeatable layouts
function seededRandom(seed) {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

// Categorization helper based on tag names
function getCategory(tag) {
    const t = (tag || "").toLowerCase();
    if (t.includes('finance') || t.includes('saas') || t.includes('tech') || t.includes('web3') || t.includes('security') || t.includes('developer') || t.includes('analytics') || t.includes('ai') || t.includes('cloud') || t.includes('data') || t.includes('b2b') || t.includes('marketing') || t.includes('hr') || t.includes('work') || t.includes('automation') || t.includes('accounting') || t.includes('ops') || t.includes('realtime') || t.includes('agent')) {
        return 'SAAS';
    }
    if (t.includes('fashion') || t.includes('beauty') || t.includes('luxury') || t.includes('art') || t.includes('design') || t.includes('creative') || t.includes('studio') || t.includes('vintage') || t.includes('perfume') || t.includes('apparel') || t.includes('cosmetic')) {
        return 'FASHION';
    }
    if (t.includes('clinic') || t.includes('medical') || t.includes('hospital') || t.includes('local') || t.includes('real estate') || t.includes('law') || t.includes('tax') || t.includes('store') || t.includes('shop') || t.includes('traditional') || t.includes('food') || t.includes('ryokan') || t.includes('sake') || t.includes('onsen') || t.includes('craft') || t.includes('builder') || t.includes('estate') || t.includes('home') || t.includes('dentist') || t.includes('salon')) {
        return 'LOCAL';
    }
    return 'EXPERIMENTAL';
}

function generateSite(id, data) {
    const folder = `concept_100/site_${id}`;
    const file = `${folder}/index.html`;
    const siteTitle = data.tag.split('/')[0].trim() || `SITE-${id}`;
    const category = getCategory(data.tag);
    
    // Choose specific color palettes
    let colorHex = "#3b82f6"; // default blue
    let bgClass = "bg-[#050505]";
    let textClass = "text-gray-400";
    let accentColor = data.colorTheme || "blue";
    
    if (accentColor === "cyan" || accentColor === "sky") colorHex = "#06b6d4";
    else if (accentColor === "emerald" || accentColor === "green") colorHex = "#10b981";
    else if (accentColor === "rose" || accentColor === "pink") colorHex = "#f43f5e";
    else if (accentColor === "purple" || accentColor === "indigo") colorHex = "#a855f7";
    else if (accentColor === "orange" || accentColor === "amber") colorHex = "#f97316";
    else if (accentColor === "fuchsia") colorHex = "#d946ef";

    // Setup base document variables
    let htmlStart = "";
    let heroHTML = "";
    let blocksHTML = "";
    let footerHTML = "";
    
    // Check if custom local image exists
    const hasLocalImage = fs.existsSync(path.join(folder, "img/ui.png")) || fs.existsSync(path.join(folder, "img/hero.png"));
    const localImagePath = fs.existsSync(path.join(folder, "img/hero.png")) ? "img/hero.png" : "img/ui.png";
    const imagePlaceholderHTML = hasLocalImage 
        ? `<img src="${localImagePath}" class="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-[1.03]">`
        : ``;

    // ----------------------------------------------------
    // CATEGORY: SAAS & WEB3 (Cyberpunk / Data Visualization)
    // ----------------------------------------------------
    if (category === 'SAAS') {
        const fontImport = `@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;700&family=Noto+Sans+JP:wght@400;700;900&display=swap');`;
        
        // CSS UI Mockup (Interactive-looking Dashboard)
        const cssUiMockup = hasLocalImage ? `
            <div class="relative w-full h-full bg-zinc-900 overflow-hidden">
                ${imagePlaceholderHTML}
                <div class="absolute inset-0 bg-gradient-to-t from-[#050509] via-transparent to-transparent pointer-events-none"></div>
            </div>` : `
            <div class="w-full h-full bg-[#090b11] border border-white/5 p-4 md:p-6 font-mono text-[10px] text-gray-500 flex flex-col gap-4 overflow-hidden relative">
                <!-- Glowing Background Orbs -->
                <div class="absolute top-1/4 right-1/4 w-72 h-72 bg-${accentColor}-500/10 rounded-full blur-[80px] pointer-events-none"></div>
                <div class="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none"></div>
                
                <!-- Dashboard Header -->
                <div class="flex justify-between items-center border-b border-white/10 pb-3">
                    <div class="flex items-center gap-2">
                        <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
                        <span class="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                        <span class="w-3 h-3 rounded-full bg-green-500/80"></span>
                        <span class="ml-2 text-white/40 tracking-wider text-[9px] font-bold">SYSTEM // ${siteTitle.toUpperCase()}_CORE_v1.0.8</span>
                    </div>
                    <div class="flex items-center gap-4 text-white/60">
                        <span class="bg-${accentColor}-500/10 text-${accentColor}-400 px-2 py-0.5 rounded border border-${accentColor}-500/20 animate-pulse">● LIVE REPORT</span>
                        <span class="hidden sm:inline">PING: 14ms</span>
                    </div>
                </div>

                <!-- Grid Layout -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                    <!-- Column 1: Analytics -->
                    <div class="bg-white/[0.01] border border-white/5 rounded-xl p-4 flex flex-col justify-between">
                        <div>
                            <div class="text-white/30 font-bold mb-1">METRICS OVERVIEW</div>
                            <div class="text-2xl font-bold text-white tracking-tight font-sans">$2,481,094.20</div>
                            <div class="text-${accentColor}-400 text-[9px] mt-1 font-bold">+28.4% FROM LAST MONTH</div>
                        </div>
                        <!-- Line Chart (SVG) -->
                        <div class="w-full h-24 mt-4 relative">
                            <svg class="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="grad-${id}" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stop-color="${colorHex}" stop-opacity="0.3"/>
                                        <stop offset="100%" stop-color="${colorHex}" stop-opacity="0.0"/>
                                    </linearGradient>
                                </defs>
                                <path d="M0,35 Q15,20 30,30 T60,15 T90,5 L100,5 L100,40 L0,40 Z" fill="url(#grad-${id})"/>
                                <path d="M0,35 Q15,20 30,30 T60,15 T90,5 L100,5" fill="none" stroke="${colorHex}" stroke-width="1.5" stroke-linecap="round"/>
                                <circle cx="30" cy="30" r="2" fill="${colorHex}" />
                                <circle cx="60" cy="15" r="2" fill="${colorHex}" />
                                <circle cx="90" cy="5" r="2" fill="#fff" class="animate-ping" />
                            </svg>
                        </div>
                    </div>

                    <!-- Column 2: Activity Log -->
                    <div class="bg-white/[0.01] border border-white/5 rounded-xl p-4 flex flex-col gap-2">
                        <div class="text-white/30 font-bold mb-1">TRANSACTION FEED</div>
                        <div class="flex justify-between border-b border-white/[0.03] py-1">
                            <span class="text-white/80">#23984_DEPLOYED</span>
                            <span class="text-green-400">SUCCESS</span>
                        </div>
                        <div class="flex justify-between border-b border-white/[0.03] py-1">
                            <span class="text-white/80">NODE_VERIFIED_SG</span>
                            <span class="text-${accentColor}-400">100% OK</span>
                        </div>
                        <div class="flex justify-between border-b border-white/[0.03] py-1">
                            <span class="text-white/80">IPFS_REPLICA_SYNC</span>
                            <span class="text-white/40">COMPLETED</span>
                        </div>
                        <div class="flex justify-between py-1">
                            <span class="text-white/80">DATABASE_OPTIMIZE</span>
                            <span class="text-${accentColor}-400">DONE</span>
                        </div>
                    </div>

                    <!-- Column 3: Global Status -->
                    <div class="bg-white/[0.01] border border-white/5 rounded-xl p-4 flex flex-col justify-between">
                        <div>
                            <div class="text-white/30 font-bold mb-2">NETWORK LATENCY</div>
                            <div class="flex gap-1 items-end h-12">
                                <div class="w-1.5 h-6 bg-${accentColor}-500/30 rounded-t"></div>
                                <div class="w-1.5 h-8 bg-${accentColor}-500/40 rounded-t"></div>
                                <div class="w-1.5 h-4 bg-${accentColor}-500/20 rounded-t"></div>
                                <div class="w-1.5 h-10 bg-${accentColor}-500/60 rounded-t"></div>
                                <div class="w-1.5 h-12 bg-${accentColor}-500 rounded-t shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                            </div>
                        </div>
                        <div class="flex items-center gap-3 border-t border-white/10 pt-3">
                            <div class="relative w-8 h-8 rounded-full border-2 border-${accentColor}-500/30 flex items-center justify-center">
                                <span class="absolute inset-1 rounded-full bg-${accentColor}-500/10"></span>
                                <span class="w-2 h-2 rounded-full bg-${accentColor}-500 animate-ping"></span>
                            </div>
                            <div>
                                <div class="text-white font-sans font-bold">SECURE PIPELINE</div>
                                <div class="text-[8px] text-white/40">TLS 1.3 / E2EE / CLOUD-SHIELD</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

        htmlStart = `<!DOCTYPE html>
<html lang="ja" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.headline.replace(/<[^>]+>/g, '')} | ${siteTitle}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        ${fontImport}
        body {
            font-family: 'Space Grotesk', 'Noto Sans JP', sans-serif;
            background-color: #030307;
        }
        .code-font {
            font-family: 'JetBrains Mono', monospace;
        }
        .glass-panel {
            background: rgba(13, 17, 27, 0.7);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .glow-cyan {
            box-shadow: 0 0 40px rgba(6, 182, 212, 0.15);
        }
    </style>
</head>
<body class="text-[#8f96a3] min-h-screen antialiased overflow-x-hidden selection:bg-${accentColor}-500/30">

    <!-- Glowing Cyber Grid Background -->
    <div class="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" style="background-image: radial-gradient(rgba(255,255,255,0.15) 1px, transparent 0); background-size: 24px 24px;"></div>
    <div class="fixed top-0 left-1/4 w-[500px] h-[500px] bg-${accentColor}-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
    <div class="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

    <!-- Navigation -->
    <nav class="fixed w-full z-50 glass-panel border-b border-white/5 px-6 md:px-12 py-5 flex justify-between items-center">
        <div class="font-bold text-xl tracking-tight text-white flex items-center gap-3">
            <div class="w-3.5 h-3.5 rounded bg-${accentColor}-500 shadow-[0_0_15px_rgba(6,182,212,0.6)]"></div>
            <span class="tracking-widest uppercase text-sm font-black text-white/90">${siteTitle}</span>
        </div>
        <div class="hidden md:flex gap-8 text-xs font-bold text-white/50 tracking-widest uppercase">
            <a href="#" class="hover:text-white transition">Features</a>
            <a href="#" class="hover:text-white transition">Network</a>
            <a href="#" class="hover:text-white transition">Tokenomics</a>
        </div>
        <div class="flex items-center gap-4">
            <a href="../index.html" class="text-[10px] font-bold text-white/40 hover:text-white transition uppercase tracking-widest">HUB</a>
            <a href="#" class="bg-${accentColor}-600 hover:bg-${accentColor}-500 text-white px-5 py-2 rounded font-bold text-xs tracking-wider uppercase transition shadow-lg shadow-${accentColor}-500/20">${data.btnText}</a>
        </div>
    </nav>

    <main class="pt-[140px] pb-24 relative z-10">`;

        heroHTML = `
        <div class="px-6 md:px-12 max-w-7xl mx-auto">
            <div class="text-center max-w-4xl mx-auto mb-20">
                <span class="bg-white/5 border border-white/10 text-${accentColor}-400 px-5 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded mb-6 inline-block">${data.tag}</span>
                <h1 class="text-4xl md:text-6xl font-extrabold mb-8 leading-[1.15] tracking-tight text-white">${data.headline}</h1>
                <p class="text-lg md:text-xl text-[#8f96a3] max-w-3xl mx-auto leading-relaxed">${data.subheadline}</p>
            </div>
            
            <div class="relative w-full aspect-[21/10] md:aspect-video rounded-2xl overflow-hidden glass-panel p-2 shadow-2xl glow-${accentColor} border border-white/10 group mb-32">
                <div class="w-full h-full rounded-xl overflow-hidden">
                    ${cssUiMockup}
                </div>
            </div>
        </div>`;

        // Blocks for SaaS
        blocksHTML += `<div class="px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-32 mb-32">`;
        data.blocks.forEach((blk, idx) => {
            const isReverse = idx % 2 === 1;
            if (blk.features) {
                blocksHTML += `
                <div class="relative">
                    <div class="text-center mb-16 max-w-2xl mx-auto">
                        <span class="text-${accentColor}-400 font-bold tracking-widest text-xs uppercase">${blk.subtitle}</span>
                        <h2 class="text-3xl md:text-4xl font-extrabold mt-4 text-white">${blk.title}</h2>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        ${blk.features.map(f => `
                        <div class="glass-panel p-8 rounded-xl hover:border-${accentColor}-500/30 transition duration-300 group">
                            <div class="w-12 h-12 rounded flex items-center justify-center mb-6 bg-${accentColor}-500/10 text-${accentColor}-400 border border-${accentColor}-500/20 group-hover:bg-${accentColor}-500/20 transition-all">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h4 class="text-lg font-bold mb-3 text-white">${f.t}</h4>
                            <p class="text-sm leading-relaxed text-[#8f96a3]">${f.d}</p>
                        </div>
                        `).join('\n')}
                    </div>
                </div>`;
            } else {
                blocksHTML += `
                <div class="flex flex-col md:flex-row items-center gap-16 ${isReverse ? 'md:flex-row-reverse' : ''}">
                    <div class="flex-1 space-y-6">
                        <span class="text-${accentColor}-400 font-bold tracking-widest text-xs uppercase block">${blk.subtitle}</span>
                        <h2 class="text-3xl md:text-4xl font-extrabold text-white leading-tight">${blk.title}</h2>
                        <div class="w-12 h-0.5 bg-${accentColor}-500"></div>
                        <p class="text-base leading-relaxed text-[#8f96a3] font-light">${blk.content}</p>
                    </div>
                    <div class="flex-1 w-full aspect-video rounded-xl overflow-hidden glass-panel p-2 border border-white/10 group">
                        <div class="w-full h-full rounded-lg bg-[#0e111a] overflow-hidden flex items-center justify-center p-6 border border-white/5 relative">
                            ${hasLocalImage ? imagePlaceholderHTML : `
                            <div class="absolute inset-0 bg-gradient-to-br from-${accentColor}-500/5 to-transparent pointer-events-none"></div>
                            <div class="text-center font-mono text-[9px] text-white/20">
                                <div class="text-[32px] text-${accentColor}-400/20 font-sans font-black mb-2">${idx + 1}</div>
                                <div class="uppercase tracking-widest font-bold text-white/30">[ MODULE_${idx + 1}_ACTIVE ]</div>
                                <div class="mt-2 text-white/10">STABLE NODE // PACKETS_TRANSMITTED</div>
                            </div>
                            `}
                        </div>
                    </div>
                </div>`;
            }
        });
        blocksHTML += `</div>`;

        // CTA for SaaS
        blocksHTML += `
        <div class="px-6 md:px-12 max-w-7xl mx-auto">
            <div class="glass-panel rounded-2xl p-12 md:p-24 relative overflow-hidden group shadow-2xl border border-white/10">
                <div class="absolute -top-32 -right-32 w-96 h-96 bg-${accentColor}-600/10 rounded-full blur-[100px]"></div>
                <div class="relative z-10 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl md:text-5xl font-extrabold mb-6 text-white">${data.ctaTitle}</h2>
                    <p class="text-base text-[#8f96a3] mb-10 leading-relaxed max-w-xl mx-auto">${data.ctaDesc}</p>
                    <a href="#" class="bg-${accentColor}-600 hover:bg-${accentColor}-500 text-white px-10 py-4 rounded font-bold text-sm tracking-wider uppercase inline-flex items-center gap-3 transition shadow-lg shadow-${accentColor}-500/20">
                        ${data.btnText}
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                </div>
            </div>
        </div>`;

        footerHTML = `
    </main>

    <!-- Footer -->
    <footer class="py-12 text-center text-xs font-mono tracking-widest text-white/30 border-t border-white/5 bg-[#030307]">
        <p>&copy; 2026 ${siteTitle.toUpperCase()} // ALL DECENTRALIZED RIGHTS RESERVED.</p>
    </footer>

</body>
</html>`;
    }

    // ----------------------------------------------------
    // CATEGORY: FASHION & LUXURY (Minimalist & Elegant)
    // ----------------------------------------------------
    else if (category === 'FASHION') {
        const fontImport = `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Zen+Old+Mincho:wght@400;500;700&display=swap');`;
        
        // White/Light background or deep black
        const isDark = id % 3 === 0;
        bgClass = isDark ? "bg-[#0c0c0c]" : "bg-[#fbfaf8]";
        textClass = isDark ? "text-stone-400" : "text-stone-600";
        const titleColor = isDark ? "text-white" : "text-stone-900";
        const borderClass = isDark ? "border-white/5" : "border-stone-200";
        const buttonClass = isDark ? "bg-white text-black hover:bg-stone-200" : "bg-stone-900 text-white hover:bg-stone-800";
        
        // CSS UI Mockup (Abstract geometric lines & typography)
        const cssUiMockup = hasLocalImage ? `
            <div class="relative w-full h-full overflow-hidden bg-stone-100">
                ${imagePlaceholderHTML}
                <div class="absolute inset-0 bg-gradient-to-t from-${isDark ? '[#0c0c0c]' : '[#fbfaf8]'} via-transparent to-transparent pointer-events-none"></div>
            </div>` : `
            <div class="w-full h-full flex items-center justify-center p-8 relative overflow-hidden bg-stone-100" style="background-color: ${isDark ? '#141414' : '#f5f2eb'};">
                <!-- Abstract minimalist line art -->
                <div class="absolute inset-0 flex items-center justify-center opacity-30">
                    <div class="w-[300px] h-[300px] rounded-full border border-stone-400/30 flex items-center justify-center">
                        <div class="w-[200px] h-[200px] rounded-full border border-stone-400/40"></div>
                    </div>
                    <div class="absolute w-[500px] h-[1px] bg-stone-400/20 rotate-45"></div>
                    <div class="absolute w-[500px] h-[1px] bg-stone-400/20 -rotate-45"></div>
                </div>
                
                <div class="relative z-10 text-center tracking-[0.2em] select-none">
                    <span class="block text-[10px] text-stone-400 uppercase mb-2">SPRING / SUMMER COLLECTION</span>
                    <h2 class="text-3xl md:text-5xl font-light text-stone-800 italic font-serif" style="color: ${isDark ? '#fff' : '#1c1917'};">${siteTitle.split(' ')[0]}</h2>
                    <div class="w-12 h-[1px] bg-stone-400/40 mx-auto my-4"></div>
                    <span class="block text-[9px] text-stone-500 font-sans">01 // ESSENTIALS</span>
                </div>
            </div>`;

        htmlStart = `<!DOCTYPE html>
<html lang="ja" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.headline.replace(/<[^>]+>/g, '')} | ${siteTitle}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        ${fontImport}
        body {
            font-family: 'Cormorant Garamond', 'Zen Old Mincho', serif;
            background-color: ${isDark ? '#0c0c0c' : '#fbfaf8'};
        }
        .sans-font {
            font-family: 'Inter', sans-serif;
        }
        .serif-font {
            font-family: 'Cormorant Garamond', serif;
        }
        .text-justify-custom {
            text-align: justify;
            text-justify: inter-character;
        }
    </style>
</head>
<body class="${textClass} min-h-screen antialiased overflow-x-hidden selection:bg-stone-500/10">

    <!-- Navigation -->
    <nav class="fixed w-full z-50 ${isDark ? 'bg-[#0c0c0c]/80' : 'bg-[#fbfaf8]/80'} backdrop-blur-md border-b ${borderClass} px-8 md:px-16 py-6 flex justify-between items-center">
        <div class="text-lg tracking-[0.25em] font-light ${titleColor} uppercase">
            ${siteTitle}
        </div>
        <div class="hidden md:flex gap-12 text-[10px] font-bold tracking-[0.3em] uppercase text-stone-400">
            <a href="#" class="hover:text-stone-900 transition">Collection</a>
            <a href="#" class="hover:text-stone-900 transition">Editorial</a>
            <a href="#" class="hover:text-stone-900 transition">About</a>
        </div>
        <div class="flex items-center gap-6">
            <a href="../index.html" class="text-[9px] sans-font tracking-widest text-stone-400 hover:text-stone-900 transition uppercase">HUB</a>
            <a href="#" class="${buttonClass} px-6 py-2 text-[10px] sans-font tracking-[0.2em] uppercase transition rounded">${data.btnText}</a>
        </div>
    </nav>

    <main class="pt-[160px] pb-32 relative z-10">`;

        heroHTML = `
        <div class="px-6 md:px-16 max-w-7xl mx-auto">
            <div class="flex flex-col lg:flex-row items-center gap-16 mb-32">
                <div class="flex-1 space-y-8">
                    <span class="text-[10px] sans-font tracking-[0.3em] text-stone-400 uppercase block">${data.tag}</span>
                    <h1 class="text-4xl md:text-6xl font-light ${titleColor} leading-[1.2]">${data.headline}</h1>
                    <p class="text-lg font-light leading-relaxed max-w-xl text-justify-custom">${data.subheadline}</p>
                </div>
                <div class="flex-1 w-full relative">
                    <div class="aspect-[4/3] rounded-sm overflow-hidden shadow-sm border ${borderClass} p-1.5">
                        <div class="w-full h-full rounded-sm overflow-hidden">
                            ${cssUiMockup}
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        // Blocks for Fashion
        blocksHTML += `<div class="px-6 md:px-16 max-w-7xl mx-auto flex flex-col gap-40 mb-32">`;
        data.blocks.forEach((blk, idx) => {
            const isReverse = idx % 2 === 1;
            if (blk.features) {
                blocksHTML += `
                <div class="relative">
                    <div class="mb-20 text-center">
                        <span class="text-[10px] sans-font tracking-[0.3em] text-stone-400 uppercase block mb-4">${blk.subtitle}</span>
                        <h2 class="text-3xl md:text-4xl font-light ${titleColor} italic">${blk.title}</h2>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                        ${blk.features.map(f => `
                        <div class="border-t ${borderClass} pt-8 space-y-4">
                            <span class="text-[10px] sans-font text-stone-400 font-mono tracking-widest block">0${idx + 1}</span>
                            <h4 class="text-xl font-medium ${titleColor}">${f.t}</h4>
                            <p class="text-sm leading-relaxed font-light text-justify-custom">${f.d}</p>
                        </div>
                        `).join('\n')}
                    </div>
                </div>`;
            } else {
                blocksHTML += `
                <div class="flex flex-col md:flex-row gap-20 items-center ${isReverse ? 'md:flex-row-reverse' : ''}">
                    <div class="flex-1 space-y-8">
                        <span class="text-[10px] sans-font tracking-[0.3em] text-stone-400 uppercase block">${blk.subtitle}</span>
                        <h2 class="text-3xl md:text-5xl font-light ${titleColor} leading-tight">${blk.title}</h2>
                        <p class="text-base leading-relaxed font-light text-justify-custom">${blk.content}</p>
                    </div>
                    <div class="flex-1 w-full aspect-[4/5] overflow-hidden bg-stone-100 border ${borderClass} p-1.5 rounded-sm">
                        <div class="w-full h-full rounded-sm bg-stone-200 overflow-hidden flex items-center justify-center p-8 relative" style="background-color: ${isDark ? '#141414' : '#f5f2eb'};">
                            ${hasLocalImage ? imagePlaceholderHTML : `
                            <div class="text-center tracking-widest text-[9px] text-stone-400 uppercase font-light">
                                <div class="text-4xl font-serif font-light mb-4" style="color: ${isDark ? '#555' : '#ccc'};">${idx + 1}</div>
                                <div class="border-t border-b py-2 ${borderClass}">[ EDITORIAL SHOT // 0${idx + 1} ]</div>
                            </div>
                            `}
                        </div>
                    </div>
                </div>`;
            }
        });
        blocksHTML += `</div>`;

        // CTA for Fashion
        blocksHTML += `
        <div class="px-6 md:px-16 max-w-7xl mx-auto">
            <div class="border ${borderClass} rounded-sm p-16 md:p-32 relative overflow-hidden text-center">
                <div class="max-w-2xl mx-auto space-y-8">
                    <h2 class="text-3xl md:text-5xl font-light ${titleColor}">${data.ctaTitle}</h2>
                    <p class="text-base font-light leading-relaxed max-w-xl mx-auto">${data.ctaDesc}</p>
                    <div class="pt-6">
                        <a href="#" class="${buttonClass} px-10 py-4 text-[10px] sans-font tracking-[0.25em] uppercase transition inline-block">
                            ${data.btnText}
                        </a>
                    </div>
                </div>
            </div>
        </div>`;

        footerHTML = `
    </main>

    <!-- Footer -->
    <footer class="py-16 text-center text-[9px] sans-font tracking-[0.3em] text-stone-400 border-t ${borderClass} bg-${isDark ? '[#0c0c0c]' : '[#fbfaf8]'}">
        <p>&copy; 2026 ${siteTitle.toUpperCase()} &mdash; ARCHIVE &amp; Curation.</p>
    </footer>

</body>
</html>`;
    }

    // ----------------------------------------------------
    // CATEGORY: LOCAL, CLINIC & DR (Clean & High-Trust)
    // ----------------------------------------------------
    else if (category === 'LOCAL') {
        const fontImport = `@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Outfit:wght@400;600;700&display=swap');`;
        
        let primaryColor = "emerald";
        let mainColorHex = "#10b981";
        if (accentColor === "blue" || accentColor === "indigo") {
            primaryColor = "blue";
            mainColorHex = "#3b82f6";
        } else if (accentColor === "orange" || accentColor === "amber") {
            primaryColor = "orange";
            mainColorHex = "#f97316";
        } else if (accentColor === "rose" || accentColor === "pink") {
            primaryColor = "rose";
            mainColorHex = "#f43f5e";
        }
        
        // CSS UI Mockup (Clean calendar reservation UI / Schedule planner)
        const cssUiMockup = hasLocalImage ? `
            <div class="relative w-full h-full bg-slate-50 overflow-hidden">
                ${imagePlaceholderHTML}
                <div class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none"></div>
            </div>` : `
            <div class="w-full h-full bg-white border border-slate-100 p-4 md:p-6 text-slate-700 flex flex-col gap-4 overflow-hidden relative rounded-xl font-sans">
                <!-- Header of Reservation System -->
                <div class="flex justify-between items-center border-b border-slate-100 pb-3">
                    <div>
                        <div class="text-xs font-bold text-slate-800">${siteTitle} オンライン予約</div>
                        <div class="text-[9px] text-slate-400">24時間いつでも予約可能です</div>
                    </div>
                    <span class="bg-${primaryColor}-50 text-${primaryColor}-600 px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-${primaryColor}-100">即時確定</span>
                </div>
                
                <!-- Calendar Grid -->
                <div class="flex-1 flex flex-col gap-3">
                    <div class="grid grid-cols-7 text-center text-[10px] font-bold text-slate-400 border-b border-slate-50 pb-1">
                        <span>日</span><span>月</span><span>火</span><span>水</span><span>木</span><span>金</span><span>土</span>
                    </div>
                    <div class="grid grid-cols-7 text-center text-xs gap-y-2">
                        <span class="text-slate-300">28</span><span class="text-slate-300">29</span><span class="text-slate-300">30</span>
                        <span class="font-bold text-slate-800 hover:bg-slate-50 p-1 rounded cursor-pointer">1</span>
                        <span class="font-bold text-slate-800 hover:bg-slate-50 p-1 rounded cursor-pointer">2</span>
                        <span class="font-bold text-slate-800 hover:bg-slate-50 p-1 rounded cursor-pointer">3</span>
                        <span class="font-bold text-slate-800 hover:bg-slate-50 p-1 rounded cursor-pointer">4</span>
                        
                        <span class="font-bold text-slate-800 hover:bg-slate-50 p-1 rounded cursor-pointer">5</span>
                        <span class="font-bold text-slate-800 hover:bg-slate-50 p-1 rounded cursor-pointer">6</span>
                        <span class="font-bold text-slate-800 bg-${primaryColor}-500 text-white p-1 rounded shadow-sm shadow-${primaryColor}-500/30">7</span>
                        <span class="font-bold text-slate-800 hover:bg-slate-50 p-1 rounded cursor-pointer">8</span>
                        <span class="font-bold text-slate-800 hover:bg-slate-50 p-1 rounded cursor-pointer">9</span>
                        <span class="font-bold text-slate-800 hover:bg-slate-50 p-1 rounded cursor-pointer">10</span>
                        <span class="font-bold text-slate-800 hover:bg-slate-50 p-1 rounded cursor-pointer">11</span>
                    </div>
                    
                    <!-- Available times -->
                    <div class="border-t border-slate-100 pt-3">
                        <div class="text-[10px] font-bold text-slate-500 mb-2">ご希望の時間枠をお選びください</div>
                        <div class="flex gap-2">
                            <span class="flex-1 bg-${primaryColor}-50 hover:bg-${primaryColor}-100 text-${primaryColor}-700 text-center py-2.5 rounded-lg font-bold text-[10px] border border-${primaryColor}-200/50 cursor-pointer transition">10:00 [空きあり]</span>
                            <span class="flex-1 bg-${primaryColor}-50 hover:bg-${primaryColor}-100 text-${primaryColor}-700 text-center py-2.5 rounded-lg font-bold text-[10px] border border-${primaryColor}-200/50 cursor-pointer transition">14:00 [空きあり]</span>
                            <span class="flex-1 bg-slate-50 text-slate-400 text-center py-2.5 rounded-lg font-bold text-[10px] border border-slate-200/40 line-through">16:30 [満席]</span>
                        </div>
                    </div>
                </div>
            </div>`;

        htmlStart = `<!DOCTYPE html>
<html lang="ja" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.headline.replace(/<[^>]+>/g, '')} | ${siteTitle}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        ${fontImport}
        body {
            font-family: 'Noto Sans JP', 'Outfit', sans-serif;
            background-color: #fcfcfc;
        }
        .main-gradient {
            background: linear-gradient(135deg, ${mainColorHex} 0%, ${mainColorHex}dd 100%);
        }
        .shadow-trust {
            box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);
        }
    </style>
</head>
<body class="text-slate-600 min-h-screen antialiased overflow-x-hidden selection:bg-${primaryColor}-500/20">

    <!-- Navigation -->
    <nav class="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 md:px-12 py-5 flex justify-between items-center shadow-sm">
        <div class="font-extrabold text-lg md:text-xl text-slate-800 flex items-center gap-2">
            <span class="w-2.5 h-6 rounded bg-${primaryColor}-500 block"></span>
            <span>${siteTitle}</span>
        </div>
        <div class="hidden md:flex gap-8 text-xs font-bold text-slate-600 tracking-wider">
            <a href="#" class="hover:text-${primaryColor}-600 transition">特長・強み</a>
            <a href="#" class="hover:text-${primaryColor}-600 transition">料金案内</a>
            <a href="#" class="hover:text-${primaryColor}-600 transition">スタッフ紹介</a>
        </div>
        <div class="flex items-center gap-4">
            <a href="../index.html" class="text-[10px] font-bold text-slate-400 hover:text-slate-800 transition uppercase tracking-widest">HUB</a>
            <a href="#" class="bg-${primaryColor}-500 hover:bg-${primaryColor}-600 text-white px-5 py-2.5 rounded-lg font-bold text-xs tracking-wider transition shadow-md shadow-${primaryColor}-500/20">${data.btnText}</a>
        </div>
    </nav>

    <main class="pt-[140px] pb-24 relative z-10">`;

        heroHTML = `
        <div class="px-6 md:px-12 max-w-7xl mx-auto">
            <div class="flex flex-col lg:flex-row items-center gap-16 mb-24">
                <div class="flex-1 space-y-6">
                    <span class="text-${primaryColor}-600 font-extrabold tracking-widest text-xs uppercase bg-${primaryColor}-50 px-3.5 py-1.5 rounded-full inline-block border border-${primaryColor}-100">${data.tag}</span>
                    <h1 class="text-4xl md:text-5xl font-black mb-8 leading-[1.25] text-slate-800">${data.headline}</h1>
                    <p class="text-base md:text-lg text-slate-500 font-medium leading-relaxed">${data.subheadline}</p>
                </div>
                <div class="flex-1 w-full relative">
                    <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-trust border border-slate-100 p-2 bg-white">
                        <div class="w-full h-full rounded-xl overflow-hidden">
                            ${cssUiMockup}
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        // Blocks for Local
        blocksHTML += `<div class="px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-28 mb-32">`;
        data.blocks.forEach((blk, idx) => {
            const isReverse = idx % 2 === 1;
            if (blk.features) {
                blocksHTML += `
                <div class="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-trust relative">
                    <div class="text-center mb-12 max-w-2xl mx-auto">
                        <span class="text-${primaryColor}-500 font-bold tracking-widest text-xs uppercase">${blk.subtitle}</span>
                        <h2 class="text-2xl md:text-3xl font-black mt-3 text-slate-800">${blk.title}</h2>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        ${blk.features.map(f => `
                        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100/50 hover:border-${primaryColor}-500/20 transition-all duration-300">
                            <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-5 bg-${primaryColor}-500 text-white shadow-sm shadow-${primaryColor}-500/30">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <h4 class="text-base font-bold mb-2 text-slate-800">${f.t}</h4>
                            <p class="text-xs leading-relaxed text-slate-500">${f.d}</p>
                        </div>
                        `).join('\n')}
                    </div>
                </div>`;
            } else {
                blocksHTML += `
                <div class="flex flex-col md:flex-row items-center gap-16 ${isReverse ? 'md:flex-row-reverse' : ''}">
                    <div class="flex-1 space-y-5">
                        <span class="text-${primaryColor}-500 font-extrabold tracking-widest text-xs uppercase block">${blk.subtitle}</span>
                        <h2 class="text-2xl md:text-3xl font-black text-slate-800 leading-tight">${blk.title}</h2>
                        <p class="text-base leading-relaxed text-slate-500 font-light">${blk.content}</p>
                    </div>
                    <div class="flex-1 w-full aspect-video rounded-2xl overflow-hidden shadow-trust bg-white p-2 border border-slate-100 group">
                        <div class="w-full h-full rounded-xl bg-slate-50 overflow-hidden flex items-center justify-center p-6 border border-slate-100/50 relative">
                            ${hasLocalImage ? imagePlaceholderHTML : `
                            <div class="text-center">
                                <span class="bg-${primaryColor}-50 text-${primaryColor}-600 px-3 py-1 text-[9px] font-bold rounded-full tracking-wider uppercase inline-block mb-3 border border-${primaryColor}-100">INFO CARD 0${idx + 1}</span>
                                <p class="text-xs text-slate-400 font-medium">信頼の裏付けとなるイメージ</p>
                            </div>
                            `}
                        </div>
                    </div>
                </div>`;
            }
        });
        blocksHTML += `</div>`;

        // CTA for Local
        blocksHTML += `
        <div class="px-6 md:px-12 max-w-7xl mx-auto">
            <div class="bg-white border border-slate-100 rounded-3xl p-12 md:p-20 shadow-trust relative overflow-hidden">
                <div class="absolute -top-32 -right-32 w-80 h-80 bg-${primaryColor}-500/5 rounded-full blur-[80px]"></div>
                <div class="relative z-10 text-center max-w-2xl mx-auto space-y-6">
                    <h2 class="text-2xl md:text-4xl font-black text-slate-800">${data.ctaTitle}</h2>
                    <p class="text-sm text-slate-500 leading-relaxed max-w-lg mx-auto">${data.ctaDesc}</p>
                    <div class="pt-4">
                        <a href="#" class="bg-${primaryColor}-500 hover:bg-${primaryColor}-600 text-white px-10 py-3.5 rounded-lg font-bold text-sm tracking-wider transition shadow-md shadow-${primaryColor}-500/25 inline-block">
                            ${data.btnText}
                        </a>
                    </div>
                </div>
            </div>
        </div>`;

        footerHTML = `
    </main>

    <!-- Footer -->
    <footer class="py-12 text-center text-xs tracking-wider text-slate-400 border-t border-slate-100 bg-white shadow-inner">
        <p>&copy; 2026 ${siteTitle}. ALL RIGHTS RESERVED.</p>
    </footer>

</body>
</html>`;
    }

    // ----------------------------------------------------
    // CATEGORY: EXPERIMENTAL, GAME & SPACE (Neo-Brutalism & Kinetic)
    // ----------------------------------------------------
    else {
        const fontImport = `@import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Outfit:wght@400;700;900&display=swap');`;
        
        let acidColor = "yellow";
        let acidHex = "#ffde00";
        if (accentColor === "cyan") {
            acidColor = "cyan";
            acidHex = "#00f0ff";
        } else if (accentColor === "rose" || accentColor === "pink") {
            acidColor = "rose";
            acidHex = "#ff007f";
        } else if (accentColor === "fuchsia") {
            acidColor = "fuchsia";
            acidHex = "#e800ff";
        } else if (accentColor === "green" || accentColor === "emerald") {
            acidColor = "lime";
            acidHex = "#39ff14";
        }
        
        // CSS UI Mockup (Cyberpunk node net or neon brutalist retro terminal card)
        const cssUiMockup = hasLocalImage ? `
            <div class="relative w-full h-full bg-black overflow-hidden border-2 border-black">
                ${imagePlaceholderHTML}
                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
            </div>` : `
            <div class="w-full h-full bg-black border-2 border-black p-4 md:p-6 text-white flex flex-col gap-4 overflow-hidden relative font-mono text-[9px]">
                <!-- Grid background -->
                <div class="absolute inset-0 pointer-events-none opacity-[0.1]" style="background-image: radial-gradient(rgba(255,255,255,0.15) 1px, transparent 0); background-size: 16px 16px;"></div>
                
                <!-- Retro Console Bar -->
                <div class="flex justify-between items-center bg-zinc-900 border border-zinc-700/60 p-2 rounded">
                    <div class="flex items-center gap-2">
                        <span class="w-2.5 h-2.5 rounded-full bg-${acidColor}-500 shadow-[0_0_10px_${acidHex}]"></span>
                        <span class="text-white font-bold tracking-widest text-[8px]">[ EXP_TERMINAL_v9.11 ]</span>
                    </div>
                    <span class="text-${acidColor}-400 animate-pulse">▲ ACTIVE_GRID</span>
                </div>
                
                <!-- Terminal Output -->
                <div class="flex-1 bg-zinc-950 border border-zinc-800 p-3 rounded flex flex-col justify-between select-none">
                    <div class="space-y-1">
                        <div class="text-zinc-500">> INITIALIZING PROJECTION MATRIX...</div>
                        <div class="text-zinc-500">> RESOLVING SHADER CONSTANTS...</div>
                        <div class="text-${acidColor}-300">> TARGET LOAD: site_${id}_metaverse.cfg [ OK ]</div>
                        <div class="text-zinc-500">> GRAPHICS ENGINE READY: VERTEX_BUFFER [ 4192KB ]</div>
                    </div>
                    
                    <!-- Retro HUD elements -->
                    <div class="flex justify-between items-end border-t border-zinc-900 pt-2 mt-4">
                        <div class="flex gap-1.5 items-end">
                            <div class="w-1.5 h-3 bg-${acidColor}-400"></div>
                            <div class="w-1.5 h-6 bg-${acidColor}-500"></div>
                            <div class="w-1.5 h-4 bg-${acidColor}-400"></div>
                            <div class="w-1.5 h-8 bg-zinc-800"></div>
                        </div>
                        <div>
                            <div class="text-white font-black text-xs font-sans tracking-wide">SYSTEM: ONLINE</div>
                            <div class="text-[7px] text-zinc-500 text-right">08C5_E788</div>
                        </div>
                    </div>
                </div>
            </div>`;

        htmlStart = `<!DOCTYPE html>
<html lang="ja" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.headline.replace(/<[^>]+>/g, '')} | ${siteTitle}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        ${fontImport}
        body {
            font-family: 'Outfit', 'Dela Gothic One', sans-serif;
            background-color: #000;
        }
        .brutal-card {
            border: 3px solid #000000;
            box-shadow: 6px 6px 0px 0px #000000;
            background-color: #0c0c0c;
        }
        .brutal-card-color {
            border: 3px solid #000000;
            box-shadow: 6px 6px 0px 0px #000000;
            background-color: ${acidHex};
        }
        .brutal-button {
            border: 2px solid #000000;
            box-shadow: 3px 3px 0px 0px #000000;
        }
        .brutal-button:hover {
            transform: translate(-1px, -1px);
            box-shadow: 4px 4px 0px 0px #000000;
        }
        .acid-glow {
            text-shadow: 0 0 15px ${acidHex}70;
        }
    </style>
</head>
<body class="text-zinc-400 min-h-screen antialiased overflow-x-hidden selection:bg-${acidColor}-500 selection:text-black">

    <!-- Navigation -->
    <nav class="fixed w-full z-50 bg-black border-b-2 border-black px-6 md:px-12 py-5 flex justify-between items-center">
        <div class="font-extrabold text-xl tracking-tight text-white flex items-center gap-2">
            <span class="w-4 h-4 bg-${acidColor}-500 rounded-full border border-black shadow-[0_0_10px_${acidHex}]"></span>
            <span class="tracking-wide uppercase text-sm font-black text-white">${siteTitle}</span>
        </div>
        <div class="hidden md:flex gap-8 text-[10px] font-black tracking-widest uppercase text-white/50">
            <a href="#" class="hover:text-white transition">Concept</a>
            <a href="#" class="hover:text-white transition">Prototype</a>
            <a href="#" class="hover:text-white transition">Terminal</a>
        </div>
        <div class="flex items-center gap-4">
            <a href="../index.html" class="text-[9px] font-black text-white/40 hover:text-white transition uppercase tracking-widest">HUB</a>
            <a href="#" class="bg-${acidColor}-500 hover:bg-${acidColor}-400 text-black border-2 border-black px-5 py-2 rounded font-black text-xs tracking-wide uppercase transition brutal-button">${data.btnText}</a>
        </div>
    </nav>

    <main class="pt-[140px] pb-24 relative z-10">`;

        heroHTML = `
        <div class="px-6 md:px-12 max-w-7xl mx-auto">
            <div class="text-center max-w-4xl mx-auto mb-20">
                <span class="bg-${acidColor}-500 text-black border-2 border-black px-5 py-1.5 text-[9px] font-black tracking-widest uppercase rounded-full inline-block shadow-[2px_2px_0px_#000] mb-8">${data.tag}</span>
                <h1 class="text-4xl md:text-7xl font-black mb-8 leading-[1.1] text-white uppercase italic tracking-tight acid-glow">${data.headline}</h1>
                <p class="text-base md:text-lg text-zinc-400 font-medium leading-relaxed max-w-3xl mx-auto">${data.subheadline}</p>
            </div>
            
            <div class="relative w-full aspect-[21/10] md:aspect-video rounded-lg overflow-hidden border-4 border-black shadow-[10px_10px_0px_0px_${acidHex}] bg-zinc-900 group mb-32">
                <div class="w-full h-full">
                    ${cssUiMockup}
                </div>
            </div>
        </div>`;

        // Blocks for Experimental
        blocksHTML += `<div class="px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-32 mb-32">`;
        data.blocks.forEach((blk, idx) => {
            const isReverse = idx % 2 === 1;
            if (blk.features) {
                blocksHTML += `
                <div class="relative">
                    <div class="text-center mb-16 max-w-2xl mx-auto">
                        <span class="text-${acidColor}-400 font-black tracking-widest text-xs uppercase block">${blk.subtitle}</span>
                        <h2 class="text-3xl md:text-5xl font-black mt-4 text-white uppercase italic">${blk.title}</h2>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        ${blk.features.map(f => `
                        <div class="brutal-card p-8 rounded-lg hover:translate-y-[-4px] transition duration-200">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-${acidColor}-500 text-black border-2 border-black">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <h4 class="text-lg font-black mb-3 text-white uppercase">${f.t}</h4>
                            <p class="text-xs leading-relaxed text-zinc-500">${f.d}</p>
                        </div>
                        `).join('\n')}
                    </div>
                </div>`;
            } else {
                blocksHTML += `
                <div class="flex flex-col md:flex-row items-center gap-16 ${isReverse ? 'md:flex-row-reverse' : ''}">
                    <div class="flex-1 space-y-6">
                        <span class="text-${acidColor}-400 font-black tracking-widest text-xs uppercase block">${blk.subtitle}</span>
                        <h2 class="text-3xl md:text-4xl font-black text-white leading-tight uppercase italic">${blk.title}</h2>
                        <div class="w-16 h-1 bg-${acidColor}-500 border-2 border-black"></div>
                        <p class="text-sm leading-relaxed text-zinc-400 font-light">${blk.content}</p>
                    </div>
                    <div class="flex-1 w-full aspect-video rounded-lg overflow-hidden border-3 border-black shadow-[6px_6px_0px_#000] bg-zinc-900 p-1">
                        <div class="w-full h-full rounded-sm bg-zinc-950 overflow-hidden flex items-center justify-center p-6 relative">
                            ${hasLocalImage ? imagePlaceholderHTML : `
                            <div class="absolute inset-0 bg-gradient-to-br from-${acidColor}-500/5 to-transparent pointer-events-none"></div>
                            <div class="text-center font-mono text-[9px] text-zinc-600">
                                <div class="text-4xl font-black text-${acidColor}-400 mb-2">${idx + 1}</div>
                                <div class="uppercase tracking-widest font-black">[ CORE_GRID_0${idx + 1} ]</div>
                                <div class="mt-2">EXPERIMENTAL PROTOCOL VERIFIED</div>
                            </div>
                            `}
                        </div>
                    </div>
                </div>`;
            }
        });
        blocksHTML += `</div>`;

        // CTA for Experimental
        blocksHTML += `
        <div class="px-6 md:px-12 max-w-7xl mx-auto">
            <div class="brutal-card-color rounded-lg p-12 md:p-24 relative overflow-hidden border-4 border-black text-black">
                <div class="relative z-10 text-center max-w-3xl mx-auto space-y-8">
                    <h2 class="text-3xl md:text-5xl font-black uppercase italic tracking-tight">${data.ctaTitle}</h2>
                    <p class="text-sm text-black/70 font-bold leading-relaxed max-w-xl mx-auto">${data.ctaDesc}</p>
                    <div>
                        <a href="#" class="bg-black hover:bg-zinc-900 text-${acidColor}-500 px-10 py-4 rounded font-black text-xs tracking-wider uppercase inline-flex items-center gap-3 transition brutal-button">
                            ${data.btnText}
                        </a>
                    </div>
                </div>
            </div>
        </div>`;

        footerHTML = `
    </main>

    <!-- Footer -->
    <footer class="py-12 text-center text-[10px] font-black tracking-widest text-zinc-500 border-t-2 border-black bg-black">
        <p>&copy; 2026 ${siteTitle.toUpperCase()} &mdash; PROTOCOL // 0x29C5A.</p>
    </footer>

</body>
</html>`;
    }

    const htmlCombined = htmlStart + heroHTML + blocksHTML + footerHTML;
    
    fs.writeFileSync(file, htmlCombined);
    console.log(`[Bespoke] Generated site_${id} under category [${category}]`);
}

function parseAndMutate(id) {
    const file = `concept_100/site_${id}/index.html`;
    if (!fs.existsSync(file)) {
        console.log(`File missing: ${file}, skipping.`);
        return;
    }
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
    
    const headline = $('h1').html()?.trim() || "Default Headline";
    const subheadline = $('p').first().html()?.trim() || "Default Subheadline";
    
    let btnText = `START ${tag.split('/')[0].trim() || 'NOW'}`;
    const btnEl = $('a').filter((i, el) => {
        const text = $(el).text();
        return text.includes('START') || text.includes('導入') || text.includes('無料') || text.includes('体験') || text.includes('コンタクト');
    }).first();
    if (btnEl.length > 0) btnText = btnEl.text().trim();
    
    const ctaSection = $('div.bg-gray-900, div.bg-zinc-900, main div.text-center').last();
    let ctaTitle = ctaSection.find('h2').text().trim() || $('h2').last().text().trim() || "Get Started Today";
    let ctaDesc = ctaSection.find('p').text().trim() || $('p').last().text().trim() || "Experience the future of interface design.";
    
    const blocks = [];
    
    $(`span.text-${colorTheme}-500, span.text-${colorTheme}-600, span.text-blue-600, span.text-cyan-600, span.text-emerald-600, span.text-indigo-600, span.text-rose-600, span.text-orange-600, span.text-white/50, span.text-fuchsia-500`).each((i, el) => {
        if ($(el).text() !== tag) {
            const subtitle = $(el).text().trim();
            const h2 = $(el).nextAll('h2').first();
            const title = h2.text().trim();
            if (!title) return;
            
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

// Mutate all 101 sites
console.log("Starting full bespoke portfolio overhaul...");
for (let i = 1; i <= 101; i++) {
    try {
        parseAndMutate(i);
    } catch(e) {
        console.log(`Failed mutating site_${i}:`, e.message);
    }
}
console.log("All sites completed!");
