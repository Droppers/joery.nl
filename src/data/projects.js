import SvgAnimatedBottomBar from "assets/vector/projects/animated-bottom-bar.svg";
import SvgReactGithubData from "assets/vector/projects/react-github-data.svg";
import SvgTimeRangePicker from "assets/vector/projects/time-range-picker.svg";
// import SvgApkSecrets from "assets/vector/projects/apk-secrets.svg";
import SvgRefScout from "assets/vector/projects/refscout.svg";

const projects = [
  {
    name: { en: "RefScout", nl: "RefScout" },
    description: {
      en: "A desktop and command-line application that assists you with identifying conflicting assembly references in your .NET Core and Framework applications.",
      nl: "Een desktop- en command-line applicatie die je ondersteunt bij het vaststellen van conflicterende assembly-referenties in je .NET Core- en Framework applicaties.",
    },
    cover: {
      type: "image",
      image: SvgRefScout,
      filter: "drop-shadow(0 3px 6px rgba(0,0,0,.3))",
      // background: "#a66afb",
      background: "#fff8e7",
    },
    github: {
      user: "Droppers",
      repo: "RefScout",
    },
  },
  {
    name: { en: "AnimatedBottomBar", nl: "AnimatedBottomBar" },
    description: {
      en: "A customizable and easy to use BottomBar navigation view with sleek animations, with support for ViewPager, ViewPager2, NavController, and badges.",
      nl: "Een personaliseerbare en eenvoudig te gebruiken Android BottomBar met strakke animaties, met ondersteuning voor allerlei navigatie componenten.",
    },
    cover: {
      type: "image",
      image: SvgAnimatedBottomBar,
      filter: "drop-shadow(0 1px 2px rgba(0,0,0,.4))",
      // background: "#a66afb",
      background: "#d7bbff",
    },
    github: {
      user: "Droppers",
      repo: "AnimatedBottomBar",
    },
  },
  {
    name: { en: "TimeRangePicker", nl: "TimeRangePicker" },
    description: {
      en: "A customizable, easy-to-use, and functional circular time range picker library for Android. Use this library to mimic Apple's iOS or Samsung's bedtime picker.",
      nl: "Een personaliseerbare, eenvoudig te gebruiken, en functionele cirkelvormige Android view om een tijdspanne te kunnen selecteren.",
    },
    cover: {
      type: "image",
      image: SvgTimeRangePicker,
      filter: "none",
      // background: "#343858",
      background: "#e8eaff",
    },
    github: {
      user: "Droppers",
      repo: "TimeRangePicker",
    },
  },
  {
    name: { en: "GitHub for React", nl: "GitHub voor React" },
    description: {
      en: "A collection of React components to easily display basic information about a GitHub user, repository, etc.",
      nl: "React-componenten om eenvoudig informatie over een GitHub-gebruiker en repository weer te geven.",
    },
    cover: {
      type: "image",
      image: SvgReactGithubData,
      filter: "drop-shadow(0 1px 2px rgba(0,0,0,.4))",
      // background: "#538eec",
      background: "#b6d2ff",
    },
    github: {
      user: "Droppers",
      repo: "react-github-data",
    },
  },
];

export default projects;
