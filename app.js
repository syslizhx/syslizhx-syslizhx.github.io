const state = {
  lang: localStorage.getItem("lang") || "zh",
  theme: localStorage.getItem("theme") || "light",
  noteCategory: "all",
  resourceCategory: "all",
  noteQuery: "",
  resourceQuery: "",
};

const t = {
  zh: {
    "brand.name": "李镇雄",
    "brand.role": "博士研究生",
    "nav.home": "首页",
    "nav.about": "关于我",
    "nav.notes": "学习笔记",
    "nav.resources": "资源导航",
    "nav.projects": "项目",
    "nav.contact": "联系",
    "home.eyebrow": "地下水 | 水文地球化学 | 机器学习 | GIS",
    "home.title": "李镇雄",
    "home.subtitle": "中山大学博士研究生",
    "home.text": "关注地下水系统、水文地球化学过程、机器学习建模与遥感 GIS 数据融合。",
    "home.ctaNotes": "查看笔记",
    "home.ctaCv": "下载简历",
    "home.interestsTitle": "研究方向",
    "home.interest1": "地下水系统与水质演化",
    "home.interest2": "水文地球化学与污染物迁移",
    "home.interest3": "机器学习与环境数据建模",
    "home.interest4": "遥感、GIS 与空间分析",
    "profile.name": "李镇雄 / Zhenxiong Li",
    "profile.affiliation": "中山大学博士研究生",
    "profile.email": "zhenxiong.li.hydro@outlook.com",
    "about.eyebrow": "About",
    "about.title": "关于我",
    "about.lead": "这里用于沉淀个人学术履历、研究兴趣、论文与项目。未提供的信息已预留为可编辑占位。",
    "about.education": "教育经历",
    "about.edu1Title": "中山大学",
    "about.edu1Text": "博士研究生，地下水、水文地球化学、机器学习、遥感 GIS 相关研究。",
    "about.pending": "待补充",
    "about.edu2Title": "硕士 / 本科经历",
    "about.edu2Text": "后续可补充学校、专业、导师、论文题目与代表成果。",
    "about.interests": "研究兴趣",
    "about.publications": "发表论文",
    "about.pubText": "待补充论文题目、作者、期刊、年份、DOI 与代码/数据链接。",
    "about.cvLink": "查看当前简历",
    "notes.eyebrow": "Notes",
    "notes.title": "学习笔记",
    "notes.lead": "按研究主题组织笔记，适合持续更新为个人知识库。",
    "notes.search": "搜索笔记...",
    "resources.eyebrow": "Resources",
    "resources.title": "资源导航",
    "resources.lead": "学术检索、开放数据、地学工具、AI 工具与 PDF 文档工具的分类入口。",
    "resources.search": "搜索资源...",
    "projects.eyebrow": "Projects",
    "projects.title": "项目展示",
    "projects.lead": "项目先以研究方向占位展示，后续可替换为论文图、地图、代码仓库或在线演示。",
    "contact.eyebrow": "Contact",
    "contact.title": "联系方式",
    "contact.lead": "欢迎围绕地下水、环境数据建模、遥感 GIS 与交叉学科研究交流。",
    "contact.name": "姓名",
    "contact.subject": "主题",
    "contact.message": "留言",
    "contact.send": "用邮件发送",
    "footer.copy": "© 2026 李镇雄. 零成本静态学术主页。",
    all: "全部",
    visit: "访问",
    noResults: "没有找到匹配内容。",
  },
  en: {
    "brand.name": "Zhenxiong Li",
    "brand.role": "PhD Student",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.notes": "Notes",
    "nav.resources": "Resources",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "home.eyebrow": "Groundwater | Hydrogeochemistry | Machine Learning | GIS",
    "home.title": "Zhenxiong Li",
    "home.subtitle": "PhD Student at Sun Yat-sen University",
    "home.text": "I work on groundwater systems, hydrogeochemical processes, machine-learning modeling, and remote sensing / GIS data integration.",
    "home.ctaNotes": "View Notes",
    "home.ctaCv": "Download CV",
    "home.interestsTitle": "Research Interests",
    "home.interest1": "Groundwater systems and water-quality evolution",
    "home.interest2": "Hydrogeochemistry and contaminant transport",
    "home.interest3": "Machine learning for environmental data",
    "home.interest4": "Remote sensing, GIS, and spatial analysis",
    "profile.name": "Zhenxiong Li / 李镇雄",
    "profile.affiliation": "PhD Student at Sun Yat-sen University",
    "profile.email": "zhenxiong.li.hydro@outlook.com",
    "about.eyebrow": "About",
    "about.title": "About Me",
    "about.lead": "This section records my academic profile, research interests, publications, and projects. Missing details are kept as editable placeholders.",
    "about.education": "Education",
    "about.edu1Title": "Sun Yat-sen University",
    "about.edu1Text": "PhD student working on groundwater, hydrogeochemistry, machine learning, remote sensing, and GIS.",
    "about.pending": "To update",
    "about.edu2Title": "MSc / BSc Experience",
    "about.edu2Text": "Add institution, major, supervisor, thesis title, and representative outcomes later.",
    "about.interests": "Research Interests",
    "about.publications": "Publications",
    "about.pubText": "Add paper titles, authors, journals, years, DOI, code, and data links later.",
    "about.cvLink": "View current CV",
    "notes.eyebrow": "Notes",
    "notes.title": "Learning Notes",
    "notes.lead": "A topic-based knowledge base for research notes and reading records.",
    "notes.search": "Search notes...",
    "resources.eyebrow": "Resources",
    "resources.title": "Resources",
    "resources.lead": "Curated links for literature search, open data, geoscience tools, AI utilities, and PDF/document workflows.",
    "resources.search": "Search resources...",
    "projects.eyebrow": "Projects",
    "projects.title": "Projects",
    "projects.lead": "Project cards are placeholders for research outputs, maps, code repositories, and demos.",
    "contact.eyebrow": "Contact",
    "contact.title": "Contact",
    "contact.lead": "Open to discussion on groundwater, environmental data modeling, remote sensing, GIS, and interdisciplinary research.",
    "contact.name": "Name",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send by Email",
    "footer.copy": "© 2026 Zhenxiong Li. Built as a zero-cost static academic website.",
    all: "All",
    visit: "Visit",
    noResults: "No matching items.",
  },
};

