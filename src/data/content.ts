import {
  Users,
  ClipboardList,
  UserCog,
  Building2,
  Clock,
  FileText,
  GraduationCap,
  Monitor,
  MessageCircle,
  BadgePercent,
  ChevronRight,
  Zap,
  BookOpen,
  Award,
  Wrench,
  Brain,
  type LucideIcon,
} from "lucide-react";

// ===== HERO =====
export const heroData = {
  badge: "介護業界特化型AIスクール",
  headline: "介護記録に追われる毎日を、\nAIで変える。",
  subheadline:
    "ホリエモンAI学校 介護校は、プログラミング不要の実践型AIスクール。今ある業務を、今いるスタッフで、もっと速く、もっと楽にする方法を学べます。",
  primaryCta: "無料で資料をダウンロードする",
  secondaryCta: "LINEで相談する",
  ctaLinks: {
    download: "#download",
    line: "https://lin.ee/4V3MBVn",
  },
  stats: [
    { number: "240+", label: "講義数" },
    { number: "10", label: "コース" },
    { number: "75%", label: "助成金で最大OFF" },
  ],
};

// ===== SOCIAL PROOF =====
export const socialProofData = {
  items: [
    { number: "240+", label: "講義が受講し放題" },
    { number: "10", label: "コースから選べる" },
    { number: "75%", label: "助成金で最大OFF" },
  ],
};

// ===== PROBLEMS =====
export const problemsData = {
  sectionTitle: "介護の現場、こんな状況になっていませんか",
  problems: [
    {
      icon: "Users" as const,
      title: "慢性的な人手不足",
      description:
        "採用しても定着しない。一人あたりの業務量は増える一方。目の前のケアに集中したいのに、事務作業に時間を取られている。",
    },
    {
      icon: "ClipboardList" as const,
      title: "記録業務の負担",
      description:
        "介護記録、ケアプラン、報告書。毎日の記録作業だけで1〜2時間。手書きやExcel転記に追われ、残業が常態化している。",
    },
    {
      icon: "UserCog" as const,
      title: "ノウハウの属人化",
      description:
        "ベテラン職員の頭の中にしかないノウハウ。引き継ぎがうまくいかず、サービス品質にばらつきが出る。業務が特定の人に集中する。",
    },
  ],
  transition:
    "これらは「人を増やす」だけでは解決しません。限られた人数で、業務の質を落とさず効率化する方法があります。",
};

// ===== SOLUTION =====
export const solutionData = {
  sectionTitle: "AIを作るのではなく、使いこなす",
  description: [
    "ホリエモンAI学校 介護校は、プログラミングを学ぶ場所ではありません。",
    "ChatGPT、画像生成AI、業務自動化ツール。すでにあるAIツールを、介護の現場でどう使うかを学ぶスクールです。",
    "受講後すぐに現場で試せる実践型カリキュラム。「AIって難しそう」と感じている方こそ、対象です。",
  ],
  features: [
    "プログラミング不要",
    "介護現場に特化した実践課題",
    "明日から業務で使える",
  ],
};

// ===== USE CASES =====
export const useCasesData = {
  sectionTitle: "あなたの職種で、こう変わる",
  cases: [
    {
      icon: "Building2" as const,
      role: "施設長・経営者",
      headline: "経営判断のスピードが変わる",
      benefits: [
        {
          text: "月次報告書の作成",
          before: "3時間",
          after: "40分",
        },
        {
          text: "稼働率・人員配置データをAIで分析し、経営会議の資料を自動生成",
        },
        {
          text: "助成金・補助金の申請書類もAIで下書き作成",
        },
      ],
      quote: "数字をまとめる時間が減った分、現場を見る時間が増えた",
      image: "/images/persona-director.jpg",
    },
    {
      icon: "ClipboardList" as const,
      role: "ケアマネジャー",
      headline: "ケアプラン作成の負担が半分になる",
      benefits: [
        {
          text: "アセスメント情報からケアプランの素案をAIが生成",
        },
        {
          text: "サービス担当者会議の議事録を音声から自動作成",
        },
        {
          text: "モニタリング報告書のテンプレート生成で転記ミスを削減",
        },
      ],
      quote: "書類に追われる日々から、利用者と向き合う時間が戻ってきた",
      image: "/images/persona-caremanager.jpg",
    },
    {
      icon: "Users" as const,
      role: "介護職員",
      headline: "記録業務が、勤務時間内に終わる",
      benefits: [
        {
          text: "介護記録の下書きをAIが生成。入力時間を",
          before: "60分",
          after: "30分",
          suffix: "に短縮",
        },
        {
          text: "シフト調整の候補案をAIが提案。組み替え作業の手間を削減",
        },
        {
          text: "申し送り事項の要約を自動生成し、引き継ぎがスムーズに",
        },
      ],
      quote: "記録のために残業していた時間が、ほぼゼロになった",
      image: "/images/persona-staff.jpg",
    },
  ],
};

