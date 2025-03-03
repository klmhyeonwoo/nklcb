"use client";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import "../../public/styles/app/main/style.scss";
import Button from "@/components/Button";
import { WALLA } from "@/utils/const";

export default function Home() {
  const handleClick = () => {
    window.open(WALLA);
  };

  return (
    <section>
      <article className="content-wrapper">
        <div>
          <Image
            src={logo}
            alt="네카라쿠배 공고 서비스 공식 로고"
            layout="responsive"
          />
          <div className="text-wrapper">
            <div>
              <span>
                네이버 · 카카오 · 라인 · 쿠팡 · 배달의민족 · 당근 · 토스와 같은
                {"\n"}
                <strong>빅테크 채용 공고</strong>를 한 눈에 확인해보세요
              </span>
              <span>
                현재 여러 알찬 기능들을 위해 준비중이니 아래 버튼을 통해 사전{" "}
                <strong>서비스 런칭</strong>을 빠르게 알려드릴 수 있어요!
              </span>
            </div>
            <Button className="btn-schema-dark" onClick={handleClick}>
              서비스 런칭 알림 받기
            </Button>
          </div>
        </div>
      </article>
    </section>
  );
}