const noteCategories = [
  { id: "all", zh: "全部", en: "All" },
  { id: "groundwater", zh: "地下水科学", en: "Groundwater" },
  { id: "geochemistry", zh: "水文地球化学", en: "Hydrogeochemistry" },
  { id: "ml", zh: "机器学习", en: "Machine Learning" },
  { id: "gis", zh: "遥感与 GIS", en: "Remote Sensing & GIS" },
  { id: "reading", zh: "论文阅读", en: "Paper Reading" },
];

const notes = [
  {
    category: "groundwater",
    date: "2026-06-04",
    read: "8 min",
    zh: {
      title: "地下水系统中的水文地球化学过程",
      desc: "梳理地下水补径排、氧化还原、离子交换、矿物溶解沉淀与水质演化的基础框架。",
      tag: "地下水科学",
    },
    en: {
      title: "Hydrogeochemical Processes in Groundwater Systems",
      desc: "A compact framework for recharge-discharge, redox reactions, ion exchange, mineral dissolution, precipitation, and water-quality evolution.",
      tag: "Groundwater",
    },
  },
  {
    category: "ml",
    date: "2026-05-22",
    read: "10 min",
    zh: {
      title: "地下水水位预测中的机器学习流程",
      desc: "从数据清洗、滞后特征、交叉验证到模型解释，整理地下水时间序列预测的可复用步骤。",
      tag: "机器学习",
    },
    en: {
      title: "Machine-Learning Workflow for Groundwater-Level Prediction",
      desc: "Reusable steps from cleaning, lagged features, cross-validation, and model interpretation for groundwater time-series forecasting.",
      tag: "Machine Learning",
    },
  },
  {
    category: "gis",
    date: "2026-05-12",
    read: "7 min",
    zh: {
      title: "Sentinel-2 与 GIS 在水环境监测中的应用",
      desc: "记录 Sentinel-2 数据获取、云掩膜、指数计算、样点匹配与制图表达的常用流程。",
      tag: "遥感 GIS",
    },
    en: {
      title: "Sentinel-2 and GIS for Water-Environment Monitoring",
      desc: "Notes on Sentinel-2 acquisition, cloud masking, index calculation, sampling alignment, and cartographic presentation.",
      tag: "Remote Sensing",
    },
  },
  {
    category: "geochemistry",
    date: "2026-04-28",
    read: "9 min",
    zh: {
      title: "地下水氮循环与硝酸盐污染笔记",
      desc: "围绕硝化、反硝化、同位素示踪、土地利用与含水层条件整理阅读要点。",
      tag: "氮循环",
    },
    en: {
      title: "Groundwater Nitrogen Cycling and Nitrate Contamination",
      desc: "Reading notes on nitrification, denitrification, isotope tracing, land use, and aquifer controls.",
      tag: "Nitrogen Cycle",
    },
  },
  {
    category: "reading",
    date: "2026-04-16",
    read: "6 min",
    zh: {
      title: "论文精读模板：问题、方法、证据与可复现性",
      desc: "用于快速拆解论文贡献、数据来源、模型假设、图表证据和潜在复现路径。",
      tag: "论文阅读",
    },
    en: {
      title: "Paper Reading Template: Question, Method, Evidence, Reproducibility",
      desc: "A template for extracting contributions, data sources, modeling assumptions, figure evidence, and replication routes.",
      tag: "Paper Reading",
    },
  },
  {
    category: "gis",
    date: "2026-03-30",
    read: "8 min",
    zh: {
      title: "QGIS 水文地质制图常用技巧",
      desc: "整理投影、DEM 派生因子、等值线、采样点、图例和版式输出中的实用经验。",
      tag: "QGIS",
    },
    en: {
      title: "QGIS Tips for Hydrogeologic Mapping",
      desc: "Practical notes on projections, DEM-derived factors, contours, sampling points, legends, and layout export.",
      tag: "QGIS",
    },
  },
];