// ===== RESULTS =====
export const resultsData = {
  sectionTitle: "導入施設の実績",
  subtitle: "受講者が報告した改善効果",
  metrics: [
    {
      label: "介護記録の作成時間",
      value: "40%",
      suffix: "削減",
      description: "平均",
    },
    {
      label: "ケアプラン素案の作成",
      before: "60分",
      after: "25分",
      value: "58%",
      suffix: "短縮",
    },
    {
      label: "月次報告書の作成",
      before: "3時間",
      after: "40分",
      value: "78%",
      suffix: "短縮",
    },
    {
      label: "申し送り業務",
      value: "20分",
      suffix: "/日 短縮",
      description: "1日あたり",
    },
  ],
};

// ===== CURRICULUM =====
export const curriculumData = {
  sectionTitle: "あなたの「困りごと」から始まるカリキュラム",
  description:
    "最初にやることは、AIの勉強ではありません。あなたの業務の中で「時間がかかっていること」「面倒に感じていること」を書き出す困りごとシートから始まります。",
  steps: [
    {
      number: 1,
      title: "困りごとシートの記入",
      description: "日常業務の課題を棚卸し",
    },
    {
      number: 2,
      title: "AI基礎講座（28日間）",
      description: "ChatGPTの基本操作を習得",
    },
    {
      number: 3,
      title: "介護特化カリキュラム",
      description: "記録・ケアプラン・報告書のAI活用",
    },
    {
      number: 4,
      title: "業務自動化",
      description: "Zapierで転記・通知を自動化",
    },
    {
      number: 5,
      title: "実務プロジェクト",
      description: "自施設の業務をAIで改善",
    },
    {
      number: 6,
      title: "資格取得",
      description: "文章生成AI能力検定（初級）に挑戦",
    },
  ],
  note: "全講座オンライン完結。1本あたり10〜15分の短尺動画で、シフトの合間にも学習可能。",
};

// ===== FEATURES =====
export const featuresData = {
  sectionTitle: "選ばれる4つの理由",
  features: [
    {
      icon: "GraduationCap" as const,
      title: "介護業界に特化したカリキュラム",
      description:
        "一般的なAIスクールとは違い、介護記録、ケアプラン、シフト管理など、介護現場の実務を題材にした講義と課題で構成。学んだことがそのまま仕事に使えます。",
    },
    {
      icon: "Monitor" as const,
      title: "続けやすいオンライン設計",
      description:
        "240以上の講義がすべてオンラインで受講し放題。1本10〜15分の短尺動画だから、夜勤明けや休憩時間にも無理なく学習できます。",
    },
    {
      icon: "MessageCircle" as const,
      title: "講師が伴走するサポート体制",
      description:
        "Slack・Chatwork・LINEで講師にいつでも質問可能。「ここがわからない」を放置しない仕組みで、挫折率を下げます。堀江貴文監修のカリキュラムを、現場経験のある講師が指導。",
    },
    {
      icon: "BadgePercent" as const,
      title: "助成金で受講料を最大75%削減",
      description:
        "人材開発支援助成金を活用すれば、法人プランの受講料が最大75%オフに。提携社労士が申請をサポートするので、手続きの負担も最小限です。",
    },
  ],
};

// ===== SUBSIDY =====
export const subsidyData = {
  sectionTitle: "助成金活用で、ここまで下がる",
  subtitle: "法人プラン（4名で受講した場合）",
  comparison: {
    normal: {
      total: "124万円/年",
      perPerson: "約2.6万円/月",
    },
    withSubsidy: {
      total: "約28万円/年",
      perPerson: "約5,800円/月",
    },
  },
  note: "人材開発支援助成金（事業展開等リスキリング支援コース）適用時。助成率は企業規模・条件により異なります。",
  description:
    "申請手続きは、提携社労士が対応。「助成金は手続きが面倒」と思っている方こそ、まずはご相談ください。",
};

// ===== TESTIMONIALS =====
export const testimonialsData = {
  sectionTitle: "受講者の声",
  testimonials: [
    {
      quote:
        "記録業務が毎日30分短縮。年間で180時間以上の余裕が生まれた",
      detail:
        "導入前は、介護記録の入力だけで毎日1時間以上かかっていました。AIで下書きを生成する方法を学んでからは、入力時間が半分以下に。その分、利用者との関わりに時間を使えるようになりました。",
      name: "A様",
      role: "介護施設 施設長",
      image: "/images/testimonial-1.jpg",
    },
    {
      quote:
        "ケアプランの素案作成が、1時間から25分になった",
      detail:
        "アセスメント情報をAIに読み込ませてケアプランの素案を作る方法は、受講2週目で実践できました。修正は必要ですが、ゼロから書くのとは作業量がまったく違います。",
      name: "B様",
      role: "デイサービス ケアマネジャー",
      image: "/images/testimonial-2.jpg",
    },
    {
      quote:
        "60代の私でも、2週間でChatGPTを業務に使えるようになった",
      detail:
        "パソコンも苦手な方でしたが、動画が短くて分かりやすく、LINEで質問できるので続けられました。今では申し送りの要約をAIに手伝ってもらっています。",
      name: "C様",
      role: "グループホーム 介護職員",
      image: "/images/testimonial-3.jpg",
    },
  ],
};

