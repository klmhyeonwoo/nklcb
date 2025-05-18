"use client";
import React from "react";
import styles from "@/styles/components/greeting-card.module.scss";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

type GreetingCardProps = {
  title: string;
  description: string;
  image?: StaticImageData;
  navigate?: "web" | "channel-talk";
};

function GreetingCard({
  title,
  description,
  image,
  navigate,
}: GreetingCardProps) {
  const router = useRouter();
  const handleNavigate = () => {
    if (navigate === "web") {
      router.push("/web");
    } else if (navigate === "channel-talk") {
      window.open("https://6oo1v.channel.io/home", "_blank");
    }
  };
  return (
    <div className={styles.container} onClick={handleNavigate}>
      <span className={styles.greeting__description}>{description}</span>
      <span className={styles.greeting__title}>{title}</span>
      <Image
        className={styles.greeting__image}
        src={image ?? ""}
        alt="Greeting Card Image"
        layout="responsive"
      />
    </div>
  );
}

export default GreetingCard;
