"use client";
import Button from "@/components/Button";
import { redirect } from "next/navigation";
import React from "react";

const handleNavigate = () => {
  redirect("/");
};

function NotFound() {
  return (
    <section className="error__section">
      <div className="error__content__container">
        <span> 웁스, 잘못된 페이지로 접근했어요 </span>
        <Button onClick={handleNavigate}> 돌아가기 </Button>
      </div>
    </section>
  );
}

export default NotFound;
