import SvgAnimatedBottomBar from "assets/vector/projects/animated-bottom-bar.svg";
import SvgReactGithubData from "assets/vector/projects/react-github-data.svg";
import SvgTimeRangePicker from "assets/vector/projects/time-range-picker.svg";
import SvgApkSecrets from "assets/vector/projects/apk-secrets.svg";

const projects = [
  {
    name: { en: "AnimatedBottomBar", nl: "AnimatedBottomBar" },
    description: {
      en: "A customizable and easy to use BottomBar navigation view with sleek animations, with support for ViewPager, ViewPager2, NavController, and badges.",
      nl: "Een navigatiebalk voor Android met elegante animaties en veel functionaliteiten.",
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
      nl: "Een Android library om op een mooie manier een gebruiker een tijdspanne te laten selecteren.",
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
      nl: "Een verzameling React-componenten om eenvoudig informatie over een GitHub-gebruiker, repository, etc. weer te geven.",
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
  {
    name: { en: "APK Secrets", nl: "APK Secrets" },
    description: {
      en: "A collection of React components to easily display basic information about a GitHub user, repository, etc.",
      nl: "Een applicatie voor beveiligingsonderzoekers of ontwikkelaars om geheime sleutels in Android applicaties te vinden.",
    },
    cover: {
      type: "image",
      image: SvgApkSecrets,
      filter: "none",
      // background: "#161b22",
      background: "#fbe4cd",
    },
    github: {
      user: "Droppers",
      repo: "apk-secrets",
    },
  },
];

// #161b22

export default projects;
