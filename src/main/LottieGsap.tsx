import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import lottie from "lottie-web";

export interface LottieGsapProps {}

export default function LottieGsap({}: LottieGsapProps) {
  gsap.registerPlugin(ScrollTrigger);

  // function LottieScrollTrigger(vars) {
  //   let playhead = { frame: 0 },
  //     target: any = gsap.utils.toArray(vars.target)[0],
  //     speeds = { slow: "+=2000", medium: "+=1000", fast: "+=500" },
  //     st = {
  //       trigger: target,
  //       pin: true,
  //       start: "center center",
  //       end: speeds[vars.speed] || "+=1000",
  //       scrub: 1,
  //     },
  //     animation = lottie.loadAnimation({
  //       container: target,
  //       renderer: vars.renderer || "svg",
  //       loop: false,
  //       autoplay: false,
  //       path: vars.path,
  //     });
  //   for (let p in vars) {
  //     // let users override the ScrollTrigger defaults
  //     st[p] = vars[p];
  //   }
  //   animation.addEventListener("DOMLoaded", function () {
  //     gsap.to(playhead, {
  //       frame: animation.totalFrames - 1,
  //       ease: "none",
  //       onUpdate: () => animation.goToAndStop(playhead.frame, true),
  //       scrollTrigger: st,
  //     });
  //   });
  // }
  function LottieScrollTrigger(vars) {
    let playhead = { frame: 0 },
      target: any = gsap.utils.toArray(vars.target)[0],
      speeds = { slow: "+=2000", medium: "+=1000", fast: "+=500" },
      st = {
        trigger: target,
        pin: true,
        start: "top top",
        end: speeds[vars.speed] || "+=1000",
        scrub: 1,
      },
      animation = lottie.loadAnimation({
        container: target,
        renderer: vars.renderer || "svg",
        loop: false,
        autoplay: false,
        path: vars.path,
      });
    for (let p in vars) {
      // let users override the ScrollTrigger defaults
      st[p] = vars[p];
    }
    animation.addEventListener("DOMLoaded", function () {
      gsap.to(playhead, {
        frame: animation.totalFrames - 1,
        ease: "none",
        onUpdate: () => animation.goToAndStop(playhead.frame, true),
        scrollTrigger: st,
      });
      // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    });
    return animation;
  }

  useEffect(() => {
    LottieScrollTrigger({
      target: "#hand",
      path: "/LIT_Logo_ColourRotate.json",
      // path: "https://assets3.lottiefiles.com/private_files/lf30_eaigvcxb.json",
      // path: "https://assets1.lottiefiles.com/packages/lf20_5nLqa4.json",
      // path: "/first.json",
      // path: "https://labs.nearpod.com/bodymovin/demo/markus/halloween/markus.json",
      speed: "medium",
      pin: ".main",
      start: "center center",
      scrub: 1,
      markers: true,
    });
    LottieScrollTrigger({
      target: "#hand2",
      // path: "/LIT_Logo_Colour.json",
      // path: "https://assets3.lottiefiles.com/private_files/lf30_eaigvcxb.json",
      path: "https://assets1.lottiefiles.com/packages/lf20_5nLqa4.json",
      // path: "/first.json",
      // path: "https://labs.nearpod.com/bodymovin/demo/markus/halloween/markus.json",
      speed: "medium",
      pin: ".main2",
      start: "center center",
      scrub: 1,
      markers: true,
    });
  }, []);

  return (
    <>
      <div className="main">
        <div className="copy">
          <h1>scroll down</h1>
        </div>
        <div className="scroll-element">
          <div id="hand"></div>
        </div>
        <div className="copy"></div>
      </div>

      <div className="main2">
        <div className="copy"></div>

        <div className="scroll-element">
          <div id="hand2"></div>
        </div>
        <div className="copy"></div>
      </div>
    </>
  );
}
