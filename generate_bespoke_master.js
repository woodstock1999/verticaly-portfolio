const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Repeatable seeded random
function seededRandom(seed) {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

// Map tag to 4 key visual categories
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
    
    let colorHex = "#3b82f6";
    let accentColor = data.colorTheme || "blue";
    if (accentColor === "cyan" || accentColor === "sky") colorHex = "#06b6d4";
    else if (accentColor === "emerald" || accentColor === "green") colorHex = "#10b981";
    else if (accentColor === "rose" || accentColor === "pink") colorHex = "#f43f5e";
    else if (accentColor === "purple" || accentColor === "indigo") colorHex = "#a855f7";
    else if (accentColor === "orange" || accentColor === "amber") colorHex = "#f97316";
    else if (accentColor === "fuchsia") colorHex = "#d946ef";

    const hasLocalImage = fs.existsSync(path.join(folder, "img/ui.png")) || fs.existsSync(path.join(folder, "img/hero.png"));
    const localImagePath = fs.existsSync(path.join(folder, "img/hero.png")) ? "img/hero.png" : "img/ui.png";
    const imagePlaceholderHTML = hasLocalImage 
        ? `<img src="${localImagePath}" class="w-full h-full object-cover rounded-xl border border-white/10 shadow-2xl">`
        : ``;

    let html = "";

    // ----------------------------------------------------
    // CATEGORY: SAAS & WEB3 (Cyberpunk / Data Visualization)
    // ----------------------------------------------------
    if (category === 'SAAS') {
        const cssUiMockup = hasLocalImage ? imagePlaceholderHTML : `
            <div class="w-full h-full bg-[#080a10] border border-cyan-500/20 rounded-xl p-4 md:p-6 font-mono text-[10px] text-gray-500 flex flex-col gap-4 overflow-hidden relative shadow-[0_0_50px_rgba(6,182,212,0.1)]">
                <div class="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none"></div>
                <div class="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none"></div>
                
                <div class="flex justify-between items-center border-b border-white/10 pb-3 z-10">
                    <div class="flex items-center gap-2">
                        <span class="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                        <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                        <span class="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                        <span class="ml-2 text-white/40 tracking-wider text-[8px] font-bold uppercase">SECURE // ${siteTitle.replace(/\s+/g, '_')}_NODE_V3</span>
                    </div>
                    <div class="flex items-center gap-4 text-white/60">
                        <span class="bg-${accentColor}-500/10 text-${accentColor}-400 px-2 py-0.5 rounded border border-${accentColor}-500/20 animate-pulse font-bold">● ONLINE</span>
                        <span class="hidden sm:inline">RTT: 18ms</span>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 z-10">
                    <div class="bg-white/[0.01] border border-white/5 rounded-xl p-4 flex flex-col justify-between">
                        <div>
                            <div class="text-white/30 font-bold mb-1 tracking-wider">AGGREGATE VOLUME</div>
                            <div class="text-2xl font-bold text-white tracking-tight font-sans">$4,821,094.50</div>
                            <div class="text-cyan-400 text-[9px] mt-1 font-bold">+14.2% FROM PREV_CYCLE</div>
                        </div>
                        <div class="w-full h-20 mt-4 relative">
                            <svg class="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="grad-${id}" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stop-color="${colorHex}" stop-opacity="0.35"/>
                                        <stop offset="100%" stop-color="${colorHex}" stop-opacity="0.0"/>
                                    </linearGradient>
                                </defs>
                                <path d="M0,35 Q15,15 30,28 T60,10 T90,5 L100,5 L100,40 L0,40 Z" fill="url(#grad-${id})"/>
                                <path d="M0,35 Q15,15 30,28 T60,10 T90,5 L100,5" fill="none" stroke="${colorHex}" stroke-width="2" class="chart-path"/>
                                <circle cx="90" cy="5" r="2" fill="#fff" class="animate-ping" />
                            </svg>
                        </div>
                    </div>

                    <div class="bg-white/[0.01] border border-white/5 rounded-xl p-4 flex flex-col gap-2 font-mono">
                        <div class="text-white/30 font-bold mb-1">TRANSACTION LOG</div>
                        <div class="flex justify-between border-b border-white/[0.03] py-1 text-white/75">
                            <span>#8291_CONTRACT_DEPLOY</span>
                            <span class="text-green-400">SUCCESS</span>
                        </div>
                        <div class="flex justify-between border-b border-white/[0.03] py-1 text-white/75">
                            <span>AWS_EAST_GATEWAY</span>
                            <span class="text-cyan-400">SYNC_OK</span>
                        </div>
                        <div class="flex justify-between py-1 text-white/75">
                            <span>OPTIMIZE_COMPUTE_GRID</span>
                            <span class="text-white/30">PENDING</span>
                        </div>
                    </div>

                    <div class="bg-white/[0.01] border border-white/5 rounded-xl p-4 flex flex-col justify-between">
                        <div>
                            <div class="text-white/30 font-bold mb-2">SYSTEM EFFICIENCY</div>
                            <div class="flex gap-1 items-end h-10">
                                <div class="w-1.5 h-4 bg-cyan-500/30 rounded-t"></div>
                                <div class="w-1.5 h-6 bg-cyan-500/40 rounded-t"></div>
                                <div class="w-1.5 h-10 bg-cyan-500/80 rounded-t"></div>
                                <div class="w-1.5 h-12 bg-cyan-500 rounded-t shadow-[0_0_15px_rgba(6,182,212,0.6)]"></div>
                            </div>
                        </div>
                        <div class="flex items-center gap-3 border-t border-white/5 pt-3">
                            <div class="relative w-7 h-7 rounded-full border border-cyan-500/30 flex items-center justify-center">
                                <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                            </div>
                            <div>
                                <div class="text-white font-sans font-bold">NODE SECURITY</div>
                                <div class="text-[8px] text-white/30 uppercase tracking-widest">TLS 1.3 / E2EE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

        html = `<!DOCTYPE html>
<html lang="ja" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.headline.replace(/<[^>]+>/g, '')} | ${siteTitle}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=JetBrains+Mono:wght@400;700&family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Space Grotesk', 'Noto Sans JP', sans-serif;
            background-color: #030307;
            color: #8f96a3;
        }
        .code-font { font-family: 'JetBrains Mono', monospace; }
        .glass-panel {
            background: rgba(10, 12, 22, 0.7);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.04);
        }
        .glow-line {
            box-shadow: 0 0 25px ${colorHex}40;
        }
        .reveal-item { opacity: 0; transform: translateY(30px); }
        .hud-border { border: 1px solid ${colorHex}20; }
        .text-neon { color: ${colorHex}; text-shadow: 0 0 10px ${colorHex}50; }
    </style>
