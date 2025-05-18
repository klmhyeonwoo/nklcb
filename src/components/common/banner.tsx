"use client";
import React, { Fragment } from "react";
import styles from "@/styles/components/banner.module.scss";

type BannerTypes = {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  image?: string;
  link?: string;
};

function Banner({ title, description }: BannerTypes) {
  const isTextType = (value: string | React.ReactNode): value is string => {
    return typeof value === "string";
  };

  return (
    <div className={styles.banner__container}>
      {isTextType(title) ? (
        <Fragment>
          <h1> {title} </h1>
        </Fragment>
      ) : (
        title
      )}
      <div className={styles.banner__description}>
        {isTextType(description) ? <span> {description}</span> : description}
      </div>
    </div>
  );
}

export default Banner;
