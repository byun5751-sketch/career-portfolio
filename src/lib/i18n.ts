export type Lang = "en" | "ko";
export const locales: Lang[] = ["en", "ko"];
export const defaultLocale: Lang = "ko";

const t = {
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      status: "Currently at BIGO Live - Business Development",
      name: "Brasley Byun",
      role: "Business Development & Operations",
      tagline:
        "I structure scattered information and processes, coordinate stakeholders, and connect everything to actionable results.",
      viewProjects: "View Projects",
      experience: "Experience",
      getInTouch: "Get in Touch",
    },
    stats: {
      companies: "Companies",
      projects: "Projects Delivered",
      gpa: "GPA / 4.50",
      awards: "Awards & Certs",
    },
    direction: {
      eyebrow: "Career Direction",
      title: "Three Keywords",
      items: [
        {
          num: "01",
          title: "Information Structuring",
          desc: "Collect scattered market data, operational status, and customer references. Organize them into comparable, decision-ready formats.",
        },
        {
          num: "02",
          title: "Process Improvement",
          desc: "Identify repetitive or delayed workflows. Convert them into executable systems: checklists, trackers, templates, and manuals.",
        },
        {
          num: "03",
          title: "Stakeholder Coordination",
          desc: "Collaborate with team leads, PMs, sales reps, external vendors, and global organizations to deliver completed outcomes.",
        },
      ],
    },
    featured: {
      eyebrow: "Selected Work",
      title: "Featured Projects",
      desc: "Each project follows the SARL structure: Situation, Action, Result, and Learning.",
      allProjects: "All projects",
    },
    skills: {
      eyebrow: "Capabilities",
      title: "Core Skills",
    },
    cta: {
      title: "Let's Connect",
      desc: "Looking for Business Development, Sales Operations, or Marketing Operations talent? I'd love to hear from you.",
      email: "Send an Email",
      linkedin: "LinkedIn",
      kakao: "KakaoTalk",
    },
    experience: {
      eyebrow: "Work Experience",
      title: "Where I've Worked",
      desc: "From global enterprise software to optics to live-streaming platforms. Each role deepened my operations and business development capabilities.",
      keyImpact: "Key Impact",
    },
    projectsPage: {
      eyebrow: "Case Studies",
      title: "Projects",
      desc: "Each project follows the SARL structure: Situation, Action, Result, and Learning.",
      totalProjects: "total projects",
      organizations: "organizations",
      categories: "categories",
      situation: "Situation",
      problem: "Problem",
      actions: "Actions",
      results: "Results",
      learning: "Learning",
    },
    educationPage: {
      eyebrow: "Academic Background",
      title: "Education",
      university: "Chung-Ang University",
      degree: "B.A. International Logistics / Business Administration",
      gpaLabel: "GPA",
      graduation: "Graduation",
      standing: "Standing",
      timeline: "Timeline",
      summaCumLaude: "Summa Cum Laude",
      salutatorian: "Salutatorian",
      earlyGraduation: "Early Graduation",
      secondInClass: "2nd in class",
      academicFocus: "Academic Focus",
      recognition: "Recognition",
      awardsTitle: "Awards",
      qualifications: "Qualifications",
      certsTitle: "Certifications",
    },
    footer: {
      tagline:
        "Structuring information, improving processes, and coordinating stakeholders to deliver actionable results.",
      navigation: "Navigation",
      contact: "Contact",
      builtWith: "Built with Next.js and the Linear design system.",
    },
  },
  ko: {
    nav: {
      home: "홈",
      experience: "경력",
      projects: "프로젝트",
      education: "학력",
      contact: "연락하기",
    },
    hero: {
      status: "현재 BIGO Live에서 Business Development 담당",
      name: "변재일",
      role: "Business Development & Operations",
      tagline:
        "흩어진 정보와 업무 프로세스를 구조화하고, 이해관계자를 조율해 실행 가능한 결과로 연결하는 사람입니다.",
      viewProjects: "프로젝트 보기",
      experience: "경력 보기",
      getInTouch: "연락하기",
    },
    stats: {
      companies: "근무 기업",
      projects: "수행 프로젝트",
      gpa: "학점 / 4.50",
      awards: "수상 및 자격증",
    },
    direction: {
      eyebrow: "커리어 방향성",
      title: "세 가지 키워드",
      items: [
        {
          num: "01",
          title: "정보 구조화",
          desc: "흩어진 시장 정보, 업무 현황, 고객사 레퍼런스를 수집하고 비교 가능한 형태로 정리합니다.",
        },
        {
          num: "02",
          title: "운영 개선",
          desc: "반복되거나 지연되는 업무 프로세스를 파악하고, 체크리스트, 대장, 매뉴얼 등 실행 가능한 시스템으로 전환합니다.",
        },
        {
          num: "03",
          title: "이해관계자 조율",
          desc: "팀장, PM, 영업 담당자, 외부 벤더, 글로벌 조직 등 다양한 이해관계자와 협업하며 결과물을 완성합니다.",
        },
      ],
    },
    featured: {
      eyebrow: "대표 프로젝트",
      title: "주요 프로젝트",
      desc: "각 프로젝트는 상황, 행동, 결과, 배운 점(SARL) 구조로 정리되어 있습니다.",
      allProjects: "전체 보기",
    },
    skills: {
      eyebrow: "핵심 역량",
      title: "보유 역량",
    },
    cta: {
      title: "연락 주세요",
      desc: "Business Development, Sales Operations, Marketing Operations 인재를 찾고 계신다면 편하게 연락 주세요.",
      email: "이메일 보내기",
      linkedin: "LinkedIn",
      kakao: "카카오톡",
    },
    experience: {
      eyebrow: "경력 사항",
      title: "근무 경험",
      desc: "글로벌 엔터프라이즈 소프트웨어에서 광학, 라이브 스트리밍 플랫폼까지. 각 회사에서 운영과 비즈니스 개발 역량을 키워왔습니다.",
      keyImpact: "주요 성과",
    },
    projectsPage: {
      eyebrow: "케이스 스터디",
      title: "프로젝트",
      desc: "각 프로젝트는 상황, 행동, 결과, 배운 점(SARL) 구조로 정리되어 있습니다.",
      totalProjects: "전체 프로젝트",
      organizations: "소속 기관",
      categories: "카테고리",
      situation: "상황",
      problem: "문제",
      actions: "수행 내용",
      results: "결과",
      learning: "배운 점",
    },
    educationPage: {
      eyebrow: "학력 사항",
      title: "학력",
      university: "중앙대학교",
      degree: "국제물류학과 / 경영학 학사",
      gpaLabel: "학점",
      graduation: "졸업",
      standing: "석차",
      timeline: "졸업 시기",
      summaCumLaude: "최우등 졸업",
      salutatorian: "차석 졸업",
      earlyGraduation: "조기 졸업",
      secondInClass: "차석",
      academicFocus: "전공 분야",
      recognition: "수상 내역",
      awardsTitle: "수상",
      qualifications: "자격 사항",
      certsTitle: "자격증",
    },
    footer: {
      tagline:
        "흩어진 정보를 구조화하고, 프로세스를 개선하며, 이해관계자를 조율해 실행 가능한 결과를 만듭니다.",
      navigation: "페이지",
      contact: "연락처",
      builtWith: "Next.js와 Linear 디자인 시스템으로 제작되었습니다.",
    },
  },
};

export type Translations = typeof t.en;

export function getTranslations(lang: Lang): Translations {
  return t[lang] ?? t.en;
}
