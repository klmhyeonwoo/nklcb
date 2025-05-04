"use client";
import React from "react";
import icon_hands_pushing from "../../public/icon/hands_pushing.gif";
import Image from "next/image";

function Error() {
  return (
    <html lang="ko">
      <head>
        <title>에러가 발생했어요</title>
      </head>
      <body>
        <section className="error__section">
          <Image
            src={icon_hands_pushing}
            width={90}
            height={90}
            alt="잘못된 요청을 했어요"
          />
          <span>웁스, 잘못된 요청을 했어요</span>
        </section>
      </body>
    </html>
  );
}

export default Error;