const resourceCategories = [
  { id: "all", icon: "layout-grid", zh: "全部分类", en: "All Categories" },
  { id: "literature", icon: "library", zh: "文献检索", en: "Literature Search" },
  { id: "open-access", icon: "unlock", zh: "开放获取", en: "Open Access" },
  { id: "data", icon: "database", zh: "数据平台", en: "Data Platforms" },
  { id: "gis", icon: "map", zh: "GIS 与遥感", en: "GIS & Remote Sensing" },
  { id: "hydro", icon: "waves", zh: "水文地质工具", en: "Hydrogeology Tools" },
  { id: "ai", icon: "brain-circuit", zh: "AI 与机器学习", en: "AI & Machine Learning" },
  { id: "learning", icon: "graduation-cap", zh: "学习平台", en: "Learning" },
  { id: "pdf", icon: "file-cog", zh: "PDF 与文档工具", en: "PDF & Documents" },
  { id: "code", icon: "terminal", zh: "代码与软件", en: "Code & Software" },
  { id: "cn", icon: "book-marked", zh: "中文学术资源", en: "Chinese Academic" },
];

const resources = [
  {
    id: "literature",
    icon: "library",
    zh: { title: "文献检索与期刊数据库", desc: "查找论文、追踪引用、进入出版社与期刊平台。" },
    en: { title: "Literature Search & Journal Platforms", desc: "Find papers, track citations, and access publisher platforms." },
    links: [
      ["Google Scholar", "https://scholar.google.com/"],
      ["Web of Science", "https://www.webofscience.com/"],
      ["Scopus", "https://www.scopus.com/"],
      ["ScienceDirect", "https://www.sciencedirect.com/"],
      ["SpringerLink", "https://link.springer.com/"],
      ["Wiley Online Library", "https://onlinelibrary.wiley.com/"],
      ["AGU Publications", "https://agupubs.onlinelibrary.wiley.com/"],
      ["Hydrogeology Journal", "https://link.springer.com/journal/10040"],
    ],
  },
  {
    id: "open-access",
    icon: "unlock",
    zh: { title: "开放论文与文献发现", desc: "优先使用合法开放获取、预印本和元数据检索工具。" },
    en: { title: "Open Papers & Discovery", desc: "Legal open-access, preprint, and scholarly metadata discovery tools." },
    links: [
      ["OpenAlex", "https://openalex.org/"],
      ["Unpaywall", "https://unpaywall.org/"],
      ["DOAJ", "https://doaj.org/"],
      ["CORE", "https://core.ac.uk/"],
      ["BASE", "https://www.base-search.net/"],
      ["OpenAIRE Explore", "https://explore.openaire.eu/"],
      ["arXiv", "https://arxiv.org/"],
      ["EarthArXiv", "https://eartharxiv.org/"],
    ],
  },
  {
    id: "data",
    icon: "database",
    zh: { title: "水文、地学与环境数据平台", desc: "地下水、遥感、DEM、气象、土地覆盖等开放数据入口。" },
    en: { title: "Hydrology, Geoscience & Environmental Data", desc: "Open data portals for groundwater, remote sensing, DEM, climate, and land cover." },
    links: [
      ["USGS Water Data", "https://waterdata.usgs.gov/nwis"],
      ["HydroShare", "https://www.hydroshare.org/"],
      ["NASA Earthdata", "https://www.earthdata.nasa.gov/"],
      ["USGS EarthExplorer", "https://earthexplorer.usgs.gov/"],
      ["Copernicus Browser", "https://browser.dataspace.copernicus.eu/"],
      ["OpenTopography", "https://opentopography.org/"],
      ["WorldClim", "https://www.worldclim.org/"],
      ["NOAA Climate Data", "https://www.ncei.noaa.gov/"],
    ],
  },
  {
    id: "gis",
    icon: "map",
    zh: { title: "GIS、遥感与空间分析", desc: "桌面 GIS、在线地图、卫星影像处理与空间数据基础工具。" },
    en: { title: "GIS, Remote Sensing & Spatial Analysis", desc: "Desktop GIS, online mapping, satellite processing, and spatial-data tools." },
    links: [
      ["QGIS", "https://qgis.org/"],
      ["ArcGIS Online", "https://www.arcgis.com/"],
      ["Google Earth Engine", "https://earthengine.google.com/"],
      ["Sentinel Hub EO Browser", "https://apps.sentinel-hub.com/eo-browser/"],
      ["GDAL", "https://gdal.org/"],
      ["SAGA GIS", "https://saga-gis.sourceforge.io/"],
      ["OpenStreetMap", "https://www.openstreetmap.org/"],
      ["Natural Earth", "https://www.naturalearthdata.com/"],
    ],
  },
  {
    id: "hydro",
    icon: "waves",
    zh: { title: "水文地质与地球化学建模", desc: "地下水流、溶质运移、地球化学反应和参数估计工具。" },
    en: { title: "Hydrogeology & Geochemical Modeling", desc: "Groundwater flow, transport, geochemical reaction, and parameter-estimation tools." },
    links: [
      ["MODFLOW 6", "https://www.usgs.gov/software/modflow-6-usgs-modular-hydrologic-model"],
      ["ModelMuse", "https://www.usgs.gov/software/modelmuse-a-graphical-user-interface-groundwater-models"],
      ["FloPy", "https://flopy.readthedocs.io/"],
      ["PEST / PEST++", "https://pesthomepage.org/"],
      ["PHREEQC", "https://www.usgs.gov/software/phreeqc-version-3"],
      ["HYDRUS", "https://www.pc-progress.com/en/Default.aspx?hydrus"],
      ["MT3D-USGS", "https://www.usgs.gov/software/mt3d-usgs-groundwater-solute-transport-simulator-modflow"],
      ["HydroGeoSphere", "https://www.aquanty.com/hydrogeosphere/"],
    ],
  },
  {
    id: "ai",
    icon: "brain-circuit",
    zh: { title: "AI、机器学习与可解释性", desc: "建模、深度学习、Notebook、数据竞赛与模型解释工具。" },
    en: { title: "AI, Machine Learning & Explainability", desc: "Modeling, deep learning, notebooks, data competitions, and interpretation tools." },
    links: [
      ["scikit-learn", "https://scikit-learn.org/"],
      ["PyTorch", "https://pytorch.org/"],
      ["TensorFlow", "https://www.tensorflow.org/"],
      ["Hugging Face", "https://huggingface.co/"],
      ["Google Colab", "https://colab.research.google.com/"],
      ["Kaggle", "https://www.kaggle.com/"],
      ["SHAP", "https://shap.readthedocs.io/"],
      ["XGBoost", "https://xgboost.readthedocs.io/"],
    ],
  },
  {
    id: "learning",
    icon: "graduation-cap",
    zh: { title: "学习平台与研究训练", desc: "课程、教材、写作、图表、统计和科研方法训练。" },
    en: { title: "Learning Platforms & Research Training", desc: "Courses, textbooks, writing, visualization, statistics, and research methods." },
    links: [
      ["MIT OpenCourseWare", "https://ocw.mit.edu/"],
      ["Coursera", "https://www.coursera.org/"],
      ["edX", "https://www.edx.org/"],
      ["USGS Water Science School", "https://www.usgs.gov/special-topics/water-science-school"],
      ["The Groundwater Project", "https://gw-project.org/"],
      ["Our World in Data", "https://ourworldindata.org/"],
      ["StatQuest", "https://statquest.org/"],
      ["DataCamp", "https://www.datacamp.com/"],
    ],
  },
  {
    id: "pdf",
    icon: "file-cog",
    zh: { title: "PDF、文档与写作工具", desc: "PDF 合并压缩、文献管理、LaTeX、翻译、图表和在线写作。" },
    en: { title: "PDF, Documents & Writing Tools", desc: "PDF merge/compress, reference management, LaTeX, translation, figures, and writing." },
    links: [
      ["PDF24 Tools", "https://tools.pdf24.org/"],
      ["Zotero", "https://www.zotero.org/"],
      ["ZoteroBib", "https://zbib.org/"],
      ["Overleaf", "https://www.overleaf.com/"],
      ["DeepL", "https://www.deepl.com/translator"],
      ["LanguageTool", "https://languagetool.org/"],
      ["diagrams.net", "https://www.diagrams.net/"],
      ["BioRender", "https://www.biorender.com/"],
    ],
  },
  {
    id: "code",
    icon: "terminal",
    zh: { title: "代码、环境与协作软件", desc: "版本控制、Python/R 环境、Notebook、包管理和科研代码发布。" },
    en: { title: "Code, Environments & Collaboration", desc: "Version control, Python/R environments, notebooks, package management, and research code." },
    links: [
      ["GitHub", "https://github.com/"],
      ["VS Code", "https://code.visualstudio.com/"],
      ["Anaconda", "https://www.anaconda.com/"],
      ["conda-forge", "https://conda-forge.org/"],
      ["Jupyter", "https://jupyter.org/"],
      ["R Project", "https://www.r-project.org/"],
      ["RStudio", "https://posit.co/download/rstudio-desktop/"],
      ["Zenodo", "https://zenodo.org/"],
    ],
  },
  {
    id: "cn",
    icon: "book-marked",
    zh: { title: "中文学术与国内数据资源", desc: "中文论文、国家数据、地理空间信息与常用中文数据库。" },
    en: { title: "Chinese Academic & Domestic Data Resources", desc: "Chinese papers, national data, geospatial information, and common databases." },
    links: [
      ["中国知网 CNKI", "https://www.cnki.net/"],
      ["万方数据", "https://www.wanfangdata.com.cn/"],
      ["维普网", "http://www.cqvip.com/"],
      ["国家科技图书文献中心", "https://www.nstl.gov.cn/"],
      ["国家地球系统科学数据中心", "https://www.geodata.cn/"],
      ["国家冰川冻土沙漠科学数据中心", "https://www.ncdc.ac.cn/"],
      ["地理空间数据云", "https://www.gscloud.cn/"],
      ["国家青藏高原科学数据中心", "https://data.tpdc.ac.cn/"],
    ],
  },
];

