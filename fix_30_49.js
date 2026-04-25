const fs = require('fs');

const sitesData = {
  30: { colorTheme: "amber", tag: "RESTAURANT DX", headline: "「いらっしゃいませ」の裏側を、<br>完全なデータサイエンスへ。", subheadline: "万福丸 (MANPUKUMARU) は、居酒屋や飲食店のホール業務、在庫管理、シフト作成をすべてモバイル端末で統合管理する飲食店向けバーティカルSaaSです。", btnText: "デモを試す", ctaTitle: "味以外のすべてを、自動化する。", ctaDesc: "料理人は料理に集中すべきです。その他の雑務はすべてシステムに任せましょう。", blocks: [
      { title: "「紙の伝票」という前時代的アナログ", subtitle: "THE ANALOG DRAG", content: "オーダーの書き間違い、キッチンのパニック。紙ベースのオペレーションが顧客満足度を低下させています。" },
      { title: "ホールとキッチンを直結するシステム", subtitle: "SMART ORDERING", features: [ { t: "モバイルオーダー", d: "お客様のスマホから直接キッチンへ。オーダーミスを完全に防ぎます。" }, { t: "リアルタイム売上分析", d: "今日どのメニューがどれくらい売れているか、過去のデータと比較して即座に把握。" }, { t: "自動在庫連携", d: "注文が入るたびに食材の在庫が自動で引き落とされ、発注タイミングを通知します。" } ] },
      { title: "スタッフの「歩数」を半減させる", subtitle: "EFFICIENCY", content: "オーダー取りの往復がなくなることで、少ない人数でも高い回転率を維持できます。" },
      { title: "常連客を育成するCRM", subtitle: "CUSTOMER LOYALTY", content: "LINEと連携し、常連客へ最適なタイミングでクーポンを自動配信します。" },
      { title: "Case Study | 都内の海鮮居酒屋", subtitle: "CLIENT SUCCESS", content: "ホール人員を2名削減しても、顧客単価が15%アップし、クレームがゼロになりました。" },
      { title: "「美味しい」の体験を最大化する", subtitle: "OUR VISION", content: "飲食店の非効率をなくし、最高のおもてなしを実現するための基盤となります。" }
  ]},
  31: { colorTheme: "blue", tag: "SME DX", headline: "「中小企業のDX」を、<br>パッケージで提供する。", subheadline: "SME DXは、請求書、勤怠、顧客管理など、中小企業が必要とするすべてのSaaSを1つの画面で統合するオールインワンプラットフォームです。", btnText: "無料トライアル", ctaTitle: "複雑なツールは、もういらない。", ctaDesc: "ITリテラシーに関係なく、誰でも使える究極のシンプルさを追求しました。", blocks: [
      { title: "「システムが多すぎる」という新たな問題", subtitle: "SAAS FATIGUE", content: "DXを進めた結果、いくつものツールにログインしなければならず、かえって業務が煩雑になっています。" },
      { title: "すべての業務が1つのIDで完結", subtitle: "ALL-IN-ONE", features: [ { t: "統合ダッシュボード", d: "売上から社員の残業時間まで、経営に必要な数字が1画面に集約されます。" }, { t: "シングルサインオン", d: "何度もパスワードを入力する必要はありません。" }, { t: "シンプルなUI", d: "マニュアル不要で、その日から誰もが直感的に操作できます。" } ] },
      { title: "部門間のデータが自動で繋がる", subtitle: "DATA SYNC", content: "営業の成約データがそのまま請求書に連携され、二重入力の手間を省きます。" },
      { title: "専任のIT担当者がいなくても安心", subtitle: "SUPPORT", content: "導入から運用まで、専任のコンシェルジュがチャットで即座にサポートします。" },
      { title: "Case Study | 従業員50名の製造業", subtitle: "CLIENT SUCCESS", content: "バラバラだったシステムを統合した結果、事務作業の時間が月間100時間削減されました。" },
      { title: "日本の中小企業に、最強の武器を", subtitle: "OUR VISION", content: "大企業と同じレベルのITインフラを、中小企業にこそ提供します。" }
  ]},
  32: { colorTheme: "gray", tag: "CONSTRUCTION / DX", headline: "「図面と現場」のズレを、<br>クラウドで完全に無くす。", subheadline: "建設DXは、iPad一つで図面管理から黒板付き写真の撮影、協力業者とのチャットまでを完結させる施工管理アプリです。", btnText: "アプリをダウンロード", ctaTitle: "現場監督の残業を、ゼロにする。", ctaDesc: "事務所に戻ってから写真整理をする時代は終わりました。", blocks: [
      { title: "「言った・言わない」のトラブル", subtitle: "COMMUNICATION GAP", content: "最新の図面が現場に共有されておらず、やり直しが発生する。建設業界の大きな課題です。" },
      { title: "現場と事務所をリアルタイムで同期", subtitle: "CLOUD SYNC", features: [ { t: "最新図面の共有", d: "図面を更新した瞬間に現場のiPadにも反映。常に最新の情報で作業できます。" }, { t: "電子小黒板", d: "工事写真に電子黒板を自動合成。事務所での写真整理作業が不要になります。" }, { t: "協力業者とのチャット", d: "図面に直接ピンを立ててチャットで指示出しが可能。認識のズレを防ぎます。" } ] },
      { title: "報告書をワンクリックで生成", subtitle: "AUTO REPORT", content: "現場で撮った写真とメモから、その日の日報や安全書類を自動で作成します。" },
      { title: "オフラインでもサクサク動く", subtitle: "OFFLINE MODE", content: "電波の届かない地下の現場でも図面の閲覧や写真撮影が可能。電波が回復した時に自動で同期します。" },
      { title: "Case Study | 地方ゼネコン", subtitle: "CLIENT SUCCESS", content: "現場監督の残業時間が月平均40時間削減され、離職率の大幅な低下に繋がりました。" },
      { title: "「建てる」ことに集中できる環境を", subtitle: "OUR VISION", content: "現場の煩雑な事務作業をテクノロジーで消し去り、モノづくり本来の喜びを取り戻します。" }
  ]},
  33: { colorTheme: "green", tag: "REAL ESTATE / MATCHING", headline: "「空き家」という負債を、<br>地域の資産へと変える。", subheadline: "AKIYA RESCUEは、全国の放置された空き家と、DIYやリノベーションを前提に安く住みたい若者をマッチングするプラットフォームです。", btnText: "空き家を探す", ctaTitle: "古い家には、新しい価値がある。", ctaDesc: "「誰も住まない家」が、誰かの「夢のマイホーム」に生まれ変わる瞬間。", blocks: [
      { title: "増え続ける日本の「空き家問題」", subtitle: "THE ABANDONED HOUSE", content: "相続したものの住む予定がなく、固定資産税だけを払い続ける。この問題が日本中で起きています。" },
      { title: "「そのまま」で貸せる・売れる", subtitle: "AS-IS MATCHING", features: [ { t: "リフォーム不要", d: "オーナーは修繕費をかけずに現状のまま物件を登録できます。" }, { t: "DIY型賃貸", d: "入居者は自分の好きなように家を改修でき、退去時の原状回復義務もありません。" }, { t: "法務サポート", d: "複雑な契約手続きや補助金の申請をプラットフォームが代行します。" } ] },
      { title: "地域の活性化に直結", subtitle: "COMMUNITY REVIVAL", content: "若い世代が移住し家を直すことで、周辺地域全体の活気と価値が向上します。" },
      { title: "空き家の「現状」を3Dで可視化", subtitle: "VIRTUAL TOUR", content: "事前に物件の傷み具合や間取りをオンラインの3Dツアーで正確に確認できます。" },
      { title: "Case Study | 築50年の古民家", subtitle: "CLIENT SUCCESS", content: "10年間放置されていた古民家が、カフェを開きたい若者の手に渡り、地域の人気スポットに生まれ変わりました。" },
      { title: "日本の風景を守り、繋ぐ", subtitle: "OUR VISION", content: "空き家を「負動産」から「資源」へと再定義し、持続可能な地域社会のループを作ります。" }
  ]},
  34: { colorTheme: "rose", tag: "INBOUND / MARKETING", headline: "「外国人観光客」のスマホに、<br>あなたのお店を直接届ける。", subheadline: "インバウンドMEOは、Googleマップや海外のローカル検索エンジンに対して、多言語での店舗情報最適化を全自動で行う集客SaaSです。", btnText: "無料診断", ctaTitle: "国境を越える、集客の自動化。", ctaDesc: "メニューを英語にするだけでは不十分です。彼らが「検索」した時に、一番上に表示されなければ。", blocks: [
      { title: "「見つからない」日本の名店", subtitle: "THE VISIBILITY GAP", content: "どれだけ美味しい料理を提供していても、英語や中国語で検索した時に地図に出なければ、外国人には存在しないのと同じです。" },
      { title: "多言語でのMEOを完全自動化", subtitle: "GLOBAL MEO", features: [ { t: "一括多言語翻訳", d: "店舗情報やメニューをAIが自然な多言語に翻訳し、各国の主要マップアプリに一括配信します。" }, { t: "口コミの自動翻訳と分析", d: "外国語で書かれたレビューを日本語に翻訳し、ネガティブな意見にはAIが返信案を作成します。" }, { t: "インバウンド需要予測", d: "周辺のホテルの予約状況から、「来週どの国からの観光客が増えるか」を予測します。" } ] },
      { title: "写真と動画で視覚的に訴求", subtitle: "VISUAL MARKETING", content: "外国人が好むシズル感のある写真や、店内ツアー動画を最適化して配置します。" },
      { title: "免税手続きの案内を自動化", subtitle: "TAX FREE SUPPORT", content: "店舗の免税対応状況を明確に表示し、来店動機を強力に後押しします。" },
      { title: "Case Study | 京都の伝統工芸店", subtitle: "CLIENT SUCCESS", content: "多言語でのMEO対策を実施した結果、外国人観光客の来店数が前年比で300%増加しました。" },
      { title: "日本の魅力を、世界へ正しく", subtitle: "OUR VISION", content: "言葉とデジタルの壁を取り払い、日本の素晴らしい体験を世界中の人々に届けます。" }
  ]},
  35: { colorTheme: "amber", tag: "AI VIDEO / CONTENT", headline: "1時間の動画を、<br>「15秒のバイラル動画」へ錬成する。", subheadline: "POD-SHORTSは、YouTubeやポッドキャストの長尺動画から、最も「バズる」瞬間をAIが自動で切り抜き、テロップとエフェクトを付けてショート動画を量産する次世代エディターです。", btnText: "動画を切り抜く", ctaTitle: "コンテンツの「寿命」を最大化する。", ctaDesc: "眠っている過去の動画資産が、TikTokとYouTube Shortsで数百万再生を叩き出します。", blocks: [
      { title: "ショート動画を作る圧倒的な手間", subtitle: "THE EDITING BURDEN", content: "1時間の動画を全部見直して面白い部分を探し、縦型にトリミングし、テロップを手作業で付ける。この絶望的な作業量がクリエイターを疲弊させています。" },
      { title: "「バズの法則」を学習したAI", subtitle: "VIRAL ENGINE", features: [ { t: "ハイライト自動抽出", d: "音声のトーンや笑い声、キーワードから、視聴維持率が高くなる「最高の瞬間」をAIが見つけ出します。" }, { t: "顔追従オートフレーミング", d: "横長動画から人物の顔を自動で追いかけ、縦型（9:16）のフレームに常に収まるよう自動調整します。" }, { t: "高精度ダイナミックテロップ", d: "話者の言葉を瞬時に文字起こしし、TikTok風のポップで視認性の高いテロップを自動で付与します。" } ] },
      { title: "SNSへの全自動スケジュール投稿", subtitle: "AUTO PUBLISHING", content: "生成された数十本のショート動画を、最適な時間帯に各SNSへ自動で投稿予約。運用を完全に手放せます。" },
      { title: "ブランドに合わせたカスタマイズ", subtitle: "BRAND KITS", content: "自社のブランドカラーやロゴ、独自のフォントをあらかじめ設定し、一貫した世界観を保ちます。" },
      { title: "Case Study | ビジネス系YouTuber", subtitle: "CLIENT SUCCESS", content: "過去の対談動画をPOD-SHORTSに読み込ませただけで月に100本のショート動画が完成。チャンネル登録者数が1ヶ月で5万人増加しました。" },
      { title: "すべての言葉を、チャンスに変える", subtitle: "OUR VISION", content: "価値ある情報が「長すぎる」という理由で埋もれるのを防ぎ、最も伝わりやすい形に変換して世界へ拡散します。" }
  ]},
  36: { colorTheme: "blue", tag: "B2B PLATFORM / CLEANING", headline: "「最高の清掃業者」が、<br>必ず見つかる。", subheadline: "BIO-CLEAN NETWORKは、オフィスビルや工場の特殊清掃など、高度な技術を持つ清掃業者と企業を直接繋ぐ、B2B特化型の清掃マッチングプラットフォームです。", btnText: "業者を探す", ctaTitle: "清潔さは、最強の企業ブランドである。", ctaDesc: "ただゴミを捨てるだけではありません。プロの技術が、オフィスの空気と社員の士気を変えます。", blocks: [
      { title: "「安かろう悪かろう」の清掃業界", subtitle: "THE QUALITY PROBLEM", content: "清掃業者の選定は価格だけで決まりがちであり、結果として雑な清掃やトラブルが多発しています。技術力のある業者が適正に評価されていません。" },
      { title: "スキルと実績による透明なマッチング", subtitle: "SKILL VERIFICATION", features: [ { t: "詳細なスキルタグ", d: "「大理石の研磨」「クリーンルーム対応」など、業者の専門スキルを可視化します。" }, { t: "相互レビューシステム", d: "実際の清掃クオリティを企業側が評価し、スコアの高い業者が優遇される仕組みです。" }, { t: "見積もりの標準化", d: "面積や汚れの度合いを入力するだけでAIが適正価格を提示し、ボッタクリを防ぎます。" } ] },
      { title: "チャットでの直接コミュニケーション", subtitle: "DIRECT CHAT", content: "仲介業者を通さず、現場の写真を送って直接やり取りが可能。細かい要望のズレを無くします。" },
      { title: "定期清掃の自動スケジュール化", subtitle: "SUBSCRIPTION", content: "一度良い業者が見つかれば、サブスクリプションとして毎月の清掃を自動で発注・決済できます。" },
      { title: "Case Study | 大規模コワーキングスペース", subtitle: "CLIENT SUCCESS", content: "従来の業者からプラットフォーム経由で選定した業者に変更。清掃の質が劇的に向上し、利用者からのクレームがゼロになりました。" },
      { title: "「綺麗」を支えるプロフェッショナルへ", subtitle: "OUR VISION", content: "清掃というエッセンシャルな仕事の価値を正しく引き上げ、働くすべての人に快適な空間を提供します。" }
  ]},
  37: { colorTheme: "fuchsia", tag: "HR TECH / RETENTION", headline: "「突然の退職」は、<br>実は突然ではない。", subheadline: "MIND-RADARは、Slackのテキスト解析やパルスサーベイから社員の「見えないストレス」を数値化し、離職を未然に防ぐ予測型HRプラットフォームです。", btnText: "離職リスクを診断", ctaTitle: "社員の「SOS」に、誰よりも早く気づく。", ctaDesc: "退職届が出されてからでは遅すぎます。データが示す小さな変化を見逃さないでください。", blocks: [
      { title: "「最近様子がおかしい」という手遅れ", subtitle: "THE SILENT EXIT", content: "優秀な社員ほど、限界まで我慢してある日突然辞めてしまいます。マネージャーの「直感」に頼ったケアでは、テレワーク時代の離職は防げません。" },
      { title: "コミュニケーションから「感情」を読み解く", subtitle: "EMOTION AI", features: [ { t: "テキストセンチメント解析", d: "チャットツール上の会話のトーンや返信速度の変化から、ストレス値の増減をAIが検知します。" }, { t: "1分で終わるパルスサーベイ", d: "週に1回、スマホで簡単に答えられる質問を配信し、コンディションの推移を定点観測します。" }, { t: "ネットワーク分析", d: "「誰と誰がよくコミュニケーションを取っているか」を可視化し、組織内で孤立している社員を発見します。" } ] },
      { title: "マネージャーへの具体的なアクション提案", subtitle: "MANAGER ASSIST", content: "「Aさんのモチベーションが低下しています。今週1on1を設定し、キャリアについてヒアリングしてください」とAIが具体的な指示を出します。" },
      { title: "心理的安全性のスコアリング", subtitle: "TEAM HEALTH", content: "チーム全体の「意見の言いやすさ」をスコア化し、組織の根本的な課題を浮き彫りにします。" },
      { title: "Case Study | リモートワーク中心のIT企業", subtitle: "CLIENT SUCCESS", content: "導入後、隠れた不満を抱えていた社員を早期にフォローアップすることに成功。年間の離職率が半減しました。" },
      { title: "すべての才能を、手放さない", subtitle: "OUR VISION", content: "企業と個人の絆をデータで強く結び直し、誰もが安心してパフォーマンスを発揮できる組織を創ります。" }
  ]},
  38: { colorTheme: "indigo", tag: "VR / METAVERSE WORKSPACE", headline: "「通勤ゼロ」で、<br>「隣にいるような」オフィスへ。", subheadline: "V-OFFICEは、アバターと空間オーディオを活用し、リモートワークの「孤独感」と「コミュニケーション不足」を完全に解消する、次世代の仮想オフィス空間です。", btnText: "仮想空間に入る", ctaTitle: "「ちょっといいですか？」が、再び言える場所に。", ctaDesc: "ZoomのURLを発行する手間はもう不要です。ただ、アバターを近づけるだけで会話が始まります。", blocks: [
      { title: "リモートワークが奪った「雑談」", subtitle: "THE MISSING CHAT", content: "会議はできても、コーヒーサーバーの前での何気ない雑談や、隣の席の先輩に「ちょっと質問する」ことができない。これがチームの創造性と結束力を著しく低下させています。" },
      { title: "距離と声が連動する「空間オーディオ」", subtitle: "SPATIAL AUDIO", features: [ { t: "アバターの距離と音量の連動", d: "仮想オフィス内でアバターが近づけば声が大きくなり、離れれば小さくなる。現実と全く同じ感覚で立ち話ができます。" }, { t: "シームレスな画面共有", d: "近づいて「これ見て」と言いながら、即座に自分のPC画面を空間上のホワイトボードに投影できます。" }, { t: "ステータスの可視化", d: "「集中モード（話しかけないで）」や「電話中」など、アバターの上にステータスが表示され空気を読んだコミュニケーションが可能です。" } ] },
      { title: "雑談から生まれるセレンディピティ", subtitle: "SERENDIPITY", content: "たまたま通りかかった別の部署の人と会話が弾む。そんな「偶然の出会い」を仮想空間上で意図的にデザインします。" },
      { title: "ブラウザだけで動く軽快な動作", subtitle: "NO INSTALLATION", content: "重いVRゴーグルや専用ソフトのインストールは一切不要。URLをクリックするだけで、低スペックなPCからでも快適に参加できます。" },
      { title: "Case Study | フルリモートのスタートアップ", subtitle: "CLIENT SUCCESS", content: "V-OFFICE導入により、社員同士の気軽な相談が爆発的に増加。開発のスピードが上がり、孤独感による退職者もゼロになりました。" },
      { title: "物理的な制約からの解放", subtitle: "OUR VISION", content: "どこに住んでいても、最強のチームの一員として働ける。私たちは新しい時代の「集まる場所」を創ります。" }
  ]},
  39: { colorTheme: "amber", tag: "LUXURY / HOSPITALITY", headline: "「無人島」を、<br>あなただけの五つ星ホテルへ。", subheadline: "ISLAND-STAYは、日本全国の無人島やプライベートビーチに、環境負荷ゼロのモバイル型ラグジュアリーヴィラを配置し、究極の非日常を提供するエクスクルーシブな宿泊プラットフォームです。", btnText: "ヴィラを予約する", ctaTitle: "誰にも邪魔されない、圧倒的な静寂。", ctaDesc: "既存の高級ホテルでは味わえない、自然と完全に一体化する体験を。", blocks: [
      { title: "「観光地」という喧騒からの逃避", subtitle: "THE ULTIMATE ESCAPE", content: "富裕層が真に求めているのは、豪華なシャンデリアではなく「完全なプライバシー」と「手付かずの自然」です。しかし、日本の美しい自然環境の多くは宿泊施設が存在せず、滞在が不可能です。" },
      { title: "自然を傷つけない「モバイルヴィラ」", subtitle: "OFF-GRID ARCHITECTURE", features: [ { t: "100%オフグリッド", d: "太陽光発電、独自の浄水システム、バイオトイレを完備。外部からのインフラ接続なしで数週間のラグジュアリーな滞在を可能にします。" }, { t: "設置と撤去が数日で完了", d: "基礎工事を行わないため、国立公園などの厳しい規制がある場所でも、自然を一切破壊せずに「ポンと置く」だけで極上の空間が完成します。" }, { t: "AIによる環境制御", d: "室内の気温、湿度、そして星空を眺めるための天窓の開閉まで、すべてAIが自動制御し最高の快適性を保ちます。" } ] },
      { title: "ヘリコプターでのシームレスな送迎", subtitle: "PRIVATE TRANSFER", content: "東京のヘリポートから無人島まで直行。移動時間すらも極上のエンターテインメントへと昇華させます。" },
      { title: "地元の一流シェフによる出張料理", subtitle: "LOCAL GASTRONOMY", content: "その土地でその日に採れた最高の海鮮や食材を、専属のシェフがヴィラのキッチンで調理。究極の地産地消を提供します。" },
      { title: "Case Study | 瀬戸内海の無人島", subtitle: "CLIENT SUCCESS", content: "1泊100万円という価格設定にも関わらず、国内外のエグゼクティブから予約が殺到。地域には環境保全の資金が還元される仕組みを構築しました。" },
      { title: "地球の美しさを、独り占めする", subtitle: "OUR VISION", content: "私たちは自然を消費するのではなく、自然の価値を再定義し、最も持続可能で美しい形で人々に提供します。" }
  ]},
  40: { colorTheme: "gray", tag: "CONSTRUCTION TECH / GENERATIVE AI", headline: "「建築家」の頭脳を、<br>クラウドで実行する。", subheadline: "GEN-ARCHは、敷地の条件と要望を入力するだけで、デザイン、構造計算、そして建築基準法チェックを完全にクリアした何千通りもの建築モデルを数分で生成する、建築AIプラットフォームです。", btnText: "AIで設計する", ctaTitle: "設計図の作成に、もう数ヶ月も待たない。", ctaDesc: "美しいデザインと、絶対的な安全性。その両立をアルゴリズムが瞬時に証明します。", blocks: [
      { title: "「構造計算」というクリエイティブの足枷", subtitle: "THE STRUCTURAL BOTTLENECK", content: "建築家がどれほど美しいデザインを描いても、それが構造的に安全か、法的に問題ないかを人間が計算し直すために膨大な時間がかかり、結果的に平凡なデザインに落ち着いてしまうというジレンマがあります。" },
      { title: "デザインとエンジニアリングの同時生成", subtitle: "PARAMETRIC DESIGN", features: [ { t: "数万パターンの自動生成", d: "「日当たりを最大化しつつ、コストを抑える」。相反する条件を満たす形状をAIが遺伝的アルゴリズムで進化させ、最適なデザインを提案します。" }, { t: "リアルタイム構造計算", d: "形状が変化するたびに、裏側でAIが瞬時に耐震性や風荷重を計算。倒壊リスクのあるデザインは最初から排除されます。" }, { t: "建築基準法の自動チェック", d: "斜線制限や容積率など、複雑な法規制をクリアしているかをシステムが自動判定。役所への確認申請のプロセスを劇的に短縮します。" } ] },
      { title: "環境負荷（CO2）のシミュレーション", subtitle: "SUSTAINABILITY", content: "その建物を建て、運用するのにどれくらいのエネルギーを消費するか。AIが建材の選定から空調効率までを計算し、最もエコな設計を導き出します。" },
      { title: "BIMデータへのダイレクトエクスポート", subtitle: "BIM INTEGRATION", content: "生成されたモデルはそのままBIMソフト（Revit等）のデータとして出力可能。施工図面への移行がシームレスに行えます。" },
      { title: "Case Study | 大手デベロッパーのマンション設計", subtitle: "CLIENT SUCCESS", content: "従来3ヶ月かかっていた基本設計のフェーズがわずか1週間に短縮。さらに、AIが導き出した独特の配置計画により、全戸南向きを実現し販売価格の向上に貢献しました。" },
      { title: "都市を、コードで再構築する", subtitle: "OUR VISION", content: "AIは建築家の仕事を奪うものではありません。つまらない計算作業から人間を解放し、真にクリエイティブな空間創りに集中するための最強の道具です。" }
  ]},
  41: { colorTheme: "fuchsia", tag: "FASHION TECH / AR", headline: "スマホのカメラが、<br>世界最強の「試着室」になる。", subheadline: "VIRTUAL-FITTINGは、AIによる高精度なボディスキャンと物理演算を用いた衣服のARシミュレーションにより、「試着せずに服を買う不安」を完全に解消するアパレル向けプラグインです。", btnText: "AR試着を体験する", ctaTitle: "「サイズが合わない」という返品を、過去のものに。", ctaDesc: "あなたの体型を正確に学習したアバターが、画面の向こうで何百着でも着替えてくれます。", blocks: [
      { title: "ECアパレル最大の壁「サイズ不安と返品」", subtitle: "THE RETURN RATE", content: "「ネットで服を買うと、届いた時にイメージと違う」。この不安が購入率（コンバージョン）を下げ、また大量の返品処理がアパレル企業の利益を激しく圧迫しています。" },
      { title: "布の「揺れ」や「シワ」まで計算するAI", subtitle: "PHYSICS ENGINE", features: [ { t: "ミリ単位の3Dボディスキャン", d: "スマホのカメラで全身をぐるりと撮影するだけで、AIが身長、肩幅、ウエストなどを正確に計測し、あなたのデジタルツインを作成します。" }, { t: "布の物理演算（クロスシミュレーション）", d: "シルクの柔らかさや、デニムの硬さ。素材ごとの重力や摩擦を計算し、「歩いた時にどうシワが寄るか」までをリアルタイムでシミュレーションします。" }, { t: "既存のECサイトへの簡単組み込み", d: "ブランド側は服のパターン（型紙）データをアップロードするだけ。既存のShopifyなどのサイトに1行のコードで「AR試着ボタン」を追加できます。" } ] },
      { title: "手持ちの服との「バーチャル着回し」", subtitle: "VIRTUAL CLOSET", content: "過去に買った服のデータを保存。新しく買おうとしているジャケットが、手持ちのパンツと合うかどうかを画面上で組み合わせて確認できます。" },
      { title: "環境に優しい「受注生産」へのシフト", subtitle: "ON-DEMAND SHIFT", content: "ユーザーがバーチャルで試着し、本当に欲しいものだけを生産する。大量生産・大量廃棄のアパレル業界の構造を根本から変革します。" },
      { title: "Case Study | D2Cファッションブランド", subtitle: "CLIENT SUCCESS", content: "VIRTUAL-FITTING導入後、サイズ違いによる返品率が40%低下。同時に「試着の楽しさ」が話題を呼び、SNS経由の売上が2倍に跳ね上がりました。" },
      { title: "ファッションの自由を、すべての体型に", subtitle: "OUR VISION", content: "「自分に似合う服がわからない」という悩みをテクノロジーで解決し、誰もが自信を持ってファッションを楽しめる世界を創ります。" }
  ]},
  42: { colorTheme: "indigo", tag: "MOBILITY / DRONE LOGISTICS", headline: "「空」という名の、<br>渋滞のないハイウェイ。", subheadline: "DRONE-MARTは、過疎地から都市部まで、AIによる完全自律飛行のドローンを活用し、ラストワンマイルの配送を劇的に高速化・低コスト化する空の物流プラットフォームです。", btnText: "飛行ルートを確認", ctaTitle: "荷物はもう、道を走らない。", ctaDesc: "ドライバー不足も、山の険しさも関係ない。空を直線で結べば、世界はもっと小さくなる。", blocks: [
      { title: "崩壊寸前の「ラストワンマイル」", subtitle: "THE DELIVERY CRISIS", content: "ネット通販の爆発的な増加に対し、配達する人間の数は圧倒的に足りていません。特に山間部や離島への配送は、採算が合わず物流網の維持が限界を迎えています。" },
      { title: "安全を絶対的に担保する自律飛行システム", subtitle: "AUTONOMOUS FLIGHT", features: [ { t: "AI障害物回避機能", d: "電線や鳥、突然の突風。飛行中に遭遇するあらゆる障害物をカメラとLiDARセンサーで瞬時に検知し、自律的にルートを変更して衝突を回避します。" }, { t: "耐候性ヘビー・ドローン", d: "雨や風速15mの強風下でも安定して飛行し、最大5kgの荷物を数十キロ先まで運ぶことができる産業用の強靭な機体設計。" }, { t: "センチメートル単位の精密着陸", d: "GPSだけでなく画像認識を組み合わせることで、指定された庭先のターゲットマークの上に、荷物を傷つけることなくミリ単位の精度でそっと降ろします。" } ] },
      { title: "空の交通整理「クラウド管制塔」", subtitle: "UTM SYSTEM", content: "空を飛ぶ何千機ものドローン同士がぶつからないよう、クラウド上の管制システム（UTM）が一元管理し、最適な高度とルートをリアルタイムで割り当てます。" },
      { title: "薬や血液の「命を救う」緊急輸送", subtitle: "EMERGENCY DELIVERY", content: "山間部で急病人が出た際、救急車が到着するよりも早く、AEDや緊急用の医薬品をドローンで直送。1分1秒が命を分ける現場で真価を発揮します。" },
      { title: "Case Study | 離島の医療ネットワーク", subtitle: "CLIENT SUCCESS", content: "本土から船でしか薬を運べなかった離島。DRONE-MARTの導入により、発注からわずか30分で必要な処方薬が患者の家まで直接届くようになり、医療格差が劇的に改善されました。" },
      { title: "空を、日常のインフラへ", subtitle: "OUR VISION", content: "SF映画の中で描かれた「空飛ぶ車」や「ドローン配達」は、すでに私たちの技術によって現実のものとなっています。物流の限界を空から突破します。" }
  ]},
  43: { colorTheme: "green", tag: "CIRCULAR ECONOMY / 3D PRINTING", headline: "「捨てる」という概念を、<br>家具から無くす。", subheadline: "3D-FURNITUREは、廃棄されたプラスチックや植物由来のバイオ素材を用い、巨大な3Dプリンターで家具を「オンデマンド製造」するサーキュラー（循環型）プラットフォームです。", btnText: "家具をデザインする", ctaTitle: "飽きたら溶かして、もう一度作る。", ctaDesc: "ゴミ箱へ捨てるのではなく、次の家具の「材料」にする。究極の持続可能性がここに。", blocks: [
      { title: "大量生産され、大量に捨てられる家具", subtitle: "THE FAST FURNITURE PROBLEM", content: "安価で買える家具の多くは、引っ越しのたびに捨てられ、巨大な粗大ゴミとして地球を汚染しています。木を切り倒し、海外から船で運び、数年で捨てるというサイクルは、もはや持続不可能です。" },
      { title: "材料の「循環」を前提とした製造プロセス", subtitle: "CIRCULAR PRINTING", features: [ { t: "100%リサイクル可能な独自素材", d: "木材の廃材や、海洋プラスチックゴミを独自技術でペレット化。3Dプリンターのインクとして使用でき、何度でも溶かして再利用できる魔法の素材です。" }, { t: "在庫を持たない「オンデマンド生産」", d: "ユーザーから注文が入った瞬間に、工場にある巨大なロボットアーム式3Dプリンターが稼働。倉庫に在庫を抱える無駄が一切ありません。" }, { t: "下取り＆再プリント・プログラム", d: "ライフステージの変化で不要になった家具は当社が回収。それを細かく砕いて溶かし、新しいデザインの家具としてもう一度ユーザーへ届けます。" } ] },
      { title: "自分の体型に合わせたフルカスタム", subtitle: "PARAMETRIC FIT", content: "スマホで自分の体型をスキャンすれば、背骨のカーブや足の長さに完璧にフィットした「世界に一つだけの椅子」の3Dデータが生成され、そのままプリントされます。" },
      { title: "複雑で有機的な「自然界のデザイン」", subtitle: "GENERATIVE DESIGN", content: "直角の木の板では絶対に作れない、木の根や骨の構造を模倣した美しい曲線美。3Dプリンターだからこそ実現できる、強くて軽い画期的なデザインです。" },
      { title: "Case Study | グローバル企業のサステナブル・オフィス", subtitle: "CLIENT SUCCESS", content: "環境配慮を掲げる企業のオフィス移転。すべてのデスクと椅子を、自社工場で出たプラスチック廃材を再利用してプリント。究極の「ゴミゼロ・オフィス」を実現し、企業のESG評価を大きく押し上げました。" },
      { title: "形を変えて、永遠に生き続ける", subtitle: "OUR VISION", content: "私たちは家具を「売る」のではありません。素材というリソースをユーザーと「共有」し、時代や好みに合わせて形を変えながら、永遠に循環させる仕組みを提供します。" }
  ]},
  44: { colorTheme: "blue", tag: "WEB3 / METAVERSE FASHION", headline: "「現実」よりも、<br>「仮想空間」で服を買う時代。", subheadline: "METAKICKSは、限定スニーカーやデジタルアパレルをNFTとして発行し、ゲームやメタバース空間、そして現実世界でも着用できるようにする、デジタルとフィジカルを繋ぐファッションインフラです。", btnText: "デジタルスニーカーを見る", ctaTitle: "あなたのクローゼットは、ブロックチェーン上にある。", ctaDesc: "布や糸でできている必要はありません。データの服が、数百万の価値を生み出します。", blocks: [
      { title: "アバターが着る「自己表現」の価値", subtitle: "THE VIRTUAL IDENTITY", content: "Z世代にとって、ゲーム空間のアバターに着せる服は、現実世界の服と同じくらい重要です。しかし、プラットフォーム間でアイテムを持ち運べないという「デジタルデータの囲い込み」が問題でした。" },
      { title: "本物であることを証明する技術", subtitle: "NFT AUTHENTICITY", features: [ { t: "ブロックチェーンによる唯一性の証明", d: "「このデジタルスニーカーは世界に100足しかない」。NFT技術により、コピー可能なデジタルデータに「本物であることの証明書」を付与し、希少価値を生み出します。" }, { t: "マルチメタバース対応（相互運用性）", d: "一つのアイテムを買えば、Fortnite、Roblox、VRChatなど、異なるゲームやメタバース空間を横断して同じ服を着て遊ぶことができます。" }, { t: "ARでの着用とSNSシェア", d: "スマホのカメラを通せば、現実世界の自分の足元にデジタルのスニーカーが重なります。そのまま動画を撮ってTikTokやInstagramで自慢することが可能です。" } ] },
      { title: "クリエイターの権利を永久に守る", subtitle: "SMART ROYALTIES", content: "アイテムがユーザー間で転売されるたびに、売上の一部が自動的に元のデザイナーに還元（ロイヤルティ）される仕組み。クリエイターが正当に稼げるエコシステムです。" },
      { title: "デジタルから「フィジカル（現実）」への交換", subtitle: "PHYGITAL EXPERIENCE", content: "NFTを持っている人だけが、現実世界で全く同じデザインの「実物のスニーカー」を製造・受け取ることができる権利（リディーム機能）を搭載。現実と仮想の価値をリンクさせます。" },
      { title: "Case Study | 世界的スポーツブランドの参入", subtitle: "CLIENT SUCCESS", content: "有名スニーカーブランドとコラボし、メタバース限定のデジタルシューズを7000足販売。開始わずか7分で完売し、約3億円の売上を記録。在庫も輸送コストもゼロという驚異的な利益率を叩き出しました。" },
      { title: "ファッションの物理法則からの解放", subtitle: "OUR VISION", content: "炎を纏うジャケットや、宙に浮くスニーカー。現実の重力や素材の制約から解放された、真に自由なクリエイティビティの爆発をサポートします。" }
  ]},
  45: { colorTheme: "rose", tag: "BEAUTY TECH / AI DIAGNOSTICA", headline: "「なんとなく」のスキンケアを、<br>医療レベルのデータへ。", subheadline: "SKIN-DIAGNOSTICAは、スマホのカメラで顔を撮影するだけで、シミ、シワ、水分量など肌の微細な状態をAIが解析し、数万種類の化粧品から「今のあなた」に最適な一本を導き出すAI肌診断アプリです。", btnText: "肌診断を試す", ctaTitle: "インフルエンサーの推薦より、確実なデータを。", ctaDesc: "他人の「良かった」は、あなたには合いません。自分の肌の真実を知ることから始めましょう。", blocks: [
      { title: "「自分に合う化粧品がわからない」という永遠の迷子", subtitle: "THE BEAUTY MAZE", content: "店頭に並ぶ無数の化粧品。美容部員のアドバイスも、結局は自社製品を売るためのもの。消費者は「本当に自分の肌に効くのか？」がわからないまま、高額な化粧品を買い、試しては捨てるという無駄を繰り返しています。" },
      { title: "皮膚科医の目をスマホに実装する", subtitle: "AI DERMATOLOGIST", features: [ { t: "高精度フェイシャル・スキャン", d: "特殊な機器は不要。スマホのカメラで撮った画像から、毛穴の深さ、隠れジミ、赤み、油分と水分のバランスを、医療レベルのAIが瞬時にスコア化します。" }, { t: "数万の成分データベースとの照合", d: "「あなたの肌は現在バリア機能が低下しているため、セラミドが高配合されたA社の化粧水が最適です」。肌の状態と成分データを照合しマッチングを行います。" }, { t: "肌の変化のトラッキング", d: "毎日撮影することで「この美容液を使い始めてから、シミの面積が5%減少した」という効果を数値とグラフで可視化。モチベーションを維持させます。" } ] },
      { title: "パーソナライズされた「オーダーメイドコスメ」", subtitle: "CUSTOM BLEND", content: "既存の製品に合うものがなければ、診断データをもとに、あなた専用の成分をその場で調合した化粧水や美容液を工場から直送するサービスも提供します。" },
      { title: "生理周期や気象データとの連動", subtitle: "DYNAMIC ADVICE", content: "「明日は湿度が極端に下がるため、いつもより重めのクリームを使ってください」。環境や体調に合わせた日々のケアをAIが提案します。" },
      { title: "Case Study | 大手化粧品メーカーのECサイト", subtitle: "CLIENT SUCCESS", content: "自社ECサイトに当社のAI診断プラグインを導入。ユーザーが納得して購入するため、客単価が20%向上し、返品や解約率が劇的に減少しました。" },
      { title: "「美しさ」を、科学で証明する", subtitle: "OUR VISION", content: "私たちは圧倒的なデータとテクノロジーで、一人ひとりが自分史上最高の肌に出会える最短ルートを提供します。" }
  ]},
  46: { colorTheme: "amber", tag: "ROBOTICS / FOOD SERVICE", headline: "「美味しいコーヒー」を、<br>コードとモーターで抽出する。", subheadline: "ROBO-CAFEは、熟練のバリスタの動きをモーションキャプチャで完全再現した多関節ロボットアームが、注文からドリップ、提供までを全自動で行う、究極の無人カフェ・プラットフォームです。", btnText: "ロボットの動きを見る", ctaTitle: "一杯の完璧なブレンドを、何度でも。", ctaDesc: "人間のように疲れることも、機嫌が悪くなることもありません。ただひたすらに、最高の一杯を追求し続けます。", blocks: [
      { title: "飲食業界の「深刻な人手不足」と「品質のムラ」", subtitle: "THE BARISTA BOTTLENECK", content: "時給を上げてもアルバイトが集まらない。やっと育てたスタッフがすぐに辞めてしまう。さらに、淹れる人によってコーヒーの味が変わってしまうという限界が来ています。" },
      { title: "匠の技を「デジタルデータ」として記録する", subtitle: "MOTION CAPTURE", features: [ { t: "バリスタの動作の完全再現", d: "世界大会優勝レベルのバリスタの腕にセンサーを付け、お湯を注ぐ速度、円を描く角度、蒸らしの時間をデータ化。ロボットアームがそれを1ミリの狂いもなくトレースします。" }, { t: "豆の状態に合わせた動的調整", d: "コーヒー豆の焙煎からの日数や、その日の気温・湿度をセンサーで検知。AIが最適な「挽き目（粒度）」と「湯温」を自動計算します。" }, { t: "圧倒的な生産スピードとエンタメ性", d: "2本のアームを使って同時に4杯のコーヒーを抽出可能。なめらかで未来的なロボットの動き自体が、顧客を惹きつける最高のエンターテインメントになります。" } ] },
      { title: "モバイルオーダーによるゼロ・タイム提供", subtitle: "SEAMLESS ORDERING", content: "通勤電車の中からスマホで注文と決済を完了。「あと3分で店に着く」というGPS情報をロボットが受け取り、来店した瞬間に熱々のコーヒーがロッカーから提供されます。" },
      { title: "24時間365日、わずか2坪で営業可能", subtitle: "MICRO SPACE", content: "人間が動くスペースや休憩室が不要なため、駅のデッドスペースやオフィスの片隅など、わずか2坪（約6平米）の面積があれば無人のカフェを開業できます。" },
      { title: "Case Study | 都心のオフィスビル・ロビー", subtitle: "CLIENT SUCCESS", content: "人間のスタッフでは対応不可能な早朝や深夜にも高品質なコーヒーを提供し、驚異的な利益率を達成しました。" },
      { title: "「作業」を機械に、「おもてなし」を人間に", subtitle: "OUR VISION", content: "私たちは「単調な抽出作業」をロボットに任せることで、人間が「新しいレシピの開発」や「顧客との深い会話」に集中できる未来を創ります。" }
  ]},
  47: { colorTheme: "gray", tag: "SAAS / BARBERSHOP", headline: "「男の隠れ家」を、<br>データで武装する。", subheadline: "GROOM & GRINDは、予約管理から顧客の「フェード（刈り上げ）のミリ数」までを記録し、バーバーショップ特有のカルチャーと経営効率を両立させる、業界特化型のCRM（顧客管理）プラットフォームです。", btnText: "カルテ管理を試す", ctaTitle: "「いつもの」の一言で、すべてが伝わる。", ctaDesc: "紙のノートにメモした顧客情報は捨てましょう。職人の記憶力を、クラウドに拡張する時です。", blocks: [
      { title: "汎用的な美容室向けシステムが「合わない」", subtitle: "THE MISMATCH", content: "美容室向けの予約システムは可愛いデザインや不要な機能が多く、硬派なバーバーのカルチャーや特殊なメニュー体系には全くフィットしていませんでした。" },
      { title: "バーバーに特化した超実践的な機能", subtitle: "BARBER FOCUSED", features: [ { t: "ビジュアル・フェードカルテ", d: "頭の形の3Dモデル上に、バリカンのミリ数や前回のカットラインを視覚的に記録できる専用の電子カルテ機能を搭載。" }, { t: "「いつもの」を再現するスマート予約", d: "顧客は専用アプリから、「前回と同じ担当者・同じメニュー」をわずか2タップで予約可能。リピート率を劇的に向上させます。" }, { t: "ポマード・物販の自動レコメンド", d: "顧客の髪質データと過去の履歴から、「このスタイルにはこのワックスが合います」と自動でプッシュ通知を送り、物販の売上を底上げします。" } ] },
      { title: "無断キャンセル（ドタキャン）の完全防御", subtitle: "NO-SHOW PREVENTION", content: "予約時の事前決済とキャンセル料の自動引き落とし機能を実装。忙しい週末の売上を直撃する悪質な無断キャンセルを防ぎます。" },
      { title: "店舗の「世界観」を崩さないUIデザイン", subtitle: "CULTURE FIT", content: "ブラックとゴールドを基調とした、タトゥーやバイクカルチャーに親和性の高いダークモードUI。お店のiPadに置いてあっても完璧に溶け込みます。" },
      { title: "Case Study | ストリート系バーバーショップ", subtitle: "CLIENT SUCCESS", content: "電話予約による施術のストップがなくなり、1日あたりの対応人数が2名増加。無断キャンセルもゼロになり月商が20%アップしました。" },
      { title: "「職人の美学」をシステムで支える", subtitle: "OUR VISION", content: "バーバーという伝統的でカッコいいカルチャーをリスペクトしています。彼らがハサミとバリカンに100%集中できるよう裏側をサポートします。" }
  ]},
  48: { colorTheme: "fuchsia", tag: "SAAS / SALON CRM", headline: "「また来ます」の嘘を、<br>AIは見抜く。", subheadline: "SALON CRM PROは、美容室における顧客の来店サイクルとLINEの既読データを解析し、「次に来なくなる可能性が高い顧客」を事前に予測してピンポイントでアプローチする、チャーン（離客）防止特化型のAIシステムです。", btnText: "離客予測システムを試す", ctaTitle: "「新規集客」の泥沼から抜け出す。", ctaDesc: "クーポン目当ての新規客を追いかけるのはもう終わりです。あなたの宝は、すでに名簿の中にあります。", blocks: [
      { title: "「なぜ失客したのか」がわからない恐怖", subtitle: "THE SILENT CHURN", content: "担当したお客様が「不満を言わずに、ただ静かに来なくなる」。なぜ失客したのかがブラックボックスであり、常に高い広告費を払って新規客を入れ続けなければ店が潰れてしまいます。" },
      { title: "来店データから「離脱のサイン」を検知", subtitle: "CHURN PREDICTION", features: [ { t: "AIによる来店サイクル予測", d: "顧客一人ひとりの独自の来店リズムをAIが学習し、リズムが崩れた瞬間にアラートを出します。" }, { t: "失客リスクのスコアリング", d: "前回の担当スタイリスト、メニュー単価の変動などを総合的に解析し危険度を可視化します。" }, { t: "最適なタイミングでの自動アプローチ", d: "失客リスクが高まった顧客に対しパーソナライズされたメッセージをLINEで自動送信し再来店を促します。" } ] },
      { title: "「失客理由」の言語化とスタッフ教育", subtitle: "CAUSE ANALYSIS", content: "AIが「若手スタッフのBさんが担当した後の失客率が高い」といったデータ上の相関を抽出。根拠に基づいたスタッフ教育を可能にします。" },
      { title: "LTV（生涯顧客価値）の最大化", subtitle: "LTV OPTIMIZATION", content: "新規客を獲得するコストは既存客を維持するコストの5倍かかります。失客を未然に防ぐことで店舗の利益率を劇的に向上させます。" },
      { title: "Case Study | スタッフ10名のエリア人気店", subtitle: "CLIENT SUCCESS", content: "AIの離脱予測リストに基づくアプローチに切り替えた結果、失客率が半分に低下。広告費をゼロにしても予約が埋まる「予約困難店」へと成長しました。" },
      { title: "「一度の来店」を「一生の付き合い」へ", subtitle: "OUR VISION", content: "美容師という素晴らしい職業が、集客のストレスで疲弊するのを防ぎます。データとAIの力で顧客との深い信頼関係を育て上げます。" }
  ]},
  49: { colorTheme: "blue", tag: "INDUSTRIAL / MANUFACTURING DX", headline: "「町工場の図面」を、<br>クラウド上の宝の山へ。", subheadline: "FACTORY DX CLOUDは、紙の図面や職人の手書きメモをAIが読み取って3Dデータ化し、見積もりから工程管理、納品までをスマートフォン一つで完結させる、中小規模製造業向けの一元管理プラットフォームです。", btnText: "図面をデータ化する", ctaTitle: "「カンと経験」を、検索可能な資産へ。", ctaDesc: "社長の頭の中にしかないノウハウ。それは強みであり、同時に会社にとって最大の「リスク」でもあります。", blocks: [
      { title: "「紙とFAX」で止まったままのサプライチェーン", subtitle: "THE ANALOG CHAIN", content: "いまだに図面をFAXでやり取りし、進捗をホワイトボードで管理している。このアナログな情報の分断が、見積もりの遅れや致命的なミスの温床となっています。" },
      { title: "あらゆるアナログ情報を「データ」へ変換", subtitle: "DATA CONVERSION", features: [ { t: "手書き図面のAI・3D化", d: "油で汚れた紙の図面をスマホで撮影するだけ。AIが寸法線や公差を読み取り瞬時に正確な3D・CADデータへと変換します。" }, { t: "過去の類似図面からの「自動見積もり」", d: "過去の数万枚の図面データから類似形状をAIが瞬時に検索し、当時の加工時間をベースに適正な見積もり金額を数秒で算出します。" }, { t: "現場のスマホで完結する工程管理", d: "現場の職人が手元のスマホでボタンを押すだけで工程の進捗がクラウドに反映されます。" } ] },
      { title: "職人の「加工ノウハウ」のデジタル継承", subtitle: "SKILL TRANSFER", content: "ベテラン職人が図面の端に書き込んだメモ書きをAIがテキスト化してデータベースに蓄積。若手社員がいつでも引き出せます。" },
      { title: "協力工場とのシームレスな受発注ネットワーク", subtitle: "FACTORY NETWORK", content: "プラットフォーム上で繋がった全国の空き稼働を持つ別の工場へ、図面データをワンクリックで共有しシームレスに外注が可能です。" },
      { title: "Case Study | 従業員15名の金属加工工場", subtitle: "CLIENT SUCCESS", content: "システム導入により自動見積もりで事務作業が1日2時間削減。若手社員でも社長と同じ精度で見積もりが出せるようになり属人化からの脱却に成功しました。" },
      { title: "日本のモノづくりの「底力」を拡張する", subtitle: "OUR VISION", content: "優れた技術を持つ町工場が事務作業で疲弊するのは社会の損失です。彼らが本来の価値創造に100%集中できるインフラを提供します。" }
  ]}
};

const buildH3Feature = (f, colorTheme) => `
<div class="bg-white border md:border-transparent border-gray-100 shadow-xl p-8 rounded-3xl transition transform hover:-translate-y-2 duration-300">
    <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-${colorTheme}-50 text-${colorTheme}-600 border border-${colorTheme}-200">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <h4 class="text-xl font-bold mb-3 text-gray-900">${f.t}</h4>
    <p class="text-gray-600 text-sm leading-relaxed">${f.d}</p>
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
            html = html.replace(/<body([^>]*)>([\s\S]*?)<\/body>/, `<body class="bg-gray-50 text-stone-800 min-h-screen font-sans antialiased overflow-x-hidden">\n${newMain}\n</body>`);
        }
        
        fs.writeFileSync(file, html);
        console.log(`Updated site_${id}`);
    } catch(e) {
        console.log(`Failed site_${id}`);
    }
}
