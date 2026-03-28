export const brandAssetSrc = '/brand.svg';

export type PublicLocale = 'zh-CN' | 'zh-TW' | 'yue' | 'ja' | 'ko' | 'en' | 'global';

export const defaultLocale: PublicLocale = 'zh-CN';

export const localeOptions: Array<{ key: PublicLocale; label: string; shortLabel: string }> = [
  { key: 'zh-CN', label: '简体中文', shortLabel: '简中' },
  { key: 'zh-TW', label: '繁體中文', shortLabel: '繁體' },
  { key: 'yue', label: '廣東話', shortLabel: '廣東話' },
  { key: 'ja', label: '日本語', shortLabel: '日本語' },
  { key: 'ko', label: '한국어', shortLabel: '한국어' },
  { key: 'en', label: 'English', shortLabel: 'English' },
  { key: 'global', label: 'Global', shortLabel: 'Global' },
];

export const localeShortLabels = Object.fromEntries(localeOptions.map((option) => [option.key, option.shortLabel])) as Record<PublicLocale, string>;

export const homePlaceholderSequences: Record<'zh-CN' | 'en', string[]> = {
  'zh-CN': ['你想要做一个什么样的东西？', '你想做的东西是用来干嘛的？'],
  en: ['What would you like to build?', 'What is your product for?'],
};

export const publicPageCopy = {
  'zh-CN': {
    header: {
      login: '登录',
      homeAria: 'superun 首页',
    },
    home: {
      title: 'superun - 聊出你的产品 - 优势智设',
      slogan: '聊出你的产品',
      galleryTitle: '看看其他人的创作',
      categories: ['全部', '有趣的应用', '管理类应用', '一些网站'],
      sortCreatedAt: '创建时间',
      cardRecreate: '复刻',
      more: '显示更多',
      bottomLatest: '最新内容',
      bottomTemplates: '推荐模板',
    },
    login: {
      title: 'superun - 聊出你的产品 - 优势智设',
      heading: '欢迎使用 superun',
      wechat: '使用 微信 继续',
      google: '使用 Google 继续',
      more: '更多',
      phoneTab: '手机号',
      emailTab: '邮箱',
      phonePlaceholder: '请输入手机号码',
      codePlaceholder: '验证码',
      sendCode: '发送验证码',
      submit: '登录 / 注册',
      agreementPrefix: '登录即表示您同意我们的',
      agreementService: '用户协议',
      agreementPrivacy: '隐私声明',
      createTeam: '创建团队',
      emailPlaceholder: '请输入邮箱地址',
      passwordPlaceholder: '请输入密码',
      forgotPassword: '忘记密码？',
    },
    community: {
      newChat: '新对话',
      mobile: '手机',
      desktop: '电脑',
      recreate: '复刻创作',
      previewButton: '查看预览',
      viewConversation: '查看对话',
      missingSession: '会话不存在',
      previewAria: '模板预览',
    },
  },
  en: {
    header: {
      login: 'Login',
      homeAria: 'superun home',
    },
    home: {
      title: 'superun - Talk About Your Product',
      slogan: 'Talk About Your Product',
      galleryTitle: 'See What Others Created',
      categories: ['All', 'Interesting Apps', 'Management Apps', 'Some Websites'],
      sortCreatedAt: 'Created At',
      cardRecreate: 'Remix',
      more: 'Show more',
      bottomLatest: 'Latest content',
      bottomTemplates: 'Recommended templates',
    },
    login: {
      title: 'superun - Login',
      heading: 'Welcome to superun',
      wechat: 'Continue with WeChat',
      google: 'Continue with Google',
      more: 'More',
      phoneTab: 'Mobile',
      emailTab: 'Email',
      phonePlaceholder: 'Please enter your phone number',
      codePlaceholder: 'Verification code',
      sendCode: 'Send code',
      submit: 'Login / Register',
      agreementPrefix: 'By logging in you agree with our',
      agreementService: 'Terms of Service',
      agreementPrivacy: 'Privacy Policy',
      createTeam: 'Create Team',
      emailPlaceholder: 'Please enter your email address',
      passwordPlaceholder: 'Please enter password',
      forgotPassword: 'Forgot Password?',
    },
    community: {
      newChat: 'New chat',
      mobile: 'Mobile',
      desktop: 'Desktop',
      recreate: 'Remix creation',
      previewButton: 'Preview',
      viewConversation: 'View conversation',
      missingSession: 'Conversation unavailable',
      previewAria: 'Template preview',
    },
  },
} as const;

