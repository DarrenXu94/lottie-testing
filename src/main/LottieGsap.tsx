import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import lottie from "lottie-web";

export interface LottieGsapProps {}

export default function LottieGsap({}: LottieGsapProps) {
  gsap.registerPlugin(ScrollTrigger);

  function LottieScrollTrigger(vars) {
    let playhead = { frame: 0 },
      target: any = gsap.utils.toArray(vars.target)[0],
      speeds = { slow: "+=4000", medium: "+=2000", fast: "+=1000" },
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
        <div className="scroll-element">
          <div id="hand"></div>
        </div>
        <div className="copy ">
          <div className="container" style={{ paddingTop: "100px" }}>
            <h1>Tooling</h1>
            <div style={{ fontSize: "2rem" }}>
              This was created with:
              <ul style={{ paddingTop: "50px", lineHeight: "2" }}>
                <li>
                  <a href="https://lottiefiles.com/plugins/after-effects">
                    LottieFiles AfterEffects Plugin
                  </a>
                </li>
                <li>
                  <a href="https://www.npmjs.com/package/lottie-web">
                    Lottie-web NPM package to allow loading LottieFiles on the
                    web
                  </a>
                </li>
                <li>
                  <a href="https://www.npmjs.com/package/gsap">
                    GSAP for animation
                  </a>
                </li>
                <li>
                  <a href="https://www.npmjs.com/package/react-scroll-percentage">
                    Scroll percentage to measure when to play animations
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="main2">
        <div className="copy"></div>

        <div className="scroll-element">
          <div id="hand2"></div>
        </div>
        <div className="copy">
          <div
            className="container"
            style={{ paddingTop: "100px", lineHeight: "3" }}
          >
            <ul>
              <li>
                Laura in Theory logo provided by the respective artist, animated
                by myself in Adobe AfterEffects
              </li>
              <li>
                <a href="https://lottiefiles.com/featured">
                  Second animation provided by LottieFiles free
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
