import { globalStyle, style } from "@vanilla-extract/css";
import { gradient } from "./animation.css";

const containerCss = {
  main: style({
    width: "100dvw",
    height: "100dvh",
  }),
};

const wrapperCss = {
  main: style({
    width: "100%",
    maxWidth: "100rem",
    padding: "6rem 3rem 3rem 3rem",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
  }),
  banner: style({
    width: "100%",
    backgroundColor: "#222",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "5rem 0",
    padding: "10rem 2rem",
    letterSpacing: "-0.03rem",
    boxSizing: "border-box",
    background: "linear-gradient(-45deg, #222222, #444444, #1f1f1f, #000000)",
    backgroundSize: "300% 300%",
    animation: `${gradient} 3s ease infinite`,
    borderRadius: "1.3rem",
    lineHeight: "1.3",
  }),
};

globalStyle(`${wrapperCss.main} img`, {
  width: "100%",
  maxWidth: "50rem",
  margin: "0 auto",
});

globalStyle(`${wrapperCss.banner} h1`, {
  fontSize: "2.5rem",
  fontWeight: "600",
});

globalStyle(`${wrapperCss.banner} span`, {
  fontSize: "1.4rem",
  fontWeight: "400",
  color: "var(--grey400)",
  lineHeight: "1.5",
});

export { containerCss, wrapperCss };