const projects = [
  {
    icon: "line-chart",
    zh: {
      title: "地下水水位预测",
      desc: "结合多源环境因子、时间序列特征与机器学习模型，探索地下水位变化预测与不确定性表达。",
      meta: "Machine Learning | Time Series",
    },
    en: {
      title: "Groundwater-Level Prediction",
      desc: "Integrating environmental covariates, time-series features, and machine-learning models for groundwater-level forecasting and uncertainty analysis.",
      meta: "Machine Learning | Time Series",
    },
  },
  {
    icon: "shield-check",
    zh: {
      title: "地下水脆弱性评价",
      desc: "面向污染风险识别，融合水文地质指标、空间分析和数据驱动模型构建地下水脆弱性评价框架。",
      meta: "GIS | Vulnerability Assessment",
    },
    en: {
      title: "Groundwater Vulnerability Assessment",
      desc: "A framework that combines hydrogeologic indicators, spatial analysis, and data-driven modeling for contamination-risk assessment.",
      meta: "GIS | Vulnerability Assessment",
    },
  },
  {
    icon: "atom",
    zh: {
      title: "地下水氮循环",
      desc: "围绕硝酸盐污染、氮转化过程、同位素证据与土地利用影响，研究地下水氮循环机制。",
      meta: "Hydrogeochemistry | Nitrogen",
    },
    en: {
      title: "Nitrogen Cycling in Groundwater",
      desc: "Investigating nitrate contamination, nitrogen transformation, isotope evidence, and land-use controls in groundwater systems.",
      meta: "Hydrogeochemistry | Nitrogen",
    },
  },
  {
    icon: "satellite",
    zh: {
      title: "遥感地下水环境监测",
      desc: "利用遥感影像、地形数据和 GIS 分析提取水环境与地表过程指标，服务区域地下水研究。",
      meta: "Remote Sensing | GIS",
    },
    en: {
      title: "Remote Sensing for Groundwater Environments",
      desc: "Using satellite imagery, terrain data, and GIS analysis to derive environmental indicators for regional groundwater studies.",
      meta: "Remote Sensing | GIS",
    },
  },
];

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function label(value) {
  return value[state.lang] || value.zh || value.en || value;
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function applyLanguage() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.body.dataset.lang = state.lang;

  $$("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = t[state.lang][key] || node.textContent;
  });

  $$("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    node.placeholder = t[state.lang][key] || node.placeholder;
  });

  renderNotes();
  renderResources();
  renderProjects();
  refreshIcons();
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  const icon = state.theme === "dark" ? "sun" : "moon";
  const themeButton = $('[data-action="theme"]');
  if (themeButton) {
    themeButton.innerHTML = `<i data-lucide="${icon}"></i>`;
  }
  refreshIcons();
}

