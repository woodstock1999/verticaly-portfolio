const fs = require('fs');

const data = {
  colorTheme: "gray",
  tag: "AI / DESIGN AGENT",
  headline: "「アイデア」から「実装」まで、<br>光の速さで到達する。",
  subheadline: "デザイナーを探し、コーダーを雇い、数ヶ月待つ時代は終わりました。TAKUMI-COREは、あなたのビジネスプランを理解し、一瞬でプロフェッショナルなLPとシステムを構築する自律型AIデザインエージェントです。",
  btnText: "AIにプロジェクトを依頼",
  ctaTitle: "101のビジネスを、数時間で生み出す。",
  ctaDesc: "このポートフォリオHUB全体が、その圧倒的なスピードと品質の証明です。あなたの頭の中にある構想を、今すぐ現実のコードへと変換しましょう。",
  blocks: [
      {
          title: "「外注」という名の、終わらない伝言ゲーム",
          subtitle: "THE COMMUNICATION LAG",
          content: "「少しイメージと違う」「ここを直すのにまた1週間かかる」。人間のクリエイターチームを束ねることは、膨大なコミュニケーションコストと妥協の連続です。ビジネスの検証スピードは、その遅さに耐えられません。"
      },
      {
          title: "ペルソナ理解からコーディングまで全自動",
          subtitle: "AUTONOMOUS WORKFLOW",
          features: [
              { t: "コンテキストの深い理解", d: "ただ指示通りに作るだけではありません。「このB2B SaaSなら、決済者であるCFOに刺さるコピーが必要だ」とAIが自律的に判断し、最適な構成を逆提案します。" },
              { t: "ネオ・ジャポニズム・デザイン", d: "ダークモードを基調とし、高いコントラストと美しい余白を計算し尽くした、絶対に「安っぽくならない」プロフェッショナルなUIを瞬時に生成します。" },
              { t: "クリーンな本番用コード出力", d: "Tailwind CSS等のモダンなフレームワークを用い、そのままAWSやVercelにデプロイ可能な、バグのない美しいソースコードを吐き出します。" }
          ]
      },
      {
          title: "無限のABテストと高速ピボット",
          subtitle: "SPEED OF LIGHT",
          content: "「ターゲットを20代女性から40代男性に変えたい」。人間のデザイナーならため息をつくような根本的なやり直しも、AIなら文句一つ言わず、数秒でデザインとコピーを全て作り変えます。"
      },
      {
          title: "UIだけではない「体験」の設計",
          subtitle: "UX ENGINEERING",
          content: "スクロール時の滑らかなアニメーション、ボタンにカーソルを合わせた時のマイクロインタラクション。静的な絵ではなく、ユーザーの感情を動かす「動的な体験」そのものをコードとして実装します。"
      },
      {
          title: "Case Study | 100のビジネスアイデア検証",
          subtitle: "PROJECT VERTICALY",
          content: "ある起業家の「100個のバーティカルSaaSのアイデアを可視化したい」という途方もない依頼。人間のチームであれば数年と数千万円がかかるプロジェクトを、TAKUMI-COREは自律的に稼働し、統一された圧倒的なクオリティで数時間のうちに完遂しました。"
      },
      {
          title: "「創る」ことの民主化",
          subtitle: "OUR VISION",
          content: "資本力や技術力がない起業家でも、素晴らしいアイデアさえあれば世界を変えられる。私たちは、人間の創造力を阻むすべての壁を打ち壊す、最強の武器を提供します。"
      }
  ]
};

const buildH3Feature = (f, colorTheme) => `
<div class="bg-zinc-900 border md:border-transparent border-gray-800 shadow-xl p-8 rounded-3xl transition transform hover:-translate-y-2 duration-300">
    <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white/10 text-white border border-white/20">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <h4 class="text-xl font-bold mb-3 text-white">${f.t}</h4>
    <p class="text-gray-400 text-sm leading-relaxed">${f.d}</p>
</div>
`;

