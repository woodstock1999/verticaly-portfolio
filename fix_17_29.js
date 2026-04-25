const fs = require('fs');

const sitesData = {
  17: { colorTheme: "blue", tag: "LOGISTICS / AI DISPATCH", headline: "「運べない」という日本の危機を、<br>アルゴリズムで救う。", subheadline: "ドライバー不足と過酷な労働環境。ROUTE-OPTIMAは、AIによる動的なルート最適化とトラックの空き容量のシェアリングを組み合わせ、物流業界の非効率を完全に解消するクラウド配車システムです。", btnText: "ルート最適化を試す", ctaTitle: "すべてのトラックに、完璧な航路を。", ctaDesc: "空のトラックが高速道路を走る無駄はもう終わりにしましょう。", blocks: [
      { title: "「職人芸の配車係」への過度な依存", subtitle: "THE DISPATCH BOTTLENECK", content: "「どのトラックにどの荷物を載せ、どの順番で回れば効率的か」。この複雑なパズルは、一部のベテラン配車マンの頭の中にしかなく、彼らが休むと業務が回らないという致命的な属人化を引き起こしています。" },
      { title: "数百万通りのルートを瞬時に計算", subtitle: "DYNAMIC ROUTING", features: [ { t: "リアルタイム渋滞予測", d: "現在の渋滞状況だけでなく、過去のデータから「2時間後のこの道は混む」という予測まで加味してルートを生成します。" }, { t: "積載率の自動最適化", d: "荷物のサイズとトラックの荷台の空きスペースを3Dで計算し、最も無駄のない積み合わせ（混載）パターンを提案します。" }, { t: "ドライバーの労働時間管理", d: "法的規制に基づき、ドライバーの連続運転時間と休憩のタイミングを自動でスケジュールに組み込みます。" } ] },
      { title: "「帰り荷」を自動でマッチング", subtitle: "BACKHAUL MATCHING", content: "納品を終えて空になったトラックの帰り道。システムが近くの荷主と自動でマッチングし、帰り便での収益化を実現します。これにより積載率は劇的に向上します。" },
      { title: "荷主との完全な透明性", subtitle: "SUPPLY CHAIN VISIBILITY", content: "「荷物が今どこにあるか」を、Amazonの配送トラッキングのように荷主にリアルタイムで共有。電話での確認作業をゼロにします。" },
      { title: "Case Study | 全国規模の食品卸業", subtitle: "CLIENT SUCCESS", content: "ベテランの退職により配車業務が崩壊寸前だった企業。導入後、新人でもボタン一つで最適な配車が可能になり、配送コストが20%削減されました。" },
      { title: "止まらない血流を創る", subtitle: "OUR VISION", content: "物流は経済の血液です。私たちはAIの力で、モノが確実に、最も効率よく運ばれるインフラを死守します。" }
  ]},
  18: { colorTheme: "indigo", tag: "MANUFACTURING / QA AI", headline: "「不良品ゼロ」を、<br>人間の目の限界を超えて実現する。", subheadline: "QUALITY-INSPECTは、熟練の検査員の「目」をディープラーニングで再現した、製造業向けのAI外観検査システムです。ミリ単位の傷や異物を、24時間休むことなく完璧に検知します。", btnText: "画像判定デモ", ctaTitle: "品質検査を、自動化の最後のピースに。", ctaDesc: "「目視検査」という過酷な労働から人間を解放し、絶対的な品質を約束します。", blocks: [
      { title: "過酷な「目視検査」とヒューマンエラー", subtitle: "THE LIMITS OF HUMAN EYES", content: "高速で流れてくる製品を8時間睨み続ける。この過酷な作業は作業員の視力と集中力を奪い、どうしても見逃し（ヒューマンエラー）が発生します。それが大規模なリコールへと繋がるリスクとなっています。" },
      { title: "熟練工の「暗黙知」をAI化する", subtitle: "AI VISION INSPECTION", features: [ { t: "異常検知アルゴリズム", d: "「正常な製品」の画像だけを学習させ、そこから少しでも外れた「未知の不良」を検知するアノマリー検出を搭載。" }, { t: "超高速・高精度カメラ連動", d: "1分間に数百個流れるラインでも、特殊な照明とハイスピードカメラを連動させ、ブレのない鮮明な画像でミリ単位の傷を捉えます。" }, { t: "現場で育つAI（エッジ学習）", d: "導入後も現場の作業員が「これはOK」「これはNG」と教え込むことで、工場独自の判断基準にAIが適応していきます。" } ] },
      { title: "良品・不良品の完全なトレーサビリティ", subtitle: "FULL TRACEABILITY", content: "すべての検査画像を製造番号と紐付けてクラウドに永久保存。万が一市場で不良品が見つかっても、「出荷時はどうだったか」を即座に証明できます。" },
      { title: "既存の生産ラインに後付け可能", subtitle: "EASY INTEGRATION", content: "大規模な設備の入れ替えは不要。既存のコンベアにカメラとエッジPCを設置するだけで、その日からAI検査が稼働します。" },
      { title: "Case Study | 自動車部品メーカー", subtitle: "CLIENT SUCCESS", content: "目視検査の限界により、月に数件の流出不良が発生していた工場。AI導入後、流出不良は完全にゼロになり、検査員の人件費も年間5000万円削減されました。" },
      { title: "メイド・イン・ジャパンの品質を守る", subtitle: "OUR VISION", content: "世界が信頼する日本の製造品質。それをテクノロジーの力で次世代へと継承し、さらに高い次元へと引き上げます。" }
  ]},
  19: { colorTheme: "green", tag: "INDUSTRIAL / PREDICTIVE AI", headline: "機械が「壊れる日」を、<br>数ヶ月前に予言する。", subheadline: "MAINTAIN-PREDICTは、工場のモーターやポンプの振動・温度データをIoTセンサーで収集し、AIが「いつ、どこが故障するか」をピンポイントで予測する予知保全プラットフォームです。", btnText: "予知保全をシミュレーション", ctaTitle: "「壊れてから直す」時代の終焉。", ctaDesc: "突然のライン停止がもたらす数億円の損失。私たちはそれを未然に防ぎます。", blocks: [
      { title: "「ドカ停」という工場の最大の悪夢", subtitle: "THE UNPLANNED DOWNTIME", content: "生産ラインの心臓部であるモーターが突然焼き切れる。部品の調達に数日かかり、その間の生産機会損失は数億円に上ります。「定期的な部品交換」だけでは、突発的な故障は防げません。" },
      { title: "機械の「微かな悲鳴」を聴き取るAI", subtitle: "PREDICTIVE MAINTENANCE", features: [ { t: "後付けIoTセンサー", d: "既存の古い機械にもマグネットで貼り付けるだけのワイヤレスセンサー。振動や表面温度をミリ秒単位でクラウドへ送信します。" }, { t: "異常の兆候（予兆）の検知", d: "「いつもと違うパターンの振動が混じっている」。人間には気づかないレベルのベアリングの摩耗をAIが早期に発見します。" }, { t: "寿命予測と最適な部品交換", d: "「現在の摩耗ペースだと、あと45日で完全に故障します」と予測。次の計画停止日に合わせて部品を発注・交換できるよう指示します。" } ] },
      { title: "ベテラン保全マンの「耳」をデジタル化", subtitle: "DIGITAL EXPERTISE", content: "「この音は危ないな」という熟練の保全担当者の感覚を、振動の周波数解析（FFT）によって完全に数値化し、属人化を排除します。" },
      { title: "エネルギー消費の最適化", subtitle: "ENERGY SAVING", content: "機械の調子が悪くなると無駄な電力を消費します。異常を早期に直すことで、工場全体の電力コスト削減にも直結します。" },
      { title: "Case Study | 大規模化学プラント", subtitle: "CLIENT SUCCESS", content: "重要なポンプの故障による数日間の停止リスクに怯えていたプラント。センサー導入後、3ヶ月前に故障の予兆を検知。計画停止中に部品を交換し、数億円の損失を未然に防ぎました。" },
      { title: "産業の心臓を、止めない", subtitle: "OUR VISION", content: "見えないリスクを可視化し、安定した生産基盤を提供することで、世界の製造業の競争力を根底から支えます。" }
  ]},
  20: { colorTheme: "fuchsia", tag: "AGRI TECH / IoT", headline: "「土の乾き」が、<br>あなたのスマホに通知される。", subheadline: "AGRI-SENSORは、農地に刺すだけの安価なIoTセンサー群とAIを組み合わせ、土壌水分量、日射量、病害虫のリスクをリアルタイムで可視化する次世代の精密農業OSです。", btnText: "センサーの無料デモ", ctaTitle: "天候には勝てない。しかし、予測はできる。", ctaDesc: "何十年もかけて培った匠の技を、今日からデータとしてインストールしましょう。", blocks: [
      { title: "「見て回る」という膨大な時間の浪費", subtitle: "THE PHYSICAL LIMIT", content: "広大な農地。毎朝すべての畑を回って土の状態を確認する過酷な見回り作業が、農家の体力を奪い、規模拡大を阻む最大の要因です。" },
      { title: "土の「声」をデータ化するセンサー", subtitle: "SOIL INTELLIGENCE", features: [ { t: "超寿命センサー", d: "内蔵バッテリーで3年間駆動。土壌の水分量、肥料濃度、地温を10分に1回クラウドへ送信します。" }, { t: "自動水やりシステム", d: "水分量が下がったら自動でバルブを開ける。作物が最も水を欲しがる最適なタイミングでの灌水を実現します。" }, { t: "病害虫アラート", d: "過去の気象データから病害虫が発生しやすい条件をAIが計算。「明日の朝、霜が降りる」などスマホへ通知します。" } ] },
      { title: "衛星画像による「生育ムラ」の可視化", subtitle: "SATELLITE MAPPING", content: "人工衛星やドローンによる画像解析を活用。畑の中で「肥料が足りていない部分」をヒートマップで可視化しピンポイントの追肥を可能にします。" },
      { title: "収量予測とアグリ・ファイナンス", subtitle: "YIELD PREDICTION", content: "「いつ、どれくらい収穫できるか」をAIが予測し、市場の価格データと掛け合わせ最も利益が出るタイミングを提案します。" },
      { title: "Case Study | 北海道の小麦農家", subtitle: "FARM EXPANSION", content: "見回りだけで半日が終わっていた農家。導入後、iPad一つで監視可能になり、管理面積を1.5倍に拡大。収量も15%向上しました。" },
      { title: "自然とテクノロジーの調和", subtitle: "OUR VISION", content: "自然の微細な変化を正確に読み取り、持続可能な食の未来を根元から支えます。" }
  ]},
  21: { colorTheme: "blue", tag: "HEALTH TECH / AI COUNSELING", headline: "深夜3時の孤独を、<br>「声」で救うAI。", subheadline: "ECHOは、あなたの声のトーンから感情の起伏を読み取り、臨床心理学に基づいた共感的な対話を提供する、24時間365日いつでも繋がる音声AIカウンセラーです。", btnText: "AIと会話を始める", ctaTitle: "あなたは、もう一人ではない。", ctaDesc: "ただアプリを開き、あなたの言葉で話しかけてください。", blocks: [
      { title: "メンタルケアの物理的・心理的ハードル", subtitle: "THE ACCESS BARRIER", content: "心療内科の予約は数週間待ち。この「今すぐ助けてほしいのに、誰もいない」という絶望的な空白地帯が深刻な悪化を引き起こしています。" },
      { title: "声の「波形」から隠れた感情を読み取る", subtitle: "VOCAL BIOMARKERS", features: [ { t: "感情音声解析", d: "言葉の意味だけでなく「声の震え」といった非言語情報をAIが解析。抑うつ状態を正確に捉えます。" }, { t: "CBTベースの対話", d: "認知行動療法に基づいた質問を投げかけ、ネガティブな思考のループに気づき抜け出す手助けをします。" }, { t: "絶対的な秘匿性", d: "AIだからこそ評価される恐怖がありません。会話データは暗号化され完全に消去されます。" } ] },
      { title: "「沈黙」さえも理解する人間的な間", subtitle: "EMPATHETIC PAUSE", content: "ユーザーが言葉に詰まった時はAIも一緒に「沈黙」し、ゆっくりと優しいトーンで寄り添います。" },
      { title: "危険な兆候の検知と緊急連携", subtitle: "CRISIS INTERVENTION", content: "極度の絶望を示唆する言葉を検知した場合、人間の専門カウンセラーへのホットラインへシームレスに誘導します。" },
      { title: "Case Study | 産後うつに悩む女性", subtitle: "USER RECOVERY", content: "密室育児で強い孤独感に襲われていた女性。ECHOの温かい声色による応答で心が救われ、前を向くきっかけとなりました。" },
      { title: "すべてのスマートフォンを心の安全基地へ", subtitle: "OUR VISION", content: "誰もがメンタルケアを日常的なものとして享受できる世界を創ります。" }
  ]},
  22: { colorTheme: "amber", tag: "HEALTHCARE / AI SCRIBE", headline: "医師の目を、<br>「パソコン」から「患者」へ戻す。", subheadline: "MEDICOREは、診察室での会話をAIが自動で聴取し、電子カルテのフォーマット（SOAP形式）に自動要約・入力する医療向け音声認識AIスクライブです。", btnText: "AIカルテデモ", ctaTitle: "「聴く」ことに、100%の集中を。", ctaDesc: "医師の仕事はタイピングではありません。テクノロジーで雑務を消去しましょう。", blocks: [
      { title: "医師の労働時間の半分を奪うカルテ入力", subtitle: "THE CLERICAL BURDEN", content: "電子カルテのタイピング作業が医師を疲弊させ、患者とのアイコンタクトを奪い、診察の質を低下させています。" },
      { title: "日常会話から医学用語を抽出する", subtitle: "MEDICAL NLP", features: [ { t: "医療用語・薬剤名辞書", d: "患者の曖昧な日常表現を、AIが正確な医学専門用語へと自動で変換・補正します。" }, { t: "SOAP形式への構造化", d: "会話の雑多な内容を、医師が読みやすいS・O・A・Pの4つのフレームワークに自動で分類します。" }, { t: "ノイズフィルタリング", d: "医学的な診断に関係のない世間話はAIが自動で除外。記録だけをシャープに保ちます。" } ] },
      { title: "専門医ごとの「書き方のクセ」を学習", subtitle: "PERSONALIZED STYLE", content: "各医師の過去のカルテデータを学習し、その医師が自分で打ったかのような好みのフォーマットと文体で出力します。" },
      { title: "紹介状や診断書のワンクリック生成", subtitle: "DOCUMENT AUTOMATION", content: "カルテデータをもとに他院への紹介状や診断書の下書きを生成。医師は最終確認をするだけになります。" },
      { title: "Case Study | 総合病院・内科外来", subtitle: "TIME SAVED", content: "昼休みも返上でカルテ入力を行っていた内科医。導入後1日平均1.5時間の事務作業が削減され、対話する余裕が生まれました。" },
      { title: "医療の温もりをテクノロジーで守る", subtitle: "OUR VISION", content: "名医の診る力と聴く力を最大限に引き出すための最高の助手となります。" }
  ]},
  23: { colorTheme: "green", tag: "LOGISTICS / WAREHOUSE OS", headline: "巨大な倉庫を、<br>一つの「生き物」に変える。", subheadline: "OMNI LOGISは、AGV（無人搬送車）とハンディターミナルを統合し、倉庫内のあらゆる動きをミリ単位で最適化するクラウドWMS（倉庫管理システム）です。", btnText: "倉庫のDXを診断する", ctaTitle: "歩く時間を減らし、出荷数を倍にする。", ctaDesc: "広大な倉庫の中で人間が「モノを探す」時代は終わりました。", blocks: [
      { title: "「ベテランの記憶力」に依存した空間", subtitle: "THE CHAOS OF STORAGE", content: "商品の保管場所管理が属人化していると、新人スタッフはピッキングのために1日10km以上も歩き回り生産性が低下します。" },
      { title: "物理空間をハックするアルゴリズム", subtitle: "SPATIAL OPTIMIZATION", features: [ { t: "ダイナミック・ロケーション", d: "AIが出荷頻度を予測しよく売れる商品を自動的に近くに配置変更し歩行距離を短縮します。" }, { t: "ピッキング経路生成", d: "複雑な経路計算をAIが瞬時に行い、作業員の端末にカーナビのように指示を出します。" }, { t: "ロボットの統合群制御", d: "メーカーの異なるロボットを一つのAPIで統合管理し、渋滞を防ぎます。" } ] },
      { title: "リアルタイムなデジタルツイン", subtitle: "DIGITAL TWIN", content: "倉庫内の在庫の動き、ロボットの現在地を3Dマップとして完全に再現。コントロールルームから全体を把握できます。" },
      { title: "オムニチャネル在庫の一元化", subtitle: "OMNICHANNEL SYNC", content: "EC用の在庫と店舗向けの在庫を一つのプールから引き当てる高度なロジックを搭載しています。" },
      { title: "Case Study | アパレル企業の物流センター", subtitle: "THROUGHPUT MAXIMIZED", content: "棚搬送ロボットの導入により「棚が人の前に来る」運用へシフト。生産性が3倍に跳ね上がりました。" },
      { title: "サプライチェーンを加速する", subtitle: "OUR VISION", content: "複雑な巨大パズルをアルゴリズムの力で最も美しい形へと解き明かします。" }
  ]},
  24: { colorTheme: "blue", tag: "B2B FINTECH / CASHFLOW", headline: "「黒字倒産」という悲劇を、<br>システムで防衛する。", subheadline: "PAYFLOWは、請求書の発行から入金確認、そして売掛金の「早期資金化（ファクタリング）」までを統合したキャッシュフロー管理プラットフォームです。", btnText: "資金繰りシミュレーション", ctaTitle: "「入金待ち」のストレスから解放する。", ctaDesc: "あなたの売上を、いつでも自由に動かせる現金へ。", blocks: [
      { title: "「末締め・翌月末払い」という罰", subtitle: "THE CASHFLOW TRAP", content: "納品を終えても現金が入ってくるのは最長2ヶ月後。長い支払いサイトが優良な企業の成長を阻害しています。" },
      { title: "請求から入金までを完全自動化", subtitle: "AUTO-BILLING ENGINE", features: [ { t: "ワンクリック請求", d: "見積書から請求書を作成し、メール送付から郵送手配までを代行します。" }, { t: "自動入金消込", d: "銀行APIにより入金をAIが自動で名寄せして消し込みます。" }, { t: "未入金自動リマインド", d: "支払い期日を過ぎた取引先に丁寧な文面のリマインドメールを自動送信します。" } ] },
      { title: "売掛金を明日の現金に変える", subtitle: "INSTANT LIQUIDITY", content: "早期資金化ボタンを押すだけでAIが審査し最短即日で現金を振り込みます。借入ではないため決算書も傷つきません。" },
      { title: "3ヶ月先の資金繰りカレンダー", subtitle: "FORECASTING", content: "過去の入出金データからAIが「現金残高がマイナスになる危険性」を事前にアラートします。" },
      { title: "Case Study | Web制作会社", subtitle: "GROWTH UNLOCKED", content: "外注費の先払いで資金ショート寸前だった企業が、請求書を即日現金化しプロジェクトを完遂しました。" },
      { title: "「信用」を資産へ", subtitle: "OUR VISION", content: "日本のB2B取引の血液を最速で循環させます。" }
  ]},
  25: { colorTheme: "indigo", tag: "EVENT TECH / HYBRID", headline: "「オンライン参加」を、<br>最前列のVIP席へ変える。", subheadline: "EVENT-SYNCは、オフライン会場の臨場感とオンラインの拡張性を完全に融合させる次世代のハイブリッド・カンファレンス・プラットフォームです。", btnText: "デモイベント参加", ctaTitle: "世界中すべての人が、最前列。", ctaDesc: "物理的な距離を、圧倒的なテクノロジーで無効化しましょう。", blocks: [
      { title: "「置いてけぼり」にされるオンライン", subtitle: "THE HYBRID DIVIDE", content: "会場では拍手が起きているのにオンラインでは白けた空気が漂う。この温度差がイベントの満足度を低下させています。" },
      { title: "会場の熱量を同期する双方向システム", subtitle: "HYPE SYNCHRONIZATION", features: [ { t: "ダイナミック・リアクション", d: "オンライン参加者がボタンを押すと会場のLEDスクリーンにリアルタイムでエフェクトが出現します。" }, { t: "空間オーディオ連携", d: "仮想のロビーで立ち話ができる機能。近づくほど声が大きくなりセレンディピティを創出します。" }, { t: "AIリアルタイム字幕", d: "登壇者の言葉を多言語へ自動翻訳して表示し言語の壁を取り払います。" } ] },
      { title: "名刺交換の可視化", subtitle: "SMART NETWORKING", content: "参加者同士のデジタル名刺交換のログをヒートマップ化し、スポンサーへの強力なリードデータとして提供します。" },
      { title: "絶対落ちないストリーミングインフラ", subtitle: "ROCK-SOLID INFRASTRUCTURE", content: "最高水準のCDNを使用し同時接続10万人でも遅延のない安定した超高画質配信を保証します。" },
      { title: "Case Study | グローバルIT企業", subtitle: "MAXIMIZED ENGAGEMENT", content: "オンライン参加者の平均滞在時間が3倍になり、スポンサー企業へのリード獲得数も過去最高を記録しました。" },
      { title: "「集まる」意味をアップデートする", subtitle: "OUR VISION", content: "両者の良いとこ取りをし、参加するすべての人の人生の転機となるような体験空間をデザインします。" }
  ]},
  26: { colorTheme: "fuchsia", tag: "FINTECH / CREATOR ECONOMY", headline: "あなたの「再生回数」が、<br>そのまま「融資枠」になる。", subheadline: "CREATOR-FINANCEは、SNSデータから将来の収益をAIで予測し、無担保で成長資金を提供するレベニュー・ベースド・ファイナンスです。", btnText: "融資枠を無料診断", ctaTitle: "銀行が理解できない価値を評価する。", ctaDesc: "不動産の担保も不要です。あなたが必要なのは熱狂的なファンと再生回数だけ。", blocks: [
      { title: "「新しい職業」を評価できない金融システム", subtitle: "THE CREDIT GAP", content: "数百万人のフォロワーを持ち年間数億円の売上を出すクリエイターが、銀行からは不安定な職業とみなされ融資を断られています。" },
      { title: "「将来の売上」を担保にするアルゴリズム", subtitle: "REVENUE-BASED FINANCING", features: [ { t: "API直結審査", d: "チャンネルのアナリティクスデータをAIが読み込み将来の広告収益を予測します。" }, { t: "最短24時間での着金", d: "面談は一切不要。スマホからの申請だけで最短翌日に資金が振り込まれます。" }, { t: "売上連動型の返済", d: "毎月の収益の一定割合で自動返済。収益が減った月は返済額も減るためキャッシュフローがショートしません。" } ] },
      { title: "「次の一手」を打つためのキャピタル", subtitle: "GROWTH CATALYST", content: "機材導入やブランド立ち上げなど、クリエイターが一段上のステージへ駆け上がるためのロケットエンジンとして機能します。" },
      { title: "炎上リスクを監視", subtitle: "RISK MONITORING", content: "AIがSNS上の感情分析を行い、炎上の兆候を早期に検知し警告を行います。" },
      { title: "Case Study | 美容系YouTuber", subtitle: "CREATOR EXPANSION", content: "自身のコスメブランド立ち上げ費用を調達し、発売初日で全在庫が完売。投資回収を3ヶ月で終えました。" },
      { title: "才能にレバレッジをかける", subtitle: "OUR VISION", content: "クリエイターが旧世界の金融の壁に阻まれることなく才能を最大化できる世界を創ります。" }
  ]},
  27: { colorTheme: "blue", tag: "WEB3 / DAO GOVERNANCE", headline: "「会社」という組織形態を、<br>コードへと置き換える。", subheadline: "DAO-GOVは、世界中の人々がブロックチェーン上のスマートコントラクトによって透明かつ自律的に意思決定を行う「次世代の株式会社」を運用するためのOSです。", btnText: "DAOを立ち上げる", ctaTitle: "信じるべきは「人」ではない。「コード」だ。", ctaDesc: "すべての資金の流れと決定プロセスをガラス張りのブロックチェーンへ。", blocks: [
      { title: "「中央集権」がもたらす腐敗と遅延", subtitle: "THE CORPORATE BOTTLENECK", content: "従来の株式会社は意思決定が不透明になりがちであり、国境を越えたプロジェクト立ち上げには摩擦が多すぎました。" },
      { title: "10分で構築する自律分散型組織", subtitle: "DAO CREATION SUITE", features: [ { t: "ガバナンストークンの即時発行", d: "株式の代わりとなるトークンを発行し初期貢献者へ分配します。" }, { t: "オンチェーン投票", d: "トークン保有者による投票システム。結果はブロックチェーンに刻まれ資金が自動で送金されます。" }, { t: "マルチシグウォレット管理", d: "共有資金の横領を防ぐため複数人の承認が必要なセキュリティ設定を簡単に構築できます。" } ] },
      { title: "貢献度をAIがスコアリング", subtitle: "PROOF OF CONTRIBUTION", content: "コードのコミット数などをAIがトラッキングし自動で報酬を分配するバウンティシステム。" },
      { title: "複雑な規制との法的ブリッジ", subtitle: "LEGAL WRAPPER", content: "DAOを法人として認める地域のリーガルラッパーを提供し現実世界での契約をサポートします。" },
      { title: "Case Study | グローバルDeFiプロジェクト", subtitle: "GLOBAL SYNERGY", content: "20カ国100名のエンジニアがDAOを立ち上げ1週間で資金調達を完了しプロダクトをリリースしました。" },
      { title: "人類の協調をアップデートする", subtitle: "OUR VISION", content: "人類が共通の目的のために最も効率よく協力し合える新しい社会システムを構築しています。" }
  ]},
  28: { colorTheme: "green", tag: "CLIMATE TECH / ESG", headline: "企業の「見えない二酸化炭素」を、<br>1グラム単位で追跡する。", subheadline: "CARBON-TRACKは、サプライチェーン全体（Scope 1-3）の温室効果ガス排出量をAIが自動算出し、国際基準のESGレポートをワンクリックで生成する脱炭素クラウドです。", btnText: "排出量の無料診断", ctaTitle: "脱炭素化は最大の経営戦略である。", ctaDesc: "「どれくらいCO2を出しているか」答えられない企業は市場から退場させられる時代です。", blocks: [
      { title: "エクセルでの手入力という非効率", subtitle: "THE REPORTING NIGHTMARE", content: "領収書をエクセルに入力し計算する作業は実務担当者の心を折る苦行です。" },
      { title: "あらゆるデータを吸い上げる連携エンジン", subtitle: "AUTO-DATA INGESTION", features: [ { t: "会計ソフト連携", d: "電気代や出張費からAIが自動でCO2排出量を逆算します。" }, { t: "サプライチェーンの可視化", d: "原材料の調達から廃棄までの全プロセスの排出量を高い精度で推計します。" }, { t: "国際イニシアチブ対応", d: "TCFDなどの厳格なフォーマットに準拠したレポートを自動生成します。" } ] },
      { title: "どこを減らすべきかをAIが提案", subtitle: "DECARBONIZATION PATHWAY", content: "「空調設備を更新すれば3年で投資回収できる」といった具体的な削減アクションを提示します。" },
      { title: "カーボンクレジットの購入", subtitle: "OFFSET MARKETPLACE", content: "削減しきれない排出量については信頼性の高いオフセットクレジットを購入し相殺できます。" },
      { title: "Case Study | 自動車部品メーカー", subtitle: "SUPPLY CHAIN SURVIVAL", content: "わずか2週間で国際基準のレポートを提出し、環境意識の高さを評価され新規の受注枠まで獲得しました。" },
      { title: "地球の帳簿を合わせる", subtitle: "OUR VISION", content: "持続可能な資本主義のインフラとなります。" }
  ]},
  29: { colorTheme: "amber", tag: "GOV TECH / SMART CITY", headline: "「役所の窓口」を、<br>あなたのスマホの中に。", subheadline: "LOCAL-GOV DXは、縦割りの行政システムをクラウドで統合し、あらゆる行政手続きを24時間・数タップで完結させる「スマート自治体OS」です。", btnText: "導入自治体を見る", ctaTitle: "行政はもっとサービス業になれる。", ctaDesc: "市民の貴重な時間を奪う無駄なプロセスを徹底的に破壊しましょう。", blocks: [
      { title: "紙とハンコが支配するガラパゴス", subtitle: "THE PAPER MAZE", content: "同じ名前を何枚もの紙に書かされ数時間待たされる。このフラストレーションと公務員の膨大な残業代は社会システムの限界を示しています。" },
      { title: "住民体験を根本から変える", subtitle: "CITIZEN EXPERIENCE", features: [ { t: "マイナンバー完全連携", d: "スマホにかざすだけで本人確認が完了。転出入の手続きが自宅から完了します。" }, { t: "ワンスオンリー機構", d: "入力された情報はすべての関連部署へ自動同期。たらい回しを排除します。" }, { t: "AIチャットボット", d: "市民の質問に24時間365日的確に即答します。" } ] },
      { title: "公務員をクリエイティブな仕事へ解放", subtitle: "BACKOFFICE AUTOMATION", content: "データ入力から解放され、対面での福祉相談など人間にしかできない業務に時間を割けるようになります。" },
      { title: "災害時の命を救うデータ連携", subtitle: "EMERGENCY RESPONSE", content: "要支援者のリストと位置を可視化し救助隊へ的確な指示を出す防災インフラとして機能します。" },
      { title: "Case Study | 地方中核都市", subtitle: "GOV TRANSFORMATION", content: "オンライン申請率が80%を突破。ペーパーレス化により年間1億円の事務コスト削減を実現しました。" },
      { title: "誰一人取り残さないデジタル社会へ", subtitle: "OUR VISION", content: "高齢者でも直感的に使えるデザインで最もパブリックで優しいデジタルの基盤を創り出します。" }
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
                <h2 class="text-4xl md:text-5xl font-black mb-8 text-white">\${data.ctaTitle}</h2>
                <p class="text-gray-300 mb-12 max-w-xl mx-auto text-lg leading-relaxed">\${data.ctaDesc}</p>
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
            html = html.replace(/<body([^>]*)>([\s\S]*?)<\/body>/, `<body class="bg-gray-50 text-stone-800 min-h-screen font-sans antialiased overflow-x-hidden">\n${newMain}\n</body>`);
        }
        
        fs.writeFileSync(file, html);
        console.log(`Updated site_${id}`);
    } catch(e) {
        console.log(`Failed site_${id}`);
    }
}
