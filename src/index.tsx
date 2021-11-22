import * as React from "react";
import { render } from "react-dom";

import "./globals.scss";

import App from "~/main/App";
import LottieGsap from "./main/LottieGsap";
import ScrollLottieComponent from "./main/ScrollLottieComponent";

render(
  <>
    <LottieGsap />
  </>,
  document.getElementById("root")
);
