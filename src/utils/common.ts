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
  };

  return set[originalName.toLowerCase()] ?? originalName;
};

export { scaledPositionName };
