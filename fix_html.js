const fs = require('fs');

const sitesData = {
  1: { colorTheme: "gray", tag: "CONSULTING / AI STRATEGY", headline: "「正解」のない経営課題に、<br>数十億通りのシミュレーションを。", subheadline: "経営者の孤独な決断を、圧倒的なデータで支える。STRATEGY-Xは、マクロ経済、地政学リスク、そして自社の財務データを統合し、「もしあの企業を買収したらどうなるか」を数秒で予測する経営陣向けのAIコパイロットです。", btnText: "経営シミュレーションを試す", ctaTitle: "直感を、確信へと変える。", ctaDesc: "失敗が許されない数億円の意思決定。そこに、世界で最も賢い参謀を同席させましょう。", blocks: [
      { title: "「過去のデータ」しか見ないコンサルティングの限界", subtitle: "THE REARVIEW MIRROR", content: "従来の戦略コンサルタントが提示する分厚いレポートは、完成した瞬間から古くなります。変化の激しい現代において、「過去の成功事例」や「静的なエクセルモデル」に依存した意思決定は、企業を致命的な方向違いへと導くリスクを孕んでいます。" },
      { title: "未来のシナリオを「分岐」させるAI", subtitle: "SCENARIO ENGINE", features: [ { t: "動的M&Aシミュレーション", d: "「A社を買収した場合の3年後のシェアと、それに伴う競合B社の価格改定リスク」。複雑に絡み合う市場の変数をAIが計算し、最も勝率の高いシナリオと撤退ラインを明示します。" }, { t: "サプライチェーンのストレステスト", d: "「台湾有事が起きた場合」「特定のスエズ運河が封鎖された場合」。地政学的なブラック・スワン（予測不能な事態）が自社の売上にどう直結するかをリアルタイムにストレステストします。" }, { t: "AI取締役会（ボードメンバー）機能", d: "提案に対する「強烈な批判者（レッドチーム）」の役割をAIに担わせる機能。「その事業計画は、為替が10%円高に振れた瞬間に破綻します」といった容赦ない壁打ち相手として機能します。" } ] },
      { title: "全社データを統合する「経営のダッシュボード」", subtitle: "EXECUTIVE VIEW", content: "財務、人事、営業、マーケティング。社内のあらゆるSaaSからAPIでリアルタイムにデータを吸い上げ、社長が「今、会社のどこから血が流れているか（ボトルネック）」を1枚の美しいグラフィックボードで直感的に把握できるようにします。" },
      { title: "「撤退」という最も難しい決断の自動化", subtitle: "EXIT STRATEGY", content: "新規事業を立ち上げるよりも、赤字事業から撤退する方が精神的ハードルが高く、経営者はサンクコスト（埋没費用）に縛られます。「この事業の黒字化確率は現在12%です。今四半期での売却を強く推奨します」と、AIが感情を排した冷徹な決断を後押しします。" },
      { title: "Case Study | 東証プライム上場の消費財メーカー", subtitle: "STRATEGIC PIVOT", content: "新興国への大型投資を検討していたが、社内の意見が割れて1年間足踏みしていた企業。STRATEGY-Xでのシミュレーションにより、現地の法改正リスクと競合の参入確率を加味した結果、「直接投資ではなく、現地のローカル企業とのジョイント・ベンチャーが最適解」というレポートを10分で出力。迅速な意思決定と市場シェアの獲得に成功しました。" },
      { title: "経営は、もっと科学に近づく", subtitle: "OUR VISION", content: "人間から「決断する勇気」を奪うことはありません。私たちは、その決断に至るまでの「暗闇」を、テクノロジーの光で極限まで照らし出す役割を担います。" }
  ]},
  2: { colorTheme: "fuchsia", tag: "HARDWARE / AR GLASSES", headline: "現場の「カン」を、<br>視界にオーバーレイする。", subheadline: "マニュアルをめくる時代は終わりました。LUMINA-ARは、工場、医療現場、そして物流倉庫の最前線で働く人々の視界に、AIからのリアルタイムな作業指示と3Dホログラムを投影する、究極の産業用スマートグラスです。", btnText: "スマートグラスを導入する", ctaTitle: "全員が、初日から「熟練工」になる。", ctaDesc: "あなたの視界が、そのままマニュアルになります。両手を完全に自由にしたまま、次の次元の作業効率へ。", blocks: [
      { title: "「両手が塞がる」というハードウェアの致命傷", subtitle: "THE HANDS-FREE PROBLEM", content: "タブレットやスマートフォンを使ったDXは、「作業中にデバイスを持つ必要がある」という物理的な欠陥を抱えています。油まみれの手で画面をスワイプし、工具を持ち直す。その数秒のロスが、現場のストレスと生産性の低下を生み出しています。" },
      { title: "空間コンピューティングによる直感的な作業", subtitle: "SPATIAL COMPUTING", features: [ { t: "ステップ・バイ・ステップのARナビゲーション", d: "「次はこの赤いボルトを外してください」。目の前の機械の構造をグラスが認識し、取り外すべき部品の上に直接「矢印のホログラム」を投影。絶対にミスをさせません。" }, { t: "熟練工との「視界共有（遠隔支援）」", d: "現場の作業員が見ている映像を、遠く離れた本社にいるベテラン技術者のPCへリアルタイムに共有。ベテランがPC画面上で丸をつけると、現場の作業員の視界にもその丸がARとして浮かび上がります。" }, { t: "音声とアイトラッキング（視線）での操作", d: "画面のスクロールや確認ボタンのタップは、すべて「声」または「視線を合わせるだけ」で完了。極寒の環境で分厚いグローブをしていても、完全にハンズフリーでシステムを操作できます。" } ] },
      { title: "1日中かけても疲れない、わずか60gの設計", subtitle: "ERGONOMIC DESIGN", content: "従来のARゴーグルのような「重くて首が痛くなる」デバイスは現場では使われません。LUMINA-ARはバッテリーを腰のベルトに分離し、通常の保護メガネと変わらない60gという圧倒的な軽量化を実現。8時間のシフト中、ずっと着け続けられます。" },
      { title: "現場の「危険」を察知するアラート機能", subtitle: "SAFETY VISION", content: "フォークリフトが死角から近づいてきた時や、高温の配管に手を近づけそうになった時。グラス内蔵のセンサーが危険を検知し、視界の端を赤く点滅させて作業員に直感的な警告を行います。" },
      { title: "Case Study | 大手航空会社の整備部門", subtitle: "MAINTENANCE REVOLUTION", content: "数万点の部品からなる航空機のエンジン整備。これまでは分厚いマニュアルと現物を何度も見比べて作業していましたが、LUMINA-ARの導入により、視界にトルク（締め付け強度）の数値や次の手順が直接浮かび上がるように。作業時間が30%短縮され、人為的なヒューマンエラーが完全にゼロになりました。" },
      { title: "人間の「眼」を拡張する", subtitle: "OUR VISION", content: "物理世界とデジタル世界の境界線を無くすこと。私たちは空間そのものをインターフェースに変え、最前線で汗を流すエッセンシャルワーカーの能力を極限まで引き出します。" }
  ]},
  3: { colorTheme: "green", tag: "DEEP TECH / SYNTHETIC BIOLOGY", headline: "「植物」をプログラミングする時代。", subheadline: "気候変動と食糧危機の最終解決策。BIO-CROPは、植物のDNAをソフトウェアのように「設計（デザイン）」し、干ばつに耐え、病気に強く、そして従来の3倍の収量をもたらす「オーダーメイドの種子」を開発する合成生物学プラットフォームです。", btnText: "次世代の種子を見る", ctaTitle: "自然淘汰を待つ時間は、もうない。", ctaDesc: "100年かかる品種改良を、数ヶ月のコンピューター・シミュレーションへ。地球規模の課題を、ミクロの遺伝子から解決します。", blocks: [
      { title: "気候変動に取り残される「伝統的な農業」", subtitle: "THE CLIMATE CRISIS", content: "記録的な熱波、予測不能な干ばつ、そして新たな病害虫。地球の環境激変スピードに対し、何世代もかけて交配を繰り返す従来の「品種改良」は完全に追いつけなくなっています。このままでは、世界の食糧生産システムは崩壊します。" },
      { title: "DNA配列をクラウド上で「コンパイル」する", subtitle: "GENOMIC SOFTWARE", features: [ { t: "AIによる遺伝子回路のデザイン", d: "「雨が降らなくなったら、葉の気孔を閉じて水分の蒸発を防ぐ遺伝子スイッチをオンにする」。このような複雑な「IF-THEN」の論理回路を、植物のDNA配列としてAIが設計します。" }, { t: "クリスパーによる精密編集", d: "外部から別の生物の遺伝子を入れるのではなく、その植物が元々持っている遺伝子の配列だけをハサミで切って「編集」するため、安全性が高く、生態系へのリスクを最小限に抑えます。" }, { t: "バーチャル温室での超高速シミュレーション", d: "設計したDNA配列が、実際にどのような植物として育つか。スーパーコンピューター内の「デジタルツイン温室」で何百万回も育成シミュレーションを行い、最も優秀なデザインだけを実際の種子として出力します。" } ] },
      { title: "「肥料がいらない」窒素固定作物の開発", subtitle: "FERTILIZER-FREE", content: "農業における最大の環境負荷（CO2排出と水質汚染）の原因である「化学肥料」。私たちは、マメ科の植物のように「空気中の窒素を自分で栄養に変える（窒素固定）」能力を、トウモロコシや小麦に付与する研究を最前線で進めています。" },
      { title: "大気中のCO2を大量に「固定化（吸収）」する根", subtitle: "CARBON CAPTURE ROOT", content: "通常よりも深く、太い根を張るようにプログラミングされた作物。大気中の二酸化炭素を光合成で吸収し、土中深くの根に「炭素」として永遠に閉じ込める。農業そのものを最強のカーボン・ネガティブ産業へと変革します。" },
      { title: "Case Study | アフリカの乾燥地帯での実証実験", subtitle: "GLOBAL IMPACT", content: "雨が極端に少ない地域でも育つよう設計された「干ばつ耐性トウモロコシ」。従来品種が枯死してしまう過酷な環境下において、通常の60%の水分量で完全に成熟し、現地の農村の食糧自給率を劇的に引き上げることに成功しました。" },
      { title: "生命（コード）への畏敬と革新", subtitle: "OUR VISION", content: "私たちは自然を支配するのではなく、自然が本来持っている「生き抜くためのアルゴリズム」を解読し、人類の存続のために最適化（リファクタリング）しているのです。" }
  ]},
  4: { colorTheme: "blue", tag: "CYBER SECURITY / QUANTUM", headline: "量子コンピューターが、<br>世界のパスワードを破る日に備えよ。", subheadline: "「Y2Q（量子コンピューターの脅威）」。現在の暗号技術が数秒で解読される未来は、すぐそこまで来ています。QUANTUM-SECUREは、物理法則に基づいた「絶対に傍受不可能な」量子暗号通信（QKD）ネットワークを企業に提供する究極の防衛インフラです。", btnText: "暗号化の強度をテスト", ctaTitle: "数学的な暗号は、いつか破られる。", ctaDesc: "計算の複雑さに依存する時代は終わりました。「光の粒」が持つ物理法則だけが、機密情報を永久に守り抜きます。", blocks: [
      { title: "「今盗んで、後で解読する」", subtitle: "THE TICKING BOMB", content: "国家機密、企業のM&A情報、顧客のクレジットカードデータ。ハッカーたちは今、解読不可能な暗号化データをとりあえず「大量に盗んで保存」しています。数年後に強力な量子コンピューターが実用化された瞬間、過去のすべての機密情報が一斉に丸裸にされるという時限爆弾が起動しているのです。" },
      { title: "光子（フォトン）の振る舞いを利用した究極の暗号", subtitle: "QUANTUM KEY DISTRIBUTION", features: [ { t: "ハイゼンベルクの不確定性原理の応用", d: "暗号の「鍵」を、光の最小単位である光子に乗せて送ります。物理法則上、誰かがその光子を「盗み見よう」とした瞬間、光子の状態が変化し、盗聴されたことが確実に発覚します。" }, { t: "使い捨ての「真の乱数」キー", d: "コンピューターが作った疑似的な乱数ではなく、量子力学的な現象から抽出された「絶対に予測不可能な真の乱数」を生成。その鍵を1回限りの使い捨てで利用し、解読を数学的に不可能にします。" }, { t: "既存の光ファイバー網への統合", d: "特別なインフラをゼロから敷く必要はありません。企業が現在利用している一般的なダークファイバーに専用の量子送受信機を接続するだけで、量子セキュアネットワークが完成します。" } ] },
      { title: "ブロックチェーンの「次の次元」のセキュリティ", subtitle: "POST-QUANTUM CRYPTO", content: "仮想通貨を支える公開鍵暗号方式も、量子コンピューターの登場により崩壊の危機にあります。私たちは、ブロックチェーンのネットワークを「耐量子計算機暗号（PQC）」へとアップグレードし、Web3エコシステムの基盤を保護します。" },
      { title: "医療データとゲノム情報の「永遠の保護」", subtitle: "LIFETIME SECRECY", content: "一度漏洩すれば一生取り返しがつかない個人のDNA情報や、国家レベルの安全保障データ。「50年後も絶対に解読されてはならないデータ」を、量子技術によって未来のあらゆる脅威から遮断します。" },
      { title: "Case Study | グローバルメガバンク間の資金決済", subtitle: "FINANCIAL SHIELD", content: "毎日数兆円の資金移動が行われるメガバンクのデータセンター間通信。QUANTUM-SECUREのネットワークを導入し、「絶対に傍受・改ざん不可能な」決済インフラを構築。将来的な量子ハッキングによる天文学的な金融リスクを完全に排除し、株主と顧客への最強の信頼を担保しました。" },
      { title: "情報の「絶対的不可侵」を約束する", subtitle: "OUR VISION", content: "デジタル社会において、秘密を守る権利は基本的人権です。私たちは、どれほどテクノロジーが進化しようとも破られることのない、究極の盾（シールド）を人類に提供します。" }
  ]},
  5: { colorTheme: "amber", tag: "DEEP TECH / NEURO TECHNOLOGY", headline: "あなたの「脳」を、<br>クラウドに直接接続する。", subheadline: "タイピングの遅さが、思考のスピードを制限している。NEURAL-WORKは、頭にかぶるだけの非侵襲型・脳波読み取りデバイスを用い、「考えるだけ」で文章を入力し、AIに指示を出すことができる究極の思考拡張インターフェースです。", btnText: "脳波デバイスを予約する", ctaTitle: "キーボードとマウスからの解放。", ctaDesc: "頭の中で描いたイメージが、そのまま画面に現れる。SF映画の魔法は、いま現実のビジネスツールになります。", blocks: [
      { title: "「出力（アウトプット）」という人間のボトルネック", subtitle: "THE OUTPUT LIMIT", content: "人間の脳は1秒間に膨大な情報を処理できますが、それを指先のタイピングや音声という「極めて遅い手段」でしかコンピューターに伝えられません。この「思考」と「出力」の速度の圧倒的なギャップが、人類のクリエイティビティの限界を決めてしまっています。" },
      { title: "思考を「文字」と「コマンド」へ翻訳する", subtitle: "THOUGHT-TO-TEXT", features: [ { t: "非侵襲のウェアラブル・センサー", d: "頭蓋骨を開けてチップを埋め込む必要はありません。ノイズキャンセリングヘッドホンのように装着するだけで、内蔵された超高感度センサーが脳の運動野や言語野の微細な電気信号を読み取ります。" }, { t: "AIによる「言語化」のサポート", d: "「あの赤い…四角いボタンを消して」。頭の中の曖昧なイメージや不完全な思考を、デバイスと連動したLLMが補完し、「ボタンの削除」という正確なコマンドに変換して実行します。" }, { t: "「ゾーン（超集中状態）」の可視化と維持", d: "作業中のあなたの脳波をリアルタイムでモニタリング。「集中力が切れかけている」と判断すると、環境音を自動で調整し、最適な照明の明るさに切り替えて「ゾーン」へと引き戻します。" } ] },
      { title: "重度身体障害者の「働く自由」を取り戻す", subtitle: "ACCESSIBILITY", content: "ALS（筋萎縮性側索硬化症）などで体を動かしたり声を出したりすることが困難な方でも、NEURAL-WORKを使えば「思考」だけで高速にチャットを打ち、プログラミングを行い、オンラインで健常者と全く同じように働くことが可能になります。" },
      { title: "デザインや3Dモデリングを「頭の中の映像」で作る", subtitle: "DIRECT CREATION", content: "クリエイター向けの高度な機能。頭の中で「こんな形の椅子」とイメージした空間的な立体情報を読み取り、画面上の3Dモデリングソフトに直接反映。手を動かすことなく、思考のスピードでプロトタイプが完成します。" },
      { title: "Case Study | シリコンバレーのトップエンジニア集団", subtitle: "HYPER PRODUCTIVITY", content: "タイピングによる腱鞘炎と、キーボードへの視線移動による集中の途切れに悩んでいたプログラマーチーム。NEURAL-WORKのβ版を導入し、「頭で考えた変数名やコードのロジック」を直接エディタに入力するスタイルへと移行。コーディングの速度が平均して3.5倍に跳ね上がり、1日のタスクを午前中で終えられるようになりました。" },
      { title: "人類の知性を、次のステージへ", subtitle: "OUR VISION", content: "コンピューターは単なる「道具」から、脳の一部（拡張臓器）へと進化します。私たちは思考とデジタルの間の摩擦をゼロにし、人間の想像力が持つ真のポテンシャルを解放します。" }
  ]},
  6: { colorTheme: "indigo", tag: "AEROSPACE / ORBITAL CLEAING", headline: "宇宙の「ゴミ拾い」が、<br>人類の未来を左右する。", subheadline: "地球の軌道上を弾丸の10倍の速度で飛び交う、何億個ものスペース・デブリ（宇宙ゴミ）。ORBIT-CLEANは、AI搭載の自律型捕獲衛星を用いて、この致死的なゴミを回収・焼却する軌道上の環境インフラ企業です。", btnText: "衛星の軌道を確認", ctaTitle: "美しい星空には、見えない危機がある。", ctaDesc: "GPSも、天気予報も、インターネットも。一つの小さなゴミが人工衛星に衝突すれば、私たちの生活は明日、終わるかもしれません。", blocks: [
      { title: "「ケスラー・シンドローム」という宇宙の鎖国", subtitle: "THE KESSLER SYNDROME", content: "デブリが人工衛星に衝突し、粉砕されて新たな数万個のデブリを生み出す。この連鎖的な爆発が起きれば、地球の周囲は弾丸の嵐に包まれ、人類は今後数百年にわたって宇宙へロケットを打ち上げることが物理的に不可能になります。" },
      { title: "弾丸の速度で動くゴミを「捕まえる」技術", subtitle: "ORBITAL ROBOTICS", features: [ { t: "AIビジョンによるターゲット捕捉", d: "太陽光の反射で真っ白に飛んだり、完全な暗闇になったりする過酷な宇宙空間。AIがカメラのノイズを補正し、回転しながら高速で飛ぶデブリの重心と軌道を正確に予測します。" }, { t: "マグネット・テザー＆ロボットアーム捕獲", d: "ロケットの残骸などの巨大なデブリには、特殊な磁石付きのケーブルを射出。小型のデブリには多関節ロボットアームでそっと抱きつき、対象物を破壊することなく安全に確保します。" }, { t: "大気圏への安全な「投棄（焼却）」", d: "デブリを捕獲した自律型衛星は、自らのスラスターを使って地球の引力圏へと高度を下げます。最後はデブリと共に大気圏へ突入し、流れ星となって摩擦熱で完全に燃え尽きます。" } ] },
      { title: "衛星の「寿命を延ばす」出張給油サービス", subtitle: "LIFE EXTENSION", content: "ゴミを拾うだけではありません。燃料が尽きかけている数億円の通信衛星に対し、軌道上でドッキングして燃料を補充したり、軌道のズレを修正してあげる「宇宙のロードサービス」も展開しています。" },
      { title: "「宇宙環境税」とESG投資の新たなスタンダード", subtitle: "SPACE ESG", content: "数千機の衛星群を打ち上げる巨大IT企業に対し、「打ち上げた分だけ、過去のゴミを掃除する」という宇宙版のカーボン・オフセットを販売。持続可能な宇宙開発のルールをビジネス化します。" },
      { title: "Case Study | 国際宇宙ステーションの軌道防衛", subtitle: "MISSION SUCCESS", content: "ISSの軌道上に、数トンの古いロケットのデブリが数年後に衝突する軌道を描いていることが判明。ORBIT-CLEANの捕獲衛星を緊急打ち上げ。デブリにドッキングして微小な推進力を与え、ISSの軌道から安全に逸らすことに成功しました。" },
      { title: "道（軌道）を切り拓く", subtitle: "OUR VISION", content: "人類が火星へ行き、宇宙に住む未来。その大前提として、地球の玄関口を安全でクリーンに保つ「清掃員」が絶対に必要です。私たちは、持続可能な宇宙へのアクセスを保証します。" }
  ]},
  7: { colorTheme: "rose", tag: "FOOD TECH / CELLULAR BIO", headline: "牛を殺さずに、<br>「究極の和牛」を培養する。", subheadline: "環境破壊も、倫理的なジレンマも存在しない肉。SYNTHETIC-MEATは、牛の細胞を数グラム採取し、バイオリアクターの中で栄養分を与えて「肉そのもの」を育てる、培養肉のリーディングカンパニーです。", btnText: "培養肉の試食を予約", ctaTitle: "妥協の代替肉は、もういらない。", ctaDesc: "植物から作った肉もどきではなく、分子レベルで完全に同一の「本物の肉」。ステーキの概念が、今日変わります。", blocks: [
      { title: "「肉を食べる」という行為が地球を破壊する", subtitle: "THE LIVESTOCK CRISIS", content: "牛を育てるために広大な森が焼かれ、膨大な水と穀物が消費され、大量のメタンガスが排出されています。人類のタンパク質需要が爆発する中、現在のシステムは地球の限界を完全に超えています。" },
      { title: "「細胞」から「ステーキ肉」をデザインする技術", subtitle: "TISSUE ENGINEERING", features: [ { t: "無血清の植物性培養液", d: "細胞を増やすために従来必要だった「牛の胎児の血清」を完全に排除。植物由来の成分のみで作られた独自の培養液により、動物の犠牲ゼロを実現しました。" }, { t: "3Dバイオプリンティングによる霜降り", d: "ミンチ肉しか作れなかった限界を突破。筋細胞と脂肪細胞を3Dプリンターで精緻に編み込むように出力し、和牛特有の美しいサシと噛みごたえを完全再現します。" }, { t: "無菌環境による抗生物質ゼロ・食中毒ゼロ", d: "クリーンルーム内のタンクで培養されるため、大腸菌やサルモネラ菌の混入リスクが物理的に存在しません。最も清潔で安全な肉です。" } ] },
      { title: "栄養価の「ハッキング（強化）」", subtitle: "NUTRITIONAL HACK", content: "ただ本物の肉を再現するだけではありません。培養の過程でオメガ3脂肪酸やビタミンを付与し、「サーモンのように血液をサラサラにする、極上のステーキ」といった、超健康的な機能性ミートを作り出します。" },
      { title: "宇宙ステーションや砂漠での「地産地消」", subtitle: "ANYWHERE FARMING", content: "広大な牧草地は不要です。ビルの1フロアサイズの培養肉ブルワリーがあれば、中東の砂漠の真ん中でも、将来の月面基地でも、数週間で新鮮な肉を大量に生産することができます。" },
      { title: "Case Study | ミシュラン三ツ星レストランへの提供", subtitle: "CULINARY ACCEPTANCE", content: "「環境には良いが、味が劣る」と代替肉を敬遠していたトップシェフたち。当社の3D培養リブロースをブラインドテストで提供した結果、全員が「最高級の黒毛和牛」と誤認し、レギュラーメニューへの採用が決定しました。" },
      { title: "「おいしい」という幸せを持続可能に", subtitle: "OUR VISION", content: "私たちはヴィーガンを強制したいわけではありません。「肉を食べる喜び」と「地球への優しさ」が矛盾なく両立する未来。食卓の平和を科学で守り抜きます。" }
  ]},
  8: { colorTheme: "amber", tag: "MOBILITY / INFRASTRUCTURE", headline: "東京ー大阪を、<br>「地下の真空」で25分で繋ぐ。", subheadline: "飛行機よりも速く、新幹線よりも安く、環境負荷はゼロ。HYPER-LOOP Xは、気圧を極限まで下げた真空パイプの中を、磁気浮上した車両が時速1000kmで駆け抜ける、第5の交通機関です。", btnText: "乗車シミュレーション", ctaTitle: "地理的な「距離」という概念が、消滅する。", ctaDesc: "通勤圏内が、数百キロ単位へ。都市の定義を根底から書き換える、モビリティの最終形態。", blocks: [
      { title: "飛行機と高速鉄道の「摩擦」", subtitle: "THE FRICTION WALL", content: "飛行機は天候に左右され、新幹線は空気抵抗によるエネルギー消費の限界に達している。「空気」と「車輪の摩擦」。この2つの壁を排除しない限り、人類の移動速度はこれ以上上がりません。" },
      { title: "「宇宙空間」を地上に作り出すテクノロジー", subtitle: "VACUUM ENGINEERING", features: [ { t: "低圧チューブ構造", d: "頑丈な鉄製のパイプラインの内部の空気を巨大なポンプで抜き、高度6万メートルの成層圏と同じ状態を維持。空気抵抗を劇的にゼロに近づけます。" }, { t: "パッシブ磁気浮上", d: "永久磁石と誘導電流の反発力だけで、ポッドが時速数十キロに達した時点で自動的に浮き上がり、レールとの摩擦を完全に無くします。" }, { t: "100%再生可能エネルギー", d: "チューブの上面すべてに太陽光パネルを敷き詰め、推進に必要な電力をすべて自給自足。CO2排出量ゼロで超高速移動を実現します。" } ] },
      { title: "「時刻表」のない、オンデマンドの地下鉄", subtitle: "ON-DEMAND PODS", content: "巨大な列車を待つ必要はありません。1ポッドあたり20名乗りの小型車両がエレベーターのように出発。アプリで予約した瞬間に配車され、目的地のステーションまで途中停車することなく直行します。" },
      { title: "都市の「過密」と地方の「過疎」の同時解決", subtitle: "CITY DECENTRALIZATION", content: "大阪や名古屋に住みながら、東京のオフィスにドアツードアで30分以内で通勤可能に。首都圏への一極集中が解消され、世界水準の経済活動と豊かな自然のライフスタイルを両立できるようになります。" },
      { title: "Case Study | 中東における都市間ネットワーク", subtitle: "FIRST COMMERCIAL LINE", content: "砂漠によりインフラ維持が困難だった中東の巨大都市間。HYPER-LOOP Xのチューブを敷設し、気温の影響を一切受けない全天候型のインフラを構築。従来2時間かかっていた距離を12分で結びました。" },
      { title: "世界を、一つの街にする", subtitle: "OUR VISION", content: "移動時間が短縮されるということは、人間が愛する人や好きなことに使える命の時間が増えるということです。距離という制約を取り払い、世界中の人々を強く結びつけます。" }
  ]},
  9: { colorTheme: "green", tag: "DEEP TECH / DATA STORAGE", headline: "人類のすべてのデータを、<br>「スプーン1杯のDNA」に保存する。", subheadline: "ハードディスクは数年で壊れ、巨大なデータセンターは地球の電力を食い尽くす。IMMORTAL-DATAは、生命の設計図である「DNA配列」をデータストレージとして利用し、情報を数千年間にわたって常温で保存する究極のアーカイビング・テクノロジーです。", btnText: "DNAストレージの詳細", ctaTitle: "記憶を、永遠のものへ。", ctaDesc: "電子の波ではなく、生命の分子へ。地球上で最も古く、最も高密度な情報メディアが、データ爆発の危機を救います。", blocks: [
      { title: "「データ爆発」とストレージの物理的限界", subtitle: "THE STORAGE APOCALYPSE", content: "世界中で生成されるデータ量は爆発的に増加していますが、それを保存するHDDの容量向上は限界に達しつつあります。このままでは、「データを保存する場所がなくなり捨てるしかない」未来が訪れます。" },
      { title: "1グラムで10億テラバイトの超高密度", subtitle: "MOLECULAR ARCHIVE", features: [ { t: "0と1をA・T・C・Gへ変換", d: "バイナリデータを、DNAを構成する4つの塩基の配列へとAIが変換。全く新しい情報圧縮アルゴリズムです。" }, { t: "人工DNAの合成と凍結乾燥", d: "変換された配列データに基づき、専用の合成機で人工的なDNA分子を合成。それを小さなカプセルに入れてフリーズドライ状態にします。" }, { t: "次世代シーケンサーによる読み出し", d: "データを取り出したい時は、水を入れてDNAを溶かし解析装置に通すだけ。配列を瞬時に読み取り、元のデジタルデータへと完璧に復元します。" } ] },
      { title: "「電気代ゼロ」で数千年保存できる耐久性", subtitle: "ETERNAL LIFESPAN", content: "データセンターのサーバーを冷やす莫大な電力は不要。DNAストレージは一度カプセルに封入すれば電気も空調も一切不要。常温のまま数千年以上データが劣化せずに生き残り続けます。" },
      { title: "フォーマットの陳腐化が起きない", subtitle: "FUTURE PROOF", content: "フロッピーディスクのように「読み込む機械が世界から消滅している」という規格の陳腐化がありません。人類が生物学を研究し続ける限り、DNAを読み取る機械は数百年後も確実に存在し続けます。" },
      { title: "Case Study | 国立公文書館のコールドアーカイブ", subtitle: "HERITAGE PRESERVATION", content: "絶対に失われてはならない文化遺産のデータ。これまでは新しいHDDへデータ移行する莫大なコストがかかっていました。当社の技術により、これらの全データを小瓶一つに収め、永遠に安全保管する体制が整いました。" },
      { title: "情報の「不老不死」を実現する", subtitle: "OUR VISION", content: "私たちが残した知識や芸術。人類の営みの証であるデータを、地球が滅びるその日まで確実に残し、未来の世代へバトンを繋ぎます。" }
  ]},
  10: { colorTheme: "amber", tag: "HR TECH / RETAIL AI", headline: "「誰を、いつ休ませるか」<br>AIが完璧なパズルを組む。", subheadline: "毎月、店長を苦しめるシフト作成のパズル。SHIFT-SYNCは、従業員の希望、スキルの偏り、そして天候データに基づく来店予測を統合し、「絶対に回る」最適なシフト表を1クリックで自動生成するスマートシフト管理SaaSです。", btnText: "シフト自動作成を試す", ctaTitle: "店長の仕事を、マネジメントに戻す。", ctaDesc: "シフトのパズル合わせは人間の仕事ではありません。余った時間で、スタッフの笑顔と店舗の売上を作りましょう。", blocks: [
      { title: "「店長のカン」に依存したシフト作成の限界", subtitle: "THE SCHEDULING NIGHTMARE", content: "「AさんはBさんと仲が悪い」「土曜の昼はベテランがいないと回らない」。アルバイトの人間関係やスキルのバランスを考慮しながら、数十人分の希望シフトを組む作業は、毎月数十時間もの膨大な時間を店長から奪い続けています。" },
      { title: "すべての制約をクリアする「数理最適化」", subtitle: "AI OPTIMIZATION", features: [ { t: "需要予測ベースの必要人数算出", d: "過去のPOSデータと来週の天気予報・イベント情報をAIが解析。需要をピンポイントで予測します。" }, { t: "スキル・相性マトリックス", d: "「新人だけの日」が発生しないよう、各スタッフのスキルレベルを数値化。さらに相性も考慮して自動配置します。" }, { t: "労働基準法コンプライアンス", d: "連続勤務制限や深夜割増の上限など、複雑な労務コンプライアンスをシステムが自動で監視し法的リスクを防ぎます。" } ] },
      { title: "「急な欠勤」を埋めるダイナミック・ヘルプ", subtitle: "URGENT RECOVERY", content: "当日の朝の突然の欠勤連絡。SHIFT-SYNCは即座に近隣店舗で今日休みのスタッフや、シフトに入っていない自店舗のスタッフへインセンティブ付きでヘルプ要請のプッシュ通知を一斉送信します。" },
      { title: "スマホ完結のシームレスなUI", subtitle: "EMPLOYEE EXPERIENCE", content: "スタッフは専用アプリから希望シフトを提出。確定したシフトもスマホに直接届き、Googleカレンダーと自動同期します。" },
      { title: "Case Study | 全国300店舗の居酒屋チェーン", subtitle: "CLIENT SUCCESS", content: "シフト作成業務の時間が店舗あたり月間平均20時間削減。さらに、AIの需要予測により「無駄な人員配置」がなくなり、全社で年間1.2億円の人件費最適化に成功しました。" },
      { title: "「働く」をもっと、滑らかに", subtitle: "OUR VISION", content: "私たちは単にカレンダーをデジタル化するだけではありません。働く人の生活リズムと、企業の利益を最も美しいバランスで調和させる、次世代の労働インフラを構築します。" }
  ]},
  11: { colorTheme: "fuchsia", tag: "HR TECH / RECRUITMENT", headline: "履歴書の「嘘」を見抜き、<br>真のポテンシャルを釣り上げる。", subheadline: "TALENT-MATCH AIは、候補者のデジタルフットプリント、コーディングテスト、適性検査を統合し、職務経歴書には書かれない「真の実力」をスコアリングする次世代ATS（採用管理システム）。", btnText: "採用精度を診断する", ctaTitle: "「カンと経験」による採用を、終わらせる。", ctaDesc: "優秀な人材は、美しい履歴書を書くとは限りません。データ駆動の採用が、組織の未来を決めます。", blocks: [
      { title: "「面接上手」ばかりが採用される悲劇", subtitle: "THE INTERVIEW TRAP", content: "日本の採用活動の多くは、依然として面接官の直感に依存しています。その結果、自己PRが上手いだけの人材が採用され、真に技術力を持つシャイな人材が見落とされています。" },
      { title: "多角的なデータで「実力」を丸裸にする", subtitle: "SKILL VERIFICATION", features: [ { t: "実践型スキルテスト", d: "エンジニア向けのコーディングテストから、営業職向けのロールプレイングAIまで。職種に応じた実践的な課題をシステム上で完結させます。" }, { t: "カルチャーフィット・アルゴリズム", d: "あなたの会社のハイパフォーマーのデータを学習し、候補者が入社後に既存チームとどれくらい馴染めるかを可視化します。" }, { t: "リファレンスチェックの自動化", d: "前職の上司や同僚へのリファレンスチェックをオンラインで自動化し、候補者のストレス耐性の評価を低コストで回収します。" } ] },
      { title: "バイアスを排除する「ブラインド選考」", subtitle: "BIAS-FREE RECRUITING", content: "年齢、性別、国籍、さらには学歴や顔写真までマスキングする機能を搭載。人間の無意識の偏見を完全に排除したフラットな選考を実現します。" },
      { title: "タレントプールによる「待つ採用」", subtitle: "TALENT POOL", content: "過去に不採用になった優秀な人材をデータベース化し、彼らが転職活動を再開したタイミングで、AIが自動でスカウトメールを送信します。" },
      { title: "Case Study | メガベンチャーのエンジニア採用", subtitle: "COMPANY SUCCESS", content: "ブラインド選考に切り替えた結果、高卒や無名大学出身の圧倒的なコーディングスキルを持つ天才肌のエンジニアを多数発掘。入社後の定着率とパフォーマンスも向上しました。" },
      { title: "誰もが、最も輝ける場所へ", subtitle: "OUR VISION", content: "不当な評価や偏見によって才能が埋もれてしまう社会は間違っています。人間の本当の価値を正しく照らし出す採用インフラを創ります。" }
  ]},
  12: { colorTheme: "blue", tag: "LEGAL TECH / AI REVIEW", headline: "契約書の「見落とし」が、<br>会社を殺す前に。", subheadline: "数十ページに及ぶ難解な契約書に潜む「自社に圧倒的に不利な条項」を、AIが数秒で検知。LEGAL-RADARは、過去の判例と自社の法務基準を学習し、リスクをハイライトする究極のリーガル・コパイロットです。", btnText: "契約書を無料スキャン", ctaTitle: "法務の仕事を、創造的なものへ。", ctaDesc: "一字一句を読み込む文字校正は、もはや人間の仕事ではありません。交渉の戦略に、時間を使いましょう。", blocks: [
      { title: "「とりあえずハンコを押す」リスク", subtitle: "THE HIDDEN RISK", content: "営業部が持ってくる大量の契約書を法務部がすべて完璧にチェックすることは不可能です。結果として、毒入りの契約書に気づかずにハンコを押してしまうリスクが常に潜んでいます。" },
      { title: "AIが数秒で「落とし穴」をハイライト", subtitle: "INSTANT REVIEW", features: [ { t: "不利な条項の自動アラート", d: "契約書をアップロードするだけで、AIが瞬時に内容を解析。違約金の金額が高すぎるなどのリスクを赤色でハイライトします。" }, { t: "自社基準の学習", d: "「支払いサイトは翌々月末まで」など企業ごとの独自の法務ルールをAIに学習させ、カスタマイズされたレビュー基準を構築できます。" }, { t: "修正案の自動生成", d: "リスクを指摘するだけでなく、「自社に有利になるようにどう修正すべきか」という代替案を自動生成します。" } ] },
      { title: "英文契約書も完璧な精度で翻訳", subtitle: "CROSS-BORDER READY", content: "法務特化の翻訳エンジンを搭載しており、英米法特有の言い回しや条項の抜け漏れを、日本語と同じ精度で正確にチェックします。" },
      { title: "過去の契約書を「検索可能な資産」にする", subtitle: "KNOWLEDGE DATABASE", content: "キャビネットに眠っている紙の契約書をAIがOCRで読み取り、条項単位で検索可能なデータベースに変換します。" },
      { title: "Case Study | 急成長SaaSスタートアップ", subtitle: "CLIENT SUCCESS", content: "専任の法務担当者が1名しかおらず契約書のレビュー待ちで営業が遅延していた企業。定型的なNDAの一次チェックをAIが代替し、レビュー時間が平均12時間から10分へと短縮されました。" },
      { title: "「法律」をビジネスのアクセルへ", subtitle: "OUR VISION", content: "法務部はリスクを恐れてビジネスを止める部署ではありません。AIの力でリーガルリスクを可視化し、企業が自信を持って攻めの決断ができる環境を提供します。" }
  ]},
  13: { colorTheme: "green", tag: "FINTECH / EXPENSE", headline: "「領収書の糊付け」を、<br>歴史の教科書へ送る。", subheadline: "EXPENSE-ZEROは、法人カードとスマホアプリを完全に統合し、決済した瞬間にAIが明細と領収書を突合し、自動で仕訳まで完了させる「入力ゼロ」の経費管理プラットフォームです。", btnText: "カードを発行する", ctaTitle: "経費精算という「仕事」を、消滅させる。", ctaDesc: "1枚の領収書を精算するために企業は数千円の人件費を払っています。無駄な作業を今すぐ根絶しましょう。", blocks: [
      { title: "誰も得をしない「月末の経費精算マラソン」", subtitle: "THE MONTH-END PAIN", content: "シワシワの領収書をエクセルに入力し糊で貼り付ける前時代的な儀式により、日本全体で年間数千億円規模の生産性の喪失が発生しています。" },
      { title: "決済した瞬間に経費精算が終わる", subtitle: "ZERO-CLICK EXPENSE", features: [ { t: "法人カード完全連動", d: "法人カードで決済すると即座にスマホに通知が届きます。その場で領収書の写真を撮れば、金額と日付が自動で照合され精算完了です。" }, { t: "AIによる自動仕訳", d: "AIが店舗名や過去のパターンから勘定科目を自動で推測し、会計ソフトへそのまま流し込みます。" }, { t: "電帳法・インボイス対応", d: "撮影された領収書は電子帳簿保存法の要件を満たした状態で永久保存され、インボイスの登録番号もAIが自動で読み取ります。" } ] },
      { title: "部門ごとの動的予算コントロール", subtitle: "DYNAMIC BUDGETING", content: "部署ごとにリアルタイムで予算上限を設定可能。予算を超えそうになると自動でカードの利用が制限されます。" },
      { title: "不正利用を検知するフラウド・アラート", subtitle: "FRAUD DETECTION", content: "深夜のタクシー利用や同一店舗での連続決済など、社内規定に違反している可能性が高い決済パターンを検知し、自動でアラートを送信します。" },
      { title: "Case Study | 従業員300名の広告代理店", subtitle: "COMPANY SUCCESS", content: "精算業務にかかる時間が全社で90%削減。経理部は単純作業から解放され、戦略的な財務分析に時間を割けるようになりました。" },
      { title: "お金の流れを水のように滑らかに", subtitle: "OUR VISION", content: "企業間のお金の移動をインターネットの通信と同じくらい摩擦のないものへと変革します。" }
  ]},
  14: { colorTheme: "rose", tag: "SALES TECH / REVENUE AI", headline: "トップ営業の「トークの秘密」を、<br>全社員にインストールする。", subheadline: "SALES-CO-PILOTは、オンライン商談の音声と映像をAIが解析し、顧客の反応やトーク比率、キラーフレーズを可視化。チーム全員の成約率を底上げするセールス・イネーブルメントAIです。", btnText: "商談を解析する", ctaTitle: "営業は、もはや「アート」ではない。", ctaDesc: "属人的なカリスマ性に依存する時代は終わりました。言葉のすべてをデータ化し、科学的に売上を創り出しましょう。", blocks: [
      { title: "「背中を見て学べ」という非効率な教育", subtitle: "THE BLACK BOX", content: "トップパフォーマーが商談で何を話しているかはブラックボックスであり、新人を同行させてもその暗黙知を組織に横展開することは非常に困難です。" },
      { title: "商談のすべてを「データ」として解剖する", subtitle: "CONVERSATION INTELLIGENCE", features: [ { t: "トーク比率と「間」の解析", d: "Zoom等と連携し、自分が喋りすぎていないか、顧客の質問に対して適切な間を取って答えているかをAIが数値化します。" }, { t: "キラーフレーズの特定", d: "何万時間もの商談データを解析し、「このフレーズで切り返すと成約率が30%上がる」といった勝ちパターンを自動抽出します。" }, { t: "SCRMへの自動入力", d: "商談が終わった瞬間、AIが顧客の課題や次回のアクションを要約しSFAツールへ全自動で入力します。" } ] },
      { title: "リアルタイム・コパイロット", subtitle: "LIVE ASSISTANT", content: "商談中、顧客がネガティブな発言をした瞬間にAIがポップアップし、最適な切り返しトークをリアルタイムで提示します。" },
      { title: "顧客の感情の起伏を映像からトラッキング", subtitle: "EMOTION ANALYSIS", content: "映像から顧客の微細な表情の変化を解析。「料金の説明をした時に興味度が低下した」といった感情の動きを可視化します。" },
      { title: "Case Study | B2B向けSaaS企業", subtitle: "REVENUE GROWTH", content: "トップ営業の商談動画を最高の教材としてAIがリストアップ。新人は勝ちパターンをなぞるだけでよくなり、初受注までの期間が劇的に短縮されました。" },
      { title: "「売れる」をすべての人へ", subtitle: "OUR VISION", content: "AIの力で「伝える技術」を民主化し、良いプロダクトが正しく世界へ届くためのエンジンとなります。" }
  ]},
  15: { colorTheme: "amber", tag: "CUSTOMER SUCCESS / CHURN AI", headline: "「解約したい」と言われる前に、<br>その兆候をデータで掴む。", subheadline: "CHURN-PREDICTは、ユーザーのログイン頻度やサポートへの問い合わせを解析し、退会リスク（チャーン）を数ヶ月前から予知するカスタマーサクセス特化型AIです。", btnText: "解約リスクを診断する", ctaTitle: "去っていく背中を見送る時代は終わった。", ctaDesc: "解約の理由は突然ではありません。データに隠されたSOSにいち早く気づきましょう。", blocks: [
      { title: "「解約率」がすべてを破壊するSaaSの現実", subtitle: "THE LEAKY BUCKET", content: "既存顧客が流出していてはSaaSビジネスは成長しません。穴の空いたバケツを塞ぐことこそがLTVを最大化する絶対条件です。" },
      { title: "解約の「予兆」を捉える予測モデリング", subtitle: "CHURN PREDICTION", features: [ { t: "ヘルススコアの動的算出", d: "ユーザーの行動ログから健康状態をリアルタイムに算出します。" }, { t: "サイレント・チャーンの検知", d: "何も言わずに使わなくなる顧客のログインパターンの微細な変化を検知しアラートを出します。" }, { t: "NPSとの相関分析", d: "アンケート結果と実際の行動データを掛け合わせ、真のロイヤルティを浮き彫りにします。" } ] },
      { title: "「誰に、今すぐアプローチすべきか」", subtitle: "ACTIONABLE INSIGHTS", content: "「A社はオンボーディングでつまずいています」と、カスタマーサクセス担当者が今すぐ取るべき具体的なアクションをAIが生成します。" },
      { title: "アップセルの「黄金のタイミング」", subtitle: "UPSELL OPPORTUNITY", content: "ヘルススコアが高い顧客に対しては上位プランへの移行を提案する最適なタイミングを通知します。" },
      { title: "Case Study | クラウド会計ソフト", subtitle: "REVENUE SAVED", content: "解約リスクの高い顧客リストを毎日自動生成し優先順位を明確化。半年間で解約率が劇的に低下しました。" },
      { title: "すべての顧客を成功へと導く", subtitle: "OUR VISION", content: "カスタマーサクセスは顧客のビジネス課題に伴走し、プロダクトを通じて彼らを真の成功へと導くプロフェッショナル集団です。" }
  ]},
  16: { colorTheme: "green", tag: "RETAIL TECH / INVENTORY", headline: "「売れ残り」も「品切れ」も、<br>AIが許さない。", subheadline: "INVENTORY-BRAINは、販売データや天気、SNSトレンドを解析し、「明日、どの店舗で、何がいくつ売れるか」をピンポイントで予測する需要予測エンジンです。", btnText: "在庫最適化デモを見る", ctaTitle: "「カン」の発注から、データ駆動の利益へ。", ctaDesc: "余分な在庫は現金を圧迫し、品切れは信頼を奪います。在庫管理を究極の数学へと昇華させましょう。", blocks: [
      { title: "在庫という名の「眠れる負債」", subtitle: "THE INVENTORY TRAP", content: "「念のため多めに発注しておこう」。このバイアスが過剰在庫を生み出し企業のキャッシュフローを悪化させています。" },
      { title: "あらゆる変数を計算する需要予測", subtitle: "PREDICTIVE ENGINE", features: [ { t: "気象データ完全連動", d: "AIが気象データを読み込み、ゲリラ豪雨による超局地的な需要の変化を予測します。" }, { t: "イベント連動", d: "近隣でのコンサート開催情報などを収集し、特定の商品の需要増を相関分析します。" }, { t: "カニバリゼーション予測", d: "商品同士の複雑な相関関係を計算し、全体最適な発注量を導き出します。" } ] },
      { title: "自動発注による完全ハンズオフ", subtitle: "ZERO TOUCH ORDERING", content: "在庫が閾値を下回った瞬間に最適な量を自動で発注。店長の発注業務時間を大幅に削減します。" },
      { title: "ダイナミック・プライシング", subtitle: "DYNAMIC MARKDOWN", content: "消費期限が迫っている商品の価格を閉店時間に向けてAIが自動で値下げし、廃棄ロスを極限までゼロに近づけます。" },
      { title: "Case Study | ドラッグストアチェーン", subtitle: "ROI EXTREME", content: "全店舗の在庫を中央集権的にコントロール。欠品が80%減少し、同時に過剰在庫を30%圧縮することに成功しました。" },
      { title: "「必要なものを、必要な分だけ」", subtitle: "OUR VISION", content: "経済的合理性とサステナビリティが完全に一致する、無駄のない美しいサプライチェーンを構築します。" }
  ]}
};

