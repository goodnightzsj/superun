export type NavLink = {
  label: string;
  href: string;
};

export type TemplateCategory = '全部' | '有趣的应用' | '管理类应用' | '一些网站';

export type TemplateRecord = {
  slug: string;
  title: string;
  description: string;
  category: Exclude<TemplateCategory, '全部'>;
  tag: string;
  badge?: string;
  previewTheme: 'light' | 'mobile' | 'dark';
  heroMetric: string;
  detailMetric: string;
};

export type DocRecord = {
  slug: string;
  title: string;
  summary: string;
  category: '介绍' | '功能' | '价格' | '指南';
  content: string[];
};

export const topNav: NavLink[] = [
  { label: '简中', href: '#' },
  { label: '登录', href: '/web/login?redirectUrl=%2Fhome' },
];

export const galleryCategories: TemplateCategory[] = ['全部', '有趣的应用', '管理类应用', '一些网站'];

export const templates: TemplateRecord[] = [
  {
    slug: 'snapshot-ai-growth-workbench',
    title: 'AI 私域增长工作台',
    description: '为企业提供 AI 驱动的私域增长解决方案，助力客户管理和营销自动化。',
    category: '管理类应用',
    tag: '增长运营',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '32 个社群 · 1,402 条对话',
    detailMetric: 'AI 推荐 3 条内容建议',
  },
  {
    slug: 'snapshot-glowmind',
    title: 'GlowMind：面向美妆电商的 AI 客服与客户分层运营平台',
    description: '一站式美妆智能客服与客户运营平台：知识库、客户分层、自动化规则与数据看板。',
    category: '管理类应用',
    tag: '美妆客服',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '14 条自动化规则',
    detailMetric: '客户分层转化提升 +18%',
  },
  {
    slug: 'snapshot-hr-payroll-suite',
    title: 'AI 薪酬管理、人力资源与合规系统',
    description: '复刻单页落地页模板，支持中英双语、暗亮切换、粘性导航与演示组件。',
    category: '管理类应用',
    tag: '人力资源',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '薪酬与合规',
    detailMetric: '中后台信息密度',
  },
  {
    slug: 'snapshot-health-guide',
    title: '养生之道：每日健康手册',
    description: '为追求健康生活的人士提供日常养生指导和实践方法。它能帮助用户轻松执行健康计划，提升生活品质。',
    category: '有趣的应用',
    tag: '健康生活',
    badge: '复刻',
    previewTheme: 'mobile',
    heroMetric: '每日计划 4 个动作',
    detailMetric: '连贯打卡体验',
  },
  {
    slug: 'snapshot-ai-coworker-platform',
    title: 'AI 虚拟同事平台',
    description: '面向企业的 AI 同事管理平台，集中管理 AI 角色、流程与运营数据并支持可视化与移动适配。',
    category: '管理类应用',
    tag: '协作平台',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '角色流程联动',
    detailMetric: '企业协同界面',
  },
  {
    slug: 'snapshot-workforce-engine',
    title: '人效决策引擎',
    description: '人效预测与招聘成本分析平台，涵盖离职风险、智能洞察及移动视图。',
    category: '管理类应用',
    tag: '数据决策',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '预测与洞察',
    detailMetric: '招聘效率分析',
  },
  {
    slug: 'snapshot-performance-center',
    title: '绩效校准中心（企业绩效评分分析与薪酬决策系统）',
    description: '一站式绩效薪酬管理平台，流程可视、任务优先、移动即办并支持校准与审批归档。',
    category: '管理类应用',
    tag: '绩效管理',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '任务优先级',
    detailMetric: '流程审批归档',
  },
  {
    slug: 'snapshot-pomodoro-journal',
    title: '番茄钟',
    description: '暖沙手帐风番茄钟，任务关联、沉浸模式、统计、多主题音效与成就目标。',
    category: '有趣的应用',
    tag: '效率工具',
    badge: '复刻',
    previewTheme: 'mobile',
    heroMetric: '专注计时',
    detailMetric: '手帐风 UI',
  },
  {
    slug: 'snapshot-onboardai',
    title: 'OnboardAI - 员工生命周期管理',
    description: '为企业提供全面的员工生命周期管理解决方案，优化员工入职、发展和离职流程。',
    category: '管理类应用',
    tag: 'HR 流程',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '全生命周期',
    detailMetric: '入转调离工作流',
  },
  {
    slug: 'snapshot-talentos',
    title: 'TalentOS - 智能招聘系统',
    description: '为企业提供智能招聘工作流解决方案，涵盖简历筛选、面试安排、人才管理等功能。',
    category: '管理类应用',
    tag: '招聘系统',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '招聘工作流',
    detailMetric: '候选人协同',
  },
  {
    slug: 'snapshot-hr-dashboard',
    title: 'HR 决策驾驶舱',
    description: '企业人力资源 AI 驾驶舱，覆盖招聘、入职、培养、绩效与保留的全流程智能决策平台。',
    category: '管理类应用',
    tag: '人力资源',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '5 大业务模块',
    detailMetric: '流程可视与移动即办',
  },
  {
    slug: 'snapshot-supply-chain-mobile',
    title: '供应链核心功能',
    description: '移动端供应链工作台，整合订单、库存、审批与物流管理，提供实时监控与异常预警。',
    category: '管理类应用',
    tag: '供应链',
    badge: '复刻',
    previewTheme: 'mobile',
    heroMetric: '移动工作台',
    detailMetric: '订单库存审批',
  },
  {
    slug: 'snapshot-moyan-dictionary',
    title: '墨研 · 10行投研卡片可行动摘要',
    description: '墨研（MOYAN）用极简卡片呈现公司投研要点，支持搜索、对比、复制与导出。',
    category: '一些网站',
    tag: '研究工具',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '投研卡片',
    detailMetric: '摘要与对比',
  },
  {
    slug: 'snapshot-thesis-terminal',
    title: 'ThesisTerminal - 组合自证仪表盘',
    description: '深色投研风格的组合自证仪表盘，实时监控持仓状态并支持新增导入导出。',
    category: '一些网站',
    tag: '金融分析',
    badge: '复刻',
    previewTheme: 'dark',
    heroMetric: '深色投研',
    detailMetric: '持仓监控',
  },
  {
    slug: 'snapshot-a-share-calendar',
    title: 'A股事件日历',
    description: '面向 A 股投资者的催化剂日历，按市场与行业筛选事件，查看事件详情与数据总览。',
    category: '一些网站',
    tag: '事件追踪',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '事件筛选',
    detailMetric: '市场与行业视图',
  },
  {
    slug: 'snapshot-music-game',
    title: '音乐节奏游戏',
    description: '赛博朋克风 4 键移动节奏游戏演示：含歌曲选择、快速制谱与触控优化。',
    category: '有趣的应用',
    tag: '游戏交互',
    badge: '复刻',
    previewTheme: 'dark',
    heroMetric: '4 轨同步判定',
    detailMetric: '触控优化',
  },
  {
    slug: 'snapshot-customer-success',
    title: '大客户跟进系统',
    description: '一站式客户成功工作台，覆盖数据概览、客户管理、拜访计划与盘客分析。',
    category: '管理类应用',
    tag: '客户管理',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '客户成功',
    detailMetric: '跟进与分析',
  },
  {
    slug: 'snapshot-jucaicloud',
    title: '聚才云',
    description: '聚才云智能招聘系统，含职位、候选人、面试与数据分析。',
    category: '管理类应用',
    tag: '招聘系统',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '职位与候选人',
    detailMetric: '面试数据分析',
  },
  {
    slug: 'snapshot-service-center',
    title: '客满中心',
    description: '星辰科技·服务云：客服与监控中心，含交互示例与移动适配。',
    category: '管理类应用',
    tag: '客服平台',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '客服监控',
    detailMetric: '服务云工作台',
  },
  {
    slug: 'snapshot-sock-store',
    title: '专业毛圈袜电商网站',
    description: '左右袜业专注于生产专业毛圈袜，提供高品质、舒适耐用的毛圈袜产品。',
    category: '一些网站',
    tag: '电商网站',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '商品展示',
    detailMetric: '电商落地页',
  },
  {
    slug: 'snapshot-future-education',
    title: 'AI 时代的未来教育',
    description: '面向哈佛系校友，探讨 AI 对未来教育的影响与变革，提供深度交流与思想碰撞的平台。',
    category: '一些网站',
    tag: '教育内容',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '教育观点',
    detailMetric: '内容沉浸阅读',
  },
  {
    slug: 'snapshot-outdoor-camp',
    title: '径山野趣｜杭州70亩亲子户外休闲基地',
    description: '杭州径山 70 亩亲子营地，集露营、烧烤、钓沼虾与婚礼定制及研学活动于一体。',
    category: '一些网站',
    tag: '品牌官网',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '亲子户外',
    detailMetric: '品牌体验页',
  },
  {
    slug: 'snapshot-engineer-portfolio',
    title: '全栈工程师作品与履历',
    description: '面向招聘方的工业瑞士风格专业个人主页，涵盖简介、技能、经历与作品集。',
    category: '一些网站',
    tag: '个人网站',
    badge: '复刻',
    previewTheme: 'dark',
    heroMetric: '7 个精选项目',
    detailMetric: '响应式作品展示',
  },
  {
    slug: 'snapshot-summer-school',
    title: '2026 顶级夏校指南｜5–8年级美国与瑞士精选项目',
    description: '移动端学术风夏校库，一站式汇集美国与瑞士优质夏令营信息与选校指南。',
    category: '一些网站',
    tag: '教育资讯',
    badge: '复刻',
    previewTheme: 'mobile',
    heroMetric: '精选 28 个项目',
    detailMetric: '筛选 + 信息聚合',
  },
  {
    slug: 'snapshot-good-taste-dictionary',
    title: '好品味词典：十二个判断原则',
    description: '帮你发现、记录并分享生活美学、设计与风格的精选词汇与灵感。',
    category: '一些网站',
    tag: '内容网站',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '词典式内容',
    detailMetric: '灵感沉淀',
  },
  {
    slug: 'snapshot-retail-lab',
    title: 'RETAIL LAB：门店用户画像分析系统',
    description: '企业用户画像平台，帮助团队整合、管理与可视化用户数据，快速产出画像洞察。',
    category: '管理类应用',
    tag: '零售分析',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '画像分析',
    detailMetric: '数据可视化',
  },
  {
    slug: 'snapshot-greenland-intro',
    title: '格陵兰国家介绍',
    description: '介绍格陵兰共和国的基本信息，提供国家名称的中文和英文对照。',
    category: '一些网站',
    tag: '信息网站',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '双语介绍',
    detailMetric: '知识型页面',
  },
  {
    slug: 'snapshot-pet-drama',
    title: '猫狗日常追剧',
    description: '为宠物爱好者提供治愈系萌宠日常内容，分享宠物生活点滴，带来温馨与快乐。',
    category: '一些网站',
    tag: '宠物内容',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '治愈内容',
    detailMetric: '图文栏目',
  },
  {
    slug: 'snapshot-architecture-site',
    title: '建筑设计事务所官网',
    description: '福州锐思建筑设计官网，展示设计理念、代表项目、改造案例与团队信息。',
    category: '一些网站',
    tag: '企业官网',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '12 个案例模块',
    detailMetric: '编辑型留白布局',
  },
  {
    slug: 'snapshot-pet-adoption',
    title: '毛孩之家领养平台',
    description: '为宠物提供一个被温柔对待的家园，致力于保障每一个生命的福祉，提供宠物领养、寄养及相关服务。',
    category: '一些网站',
    tag: '公益平台',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '宠物领养',
    detailMetric: '服务信息聚合',
  },
  {
    slug: 'snapshot-performance-system',
    title: '绩效管理系统',
    description: '面向企业的绩效管理与可视化看板，助力人力与管理层与员工高效协同。',
    category: '管理类应用',
    tag: '绩效管理',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '绩效看板',
    detailMetric: '协同决策',
  },
  {
    slug: 'snapshot-industrial-prd',
    title: '工业设计智能需求对话系统',
    description: '为工业设计团队提供从需求采集到成果导出的智能 PRD 与协作工具。',
    category: '管理类应用',
    tag: '设计协作',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '需求采集',
    detailMetric: 'PRD 协作流',
  },
  {
    slug: 'snapshot-pixel-sandbox',
    title: '像素3D沙盒',
    description: '交互式像素 3D 沙盒演示，体验可破坏方块、生存探索与菜单沉浸感视觉效果。',
    category: '有趣的应用',
    tag: '游戏演示',
    badge: '复刻',
    previewTheme: 'dark',
    heroMetric: '像素沙盒',
    detailMetric: '沉浸视觉',
  },
  {
    slug: 'snapshot-eye-hospital',
    title: '赛康眼科',
    description: '赛康眼科医院官网，提供专家介绍、特色治疗与在线预约服务。',
    category: '一些网站',
    tag: '医疗官网',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '医院信息',
    detailMetric: '预约转化',
  },
  {
    slug: 'snapshot-senior-travel',
    title: '高端适老旅居平台',
    description: '为长者提供安全舒适的旅游与长住选项和贴心服务信息，一站式预约咨询平台。',
    category: '一些网站',
    tag: '服务平台',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '适老服务',
    detailMetric: '咨询预约',
  },
  {
    slug: 'snapshot-women-ai-growth',
    title: '智创她未来：AI赋能增长',
    description: '面向新时代女性，利用 AI 技术实现个人与事业的增长，通过智能创新助力把握未来机遇。',
    category: '一些网站',
    tag: '专题内容',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '专题策展',
    detailMetric: '增长叙事',
  },
  {
    slug: 'snapshot-neon-synapse',
    title: 'NEON SYNAPSE | 音乐节奏游戏',
    description: '四轨霓虹节奏游戏演示，支持快速/精细制谱与音符精准同步、多首曲库、判定友好与粒子特效。',
    category: '有趣的应用',
    tag: '游戏交互',
    badge: '复刻',
    previewTheme: 'dark',
    heroMetric: '多首曲库',
    detailMetric: '粒子特效',
  },
  {
    slug: 'snapshot-image-copyright',
    title: '图片版权合规查询',
    description: '图片版权速查，提供一键上传识别、合规状态与置信度提示，并推荐免费替代图片资源。',
    category: '管理类应用',
    tag: '合规工具',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '上传识别',
    detailMetric: '替代资源推荐',
  },
  {
    slug: 'snapshot-admin-satisfaction',
    title: '行政满意度报告',
    description: '行政服务满意度可视化分析平台，提供城市/部门/题目多维洞察与建议跟踪。',
    category: '管理类应用',
    tag: '政务分析',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '多维洞察',
    detailMetric: '建议跟踪',
  },
  {
    slug: 'snapshot-redcross-volunteer',
    title: '红十字会志愿者管理系统',
    description: '红十字会志愿者注册与后台一体化管理平台，含服务队、荣誉统计与数据概览。',
    category: '管理类应用',
    tag: '公益管理',
    badge: '复刻',
    previewTheme: 'light',
    heroMetric: '志愿者管理',
    detailMetric: '荣誉与统计',
  }
];

