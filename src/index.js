import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import "./styles/main.scss";
import { hydrate, render } from "react-dom";
import { TranslationSettings } from "utils/translate";
import { translations } from "data";
import App from "./components/app/app";

TranslationSettings.translations = translations;
TranslationSettings.locale = window.PRERENDER_INJECTED
  ? window.PRERENDER_INJECTED.locale
  : document.documentElement.lang;
document.documentElement.lang = TranslationSettings.locale;

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