export const templateMedia: Record<string, { image: string; communityPreviewSrc?: string; communityPreviewShellSrc?: string; templatePageSrc?: string }> = {
  'snapshot-sales-incentive-platform': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260325165147/1supk66e.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--d84ad43ac3ca73a429f26cece4a3d557.superun.yun',
    communityPreviewShellSrc: 'https://snapshot--d84ad43ac3ca73a429f26cece4a3d557.superun.yun',
  },
  'snapshot-performance-star': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260321172152/ngs8ngmo.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--1d7bef6cb0e2de67aef6c1d5ad5cb51b.superun.yun',
    communityPreviewShellSrc: 'https://snapshot--1d7bef6cb0e2de67aef6c1d5ad5cb51b.superun.yun',
  },
  'snapshot-recruitment-flow': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260326201853/h3s1zdym.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--d977b65ac0b056f9170976fcc8d383c7.superun.yun',
    communityPreviewShellSrc: 'https://snapshot--d977b65ac0b056f9170976fcc8d383c7.superun.yun',
  },
  'snapshot-ai-growth-workbench': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260317121854/pxzh69hr.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--5970b4812267a8197073cf6ea8474a34.superun.yun',
    templatePageSrc: 'https://www.superun.com/templates/ai-si-yu-zeng-chang-gong-zuo-tai',
  },
  'snapshot-glowmind': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260310185501/anxvm1i8.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--2c98d9925413929ccbf5f307adadb261.superun.yun',
    templatePageSrc: 'https://www.superun.com/templates/glowmind-mian-xiang-mei-zhuang-dian-shang-de-ai-ke',
  },
  'snapshot-hr-payroll-suite': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260309225929/9fzcd53g.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--950a553c9b74d6a37c149d3108294759.superun.yun',
    templatePageSrc: 'https://www.superun.com/templates/ai-xin-chou-guan-li-ren-li-zi-yuan-yu-he-gui-xi-to',
  },
  'snapshot-health-guide': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260226112337/woyh84e8.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--a9628af05d1de701f56fe5805fad58c6.superun.yun',
    templatePageSrc: 'https://www.superun.com/templates/yang-sheng-zhi-dao-mei-ri-jian-kang-shou-ce',
  },
  'snapshot-sales-visit-assistant': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260326204604/wkgg9ddy.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--5c7e520f924a003da6fd6cb7fa78ce18.superun.yun',
    communityPreviewShellSrc: 'https://snapshot--5c7e520f924a003da6fd6cb7fa78ce18.superun.yun',
  },
  'snapshot-ai-coworker-platform': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260309223354/xpu68e6v.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--38bc4fa638e814c84f4229bce3e94454.superun.yun',
    templatePageSrc: 'https://www.superun.com/templates/ai-xu-ni-tong-shi-ping-tai',
  },
  'snapshot-workforce-engine': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260309181218/1nhe22gt.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--6f1a5dfdf7ec677777f40aac1a3d1b7b.superun.yun',
    templatePageSrc: 'https://www.superun.com/templates/ren-xiao-jue-ce-yin-qing',
  },
  'snapshot-performance-center': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260309180302/ukzoq7gk.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--854243fe76e519c2ed38818134a27157.superun.yun',
    templatePageSrc: 'https://www.superun.com/templates/ji-xiao-xiao-zhun-zhong-xin-qi-ye-ji-xiao-ping-fen',
  },
  'snapshot-smart-recruiting-platform': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260326221513/v9w44mqm.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--8f2076e4e8da6752b9212f3207c40c6f.superun.yun',
    communityPreviewShellSrc: 'https://snapshot--8f2076e4e8da6752b9212f3207c40c6f.superun.yun',
  },
  'snapshot-pomodoro-journal': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260312174006/0iaocepf.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--a50f1b590654fcfeab0db54c89d31323.superun.yun',
    templatePageSrc: 'https://www.superun.com/templates/fan-qie-zhong',
  },
  'snapshot-onboardai': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260309180645/sre6krkr.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--fbcd2ba30ff36fd19ada0ba6c640c627.superun.yun',
    templatePageSrc: 'https://www.superun.com/templates/onboardai-yuan-gong-sheng-ming-zhou-qi-guan-li',
  },
  'snapshot-talentos': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260309193600/hja1wts1.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--900e2a9c169d8a751009acc4666c47c7.superun.yun',
    templatePageSrc: 'https://www.superun.com/templates/talentos-zhi-neng-zhao-pin-xi-tong',
  },
  'snapshot-hr-dashboard': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260309191228/a4jt3ohe.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--c0ab6399bda7217ddb4319894dacf7a5.superun.yun',
    templatePageSrc: 'https://www.superun.com/templates/hr-jue-ce-jia-shi-cang',
  },
  'snapshot-customer-management-system': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260326213533/dk57nx3c.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--f851f57fef4b80b7f9ff1ad4c63d089e.superun.yun',
    communityPreviewShellSrc: 'https://snapshot--f851f57fef4b80b7f9ff1ad4c63d089e.superun.yun',
  },
  'snapshot-supply-chain-mobile': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260212201859/fagh39ej.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--5e6946c37e08f66f4158fc7b754d9913.superun.yun',
    templatePageSrc: 'https://www.superun.com/templates/gong-ying-lian-he-xin-gong-neng',
  },
  'snapshot-moyan-dictionary': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260225184736/goza000s.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--b9ca4ff7872806d9e0c98404f270769c.superun.yun',
    templatePageSrc: 'https://www.superun.com/templates/mo-yan-10-hang-tou-yan-ka-pian-ke-hang-dong-zhai-y',
  },
  'snapshot-thesis-terminal': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260307212414/ujh8lpyo.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--272fefe8784deeafb5c9c769c9e2adff.superun.yun',
    templatePageSrc: 'https://www.superun.com/templates/thesisterminal-zu-he-zi-zheng-yi-biao-pan',
  },
  'snapshot-a-share-calendar': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260225103934/tb6k63i7.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--3c5fe9bea11d3c948717ffb22103e7be.superun.yun',
  },
  'snapshot-music-game': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260212180007/j1v2wjhc.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--44c6fa4b4359497b7c1b6d12a4475a1f.superun.yun',
  },
  'snapshot-customer-success': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260309170712/80w523wm.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--46f01c3baa377dbb6d0d75e717d07984.superun.yun',
  },
  'snapshot-jucaicloud': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260309171657/wnwde2ww.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--4d3c2358245370c6b480277d3aa8dab5.superun.yun',
  },
  'snapshot-service-center': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260309171152/j2d454hw.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--ac3de0671694577d3c491ab009fe7d2c.superun.yun',
  },
  'snapshot-sock-store': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260209212741/2jigs8x7.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--3c6d319a14ee874ae7c16409f043b897.superun.yun',
  },
  'snapshot-future-education': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260226184025/jscw0adn.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--e380c154b06b8d1391d97a95c3989538.superun.yun',
  },
  'snapshot-outdoor-camp': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260130154448/88fgmnbi.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--6b4d11434c35debf9a3f9ced5f02ab19.superun.yun',
  },
  'snapshot-engineer-portfolio': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260130000713/wwvhrpi2.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--3b0043844bec991ff2e8b40b5ef69ea5.superun.yun',
  },
  'snapshot-summer-school': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260205150944/prztdcl3.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--618eb7fce9a13c63f6e0e90e41544c36.superun.yun',
  },
  'snapshot-good-taste-dictionary': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260128225540/p2bip9d8.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--6de5801a11d257cd14c202e0d4f6300a.superun.yun',
  },
  'snapshot-retail-lab': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260127154212/r7fyz16r.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--eb91e328bdbcfce84b80b7ec00944b7e.superun.yun',
  },
  'snapshot-greenland-intro': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260120211406/k6wmzdzv.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--5098044940dfc3130de0791242290509.superun.yun',
  },
  'snapshot-pet-drama': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260120165539/9g6ktvmr.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--5eb503af1fccdbe68cb1bdf0e9ed6b0f.superun.yun',
  },
  'snapshot-architecture-site': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260118175001/6nxnk2h8.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--371dbc52e2ed10e9d6aef14f75a7709a.superun.yun',
  },
  'snapshot-pet-adoption': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260201214724/01b2wp2i.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--7ca2cea01b27a2806b34046d21aa7393.superun.yun',
  },
  'snapshot-performance-system': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260306114245/tpnngq6l.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--f02f11ef9cfdd1394bc001e2ca943806.superun.yun',
    communityPreviewShellSrc: 'https://snapshot--f02f11ef9cfdd1394bc001e2ca943806.superun.yun',
  },
  'snapshot-industrial-prd': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260119183300/thumfomb.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--b30d7ae283a6741c76173e4063c38cb5.superun.yun',
  },
  'snapshot-pixel-sandbox': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260224212130/877f6cib.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--a857a6cb74e8576044e044eaa0564621.superun.yun',
  },
  'snapshot-eye-hospital': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260130144043/60inbzyf.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--84050037b0c2a01b03ca3eb6309d2d1c.superun.yun',
  },
  'snapshot-senior-travel': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260124172932/xzgeznht.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--1ef69cc84621e5e75e15918f71d57af1.superun.yun',
  },
  'snapshot-women-ai-growth': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260116203137/ywqn1b6k.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--ed8c558240987c2f81e981e133606221.superun.yun',
  },
  'snapshot-neon-synapse': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260121151416/8en5g157.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--53c4d9b65da9dc4d15d0e5945f2822f6.superun.yun',
  },
  'snapshot-image-copyright': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260105111331/cfhhl8jh.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--1dd3055a9b10b5065116121308ddbf01.superun.yun',
  },
  'snapshot-admin-satisfaction': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20251222171941/sfx3u2f3.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--daaba84fe5965ec5b7ba065a33fcaa4c.superun.yun',
  },
  'snapshot-redcross-volunteer': {
    image: 'https://b.ux-cdn.com/uxarts/files/t20260129164613/as22ua1f.png?imageView2/2/w/800/q/80/format/webp',
    communityPreviewSrc: 'https://snapshot--91f0140ccf9bbfbd6ac81080acfbcbb9.superun.yun',
  },
};
