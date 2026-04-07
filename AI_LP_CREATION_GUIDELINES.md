# AI Agent LP Creation Guidelines & Templates

このドキュメントは、本ポートフォリオ（Verticaly Portfolio）において「圧倒的に高品質で近未来的なランディングページ（LP）」を自動・半自動で量産するために、Claude Codeやその他のAIエージェントに読み込ませるための**システムプロンプト・設計ガイドライン**です。

---

## 🛑 1. Core Philosophy (絶対の前提条件)

AIエージェントにLPの生成を依頼する際、最も陥りやすい罠が「未来＝サイバーパンク・ネオン・ネオン管」という短絡的なデザインの暴走です。これを防ぐために、AIには以下の思考を強制させてください。

*   **Cyberpunkの無思考な乱用禁止**: レーザー光線やマトリックスのようなコードの雨は禁止。
*   **Spatial UI（Apple Vision Pro等）の採用**: グラスモーフィズム（すりガラス）、極限のミニマリズム、滑らかなアニメーション、美しく大胆な余白をベースにする。
*   **業界別の「リアルな2027年」の予測**:
    *   `SaaS`なら、極端にノイズを減らしたパールホワイト＋薄いシャドウ＋美しいBentoカード。
    *   `不動産`や`ラグジュアリー`なら、深い黒（#0a0a0a）に極細のセリフ体字、暖かみのあるライティング画像。
    *   `アパレル`なら、巨大なタイポグラフィと大画面のフォトグラフィを配置したエディトリアル（雑誌風）デザイン。

---

## 🤖 2. Claude Code等へそのままコピペするPrompt Template

```markdown
あなたは世界最高峰のフロントエンドエンジニア兼UI/UXデザイナーです。
指定された業界の「2027〜2028年のモダンデザイン（Spatial UI、極限のミニマリズム）」をコンセプトにした、1枚ペラのHTMLランディングページ（LP）を作成してください。

【厳守する技術スタック】
- HTML1ファイルのみで完結させること（CSS/JSは直接ファイル内に記述）
- Tailwind CSSを利用すること（`<script src="https://cdn.tailwindcss.com"></script>` をheadに入れる）
- アニメーションやスクロール演出には GSAP を適宜使用すること（必要であれば）

【デザインの絶対ルール】
1. 「安易なサイバーパンク、ネオンカラー、SF映画風」のアプローチは絶対に禁止。
2. 背景には、Unsplashなどの超高品質な画像URLや、Mixkitのシームレスな動画URLをフルスクリーンで敷き、その上に `backdrop-blur-md`（グラスモーフィズム）のパネルを置くこと。
3. AppleやStripeを彷彿とさせる「Bento Grid（角丸の洗練されたカードを敷き詰めるレイアウト）」や、洗練された「余白」を多用すること。
4. Google Fontsから、テーマに合ったモダンなフォント（Inter, Outfit, Playfair Display等）を必ずインポートして適用すること。

【今回の作成テーマ】
業界: [ここに「ヘルスケア」「高級車」「ホテル」などを入力]
ターゲットURL: https://image.unsplash.com/photo-[関連する美しい画像のID]?w=1600&q=80
```

---

## 📐 3. Template Blueprints（すぐに使い回せるコードの型）

### A. Spatial UI (グラスモーフィズム & Bento Grid) テンプレート
背景に巨大な写真/動画を置き、その上にすりガラスのパネルを配置する最も現代的で美しい型です（例: 化粧品LP, 旅行LP）。

```html
<!-- Body & Background -->
<body class="relative w-screen h-screen overflow-hidden font-sans bg-black">
    <div class="absolute inset-0 z-0">
        <!-- 圧倒的に美しい高画質背景 -->
        <img src="[背景画像URL]" class="w-full h-full object-cover opacity-80" />
    </div>

    <!-- Glassmorphism Panel -->
    <div class="absolute inset-0 z-10 flex flex-col items-center justify-center p-6">
        <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-12 max-w-4xl text-center shadow-2xl text-white">
            <h1 class="text-6xl font-semibold tracking-tight mb-4">The Future Form</h1>
            <p class="text-lg font-light text-white/80">洗練の極致、テクノロジーを感じさせない体験。</p>
        </div>
    </div>
</body>
```

### B. Neo-Japonism (余白と和魂洋才) テンプレート
高級感を出したい場合や、クリエイティブスタジオのポートフォリオに使用する型です（例: TAKUMI LP）。

```html
<style>
    .tategaki { writing-mode: vertical-rl; text-orientation: upright; font-family: 'Shippori Mincho', serif; }
</style>
<body class="bg-[#111] text-[#e0dacc]">
    <div class="h-screen flex items-center justify-center">
        <!-- 縦書きと巨大な画像 -->
        <div class="w-1/2 h-4/5">
            <img src="[和紙や金箔の美しいテクスチャ画像]" class="w-full h-full object-cover grayscale mix-blend-screen opacity-70">
        </div>
        <div class="tategaki text-4xl tracking-[1em] ml-12">
            テクノロジーの、<br>その奥へ。
        </div>
    </div>
</body>
```

### C. Hyper-Minimal SaaS Dashboard テンプレート
背景を白や明るいグレーにし、わずかなドロップシャドウで情報を浮き上がらせる型です（例: BLOOM HR）。

```html
<body class="bg-[#f8f9fa] text-slate-800 p-10 font-sans">
    <header class="mb-10 flex justify-between items-center">
        <h1 class="text-2xl font-bold">Insights Hub</h1>
    </header>
    <div class="grid grid-cols-3 gap-6">
        <!-- Bento Cards -->
        <div class="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-slate-100">
            <div class="text-sm font-medium text-slate-400 mb-2">Total Revenue</div>
            <div class="text-3xl font-bold">$2.4M</div>
        </div>
    </div>
</body>
```

---

## 🚀 今後の展開方法
Claude Codeや Cursor、その他のAIエージェントのディレクトリターミナルで本ドキュメントを読み込ませ、**「LP_CREATION_GUIDELINES.md の 【今回の作成テーマ】に従って、〇〇業界のLPを `<folder_name>/index.html` に生成して」** と指示するだけで、デザインの一貫性を保ったまま量産が可能になります。
