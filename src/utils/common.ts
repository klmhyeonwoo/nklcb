const scaledPositionName = (originalName: string) => {
  const set: { [key: string]: string } = {
    qa: "QA",
    ml: "머신러닝",
    fullstack: "풀스택",
    devops: "데브옵스",
    infra: "인프라",
    ai: "인공지능",
    backend: "백엔드",
    security: "보안",
    frontend: "프론트엔드",
    android: "안드로이드",
    pm: "PM",
    dataanalyst: "데이터 분석",
    dataengineering: "데이터 엔지니어링",
    ios: "iOS",
    technicalsupport: "기술 지원",
    securityengineering: "보안 엔지니어링",
    po: "PO",
    productdesigner: "디자인",
    dba: "DBA",
    flutter: "플러터",
    techmanagement: "기술 매니저",

    /** N */
    "cloud solution architect": "클라우드 솔루션 아키텍트",
    "product design": "제품 디자인",
    "tech staff": "기술 스태프",
    운영지원: "운영 지원",
    비서: "비서",
    marketing: "마케팅",
    graphics: "그래픽 디자인",
    "product development": "제품 개발",
    "content creative": "콘텐츠 크리에이티브",
    "ai/ml": "AI · ML",
    공통: "공통",
    "content development": "콘텐츠 개발",
    "embedded sw": "임베디드 SW",
    "business development": "사업 개발",
    개인정보보호: "개인정보보호",

    /** K */
    "customer service": "고객 서비스",
    server: "서버",
    compliance: "컴플라이언스",
    "core banking": "코어 뱅킹",
    corporate: "기업",
    risk: "리스크",
    global: "글로벌",
    dr: "재해복구",
    design: "디자인",
    engineering: "엔지니어링",
    etc: "기타",
    network: "네트워크",
    finance: "금융",
    data: "데이터",
    management: "매니지먼트",
    algorithm_ml: "알고리즘 · 머신러닝",
    mobile: "모바일",
    "service & biz": "서비스 · 비즈니스",
    상시채용: "상시채용",
    cloud: "클라우드",

    /** T */
    recruiting: "채용",
    leadership: "리더십",
    "public policy": "공공정책",
    legal: "법무",
    people: "인사",
    communications: "커뮤니케이션",
    product: "제품",
    it: "IT",
    sales: "영업",
    "engineering (platform)": "플랫폼 엔지니어링",
    "engineering (product)": "제품 엔지니어링",
    strategy: "전략",
    "customer happiness": "고객행복",
    business: "비즈니스",

    /** L */
    analysis: "분석",
    "business & sales": "비즈니스 · 영업",
    planning: "기획",
    "marketing & cs": "마케팅 · 고객지원",

    /** D */
    "security engineer": "보안 엔지니어",
    "machine learning": "머신러닝",
    "information security manager": "정보보안 매니저",
    hr: "인사",
    "site reliability engineering": "SRE",
    "software engineer": "소프트웨어 엔지니어",
    "service operations": "서비스 운영",
  };

  return set[originalName?.toLowerCase()?.trim()] ?? originalName;
};

const formatDate = (dateString: string) => {
  if (dateString.includes("9999")) {
    return "채용 시 마감";
  }

  if (!dateString.includes("T")) {
    return dateString;
  }

  try {
    const date = new Date(dateString);

    const koreanFormatter = new Intl.DateTimeFormat("ko-KR", {
      timeZone: "Asia/Seoul",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    return koreanFormatter
      .format(date)
      .replace(/\. /g, ".")
      .replace(/(\d{4}\.\d{2}\.\d{2})\./, "$1 · ");
  } catch (error) {
    console.error("날짜 변환 중 오류가 발생했어요 : ", error);
    return dateString;
  }
};

export { scaledPositionName, formatDate };
