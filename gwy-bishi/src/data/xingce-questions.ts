import type { XingceModule, XingceQuestion } from "./questions";

export const xingceQuestions: XingceQuestion[] = [
  // 言语理解（yanyu）
  {
    id: "2026-guokao-xc-001",
    year: 2026,
    province: "国考",
    examType: "xingce",
    module: "yanyu",
    moduleName: "言语理解",
    difficulty: "medium",
    title: "随着人工智能技术的快速发展，许多人担心AI会取代传统岗位。然而，历史经验表明...",
    content: "随着人工智能技术的快速发展，许多人担心AI会取代传统岗位。然而，历史经验表明，每一次技术革命在摧毁旧岗位的同时，也会创造更多新岗位。工业革命淘汰了手工纺织工人，但催生了机器操作员、工程师等职业。因此，面对AI浪潮，我们不应过度恐慌，而应积极提升自身技能，适应新的就业形态。这段文字意在说明：",
    options: [
      "A. AI技术将彻底取代人类工作",
      "B. 技术革命必然导致大规模失业",
      "C. 应以积极态度应对AI带来的就业变革",
      "D. 历史经验对预测未来没有参考价值"
    ],
    correctAnswer: "C",
    knowledgePoint: "主旨概括-转折关联词"
  },
  {
    id: "2025-jiangsu-xc-001",
    year: 2025,
    province: "江苏",
    examType: "xingce",
    module: "yanyu",
    moduleName: "言语理解",
    difficulty: "easy",
    title: "城市更新不仅是物理空间的改造，更是社会关系的重塑。在推进老旧小区改造过程中...",
    content: "城市更新不仅是物理空间的改造，更是社会关系的重塑。在推进老旧小区改造过程中，既要注重基础设施的完善，也要关注社区文化的传承。只有让居民参与到改造决策中，才能真正实现'住有所居'到'住有优居'的转变。最适合做这段文字标题的是：",
    options: [
      "A. 老旧小区改造的技术难题",
      "B. 城市更新需要居民参与",
      "C. 基础设施完善的重要性",
      "D. 社区文化传承的路径"
    ],
    correctAnswer: "B",
    knowledgePoint: "标题填入-主旨概括"
  },
  {
    id: "2025-shandong-xc-001",
    year: 2025,
    province: "山东",
    examType: "xingce",
    module: "yanyu",
    moduleName: "言语理解",
    difficulty: "hard",
    title: "科学研究证明，睡眠不足会导致认知能力下降。但一项最新研究发现...",
    content: "科学研究证明，睡眠不足会导致认知能力下降。但一项最新研究发现，短时间的午休可以部分弥补夜间睡眠不足带来的认知损伤。研究人员让一组受试者夜间只睡4小时，然后分别进行30分钟、60分钟、90分钟的午休测试，结果显示60分钟午休组的认知表现最接近正常睡眠组。由此可以推出：",
    options: [
      "A. 午休时间越长，认知表现越好",
      "B. 60分钟午休可以完全替代夜间睡眠",
      "C. 适当午休有助于缓解睡眠不足的影响",
      "D. 认知能力下降完全由睡眠不足导致"
    ],
    correctAnswer: "C",
    knowledgePoint: "逻辑判断-归纳推理"
  },
  {
    id: "2024-zhejiang-xc-001",
    year: 2024,
    province: "浙江",
    examType: "xingce",
    module: "yanyu",
    moduleName: "言语理解",
    difficulty: "medium",
    title: "填入横线处最恰当的一项是：创新是引领发展的第一动力，_____。",
    content: "创新是引领发展的第一动力，_____。抓创新就是抓发展，谋创新就是谋未来。当前，新一轮科技革命和产业变革加速演进，谁抓住了科技创新这个'牛鼻子'，谁就能占领先机、赢得优势。填入横线处最恰当的一项是：",
    options: [
      "A. 这是经过实践检验的真理",
      "B. 必须把创新摆在国家发展全局的核心位置",
      "C. 科技创新需要大量资金投入",
      "D. 创新能力的提升是一个长期过程"
    ],
    correctAnswer: "B",
    knowledgePoint: "语句衔接-话题一致"
  },
  {
    id: "2024-guokao-xc-002",
    year: 2024,
    province: "国考",
    examType: "xingce",
    module: "yanyu",
    moduleName: "言语理解",
    difficulty: "hard",
    title: "将以下6个句子重新排列，语序正确的是：①然而，过度依赖数字化...",
    content: "将以下6个句子重新排列，语序正确的是：\n①然而，过度依赖数字化也会带来问题\n②数字化治理成为提升政府效能的重要手段\n③因此，需要把握好数字化的度\n④比如数据泄露、算法歧视等风险\n⑤各地纷纷推进'一网通办''最多跑一次'\n⑥数字技术为政府治理提供了新工具",
    options: [
      "A. ⑥②⑤①④③",
      "B. ②⑥⑤①④③",
      "C. ⑥⑤②①④③",
      "D. ②⑤⑥①④③"
    ],
    correctAnswer: "A",
    knowledgePoint: "语句排序-逻辑顺序"
  },
  
  // 数量关系（shuliang）
  {
    id: "2026-guokao-xc-003",
    year: 2026,
    province: "国考",
    examType: "xingce",
    module: "shuliang",
    moduleName: "数量关系",
    difficulty: "medium",
    title: "某单位组织员工参加培训，如果每间教室坐30人，则有10人无座位...",
    content: "某单位组织员工参加培训，如果每间教室坐30人，则有10人无座位；如果每间教室坐35人，则空出1间教室。问该单位共有多少员工参加培训？",
    options: [
      "A. 220",
      "B. 250",
      "C. 280",
      "D. 310"
    ],
    correctAnswer: "C",
    knowledgePoint: "方程法-盈亏问题"
  },
  {
    id: "2025-guangdong-xc-001",
    year: 2025,
    province: "广东",
    examType: "xingce",
    module: "shuliang",
    moduleName: "数量关系",
    difficulty: "easy",
    title: "一项工程，甲单独做需要12天完成，乙单独做需要18天完成...",
    content: "一项工程，甲单独做需要12天完成，乙单独做需要18天完成。两人合作3天后，剩下的由乙单独完成，还需要多少天？",
    options: [
      "A. 6",
      "B. 8",
      "C. 9",
      "D. 10"
    ],
    correctAnswer: "D",
    knowledgePoint: "工程问题-赋值法"
  },
  {
    id: "2025-henan-xc-001",
    year: 2025,
    province: "河南",
    examType: "xingce",
    module: "shuliang",
    moduleName: "数量关系",
    difficulty: "hard",
    title: "某商店将进价为100元的商品按150元出售，每天可售出50件...",
    content: "某商店将进价为100元的商品按150元出售，每天可售出50件。经调查发现，每降价5元，每天可多售出10件。问售价为多少时，每天利润最大？",
    options: [
      "A. 125元",
      "B. 130元",
      "C. 135元",
      "D. 140元"
    ],
    correctAnswer: "A",
    knowledgePoint: "经济利润-二次函数求最值"
  },
  {
    id: "2024-jiangsu-xc-002",
    year: 2024,
    province: "江苏",
    examType: "xingce",
    module: "shuliang",
    moduleName: "数量关系",
    difficulty: "medium",
    title: "甲、乙两人从A地同时出发前往B地，甲的速度是乙的1.5倍...",
    content: "甲、乙两人从A地同时出发前往B地，甲的速度是乙的1.5倍。甲到达B地后立即返回，在距B地20千米处与乙相遇。求A、B两地的距离。",
    options: [
      "A. 80千米",
      "B. 100千米",
      "C. 120千米",
      "D. 140千米"
    ],
    correctAnswer: "B",
    knowledgePoint: "行程问题-相遇追及"
  },
  {
    id: "2024-shandong-xc-002",
    year: 2024,
    province: "山东",
    examType: "xingce",
    module: "shuliang",
    moduleName: "数量关系",
    difficulty: "easy",
    title: "某班级有50名学生，其中男生30人，女生20人...",
    content: "某班级有50名学生，其中男生30人，女生20人。现要从中选出5人参加竞赛，要求至少有2名女生。问有多少种不同的选法？",
    options: [
      "A. 20100",
      "B. 31600",
      "C. 42200",
      "D. 51600"
    ],
    correctAnswer: "B",
    knowledgePoint: "排列组合-分类讨论"
  },
  
  // 判断推理（panduan）
  {
    id: "2026-guokao-xc-004",
    year: 2026,
    province: "国考",
    examType: "xingce",
    module: "panduan",
    moduleName: "判断推理",
    difficulty: "medium",
    title: "从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性...",
    content: "从所给的四个选项中，选择最合适的一个填入问号处，使之呈现一定的规律性：\n[图形描述：第一行三个图形分别为圆形、三角形、正方形；第二行三个图形分别为三角形、正方形、圆形；第三行前两个图形为正方形、圆形，问号处应填？]\nA. 圆形  B. 三角形  C. 正方形  D. 五角星",
    options: [
      "A. 圆形",
      "B. 三角形",
      "C. 正方形",
      "D. 五角星"
    ],
    correctAnswer: "B",
    knowledgePoint: "图形推理-样式遍历"
  },
  {
    id: "2025-zhejiang-xc-002",
    year: 2025,
    province: "浙江",
    examType: "xingce",
    module: "panduan",
    moduleName: "判断推理",
    difficulty: "hard",
    title: "所有优秀的公务员都具有较强的学习能力。小张具有较强的学习能力...",
    content: "所有优秀的公务员都具有较强的学习能力。小张具有较强的学习能力。因此，小张是优秀的公务员。以下哪项与上述推理形式最为相似？",
    options: [
      "A. 所有金属都导电，铜是金属，所以铜导电",
      "B. 所有鸟都会飞，企鹅不会飞，所以企鹅不是鸟",
      "C. 所有医生都穿白大褂，小王穿白大褂，所以小王是医生",
      "D. 所有学生都要考试，小李是学生，所以小李要考试"
    ],
    correctAnswer: "C",
    knowledgePoint: "逻辑判断-三段论结构"
  },
  {
    id: "2025-beijing-xc-001",
    year: 2025,
    province: "北京",
    examType: "xingce",
    module: "panduan",
    moduleName: "判断推理",
    difficulty: "easy",
    title: "定义判断：'数字鸿沟'是指不同群体在获取、使用数字技术方面存在的差距...",
    content: "定义判断：'数字鸿沟'是指不同群体在获取、使用数字技术方面存在的差距。根据上述定义，下列属于数字鸿沟的是：",
    options: [
      "A. 城市与农村在5G网络覆盖率上的差异",
      "B. 年轻人与老年人在使用智能手机熟练度上的差异",
      "C. 不同品牌手机在价格上的差异",
      "D. 不同国家在GDP总量上的差异"
    ],
    correctAnswer: "B",
    knowledgePoint: "定义判断-核心要件"
  },
  {
    id: "2024-guokao-xc-005",
    year: 2024,
    province: "国考",
    examType: "xingce",
    module: "panduan",
    moduleName: "判断推理",
    difficulty: "medium",
    title: "类比推理：创新：发展",
    content: "类比推理：创新：发展\nA. 批评：进步  B. 竞争：合作  C. 学习：知识  D. 污染：治理",
    options: [
      "A. 批评：进步",
      "B. 竞争：合作",
      "C. 学习：知识",
      "D. 污染：治理"
    ],
    correctAnswer: "A",
    knowledgePoint: "类比推理-因果对应"
  },
  {
    id: "2024-sichuan-xc-001",
    year: 2024,
    province: "四川",
    examType: "xingce",
    module: "panduan",
    moduleName: "判断推理",
    difficulty: "hard",
    title: "削弱型论证：某专家认为，通过提高个税起征点可以有效增加居民可支配收入...",
    content: "某专家认为，通过提高个税起征点可以有效增加居民可支配收入，从而刺激消费、拉动经济增长。以下哪项如果为真，最能削弱该专家的观点？",
    options: [
      "A. 提高个税起征点会减少政府财政收入",
      "B. 增加的收入大部分被居民用于储蓄而非消费",
      "C. 个税起征点的调整需要经过复杂的立法程序",
      "D. 高收入群体对个税起征点调整更为敏感"
    ],
    correctAnswer: "B",
    knowledgePoint: "逻辑判断-削弱论证"
  },
  
  // 资料分析（ziliao）
  {
    id: "2026-guokao-xc-006",
    year: 2026,
    province: "国考",
    examType: "xingce",
    module: "ziliao",
    moduleName: "资料分析",
    difficulty: "medium",
    title: "根据以下资料回答问题：2025年全国规模以上工业企业实现利润总额...",
    content: "根据以下资料回答问题：\n2025年全国规模以上工业企业实现利润总额88,023亿元，比上年增长4.3%。其中，国有控股企业实现利润总额23,196亿元，增长1.9%；股份制企业实现利润总额63,175亿元，增长5.1%；外商及港澳台商投资企业实现利润总额16,048亿元，增长2.8%；私营企业实现利润总额25,624亿元，增长6.2%。\n\n2025年，规模以上工业企业中，私营企业利润总额的同比增长量约为多少亿元？",
    options: [
      "A. 1,200",
      "B. 1,500",
      "C. 1,800",
      "D. 2,000"
    ],
    correctAnswer: "B",
    knowledgePoint: "增长量计算-百化分"
  },
  {
    id: "2025-guangdong-xc-002",
    year: 2025,
    province: "广东",
    examType: "xingce",
    module: "ziliao",
    moduleName: "资料分析",
    difficulty: "easy",
    title: "2025年某省GDP为12.5万亿元，比上年增长6.8%...",
    content: "2025年某省GDP为12.5万亿元，比上年增长6.8%。其中第一产业增加值0.8万亿元，增长3.5%；第二产业增加值4.5万亿元，增长5.2%；第三产业增加值7.2万亿元，增长8.1%。\n\n2025年该省第三产业增加值占GDP的比重约为：",
    options: [
      "A. 52.6%",
      "B. 56.8%",
      "C. 57.6%",
      "D. 61.2%"
    ],
    correctAnswer: "C",
    knowledgePoint: "比重计算-现期比重"
  },
  {
    id: "2025-jiangsu-xc-003",
    year: 2025,
    province: "江苏",
    examType: "xingce",
    module: "ziliao",
    moduleName: "资料分析",
    difficulty: "hard",
    title: "2020-2025年某市常住人口分别为：950万、980万、1,020万、1,050万、1,080万、1,120万...",
    content: "2020-2025年某市常住人口分别为：950万、980万、1,020万、1,050万、1,080万、1,120万。\n\n2021-2025年，该市常住人口年均增长约多少万人？",
    options: [
      "A. 28",
      "B. 30",
      "C. 34",
      "D. 38"
    ],
    correctAnswer: "C",
    knowledgePoint: "年均增长量-末期减初期除年份差"
  },
  {
    id: "2024-zhejiang-xc-003",
    year: 2024,
    province: "浙江",
    examType: "xingce",
    module: "ziliao",
    moduleName: "资料分析",
    difficulty: "medium",
    title: "2025年1-6月，全国社会消费品零售总额23.6万亿元，同比增长8.2%...",
    content: "2025年1-6月，全国社会消费品零售总额23.6万亿元，同比增长8.2%。其中，6月份社会消费品零售总额4.2万亿元，同比增长9.5%。\n\n2024年1-6月，全国社会消费品零售总额约为多少万亿元？",
    options: [
      "A. 21.2",
      "B. 21.8",
      "C. 22.4",
      "D. 23.0"
    ],
    correctAnswer: "B",
    knowledgePoint: "基期量计算-直除"
  },
  {
    id: "2024-guokao-xc-007",
    year: 2024,
    province: "国考",
    examType: "xingce",
    module: "ziliao",
    moduleName: "资料分析",
    difficulty: "hard",
    title: "2025年某企业研发投入为5.6亿元，比上年增长12.3%，增速较上年提高3.1个百分点...",
    content: "2025年某企业研发投入为5.6亿元，比上年增长12.3%，增速较上年提高3.1个百分点。\n\n2024年该企业研发投入约为多少亿元？",
    options: [
      "A. 4.8",
      "B. 5.0",
      "C. 5.2",
      "D. 5.4"
    ],
    correctAnswer: "B",
    knowledgePoint: "间隔基期-先求间隔增长率"
  },
  
  // 常识判断（changshi）
  {
    id: "2026-guokao-xc-008",
    year: 2026,
    province: "国考",
    examType: "xingce",
    module: "changshi",
    moduleName: "常识判断",
    difficulty: "medium",
    title: "下列关于中国式现代化的说法，正确的是：",
    content: "下列关于中国式现代化的说法，正确的是：",
    options: [
      "A. 中国式现代化是人口规模巨大的现代化",
      "B. 中国式现代化是全体人民同步富裕的现代化",
      "C. 中国式现代化是物质文明优先的现代化",
      "D. 中国式现代化是照搬西方模式的现代化"
    ],
    correctAnswer: "A",
    knowledgePoint: "政治理论-中国式现代化"
  },
  {
    id: "2025-shandong-xc-003",
    year: 2025,
    province: "山东",
    examType: "xingce",
    module: "changshi",
    moduleName: "常识判断",
    difficulty: "easy",
    title: "下列哪项不属于《民法典》规定的物权种类？",
    content: "下列哪项不属于《民法典》规定的物权种类？",
    options: [
      "A. 所有权",
      "B. 用益物权",
      "C. 担保物权",
      "D. 知识产权"
    ],
    correctAnswer: "D",
    knowledgePoint: "法律常识-民法典物权编"
  },
  {
    id: "2025-henan-xc-002",
    year: 2025,
    province: "河南",
    examType: "xingce",
    module: "changshi",
    moduleName: "常识判断",
    difficulty: "hard",
    title: "关于我国航天成就，下列说法正确的是：",
    content: "关于我国航天成就，下列说法正确的是：",
    options: [
      "A. 嫦娥五号实现了人类首次月球背面软着陆",
      "B. 天问一号成功着陆火星，是我国首次火星探测任务",
      "C. 神舟十六号是我国首次载人航天飞行任务",
      "D. 北斗三号是全球第一个卫星导航系统"
    ],
    correctAnswer: "B",
    knowledgePoint: "科技常识-航天成就"
  },
  {
    id: "2024-guangdong-xc-003",
    year: 2024,
    province: "广东",
    examType: "xingce",
    module: "changshi",
    moduleName: "常识判断",
    difficulty: "medium",
    title: "下列关于经济学概念的说法，错误的是：",
    content: "下列关于经济学概念的说法，错误的是：",
    options: [
      "A. 基尼系数衡量收入分配不平等程度",
      "B. CPI是消费者价格指数",
      "C. GDP是国内生产总值",
      "D. 恩格尔系数越高，说明生活水平越高"
    ],
    correctAnswer: "D",
    knowledgePoint: "经济常识-经济学指标"
  },
  {
    id: "2024-jiangsu-xc-004",
    year: 2024,
    province: "江苏",
    examType: "xingce",
    module: "changshi",
    moduleName: "常识判断",
    difficulty: "easy",
    title: "下列诗句与节日对应正确的是：",
    content: "下列诗句与节日对应正确的是：",
    options: [
      "A. '千门万户曈曈日，总把新桃换旧符'——元宵节",
      "B. '清明时节雨纷纷，路上行人欲断魂'——清明节",
      "C. '但愿人长久，千里共婵娟'——重阳节",
      "D. '遥知兄弟登高处，遍插茱萸少一人'——中秋节"
    ],
    correctAnswer: "B",
    knowledgePoint: "人文常识-传统节日"
  }
];

export const xingceModuleMap: Record<XingceModule, string> = {
  yanyu: "言语理解",
  shuliang: "数量关系",
  panduan: "判断推理",
  ziliao: "资料分析",
  changshi: "常识判断",
};

export const xingceProvinces = [
  "国考",
  "北京",
  "上海",
  "广东",
  "江苏",
  "浙江",
  "山东",
  "河南",
  "四川",
  "湖北",
  "湖南",
  "安徽",
  "福建",
  "河北",
  "山西",
  "辽宁",
];

export const xingceYears = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];
