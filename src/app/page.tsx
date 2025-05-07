export default async function Home() {
  return (
    <main>
      <section className="hero">
        <h1>네카라쿠배 채용의 모든 것</h1>
        <p>국내 대표 IT 기업의 채용정보를 한눈에 확인하세요</p>
      </section>

      <section className="highlights">
        <div className="highlight-item">
          <h2>실시간 채용 현황</h2>
          <p>매일 업데이트되는 최신 채용 정보</p>
        </div>
        <div className="highlight-item">
          <h2>다양한 직무</h2>
          <p>개발, 기획, 디자인 등 IT 전분야 포지션</p>
        </div>
        <div className="highlight-item">
          <h2>경력 맞춤 정보</h2>
          <p>신입부터 경력직까지 모든 레벨의 채용 정보</p>
        </div>
      </section>

      <section className="companies">
        <h2>주요 채용 기업</h2>
        <ul>
          <li>네이버 - 대한민국 대표 IT 플랫폼</li>
          <li>카카오 - 모바일 라이프 플랫폼</li>
          <li>라인 - 글로벌 메신저 서비스</li>
          <li>쿠팡 - 대한민국 대표 이커머스</li>
          <li>배달의민족 - 종합 푸드테크 기업</li>
        </ul>
      </section>

      <section className="positions">
        <h2>인기 채용 포지션</h2>
        <ul>
          <li>프론트엔드 개발자</li>
          <li>백엔드 개발자</li>
          <li>DevOps 엔지니어</li>
          <li>데이터 사이언티스트</li>
          <li>UX/UI 디자이너</li>
          <li>프로덕트 매니저</li>
        </ul>
      </section>

      <section className="benefits">
        <h2>기업 복지 하이라이트</h2>
        <ul>
          <li>자율 출퇴근 및 리모트 근무</li>
          <li>최신 장비 지원</li>
          <li>자기계발비 지원</li>
          <li>건강검진 및 의료비 지원</li>
          <li>동호회 및 문화활동 지원</li>
        </ul>
      </section>
    </main>
  );
}