const buildH3Feature = (f, colorTheme) => `
<div class="bg-white border md:border-transparent border-gray-100 shadow-xl p-8 rounded-3xl transition transform hover:-translate-y-2 duration-300">
    <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-${colorTheme}-50 text-${colorTheme}-600 border border-${colorTheme}-200">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <h4 class="text-xl font-bold mb-3 text-gray-900">\${f.t}</h4>
    <p class="text-gray-600 text-sm leading-relaxed">\${f.d}</p>
</div>
`;

for (const [id, data] of Object.entries(sitesData)) {
    const file = `concept_100/site_${id}/index.html`;
    try {
        let html = fs.readFileSync(file, 'utf-8');
        let newMain = `
    <main class="pt-[140px] pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div class="text-center max-w-4xl mx-auto mb-20 relative">
            <span class="bg-gray-100 text-${data.colorTheme}-600 border border-gray-200 px-5 py-2 text-xs font-black rounded-full tracking-widest mb-8 inline-block shadow-sm uppercase">${data.tag}</span>
            <h1 class="text-4xl md:text-[54px] font-black mb-8 leading-[1.2] tracking-tight text-gray-900">${data.headline}</h1>
            <p class="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto">${data.subheadline}</p>
        </div>

        <div class="relative w-full aspect-[21/9] md:aspect-video rounded-[32px] overflow-hidden shadow-2xl mb-32 border border-gray-200/50 group bg-zinc-900">
            <img src="img/ui.png" alt="UI Dashboard" class="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-[1.02]" onerror="this.src='https://picsum.photos/seed/placeholder/1600/900'">
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none blend-overlay"></div>
        </div>

        <div class="flex flex-col gap-32 mb-32">
        `;
        
        data.blocks.forEach((blk, idx) => {
            const isReverse = idx % 2 === 1;
            if (blk.features) {
                newMain += `
                <div class="mt-10">
                    <div class="text-center mb-16">
                        <span class="text-${data.colorTheme}-600 font-bold tracking-widest text-sm uppercase">${blk.subtitle}</span>
                        <h2 class="text-3xl md:text-4xl font-black mt-4 text-gray-900">${blk.title}</h2>
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
                        <span class="text-${data.colorTheme}-600 font-bold tracking-widest text-sm uppercase">${blk.subtitle}</span>
                        <h2 class="text-3xl md:text-4xl font-black text-gray-900 leading-tight">${blk.title}</h2>
                        <div class="w-12 h-1 bg-${data.colorTheme}-500 rounded"></div>
                        <p class="text-lg text-gray-600 leading-relaxed font-light">${blk.content}</p>
                    </div>
                    <div class="flex-1 relative aspect-square md:aspect-[4/3] rounded-[32px] overflow-hidden bg-gray-100 border border-gray-200/50 group">
                        <img src="img/ui.png" class="w-full h-full object-cover opacity-30 grayscale sepia blur-[2px] transition-all duration-700 group-hover:blur-none group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105" style="object-position: ${isReverse ? 'bottom right' : 'top left'};" onerror="this.src='https://picsum.photos/seed/placeholder/800/600'">
                        <div class="absolute inset-0 bg-gradient-to-tr from-${data.colorTheme}-900/20 to-transparent"></div>
                    </div>
                </div>
                `;
            }
        });
        
        newMain += `
        </div>

        <div class="text-center bg-gray-900 border border-gray-800 rounded-[3rem] p-16 md:p-32 relative overflow-hidden group shadow-2xl">
            <div class="absolute inset-0 bg-gradient-to-br from-${data.colorTheme}-900/40 to-transparent"></div>
            <div class="relative z-10">
                <h2 class="text-4xl md:text-5xl font-black mb-8 text-white">${data.ctaTitle}</h2>
                <p class="text-gray-300 mb-12 max-w-xl mx-auto text-lg leading-relaxed">${data.ctaDesc}</p>
                <a href="../index.html" class="bg-${data.colorTheme}-500 hover:bg-${data.colorTheme}-400 text-white px-12 py-5 rounded-full font-bold text-lg inline-flex items-center gap-3 transition transform hover:-translate-y-1 shadow-lg shadow-${data.colorTheme}-500/30">
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
            // No main tag, replace contents of body but keep the script tags and body tag
            html = html.replace(/<body([^>]*)>([\s\S]*?)<\/body>/, `<body class="bg-gray-50 text-stone-800 min-h-screen font-sans antialiased overflow-x-hidden">\n${newMain}\n</body>`);
        }
        
        fs.writeFileSync(file, html);
        console.log(`Updated site_${id}`);
    } catch(e) {
        console.log(`Failed site_${id}`);
    }
}