export const docs: DocRecord[] = [
  {
    slug: 'what-is-superun',
    title: '什么是 superun？',
    summary: 'superun 是一个通过对话创建网站和应用的 AI 产品设计平台。',
    category: '介绍',
    content: [
      'superun 将“描述需求”作为核心输入方式，让不会编程的用户也能快速搭建网站与 Web 应用。',
      '公开站点承担三重职责：首屏创建入口、模板能力展示、SEO 文档获客。',
      '用户可以先通过对话生成第一版，再进入持续修改、预览、发布与导出代码的工作流。'
    ]
  },
  {
    slug: 'superun-ai-features',
    title: 'superun 的 AI 功能有哪些？',
    summary: '涵盖需求理解、设计生成、代码生成、响应式适配与持续迭代。',
    category: '功能',
    content: [
      'AI 会根据自然语言描述补全页面结构、视觉风格与常见交互。',
      '平台强调多轮上下文理解，支持继续通过对话调整布局、配色与功能。',
      '生成结果面向真实产品使用场景，覆盖网站、后台、运营工具与轻应用。'
    ]
  },
  {
    slug: 'how-to-use-superun',
    title: '如何使用 superun 快速创建网站和应用？',
    summary: '从输入需求到登录、生成、预览、继续编辑，再到发布。',
    category: '指南',
    content: [
      '第一步是在首页输入你想做的产品、业务目标与大致风格。',
      '第二步完成登录，系统会保留当前上下文并继续生成流程。',
      '第三步在工作区中预览初稿，随后使用对话继续迭代并最终发布。'
    ]
  },
  {
    slug: 'superun-pricing-guide',
    title: 'superun 怎么收费？',
    summary: '支持先试用，再根据个人频率、团队协作与企业支持需求升级。',
    category: '价格',
    content: [
      '公开信息强调先体验后付费，但未展示完整数字化价格表。',
      '常见升级触发点包括高频使用、团队协作、代码导出与更强支持需求。',
      '定价页的作用更多是消除顾虑，而不是在首页进行复杂比较。'
    ]
  },
  {
    slug: 'superun-mobile-responsive',
    title: 'superun 做的网站支持手机端吗？',
    summary: '支持手机、平板与桌面视图预览，是公开文档中的重要答疑主题。',
    category: '功能',
    content: [
      '多设备预览是产品定位的重要组成部分，也是模板预览页显式展示的功能。',
      '对外站点应同步强调响应式与发布能力，提升用户对“可落地”的信任。',
      '在复刻站中，这一能力通过模板预览页与文档页共同表达。'
    ]
  },
  {
    slug: 'superun-vs-competitors',
    title: 'superun 和其他 AI 设计工具有什么区别？',
    summary: '从输入方式、落地能力和持续迭代流程理解 superun 的定位。',
    category: '介绍',
    content: [
      'superun 更强调从自然语言需求直接进入真实产品页面和应用生成，而不是只停留在静态概念图。',
      '它同时覆盖首页创建入口、模板复刻、登录后继续编辑和发布等完整流程。',
      '对比纯设计类工具，superun 更突出从想法到可运行结果的连续性。'
    ]
  },
  {
    slug: 'ai-website-builder-2026',
    title: 'AI 网站生成器怎么选？superun 实测体验',
    summary: '围绕速度、可控性、模板质量与发布能力对 AI 建站工具进行比较。',
    category: '指南',
    content: [
      '选择 AI 网站生成器时，核心不只是生成速度，还包括继续修改、导出和发布的完整体验。',
      'superun 的优势在于可以从一句话需求出发，再通过对话连续微调结构和视觉。',
      '公开站点通过首页输入框、模板库和文档页共同传达这类能力。'
    ]
  },
  {
    slug: 'how-to-build-app-without-code',
    title: '不会编程怎么做 App？',
    summary: '从需求表达、功能拆解、页面生成到后续迭代的轻量入门路径。',
    category: '指南',
    content: [
      '对非技术用户来说，最重要的是先把目标用户、核心流程和界面风格说清楚。',
      'superun 把这一步前置到首页输入框里，让用户无需准备复杂原型就能开始。',
      '后续通过登录、继续编辑和模板复刻来逐步完善完整应用。'
    ]
  },
  {
    slug: 'ai-prototype-design',
    title: '如何用 AI 快速设计产品原型？',
    summary: '通过对话生成第一版结构，再围绕页面、模块和文案进行持续微调。',
    category: '指南',
    content: [
      'AI 原型设计的效率来自快速生成第一版，而质量来自后续的持续对话迭代。',
      '首页的创建入口承担了把想法转成结构草图的第一步。',
      '模板广场则帮助用户在真实案例之间找到更清晰的参考方向。'
    ]
  },
  {
    slug: 'startup-mvp-guide',
    title: '创业公司怎么快速做 MVP？',
    summary: '围绕最小功能闭环、上线速度和验证效率来设计 MVP 流程。',
    category: '指南',
    content: [
      '做 MVP 的关键是先验证价值，再逐步扩展能力，而不是一开始就追求功能完整。',
      'superun 适合在早期用对话快速生成产品雏形，再根据反馈持续收敛。',
      '公开站点用更轻量的首页和模板案例降低首次尝试门槛。'
    ]
  },
  {
    slug: 'design-to-code-workflow',
    title: '设计稿怎么转代码？',
    summary: '把视觉方案转成可运行页面时，结构、响应式和组件化同样重要。',
    category: '功能',
    content: [
      '设计转代码不只是还原像素，更要考虑结构层级、交互状态和多端适配。',
      'superun 的生成流程强调一边表达意图，一边得到可继续修改的结果。',
      '这使它更适合从设计想法直接推进到实际页面实现。'
    ]
  },
  {
    slug: 'superun-free-trial',
    title: 'superun 可以免费试用吗？',
    summary: '站点对外沟通重点是先体验产品，再依据使用强度决定是否升级。',
    category: '价格',
    content: [
      '潜在用户最关注的是是否能低门槛试用，以及试用能否覆盖核心工作流。',
      '公开文档应帮助用户理解从首次体验到升级订阅之间的自然路径。',
      '这类答疑内容适合放在首页下方的文档入口中承接搜索流量。'
    ]
  },
  {
    slug: 'superun-export-code',
    title: 'superun 生成的代码可以导出吗？',
    summary: '代码导出与后续托管能力，是用户判断 AI 设计平台可落地性的关键点。',
    category: '功能',
    content: [
      '很多用户选择 AI 建站工具时，会优先确认结果是否可以继续托管、维护和迁移。',
      '可导出、可发布、可迭代的能力决定了平台是否能用于真实项目。',
      '因此相关说明应在首页之外提供持续可检索的文档入口。'
    ]
  },
  {
    slug: 'superun-team-collaboration',
    title: 'superun 支持团队协作吗？',
    summary: '团队协作关注共享上下文、统一风格和跨角色协同修改。',
    category: '功能',
    content: [
      '当产品从个人试验走向团队使用时，协作能力会成为升级的重要触发点。',
      'superun 的对话式工作流天然适合围绕同一产品目标持续追加约束和修改方向。',
      '文档页需要把这类价值点解释清楚，帮助团队用户理解使用边界。'
    ]
  },
  {
    slug: 'ai-design-tool-comparison',
    title: 'AI 设计工具哪个好用？',
    summary: '评估 AI 设计工具时，应同时看生成质量、控制粒度与真实发布能力。',
    category: '介绍',
    content: [
      '生成质量只是第一步，真正影响体验的是后续是否容易继续修改和发布。',
      'superun 在公开站中突出展示了创建入口、案例模板和文档解释三部分能力。',
      '这让用户更容易把它理解为一套完整的产品生成工具，而不是单点功能演示。'
    ]
  }
];

export const footerGroups = [
  {
    title: '法律',
    links: [
      { label: '隐私政策', href: 'https://www.superun.com/web/agreement/superun-privacy-cn.html' },
      { label: '服务条款', href: 'https://www.superun.com/web/agreement/superun-service-agreement-cn.html' },
    ],
  },
  {
    title: '社区',
    links: [
      { label: '帮助文档', href: 'https://docs.superun.com/superun/introduction/welcome' },
      { label: '企微', href: '#' },
    ],
  },
] as const;
