import React, { useEffect, useState } from "react";
import lottie from "lottie-web";
import { useScrollPercentage } from "react-scroll-percentage";

export interface AppProps {}

const first = require("./first.json");

export default function App({}: AppProps) {
  const [scene, setScene] = useState<any>(null);
  useEffect(() => {
    const elem: any = document.getElementById("svgContainer");
    const newScene = lottie.loadAnimation({
      renderer: "svg",
      autoplay: false,
      loop: false,
      container: elem,
      path: first,
      // path: "https://labs.nearpod.com/bodymovin/demo/markus/halloween/markus.json",
    });
    setScene(newScene);
  }, []);

  const [ref, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    console.log(percentage);
    if (!scene) return;
    const { totalFrames, isLoaded } = scene;
    if (isLoaded) {
      scene.goToAndStop(
        Math.min(totalFrames - 1, Math.floor(percentage * totalFrames)),
        true
      );
    }
  }, [percentage, scene]);

  return (
    <div ref={ref} className="container">
      <div style={{ height: "200vh" }}></div>

      <div id="svgContainer"></div>

      <div style={{ height: "200vh" }}></div>
    </div>
  );
}
