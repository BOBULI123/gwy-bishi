import type { ShenlunQuestion, ShenlunType } from "./questions";

export const shenlunQuestions: ShenlunQuestion[] = [
  {
    id: "2026-guokao-sl-001",
    year: 2026,
    province: "国考",
    examType: "shenlun",
    questionType: "zonghefenxi",
    questionTypeName: "综合分析",
    theme: "基层治理",
    material: "材料1：某市推行'网格化管理'，将社区划分为若干网格，每个网格配备一名网格员，负责收集民意、化解矛盾、服务群众。实施两年来，群众满意度从72%提升至89%。\n\n材料2：然而，部分网格员反映工作负担过重，一人负责300-500户，每天需要处理大量事务性工作，难以深入走访。有的网格员表示'每天都在填表，根本没有时间入户'。\n\n材料3：专家指出，网格化管理的关键在于'赋能'而非'加压'。要给网格员足够的权限和资源，让他们能真正解决问题，而不是只做'信息传声筒'。",
    questions: [
      {
        id: 1,
        requirement: "根据给定材料，概括当前网格化管理存在的问题。（10分）要求：准确、全面、有条理，不超过150字。",
        wordLimit: 150,
        type: "gaikuo",
        typeName: "概括归纳"
      },
      {
        id: 2,
        requirement: "根据给定材料，谈谈你对网格化管理中'赋能'与'加压'关系的理解。（15分）要求：分析透彻、观点明确，不超过300字。",
        wordLimit: 300,
        type: "zonghefenxi",
        typeName: "综合分析"
      }
    ]
  },
  {
    id: "2026-guokao-sl-002",
    year: 2026,
    province: "国考",
    examType: "shenlun",
    questionType: "zuowen",
    questionTypeName: "大作文",
    theme: "高质量发展",
    material: "材料1：党的二十大报告指出，高质量发展是全面建设社会主义现代化国家的首要任务。\n\n材料2：某制造企业通过数字化转型，生产效率提升40%，产品不良率下降60%，成功开拓海外市场。\n\n材料3：某地为追求GDP增长，盲目引进高污染项目，导致环境恶化，群众投诉不断，最终项目被叫停，造成巨大经济损失。\n\n材料4：专家指出，高质量发展不是不要增长，而是要以质量效益为中心，实现质的有效提升和量的合理增长。",
    questions: [
      {
        id: 1,
        requirement: "请结合给定材料，围绕'高质量发展'这一主题，自拟题目，写一篇文章。（40分）要求：观点明确、见解深刻、论证有力，1000-1200字。",
        wordLimit: 1200,
        type: "zuowen",
        typeName: "大作文"
      }
    ]
  },
  {
    id: "2025-jiangsu-sl-001",
    year: 2025,
    province: "江苏",
    examType: "shenlun",
    questionType: "duice",
    questionTypeName: "提出对策",
    theme: "乡村振兴",
    material: "材料1：某省推进乡村振兴战略，大力发展特色农业。然而，部分地区出现'同质化'竞争，多个村庄都种植同一种水果，导致供过于求，价格下跌，农民损失惨重。\n\n材料2：A村通过发展'农业+旅游'模式，打造采摘园、农家乐，年收入增长300%，成为网红村。B村盲目模仿A村，投入大量资金建设旅游设施，但因缺乏特色、位置偏远，游客稀少，陷入债务困境。\n\n材料3：专家建议，乡村振兴要因地制宜，避免'一刀切'和盲目跟风。要充分挖掘本地资源禀赋，走差异化发展道路。",
    questions: [
      {
        id: 1,
        requirement: "根据给定材料，就如何避免乡村振兴中的'同质化'问题，提出你的建议。（20分）要求：针对性强、切实可行，不超过400字。",
        wordLimit: 400,
        type: "duice",
        typeName: "提出对策"
      }
    ]
  },
  {
    id: "2025-shandong-sl-001",
    year: 2025,
    province: "山东",
    examType: "shenlun",
    questionType: "zhixing",
    questionTypeName: "贯彻执行",
    theme: "政务服务",
    material: "材料1：某市推行'一件事一次办'改革，将多个关联事项整合为'一件事'，实现'一表申请、一套材料、一窗受理、一次办结'。改革后，企业开办时间从15个工作日压缩至1个工作日。\n\n材料2：然而，部分群众反映，虽然窗口整合了，但后台数据并未打通，实际办理时仍需多次补充材料，'一次办'变成了'一次受理、多次跑腿'。\n\n材料3：该市决定开展'一次办'改革'回头看'，重点检查数据共享、流程优化、材料精简等落实情况。",
    questions: [
      {
        id: 1,
        requirement: "假设你是某市政务服务局工作人员，请根据给定材料，撰写一份'一件事一次办'改革落实情况调研报告提纲。（25分）要求：格式规范、内容全面，不超过500字。",
        wordLimit: 500,
        type: "zhixing",
        typeName: "贯彻执行"
      }
    ]
  },
  {
    id: "2024-zhejiang-sl-001",
    year: 2024,
    province: "浙江",
    examType: "shenlun",
    questionType: "zonghefenxi",
    questionTypeName: "综合分析",
    theme: "数字经济",
    material: "材料1：浙江省数字经济核心产业增加值占GDP比重超过10%，数字经济成为经济增长主引擎。\n\n材料2：然而，数字经济发展也带来新问题：老年人不会使用智能手机，难以享受数字服务；部分平台利用大数据'杀熟'，侵害消费者权益；数据泄露事件频发，个人信息安全受到威胁。\n\n材料3：浙江提出'数字赋能'与'数字包容'并重，既要推动数字化改革，也要关注数字弱势群体，让数字红利惠及全体人民。",
    questions: [
      {
        id: 1,
        requirement: "根据给定材料，谈谈你对'数字赋能'与'数字包容'关系的理解。（20分）要求：分析深入、逻辑清晰，不超过350字。",
        wordLimit: 350,
        type: "zonghefenxi",
        typeName: "综合分析"
      }
    ]
  },
  {
    id: "2024-guokao-sl-003",
    year: 2024,
    province: "国考",
    examType: "shenlun",
    questionType: "gaikuo",
    questionTypeName: "概括归纳",
    theme: "生态文明",
    material: "材料1：某省推行'林长制'，建立省、市、县、乡、村五级林长体系，实现森林资源保护全覆盖。实施以来，森林覆盖率从58%提升至62%。\n\n材料2：部分林长反映，虽然责任明确了，但缺乏配套资金和专业人员，'有长无兵'现象突出。有的村级林长由村干部兼任，本身工作繁忙，难以兼顾巡林任务。\n\n材料3：该省探索'智慧林长'模式，利用无人机、卫星遥感等技术辅助巡林，建立林长制APP，实现问题上报、处置、反馈全流程数字化。",
    questions: [
      {
        id: 1,
        requirement: "根据给定材料，概括'林长制'实施过程中存在的问题及对策。（15分）要求：准确、简明，不超过200字。",
        wordLimit: 200,
        type: "gaikuo",
        typeName: "概括归纳"
      }
    ]
  },
  {
    id: "2025-beijing-sl-001",
    year: 2025,
    province: "北京",
    examType: "shenlun",
    questionType: "zuowen",
    questionTypeName: "大作文",
    theme: "城市更新",
    material: "材料1：北京某老旧小区通过'微更新'改造，保留老建筑风貌，增设适老化设施，引入社区书店、咖啡馆等新业态，成为'网红打卡地'。\n\n材料2：另一小区采取'大拆大建'模式，虽然环境改善了，但原有社区邻里关系被打破，老人找不到聊天的地方，孩子失去了玩耍的院子，居民归属感下降。\n\n材料3：专家指出，城市更新要'留改拆'并举，留住城市记忆，改善人居环境，激发社区活力，实现'烟火气'与'现代感'的有机融合。",
    questions: [
      {
        id: 1,
        requirement: "请结合给定材料，围绕'城市更新中的留与改'这一主题，自拟题目，写一篇文章。（40分）要求：立意深刻、论证充分，1000-1200字。",
        wordLimit: 1200,
        type: "zuowen",
        typeName: "大作文"
      }
    ]
  },
  {
    id: "2024-guangdong-sl-001",
    year: 2024,
    province: "广东",
    examType: "shenlun",
    questionType: "duice",
    questionTypeName: "提出对策",
    theme: "营商环境",
    material: "材料1：广东省推行'数字政府'改革，实现企业开办'一网通办''一窗通取'，企业开办时间压缩至1个工作日内。\n\n材料2：然而，部分企业反映，虽然开办方便了，但后续经营中仍面临检查多、罚款重、政策不稳定等问题。有的企业一年接受各类检查50余次，疲于应付。\n\n材料3：广东提出'无事不扰''有求必应'的监管理念，推行'综合查一次'改革，整合各部门检查事项，实现'进一次门、查多项事'。",
    questions: [
      {
        id: 1,
        requirement: "根据给定材料，就如何优化营商环境，提出你的建议。（20分）要求：针对性强、条理清晰，不超过400字。",
        wordLimit: 400,
        type: "duice",
        typeName: "提出对策"
      }
    ]
  },
  {
    id: "2025-sichuan-sl-001",
    year: 2025,
    province: "四川",
    examType: "shenlun",
    questionType: "zhixing",
    questionTypeName: "贯彻执行",
    theme: "基层减负",
    material: "材料1：四川省开展'指尖上的形式主义'专项整治，清理整合政务APP、微信群，基层干部手机里的工作群从50个减少到10个。\n\n材料2：然而，部分干部反映，虽然群少了，但各种'打卡''留痕''排名'要求依然存在，只是从微信群转移到了专门的工作平台，负担并未实质性减轻。\n\n材料3：四川建立'基层减负监测点'，定期收集基层干部负担情况，对反弹问题及时预警、严肃问责。",
    questions: [
      {
        id: 1,
        requirement: "假设你是四川省减负办工作人员，请根据给定材料，撰写一份关于'指尖上的形式主义'整治情况的通报。（25分）要求：格式规范、内容翔实，不超过600字。",
        wordLimit: 600,
        type: "zhixing",
        typeName: "贯彻执行"
      }
    ]
  },
  {
    id: "2024-henan-sl-001",
    year: 2024,
    province: "河南",
    examType: "shenlun",
    questionType: "zonghefenxi",
    questionTypeName: "综合分析",
    theme: "粮食安全",
    material: "材料1：河南作为农业大省，粮食产量连续多年稳定在1300亿斤以上，为保障国家粮食安全作出重要贡献。\n\n材料2：然而，河南农业也面临挑战：种地效益低，青壮年劳动力外流，'谁来种地'问题突出；农业科技创新能力不足，种业'卡脖子'问题尚未根本解决。\n\n材料3：河南提出建设'中原农谷'，打造国家级农业科技创新高地，推动种业振兴、智慧农业发展，让农民成为有吸引力的职业。",
    questions: [
      {
        id: 1,
        requirement: "根据给定材料，谈谈你对'让农民成为有吸引力的职业'这一观点的理解。（20分）要求：观点明确、分析透彻，不超过350字。",
        wordLimit: 350,
        type: "zonghefenxi",
        typeName: "综合分析"
      }
    ]
  }
];

export const shenlunTypeMap: Record<ShenlunType, string> = {
  gaikuo: "概括归纳",
  zonghefenxi: "综合分析",
  duice: "提出对策",
  zhixing: "贯彻执行",
  zuowen: "大作文",
};

export const shenlunProvinces = [
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

export const shenlunYears = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];