const file = `concept_100/site_101/index.html`;
try {
    let html = fs.readFileSync(file, 'utf-8');
    let newMain = `
<main class="pt-[140px] pb-24 px-6 md:px-12 max-w-7xl mx-auto">
    <div class="text-center max-w-4xl mx-auto mb-20 relative">
        <span class="bg-white/5 text-white border border-white/10 px-5 py-2 text-xs font-black rounded-full tracking-widest mb-8 inline-block shadow-sm uppercase">${data.tag}</span>
        <h1 class="text-4xl md:text-[54px] font-black mb-8 leading-[1.2] tracking-tight text-white">${data.headline}</h1>
        <p class="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto">${data.subheadline}</p>
    </div>

    <div class="relative w-full aspect-[21/9] md:aspect-video rounded-[32px] overflow-hidden shadow-2xl mb-32 border border-white/10 group bg-zinc-900">
        <div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-8 border border-white/10 rounded-[32px] z-10 pointer-events-none">
            <div class="text-center">
               <div class="w-24 h-24 mx-auto border-4 border-gray-500/50 rounded-full border-t-white animate-spin mb-8"></div>
               <h3 class="text-3xl font-black text-white tracking-widest uppercase mb-4 opacity-80">UI SYSTEM ONLINE</h3>
               <p class="text-gray-400 font-mono text-sm">[ PROTOTYPE CONCEPT RENDER ]</p>
            </div>
        </div>
    </div>

    <div class="flex flex-col gap-32 mb-32">
    `;
    
    data.blocks.forEach((blk, idx) => {
        const isReverse = idx % 2 === 1;
        if (blk.features) {
            newMain += `
            <div class="mt-10">
                <div class="text-center mb-16">
                    <span class="text-white/50 font-bold tracking-widest text-sm uppercase">${blk.subtitle}</span>
                    <h2 class="text-3xl md:text-4xl font-black mt-4 text-white">${blk.title}</h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    ${blk.features.map(f => buildH3Feature(f, data.colorTheme)).join('\n')}
                </div>
            </div>
            `;
        } else {
            newMain += `
            <div class="flex flex-col md:flex-row items-center gap-16 ${isReverse ? 'md:flex-row-reverse' : ''}">
                <div class="flex-1 space-y-6">
                    <span class="text-white/50 font-bold tracking-widest text-sm uppercase">${blk.subtitle}</span>
                    <h2 class="text-3xl md:text-4xl font-black text-white leading-tight">${blk.title}</h2>
                    <div class="w-12 h-1 bg-white/30 rounded"></div>
                    <p class="text-lg text-gray-400 leading-relaxed font-light">${blk.content}</p>
                </div>
                <div class="flex-1 relative aspect-square md:aspect-[4/3] rounded-[32px] overflow-hidden bg-zinc-900 border border-white/10 group">
                    <img src="img/ui.png" class="w-full h-full object-cover opacity-50 grayscale sepia blur-[2px] transition-all duration-700 group-hover:blur-none group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105" style="object-position: ${isReverse ? 'bottom right' : 'top left'};" onerror="this.src='https://picsum.photos/seed/placeholder/800/600'">
                    <div class="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent"></div>
                </div>
            </div>
            `;
        }
    });
    
    newMain += `
    </div>

    <div class="text-center bg-[#050505] border border-white/5 rounded-[3rem] p-16 md:p-32 relative overflow-hidden group shadow-2xl">
        <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        <div class="relative z-10">
            <h2 class="text-4xl md:text-5xl font-black mb-8 text-white">${data.ctaTitle}</h2>
            <p class="text-gray-400 mb-12 max-w-xl mx-auto text-lg leading-relaxed">${data.ctaDesc}</p>
            <a href="../index.html" class="bg-white hover:bg-gray-200 text-black px-12 py-5 rounded-full font-bold text-lg inline-flex items-center gap-3 transition transform hover:-translate-y-1 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                PORTFOLIOに戻る
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            </a>
        </div>
    </div>
</main>
    `;
    
    if (html.includes('<main')) {
        html = html.replace(/<main[\s\S]*?<\/main>/, newMain);
    } else {
        html = html.replace(/<body([^>]*)>([\s\S]*?)<\/body>/, `<body class="bg-black text-gray-400 min-h-screen font-sans antialiased overflow-x-hidden">\n${newMain}\n</body>`);
    }
    
    fs.writeFileSync(file, html);
    console.log(`Updated site_101`);
} catch(e) {
    console.log(`Failed site_101`, e);
}