function renderNoteFilters() {
  const container = $("#noteFilters");
  container.innerHTML = noteCategories
    .map((cat) => {
      const active = state.noteCategory === cat.id ? "active" : "";
      return `<button class="chip ${active}" type="button" data-note-category="${cat.id}">${cat[state.lang]}</button>`;
    })
    .join("");
}

function renderNotes() {
  renderNoteFilters();
  const grid = $("#notesGrid");
  const query = state.noteQuery.trim().toLowerCase();
  const filtered = notes.filter((note) => {
    const content = `${note.zh.title} ${note.zh.desc} ${note.zh.tag} ${note.en.title} ${note.en.desc} ${note.en.tag}`.toLowerCase();
    const categoryMatch = state.noteCategory === "all" || note.category === state.noteCategory;
    return categoryMatch && (!query || content.includes(query));
  });

  if (!filtered.length) {
    grid.innerHTML = `<article class="panel">${t[state.lang].noResults}</article>`;
    return;
  }

  grid.innerHTML = filtered
    .map((note) => {
      const copy = note[state.lang];
      return `
        <article class="note-card">
          <div class="note-art" aria-hidden="true"></div>
          <div class="note-card-body">
            <div class="note-meta">
              <span class="note-tag">${copy.tag}</span>
              <span>${note.date}</span>
              <span>${note.read}</span>
            </div>
            <h3>${copy.title}</h3>
            <p>${copy.desc}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderResourceCategories() {
  const container = $("#resourceCategories");
  container.innerHTML = resourceCategories
    .map((cat) => {
      const active = state.resourceCategory === cat.id ? "active" : "";
      return `<button class="${active}" type="button" data-resource-category="${cat.id}">${cat[state.lang]}</button>`;
    })
    .join("");
}

function renderResources() {
  renderResourceCategories();
  const grid = $("#resourceGrid");
  const query = state.resourceQuery.trim().toLowerCase();
  const filtered = resources.filter((group) => {
    const copy = group[state.lang];
    const linkText = group.links.map(([name]) => name).join(" ");
    const content = `${group.zh.title} ${group.zh.desc} ${group.en.title} ${group.en.desc} ${linkText}`.toLowerCase();
    const categoryMatch = state.resourceCategory === "all" || group.id === state.resourceCategory;
    return categoryMatch && (!query || content.includes(query));
  });

  if (!filtered.length) {
    grid.innerHTML = `<article class="panel">${t[state.lang].noResults}</article>`;
    return;
  }

  grid.innerHTML = filtered
    .map((group) => {
      const copy = group[state.lang];
      const links = group.links
        .map(
          ([name, url]) => `
            <li>
              <a href="${url}" target="_blank" rel="noreferrer">
                <span>${name}</span>
                <i data-lucide="arrow-up-right"></i>
              </a>
            </li>
          `
        )
        .join("");

      return `
        <article class="resource-card">
          <header>
            <span class="resource-icon"><i data-lucide="${group.icon}"></i></span>
            <div>
              <h3>${copy.title}</h3>
              <p>${copy.desc}</p>
            </div>
          </header>
          <ul class="resource-links">${links}</ul>
        </article>
      `;
    })
    .join("");
  refreshIcons();
}

function renderProjects() {
  const grid = $("#projectsGrid");
  grid.innerHTML = projects
    .map((project) => {
      const copy = project[state.lang];
      return `
        <article class="project-card">
          <div class="project-art" aria-hidden="true"></div>
          <div class="project-card-body">
            <div class="resource-icon"><i data-lucide="${project.icon}"></i></div>
            <h3>${copy.title}</h3>
            <p>${copy.desc}</p>
            <div class="project-meta"><span>${copy.meta}</span></div>
          </div>
        </article>
      `;
    })
    .join("");
}

function bindEvents() {
  $('[data-action="language"]').addEventListener("click", () => {
    state.lang = state.lang === "zh" ? "en" : "zh";
    localStorage.setItem("lang", state.lang);
    applyLanguage();
  });

  $('[data-action="theme"]').addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", state.theme);
    applyTheme();
  });

  $('[data-action="menu"]').addEventListener("click", () => {
    $("[data-mobile-menu]").classList.toggle("open");
  });

  $("[data-mobile-menu]").addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      $("[data-mobile-menu]").classList.remove("open");
    }
  });

  $("#noteFilters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-note-category]");
    if (!button) return;
    state.noteCategory = button.dataset.noteCategory;
    renderNotes();
  });

  $("#notesSearch").addEventListener("input", (event) => {
    state.noteQuery = event.target.value;
    renderNotes();
  });

  $("#resourceCategories").addEventListener("click", (event) => {
    const button = event.target.closest("[data-resource-category]");
    if (!button) return;
    state.resourceCategory = button.dataset.resourceCategory;
    renderResources();
  });

  $("#resourceSearch").addEventListener("input", (event) => {
    state.resourceQuery = event.target.value;
    renderResources();
  });

  $("#contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name") || "";
    const subject = data.get("subject") || "Academic contact";
    const message = data.get("message") || "";
    const body = [`Name: ${name}`, "", message].join("\n");
    window.location.href = `mailto:zhenxiong.li.hydro@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

function init() {
  document.documentElement.dataset.theme = state.theme;
  bindEvents();
  applyTheme();
  applyLanguage();
}

init();
