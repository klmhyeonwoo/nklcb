"use client";

import Card from "@/components/card/Card";
import styles from "@/styles/components/card.module.scss";
import "@/styles/style.scss";

export default function SkeletonTestPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "2rem" }}>스켈레톤 UI 테스트</h1>
      
      <h2 style={{ marginBottom: "1rem" }}>1. CardSkeleton 직접 사용</h2>
      <div className={styles.card__section}>
        <div className={styles.card__wrapper}>
          <Card.CardSkeleton />
        </div>
      </div>
      
      <h2 style={{ marginBottom: "1rem", marginTop: "2rem" }}>2. 실제 카드와 비교</h2>
      <div className={styles.card__section}>
        <div className={styles.card__wrapper}>
          <Card.CardSkeleton />
        </div>
        <Card>
          <Card.CardContent
            title="테스트 공고 제목"
            company="테스트 회사"
            position="개발자"
            employType="정규"
            fromDate="2023-01-01"
            toDate="2023-12-31"
            link="#"
          />
        </Card>
      </div>
      
      <h2 style={{ marginBottom: "1rem", marginTop: "2rem" }}>3. 그리드에서 여러 개 표시</h2>
      <div className={styles.card__section}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={`skeleton-${index}`} className={styles.card__wrapper}>
            <Card.CardSkeleton />
          </div>
        ))}
      </div>
      
      <h2 style={{ marginBottom: "1rem", marginTop: "2rem" }}>4. 다른 스타일 옵션 테스트</h2>
      <div className={styles.card__section}>
        <div className={styles.card__wrapper} style={{ padding: "0" }}>
          <div className={styles.card__skeleton} style={{ height: "200px" }} />
        </div>
      </div>
    </div>
  );
} 