</head>
<body class="antialiased overflow-x-hidden selection:bg-${accentColor}-500/30">

    <!-- Cyberpunk grid lines -->
    <div class="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" style="background-image: radial-gradient(rgba(255,255,255,0.15) 1px, transparent 0); background-size: 24px 24px;"></div>
    <div class="fixed top-0 left-1/4 w-[600px] h-[600px] bg-${accentColor}-600/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

    <!-- Navigation -->
    <nav class="fixed w-full z-50 glass-panel border-b border-white/5 px-6 md:px-12 py-5 flex justify-between items-center transition-all">
        <div class="font-bold text-xl tracking-tight text-white flex items-center gap-3">
            <div class="w-3.5 h-3.5 rounded bg-${accentColor}-500 shadow-[0_0_15px_${colorHex}] animate-pulse"></div>
            <span class="tracking-widest uppercase text-sm font-black text-white/90">${siteTitle}</span>
        </div>
        <div class="hidden md:flex gap-8 text-[10px] tracking-[0.2em] font-bold text-white/40 uppercase">
            <a href="#" class="hover:text-white transition">Network</a>
            <a href="#" class="hover:text-white transition">Security</a>
            <a href="#" class="hover:text-white transition">API Docs</a>
        </div>
        <div class="flex items-center gap-4">
            <a href="../index.html" class="text-[10px] font-bold text-white/30 hover:text-white transition uppercase tracking-widest">HUB</a>
            <a href="#" class="bg-${accentColor}-600 hover:bg-${accentColor}-500 text-white px-5 py-2.5 rounded font-bold text-xs tracking-wider uppercase transition shadow-lg shadow-${accentColor}-500/20">${data.btnText}</a>
        </div>
    </nav>

    <!-- Main -->
    <main class="pt-[160px] pb-24 relative z-10">
        <div class="px-6 md:px-12 max-w-7xl mx-auto">
            <!-- Hero -->
            <div class="text-center max-w-4xl mx-auto mb-20 relative">
                <span class="bg-white/5 border border-white/10 text-${accentColor}-400 px-5 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded mb-6 inline-block">${data.tag}</span>
                <h1 class="text-4xl md:text-6xl font-extrabold mb-8 leading-[1.15] tracking-tight text-white reveal-item" style="transform: translateY(0); opacity: 1;">${data.headline}</h1>
                <p class="text-lg md:text-xl text-[#8f96a3] max-w-3xl mx-auto leading-relaxed reveal-item" style="transform: translateY(0); opacity: 1;">${data.subheadline}</p>
            </div>
            
            <!-- Hero UI/Mockup -->
            <div class="relative w-full aspect-[21/10] md:aspect-video rounded-2xl overflow-hidden glass-panel p-2 shadow-2xl glow-line border border-white/10 group mb-32 reveal-item">
                <div class="w-full h-full rounded-xl overflow-hidden bg-[#07070a]">
                    ${cssUiMockup}
                </div>
            </div>
        </div>

        <div class="px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-32 mb-32">
            ${data.blocks.map((blk, idx) => {
                const isReverse = idx % 2 === 1;
                if (blk.features) {
                    return `
                    <div class="relative reveal-item">
                        <div class="text-center mb-16 max-w-2xl mx-auto">
                            <span class="text-${accentColor}-400 font-bold tracking-widest text-xs uppercase">${blk.subtitle}</span>
                            <h2 class="text-3xl md:text-4xl font-extrabold mt-4 text-white">${blk.title}</h2>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                            ${blk.features.map(f => `
                            <div class="glass-panel p-8 rounded-xl hover:border-${accentColor}-500/30 transition duration-300 group">
                                <div class="w-10 h-10 rounded flex items-center justify-center mb-6 bg-${accentColor}-500/10 text-${accentColor}-400 border border-${accentColor}-500/20 group-hover:bg-${accentColor}-500/20 transition-all">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <h4 class="text-lg font-bold mb-3 text-white">${f.t}</h4>
                                <p class="text-sm leading-relaxed text-[#8f96a3]">${f.d}</p>
                            </div>
                            `).join('\n')}
                        </div>
                    </div>`;
                } else {
                    return `
                    <div class="flex flex-col md:flex-row items-center gap-16 ${isReverse ? 'md:flex-row-reverse' : ''} reveal-item">
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
                                    <div class="text-[36px] text-${accentColor}-400/20 font-sans font-black mb-2">${idx + 1}</div>
                                    <div class="uppercase tracking-widest font-bold text-white/30">[ PIPELINE_${idx + 1}_ESTABLISHED ]</div>
                                    <div class="mt-2 text-white/10">STABLE FLOW RATE // PACKET_SECURED</div>
                                </div>
                                `}
                            </div>
                        </div>
                    </div>`;
                }
            }).join('\n')}
        </div>

        <!-- CTA -->
        <div class="px-6 md:px-12 max-w-7xl mx-auto reveal-item">
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
        </div>
    </main>

    <footer class="py-12 text-center text-xs font-mono tracking-widest text-white/30 border-t border-white/5 bg-[#030307]">
        <p>&copy; 2026 ${siteTitle.toUpperCase()} // ALL CRYPTOGRAPHIC RIGHTS RESERVED.</p>
    </footer>

    <script>
        // Lenis Smooth Scroll
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // GSAP ScrollTrigger Fade-ins
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray('.reveal-item').forEach(item => {
            gsap.to(item, {
                opacity: 1,
                y: 0,
                duration: 1.0,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });
        });
    </script>
</body>
</html>`;
    }

    // ----------------------------------------------------
    // CATEGORY: FASHION & LUXURY (GSAP Horizontal Scroll + Canvas Particles)
    // ----------------------------------------------------
    else if (category === 'FASHION') {
        const fontImport = `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Zen+Old+Mincho:wght@400;500;700&display=swap');`;
        const isDark = id % 2 === 0;
        bgClass = isDark ? "bg-[#0b0b0b]" : "bg-[#fbfaf8]";
        textClass = isDark ? "text-stone-400" : "text-stone-600";
        const titleColor = isDark ? "text-white" : "text-stone-900";
        const borderClass = isDark ? "border-white/5" : "border-stone-200/60";
        const buttonClass = isDark ? "bg-white text-black hover:bg-stone-200" : "bg-stone-900 text-white hover:bg-stone-800";
        
        const cssUiMockup = hasLocalImage ? imagePlaceholderHTML : `
            <div class="w-full h-full flex items-center justify-center p-8 relative overflow-hidden rounded-sm" style="background-color: ${isDark ? '#141414' : '#f5f2eb'};">
                <div class="absolute inset-0 flex items-center justify-center opacity-20">
                    <div class="w-[260px] h-[260px] rounded-full border border-stone-400/40 flex items-center justify-center">
                        <div class="w-[180px] h-[180px] rounded-full border border-stone-400/30"></div>
                    </div>
                    <div class="absolute w-[400px] h-[1px] bg-stone-400/10 rotate-45"></div>
                    <div class="absolute w-[400px] h-[1px] bg-stone-400/10 -rotate-45"></div>
                </div>
                <div class="relative z-10 text-center tracking-[0.25em]">
                    <span class="block text-[8px] text-stone-400 uppercase mb-2">SPRING / SUMMER CONCEPT</span>
                    <h2 class="text-2xl md:text-4xl font-light italic font-serif" style="color: ${isDark ? '#fff' : '#1c1917'};">${siteTitle.split(' ')[0]}</h2>
                    <div class="w-10 h-[1px] bg-stone-400/20 mx-auto my-3"></div>
                    <span class="block text-[8px] text-stone-500 font-sans">01 // ZEN AESTHETIC</span>
                </div>
            </div>`;

        html = `<!DOCTYPE html>
<html lang="ja" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.headline.replace(/<[^>]+>/g, '')} | ${siteTitle}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js"></script>
    <style>
        ${fontImport}
        body {
            font-family: 'Cormorant Garamond', 'Zen Old Mincho', serif;
            background-color: ${isDark ? '#0b0b0b' : '#fbfaf8'};
        }
        .vertical-text {
            writing-mode: vertical-rl;
            text-orientation: mixed;
        }
        .scroll-container {
            display: flex;
            flex-wrap: nowrap;
            width: 300vw;
            height: 100vh;
        }
        .panel {
            width: 100vw;
            height: 100vh;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 8%;
            position: relative;
        }
        .tategaki-content {
            writing-mode: vertical-rl;
            text-orientation: mixed;
            display: inline-block;
        }
        .text-justify-custom {
            text-align: justify;
            text-justify: inter-character;
        }
        @media (max-width: 768px) {
            .scroll-container {
                display: block;
                width: 100vw;
                height: auto;
            }
            .panel {
                width: 100vw;
                height: auto;
                min-height: 80vh;
                padding: 80px 24px;
            }
        }
    </style>
</head>
<body class="${textClass} antialiased selection:bg-stone-500/10 overflow-x-hidden">

    <!-- Ambient Canvas Particle Dust -->
    <canvas id="gold-dust-canvas" class="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-[0.35]"></canvas>

    <!-- Navigation -->
    <nav class="fixed top-0 left-0 w-full z-50 ${isDark ? 'bg-[#0b0b0b]/90' : 'bg-[#fbfaf8]/90'} border-b ${borderClass} px-8 md:px-16 py-6 flex justify-between items-center backdrop-blur-md">
        <div class="text-base tracking-[0.25em] font-light ${titleColor} uppercase">
            ${siteTitle}
        </div>
        <div class="hidden md:flex gap-10 text-[9px] font-bold tracking-[0.3em] uppercase text-stone-400">
            <a href="#intro" class="hover:text-stone-900 transition">序 // INTRO</a>
            <a href="#philosophy" class="hover:text-stone-900 transition">理 // VISION</a>
            <a href="#works" class="hover:text-stone-900 transition">作 // SPEC</a>
        </div>
        <div class="flex items-center gap-6">
            <a href="../index.html" class="text-[9px] tracking-widest text-stone-400 hover:text-stone-900 transition uppercase">HUB</a>
            <a href="#" class="${buttonClass} px-6 py-2.5 text-[9px] tracking-[0.25em] uppercase transition rounded-sm">${data.btnText}</a>
        </div>
    </nav>

    <!-- Horizontal Scroll Wrapper -->
    <div class="scroll-container z-10 relative">

        <!-- Panel 1: Intro (Split Hero) -->
        <section class="panel border-r ${borderClass}" id="intro">
            <div class="flex flex-col md:flex-row items-center gap-16 w-full pt-[60px]">
                <div class="flex-1 space-y-6">
                    <span class="text-[9px] tracking-[0.3em] text-stone-400 uppercase block">${data.tag}</span>
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-light ${titleColor} leading-[1.2]">${data.headline}</h1>
                    <p class="text-base font-light leading-relaxed max-w-lg text-justify-custom">${data.subheadline}</p>
                </div>
                <div class="flex-grow w-full md:w-[45%]">
                    <div class="aspect-[4/3] rounded-sm overflow-hidden p-1 bg-stone-100 border ${borderClass}">
                        ${cssUiMockup}
                    </div>
                </div>
            </div>
        </section>

        <!-- Panel 2: Philosophy (Tategaki Japanese Text) -->
        <section class="panel border-r ${borderClass} bg-[#111111]/[0.02]" id="philosophy">
            <div class="flex flex-col md:flex-row items-center justify-between w-full">
                <div class="tategaki-content py-12">
                    <h2 class="text-3xl md:text-4xl lg:text-5xl font-light leading-loose ${titleColor}">
                        ${data.blocks[0] ? data.blocks[0].title : '極上の余白と伝統の融合。'}
                    </h2>
                    <p class="text-sm md:text-base leading-loose mt-8 font-light text-stone-400">
                        ${data.blocks[0] ? (data.blocks[0].content || data.blocks[0].features?.map(f => f.t).join(' / ')) : '沈黙の中に宿る美学を、コードで記述する。'}
                    </p>
                </div>
                <div class="hidden md:block w-72 h-[60vh] bg-stone-100 border ${borderClass} rounded-sm overflow-hidden relative p-1">
                    <div class="w-full h-full bg-cover bg-center rounded-sm" style="background-image: url('img/hero.png'); background-color: ${isDark ? '#222' : '#eee'};"></div>
                </div>
            </div>
        </section>

        <!-- Panel 3: Works & CTA -->
        <section class="panel" id="works">
            <div class="flex flex-col justify-between w-full h-full py-24">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
                    ${data.blocks.slice(1, 3).map(blk => `
                    <div class="space-y-6">
                        <span class="text-[9px] tracking-[0.25em] text-stone-400 uppercase block">${blk.subtitle}</span>
                        <h3 class="text-2xl font-light ${titleColor}">${blk.title}</h3>
                        <p class="text-sm font-light leading-relaxed text-justify-custom">${blk.content || blk.features?.map(f => f.t + ': ' + f.d).join('<br>')}</p>
                    </div>
                    `).join('\n')}
                </div>
                
                <div class="border-t ${borderClass} pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div class="text-left">
                        <h4 class="text-2xl font-light ${titleColor} mb-2">${data.ctaTitle}</h4>
                        <p class="text-xs font-light text-stone-400 max-w-md">${data.ctaDesc}</p>
                    </div>
                    <a href="#" class="${buttonClass} px-8 py-3.5 text-[9px] tracking-[0.2em] uppercase transition rounded-sm">
                        ${data.btnText}
                    </a>
                </div>
            </div>
        </section>

    </div>

    <!-- Mobile Footer -->
    <footer class="py-12 text-center text-[8px] tracking-[0.3em] text-stone-400 border-t ${borderClass} bg-${isDark ? '[#0b0b0b]' : '[#fbfaf8]'} relative z-20">
        <p>&copy; 2026 ${siteTitle.toUpperCase()} &mdash; ARCHIVE &amp; Curation.</p>
    </footer>

    <script>
        gsap.registerPlugin(ScrollTrigger);

        // Horizontal Scroll for Desktop (width > 768px)
        const container = document.querySelector(".scroll-container");
        const panels = gsap.utils.toArray(".panel");

        if (window.innerWidth > 768) {
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: ".scroll-container",
                    pin: true,
                    scrub: 1.2, // Smooth luxury momentum feel
                    snap: 1 / (panels.length - 1),
                    end: () => "+=" + container.offsetWidth
                }
            });
        }

        // Particle Dust
        class GoldDust {
            constructor(canvasId) {
                this.canvas = document.getElementById(canvasId);
                this.ctx = this.canvas.getContext('2d');
                this.particles = [];
                this.resize();
                window.addEventListener('resize', () => this.resize());
                this.initParticles();
                this.animate();
            }
            resize() {
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;
            }
            initParticles() {
                for(let i = 0; i < 40; i++) {
                    this.particles.push({
                        x: Math.random() * this.canvas.width,
                        y: Math.random() * this.canvas.height,
                        size: Math.random() * 2 + 0.3,
                        speedX: (Math.random() - 0.5) * 0.15,
                        speedY: (Math.random() - 0.5) * 0.15,
                        opacity: Math.random() * 0.4 + 0.1
                    });
                }
            }
            animate() {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.particles.forEach(p => {
                    p.x += p.speedX;
                    p.y += p.speedY;
                    if (p.x < 0) p.x = this.canvas.width;
                    if (p.x > this.canvas.width) p.x = 0;
                    if (p.y < 0) p.y = this.canvas.height;
                    if (p.y > this.canvas.height) p.y = 0;
                    this.ctx.fillStyle = 'rgba(' + (isDark ? '212, 175, 55' : '100, 95, 80') + ', ' + p.opacity + ')';
                    this.ctx.beginPath();
                    this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    this.ctx.fill();
                });
                requestAnimationFrame(() => this.animate());
            }
        }
        window.addEventListener('load', () => {
            new GoldDust('gold-dust-canvas');
        });
    </script>
</body>
</html>`;
    }

    // ----------------------------------------------------
    // CATEGORY: LOCAL, CLINIC & DR (Momentum vertical scroll + Reservation calendar UI)
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

        const cssUiMockup = hasLocalImage ? imagePlaceholderHTML : `
            <div class="w-full h-full bg-white border border-slate-100 p-4 md:p-6 text-slate-700 flex flex-col gap-4 overflow-hidden rounded-xl font-sans shadow-lg">
                <div class="flex justify-between items-center border-b border-slate-100 pb-3">
                    <div>
                        <div class="text-xs font-bold text-slate-800">${siteTitle} オンラインカレンダー</div>
                        <div class="text-[8px] text-slate-400">リアルタイムに空き状況を表示します</div>
                    </div>
                    <span class="bg-${primaryColor}-50 text-${primaryColor}-600 px-2.5 py-0.5 rounded-full text-[9px] font-bold border border-${primaryColor}-100">24H受付</span>
                </div>
                
                <div class="flex-1 flex flex-col gap-3 font-sans">
                    <div class="grid grid-cols-7 text-center text-[9px] font-bold text-slate-400 border-b border-slate-50 pb-1">
                        <span>日</span><span>月</span><span>火</span><span>水</span><span>木</span><span>金</span><span>土</span>
                    </div>
                    <div class="grid grid-cols-7 text-center text-[10px] gap-y-2">
                        <span class="text-slate-200">29</span><span class="text-slate-200">30</span>
                        <span class="font-bold text-slate-700 hover:bg-slate-100 p-1 rounded-md cursor-pointer transition">1</span>
                        <span class="font-bold text-slate-700 hover:bg-slate-100 p-1 rounded-md cursor-pointer transition">2</span>
                        <span class="font-bold text-slate-700 hover:bg-slate-100 p-1 rounded-md cursor-pointer transition">3</span>
                        <span class="font-bold text-slate-700 hover:bg-slate-100 p-1 rounded-md cursor-pointer transition">4</span>
                        <span class="font-bold text-slate-700 hover:bg-slate-100 p-1 rounded-md cursor-pointer transition">5</span>
                        
                        <span class="font-bold text-slate-700 hover:bg-slate-100 p-1 rounded-md cursor-pointer transition">6</span>
                        <span class="font-bold text-slate-700 hover:bg-slate-100 p-1 rounded-md cursor-pointer transition">7</span>
                        <span class="font-bold text-white bg-${primaryColor}-500 p-1 rounded-md shadow-md shadow-${primaryColor}-500/20 scale-105">8</span>
                        <span class="font-bold text-slate-700 hover:bg-slate-100 p-1 rounded-md cursor-pointer transition">9</span>
                        <span class="font-bold text-slate-700 hover:bg-slate-100 p-1 rounded-md cursor-pointer transition">10</span>
                        <span class="font-bold text-slate-700 hover:bg-slate-100 p-1 rounded-md cursor-pointer transition">11</span>
                        <span class="font-bold text-slate-700 hover:bg-slate-100 p-1 rounded-md cursor-pointer transition">12</span>
                    </div>
                    
                    <div class="border-t border-slate-100 pt-3 flex flex-col gap-1.5">
                        <div class="text-[9px] font-bold text-slate-400">ご希望の時間枠をお選びください</div>
                        <div class="flex gap-2">
                            <span class="flex-1 bg-${primaryColor}-50 hover:bg-${primaryColor}-100 text-${primaryColor}-700 text-center py-2 rounded-lg font-bold text-[9px] border border-${primaryColor}-200/50 cursor-pointer transition">10:00 [◎]</span>
                            <span class="flex-1 bg-${primaryColor}-50 hover:bg-${primaryColor}-100 text-${primaryColor}-700 text-center py-2 rounded-lg font-bold text-[9px] border border-${primaryColor}-200/50 cursor-pointer transition">14:30 [○]</span>
                            <span class="flex-1 bg-slate-50 text-slate-400 text-center py-2 rounded-lg font-bold text-[9px] border border-slate-100 line-through">18:00 [×]</span>
                        </div>
                    </div>
                </div>
            </div>`;

        html = `<!DOCTYPE html>
<html lang="ja" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.headline.replace(/<[^>]+>/g, '')} | ${siteTitle}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js"></script>
    <style>
        ${fontImport}
        body {
            font-family: 'Noto Sans JP', 'Outfit', sans-serif;
            background-color: #fafbfc;
            color: #475569;
        }
        .main-gradient {
            background: linear-gradient(135deg, ${mainColorHex} 0%, ${mainColorHex}dd 100%);
        }
        .shadow-trust {
            box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.04);
        }
        .reveal-item { opacity: 0; transform: translateY(30px); }
    </style>
</head>
<body class="antialiased selection:bg-${primaryColor}-500/20 text-slate-600">

    <!-- Navigation -->
    <nav class="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 md:px-12 py-5 flex justify-between items-center shadow-sm">
        <div class="font-extrabold text-lg md:text-xl text-slate-800 flex items-center gap-2">
            <span class="w-2.5 h-6 rounded bg-${primaryColor}-500 block"></span>
            <span>${siteTitle}</span>
        </div>
        <div class="hidden md:flex gap-8 text-xs font-bold text-slate-500 tracking-wider">
            <a href="#about" class="hover:text-${primaryColor}-600 transition">特長と強み</a>
            <a href="#details" class="hover:text-${primaryColor}-600 transition">サービス概要</a>
            <a href="#cta" class="hover:text-${primaryColor}-600 transition">ご相談・お問合せ</a>
        </div>
        <div class="flex items-center gap-4">
            <a href="../index.html" class="text-[10px] font-bold text-slate-400 hover:text-slate-800 transition uppercase tracking-widest">HUB</a>
            <a href="#cta" class="bg-${primaryColor}-500 hover:bg-${primaryColor}-600 text-white px-5 py-2.5 rounded-lg font-bold text-xs tracking-wider transition shadow-md shadow-${primaryColor}-500/20">${data.btnText}</a>
        </div>
    </nav>

    <main class="pt-[140px] pb-24 relative z-10">
        <!-- Hero -->
        <div class="px-6 md:px-12 max-w-7xl mx-auto" id="about">
            <div class="flex flex-col lg:flex-row items-center gap-16 mb-24">
                <div class="flex-1 space-y-6">
                    <span class="text-${primaryColor}-600 font-extrabold tracking-widest text-xs uppercase bg-${primaryColor}-50 px-3.5 py-1.5 rounded-full inline-block border border-${primaryColor}-100">${data.tag}</span>
                    <h1 class="text-4xl md:text-5xl font-black mb-8 leading-[1.25] text-slate-800 reveal-item" style="transform: translateY(0); opacity: 1;">${data.headline}</h1>
                    <p class="text-base md:text-lg text-slate-500 font-medium leading-relaxed reveal-item" style="transform: translateY(0); opacity: 1;">${data.subheadline}</p>
                </div>
                <div class="flex-grow w-full md:w-[45%] reveal-item">
                    <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-trust border border-slate-100 p-2 bg-white">
                        <div class="w-full h-full rounded-xl overflow-hidden bg-slate-50">
                            ${cssUiMockup}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Details -->
        <div class="px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-28 mb-32" id="details">
            ${data.blocks.map((blk, idx) => {
                const isReverse = idx % 2 === 1;
                if (blk.features) {
                    return `
                    <div class="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-trust relative reveal-item">
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
                    return `
                    <div class="flex flex-col md:flex-row items-center gap-16 ${isReverse ? 'md:flex-row-reverse' : ''} reveal-item">
                        <div class="flex-grow space-y-5">
                            <span class="text-${primaryColor}-500 font-extrabold tracking-widest text-xs uppercase block">${blk.subtitle}</span>
                            <h2 class="text-2xl md:text-3xl font-black text-slate-800 leading-tight">${blk.title}</h2>
                            <p class="text-base leading-relaxed text-slate-500 font-light">${blk.content}</p>
                        </div>
                        <div class="flex-grow w-full md:w-[45%] aspect-video rounded-2xl overflow-hidden shadow-trust bg-white p-2 border border-slate-100 group">
                            <div class="w-full h-full rounded-xl bg-slate-50 overflow-hidden flex items-center justify-center p-6 border border-slate-100/50 relative">
                                ${hasLocalImage ? imagePlaceholderHTML : `
                                <div class="text-center">
                                    <span class="bg-${primaryColor}-50 text-${primaryColor}-600 px-3.5 py-1 text-[9px] font-bold rounded-full tracking-wider uppercase inline-block mb-3 border border-${primaryColor}-100">INFORMATION 0${idx + 1}</span>
                                    <p class="text-xs text-slate-400 font-medium">信頼性に配慮したグラフィックス</p>
                                </div>
                                `}
                            </div>
                        </div>
                    </div>`;
                }
            }).join('\n')}
        </div>

        <!-- CTA -->
        <div class="px-6 md:px-12 max-w-7xl mx-auto reveal-item" id="cta">
            <div class="bg-white border border-slate-100 rounded-3xl p-12 md:p-20 shadow-trust relative overflow-hidden text-center">
                <div class="absolute -top-32 -right-32 w-80 h-80 bg-${primaryColor}-500/5 rounded-full blur-[80px]"></div>
                <div class="relative z-10 max-w-2xl mx-auto space-y-6">
                    <h2 class="text-2xl md:text-4xl font-black text-slate-800">${data.ctaTitle}</h2>
                    <p class="text-sm text-slate-500 leading-relaxed max-w-lg mx-auto">${data.ctaDesc}</p>
                    <div class="pt-4">
                        <a href="#" class="bg-${primaryColor}-500 hover:bg-${primaryColor}-600 text-white px-10 py-3.5 rounded-lg font-bold text-sm tracking-wider transition shadow-md shadow-${primaryColor}-500/25 inline-block">
                            ${data.btnText}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer class="py-12 text-center text-xs tracking-wider text-slate-400 border-t border-slate-100 bg-white">
        <p>&copy; 2026 ${siteTitle}. ALL RIGHTS RESERVED.</p>
    </footer>

    <script>
        // Lenis Smooth Scroll
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray('.reveal-item').forEach(item => {
            gsap.to(item, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });
        });
    </script>
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

        const cssUiMockup = hasLocalImage ? imagePlaceholderHTML : `
            <div class="w-full h-full bg-black border-2 border-black p-4 md:p-6 text-white flex flex-col gap-4 overflow-hidden relative font-mono text-[9px] rounded-sm shadow-[4px_4px_0px_#000]">
                <div class="absolute inset-0 pointer-events-none opacity-[0.1]" style="background-image: radial-gradient(rgba(255,255,255,0.15) 1px, transparent 0); background-size: 16px 16px;"></div>
                
                <div class="flex justify-between items-center bg-zinc-900 border border-zinc-700/60 p-2 rounded">
                    <div class="flex items-center gap-2">
                        <span class="w-2.5 h-2.5 rounded-full bg-${acidColor}-500 shadow-[0_0_10px_${acidHex}] animate-ping"></span>
                        <span class="text-white font-bold tracking-widest text-[8px] uppercase">[ EXP_SYSTEM_PROT ]</span>
                    </div>
                    <span class="text-${acidColor}-400">● ACTIVATE</span>
                </div>
                
                <div class="flex-1 bg-zinc-950 border border-zinc-800 p-3 rounded flex flex-col justify-between font-mono">
                    <div class="space-y-1">
                        <div class="text-zinc-500">> RESOLVING GRAPHICS MATRIX...</div>
                        <div class="text-zinc-500">> RENDER_TARGET_INITIALIZED</div>
                        <div class="text-${acidColor}-300">> META_LOAD: site_${id} // OK</div>
                    </div>
                    <div class="flex justify-between items-end border-t border-zinc-900 pt-2 mt-4">
                        <div class="flex gap-1 items-end">
                            <div class="w-1.5 h-2 bg-zinc-800"></div>
                            <div class="w-1.5 h-6 bg-${acidColor}-400"></div>
                            <div class="w-1.5 h-4 bg-${acidColor}-500"></div>
                        </div>
                        <div class="text-right">
                            <div class="text-white font-black text-xs font-sans tracking-wide">STATE: ACTIVE</div>
                            <div class="text-[7px] text-zinc-500">0x8C5E</div>
                        </div>
                    </div>
                </div>
            </div>`;

        html = `<!DOCTYPE html>
<html lang="ja" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.headline.replace(/<[^>]+>/g, '')} | ${siteTitle}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js"></script>
    <style>
        ${fontImport}
        body {
            font-family: 'Outfit', 'Dela Gothic One', sans-serif;
            background-color: #050505;
        }
        .brutal-card {
            border: 3px solid #000000;
            box-shadow: 6px 6px 0px 0px #000000;
            background-color: #0d0d0d;
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
        .marquee-wrapper {
            overflow: hidden;
            white-space: nowrap;
            display: flex;
            background-color: ${acidHex};
            border-top: 3px solid #000;
            border-bottom: 3px solid #000;
        }
        .marquee-content {
            display: inline-block;
            animation: marquee 20s linear infinite;
            padding: 10px 0;
            font-weight: 900;
            color: #000;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }
        @keyframes marquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
        }
        .reveal-item { opacity: 0; transform: scale(0.95) translateY(20px); }
    </style>
</head>
<body class="text-zinc-400 min-h-screen antialiased overflow-x-hidden selection:bg-${acidColor}-500 selection:text-black">

    <!-- Grid background -->
    <div class="fixed inset-0 pointer-events-none z-0 opacity-[0.08]" style="background-image: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 0); background-size: 20px 20px;"></div>

    <!-- Navigation -->
    <nav class="fixed w-full z-50 bg-black border-b-3 border-black px-6 md:px-12 py-5 flex justify-between items-center shadow-[0_4px_0_#000]">
        <div class="font-extrabold text-xl tracking-tight text-white flex items-center gap-2">
            <span class="w-4 h-4 bg-${acidColor}-500 rounded-full border border-black shadow-[0_0_10px_${acidHex}] animate-pulse"></span>
            <span class="tracking-wide uppercase text-sm font-black text-white">${siteTitle}</span>
        </div>
        <div class="hidden md:flex gap-8 text-[10px] font-black tracking-widest uppercase text-white/40">
            <a href="#" class="hover:text-white transition">Prototype</a>
            <a href="#" class="hover:text-white transition">Lab_Mode</a>
        </div>
        <div class="flex items-center gap-4">
            <a href="../index.html" class="text-[9px] font-black text-white/30 hover:text-white transition uppercase tracking-widest">HUB</a>
            <a href="#" class="bg-${acidColor}-500 hover:bg-${acidColor}-400 text-black border-2 border-black px-5 py-2 rounded font-black text-xs tracking-wide uppercase transition brutal-button">${data.btnText}</a>
        </div>
    </nav>

    <!-- Main -->
    <main class="pt-[140px] pb-24 relative z-10">
        <div class="px-6 md:px-12 max-w-7xl mx-auto">
            <!-- Hero -->
            <div class="text-center max-w-4xl mx-auto mb-20">
                <span class="bg-${acidColor}-500 text-black border-2 border-black px-5 py-1.5 text-[9px] font-black tracking-widest uppercase rounded-full inline-block shadow-[2px_2px_0px_#000] mb-8">${data.tag}</span>
                <h1 class="text-4xl md:text-7xl font-black mb-8 leading-[1.15] text-white uppercase italic tracking-tight reveal-item" style="transform: none; opacity: 1;">${data.headline}</h1>
                <p class="text-base md:text-lg text-zinc-400 font-medium leading-relaxed max-w-3xl mx-auto reveal-item" style="transform: none; opacity: 1;">${data.subheadline}</p>
            </div>
            
            <!-- Hero UI/Mockup -->
            <div class="relative w-full aspect-[21/10] md:aspect-video rounded-lg overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_${acidHex}] bg-zinc-950 group mb-32 reveal-item">
                <div class="w-full h-full">
                    ${cssUiMockup}
                </div>
            </div>
        </div>

        <!-- Marquee Banner -->
        <div class="marquee-wrapper mb-32">
            <div class="marquee-content">
                &nbsp;&nbsp;●&nbsp;&nbsp;${siteTitle}&nbsp;&nbsp;●&nbsp;&nbsp;KINETIC_FLOW_ESTABLISHED&nbsp;&nbsp;●&nbsp;&nbsp;SYSTEM_ONLINE&nbsp;&nbsp;●&nbsp;&nbsp;PROTOTYPE_STABLE&nbsp;&nbsp;●&nbsp;&nbsp;${siteTitle}&nbsp;&nbsp;●&nbsp;&nbsp;KINETIC_FLOW_ESTABLISHED&nbsp;&nbsp;●&nbsp;&nbsp;SYSTEM_ONLINE&nbsp;&nbsp;●&nbsp;&nbsp;PROTOTYPE_STABLE
            </div>
            <div class="marquee-content">
                &nbsp;&nbsp;●&nbsp;&nbsp;${siteTitle}&nbsp;&nbsp;●&nbsp;&nbsp;KINETIC_FLOW_ESTABLISHED&nbsp;&nbsp;●&nbsp;&nbsp;SYSTEM_ONLINE&nbsp;&nbsp;●&nbsp;&nbsp;PROTOTYPE_STABLE&nbsp;&nbsp;●&nbsp;&nbsp;${siteTitle}&nbsp;&nbsp;●&nbsp;&nbsp;KINETIC_FLOW_ESTABLISHED&nbsp;&nbsp;●&nbsp;&nbsp;SYSTEM_ONLINE&nbsp;&nbsp;●&nbsp;&nbsp;PROTOTYPE_STABLE
            </div>
        </div>

        <div class="px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-32 mb-32">
            ${data.blocks.map((blk, idx) => {
                const isReverse = idx % 2 === 1;
                if (blk.features) {
                    return `
                    <div class="relative reveal-item">
                        <div class="text-center mb-16 max-w-2xl mx-auto">
                            <span class="text-${acidColor}-400 font-black tracking-widest text-xs uppercase block">${blk.subtitle}</span>
                            <h2 class="text-3xl md:text-5xl font-black mt-4 text-white uppercase italic">${blk.title}</h2>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                            ${blk.features.map(f => `
                            <div class="brutal-card p-8 rounded-lg hover:translate-y-[-4px] hover:translate-x-[-2px] transition duration-200">
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
                    return `
                    <div class="flex flex-col md:flex-row items-center gap-16 ${isReverse ? 'md:flex-row-reverse' : ''} reveal-item">
                        <div class="flex-grow space-y-6">
                            <span class="text-${acidColor}-400 font-black tracking-widest text-xs uppercase block">${blk.subtitle}</span>
                            <h2 class="text-3xl md:text-4xl font-black text-white leading-tight uppercase italic">${blk.title}</h2>
                            <div class="w-16 h-1 bg-${acidColor}-500 border-2 border-black"></div>
                            <p class="text-sm leading-relaxed text-zinc-400 font-light">${blk.content}</p>
                        </div>
                        <div class="flex-grow w-full md:w-[45%] aspect-video rounded-lg overflow-hidden border-3 border-black shadow-[5px_5px_0_#000] bg-zinc-950 p-1">
                            <div class="w-full h-full rounded-sm bg-zinc-950 overflow-hidden flex items-center justify-center p-6 relative">
                                ${hasLocalImage ? imagePlaceholderHTML : `
                                <div class="absolute inset-0 bg-gradient-to-br from-${acidColor}-500/5 to-transparent pointer-events-none"></div>
                                <div class="text-center font-mono text-[9px] text-zinc-600">
                                    <div class="text-4xl font-black text-${acidColor}-400 mb-2">${idx + 1}</div>
                                    <div class="uppercase tracking-widest font-black">[ PROTOCOL_ENGAGED ]</div>
                                    <div class="mt-2">STABLE SYSTEM GRID INITIALIZED</div>
                                </div>
                                `}
                            </div>
                        </div>
                    </div>`;
                }
            }).join('\n')}
        </div>

        <!-- CTA -->
        <div class="px-6 md:px-12 max-w-7xl mx-auto reveal-item">
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
        </div>
    </main>

    <!-- Footer -->
    <footer class="py-12 text-center text-[10px] font-black tracking-widest text-zinc-600 border-t-3 border-black bg-black">
        <p>&copy; 2026 ${siteTitle.toUpperCase()} &mdash; PROTOCOL // 0x2A9C.</p>
    </footer>

    <script>
        // Lenis Smooth Scroll
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // GSAP ScrollTrigger Scale/Fade-ins
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray('.reveal-item').forEach(item => {
            gsap.to(item, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.8,
                ease: 'back.out(1.4)',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });
        });
    </script>
</body>
</html>`;
    }

    fs.writeFileSync(file, html);
    console.log(`[Bespoke Master] Generated site_${id} under category [${category}]`);
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

// Rebuild all 101 sites using GSAP/Lenis/Canvas animations
console.log("Initializing Master Bespoke portfolio overhaul...");
for (let i = 1; i <= 101; i++) {
    try {
        parseAndMutate(i);
    } catch(e) {
        console.log(`Failed mutating site_${i}:`, e.message);
    }
}
console.log("All bespoke master sites completed successfully!");