// ===== SEMINAR =====
export const seminarData = {
  sectionTitle: "まずは無料ガイダンスで体験する",
  description:
    "「AIスクールって何をするの？」「うちの施設でも使える？」そんな疑問に、オンラインガイダンスでお答えします。",
  subDescription:
    "実際のカリキュラムの一部を体験し、自施設での活用イメージを具体化できます。参加は無料。カメラオフでもOKです。",
  details: [
    { label: "所要時間", value: "60分（質疑応答含む）" },
    { label: "形式", value: "Zoomオンライン" },
    { label: "参加費", value: "無料" },
    {
      label: "特典",
      value: "参加者全員に「介護×AI活用ガイドブック」PDFプレゼント",
    },
  ],
  cta: "無料ガイダンスに申し込む",
};

// ===== PRICING =====
export const pricingData = {
  sectionTitle: "料金プラン",
  plans: [
    {
      name: "個人プラン",
      target: "個人で学びたい方（1名〜）",
      price: {
        enrollment: "162,800円",
        monthly: "16,280円/月",
      },
      features: [
        "240以上の全講義が受講し放題",
        "Slack/Chatwork/LINEでの講師サポート",
        "困りごとシートによる個別学習設計",
        "文章生成AI能力検定（初級）受験資格",
      ],
      cta: "個人プランに申し込む",
      recommended: false,
    },
    {
      name: "法人プラン",
      target: "施設・法人単位で導入したい方（2名〜）",
      price: {
        annual: "310,000円/人/年",
        withSubsidy: "実質約77,500円/人/年",
      },
      features: [
        "個人プランの全内容",
        "管理者向けダッシュボード（受講進捗の可視化）",
        "助成金申請サポート（提携社労士紹介）",
        "法人向け請求書・領収書対応",
        "導入前のオンライン相談（無料）",
      ],
      cta: "法人プランの詳細を相談する",
      recommended: true,
      badge: "助成金で最大75%OFF",
    },
  ],
};

// ===== FAQ =====
export const faqData = {
  sectionTitle: "よくある質問",
  items: [
    {
      question: "パソコンが苦手ですが、受講できますか？",
      answer:
        "はい。受講者の多くがパソコン操作に不安を感じていた方です。動画は1本10〜15分で、画面を見ながら一緒に操作する形式です。わからないことはLINEやSlackですぐに講師に質問できます。",
    },
    {
      question: "介護の現場で、本当にAIは使えるのですか？",
      answer:
        "介護記録の下書き生成、ケアプラン素案の作成、シフト調整の候補提案など、すでに多くの施設で活用されています。AIが介護をするのではなく、介護にまつわる事務作業をAIが手伝う形です。",
    },
    {
      question: "受講時間の確保が難しいのですが？",
      answer:
        "全講座オンラインで、1本10〜15分の短尺動画です。通勤時間、休憩時間、夜勤明けなど、隙間時間に受講している方がほとんどです。受講期限もないので、自分のペースで進められます。",
    },
    {
      question: "助成金の申請は面倒ではないですか？",
      answer:
        "提携社労士が申請手続きをサポートします。必要書類の準備から申請まで案内するので、助成金の利用が初めての法人様でも対応可能です。",
    },
    {
      question: "途中で解約できますか？",
      answer:
        "個人プランは月単位で解約可能です。解約手数料はかかりません。法人プランは年間契約となりますが、詳細は個別にご相談ください。",
    },
    {
      question: "他のAIスクールと何が違いますか？",
      answer:
        "介護業界の業務に特化したカリキュラムがある点です。一般的なAIスクールでは「AIの仕組み」を学びますが、本校では「介護記録をAIで書く方法」「ケアプランの素案をAIで作る方法」など、明日から使える実務スキルを教えます。",
    },
  ],
};

// ===== FINAL CTA =====
export const finalCtaData = {
  headline: "まずは資料で、\nできることを知ってください",
  description:
    "カリキュラムの詳細、導入事例、助成金シミュレーション、受講者の声をまとめた資料を無料でお送りします。",
  primaryCta: "無料で資料をダウンロードする",
  secondaryCta: "LINEで相談する",
  trust: [
    "資料請求は30秒で完了",
    "営業電話はしません",
    "個人情報は厳重に管理",
  ],
};

// ===== FOOTER =====
export const footerData = {
  company: "ホリエモンAI学校 介護校",
  links: [
    { label: "運営会社", href: "#" },
    { label: "プライバシーポリシー", href: "#" },
    { label: "特定商取引法に基づく表記", href: "#" },
    { label: "お問い合わせ", href: "#" },
  ],
  copyright: `© ${new Date().getFullYear()} ホリエモンAI学校 介護校 All Rights Reserved.`,
};

// ===== HEADER NAV =====
export const headerData = {
  logo: "ホリエモンAI学校 介護校",
  navItems: [
    { label: "特長", href: "#features" },
    { label: "カリキュラム", href: "#curriculum" },
    { label: "料金", href: "#pricing" },
    { label: "受講者の声", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "資料ダウンロード", href: "#download" },
};
