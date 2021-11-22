import React, { useLayoutEffect } from "react";
import { ScrollLottie } from "~/utils/ScrollLottie";

export interface ScrollLottieComponentProps {}

export default function ScrollLottieComponent({}: ScrollLottieComponentProps) {
  useLayoutEffect(() => {
    ScrollLottie({
      target: "#animationWindow",
      path: "https://assets.codepen.io/35984/tapered_hello.json",
      duration: 4,
      speed: "medium",
    });
  }, []);
  return <div id="animationWindow"></div>;
}
