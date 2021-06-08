import Animatedbottombar from "vector/projects/animatedbottombar";

export const allProjects = [
  {
    name: "AnimatedBottomBar",
    description: "A customizable and easy to use bottom bar view with sleek animations.",
    cover: {
      type: "image",
      image: Animatedbottombar,
      fit: "contain",
      background: "#a66afb",
    },
    github: "Droppers/AnimatedBottomBar",
  },
  {
    slug: "bedtime",
    name: "Bedtime",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ik typ weer wat onzin, zodat ik kan zien of dit eigenlijk wel werkt. Geen idee.",
    cover: {
      type: "app",
      image_left: "bedtime-left",
      image_right: "bedtime-right",
      background: "#659fff",
      icon: "bedtime-icon",
    },
    images: [
      {
        src: "/static/images/projects/bedtime/1-alarm-light.jpg",
        width: 1080,
        height: 1920,
      },
      {
        src: "/static/images/projects/bedtime/1-alarm-dark.jpg",
        width: 1080,
        height: 1920,
      },
      {
        src: "/static/images/projects/bedtime/2-stopwatch-light.jpg",
        width: 1080,
        height: 1920,
      },
      {
        src: "/static/images/projects/bedtime/2-stopwatch-dark.jpg",
        width: 1080,
        height: 1920,
      },
      {
        src: "/static/images/projects/bedtime/3-timer-light.jpg",
        width: 1080,
        height: 1920,
      },
      {
        src: "/static/images/projects/bedtime/3-timer-dark.jpg",
        width: 1080,
        height: 1920,
      },
      {
        src: "/static/images/projects/bedtime/4-challenge-dark.jpg",
        width: 1080,
        height: 1920,
      },
    ],
  },
  {
    slug: "agar-yt",
    name: "Agar.yt",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ik typ weer wat onzin, zodat ik kan zien of dit eigenlijk wel werkt. Geen idee.",
    cover: {
      type: "image",
      background: "#4f848d",
      image: "agar-yt",
      fit: "cover",
    },
    images: [
      {
        src: "/static/images/projects/agar-yt/home.jpg",
        width: 1000,
        height: 667,
      },
      {
        src: "/static/images/projects/agar-yt/private-games-overview.jpg",
        width: 1000,
        height: 667,
      },
      {
        src: "/static/images/projects/agar-yt/private-games-playing.jpg",
        width: 1000,
        height: 667,
      },
      {
        src: "/static/images/projects/agar-yt/friends-list.jpg",
        width: 1000,
        height: 667,
      },
    ],
  },
  {
    slug: "runner",
    name: "Runner",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ik typ weer wat onzin, zodat ik kan zien of dit eigenlijk wel werkt. Geen idee.",
    cover: {
      type: "app",
      image_left: "runner-left",
      image_right: "runner-right",
      background: "#98c158",
      icon: "runner-icon",
    },
    images: [
      {
        src: "/static/images/projects/runner-left.jpg",
        width: 1080,
        height: 1920,
      },
      {
        src: "/static/images/projects/runner-right.jpg",
        width: 1080,
        height: 1920,
      },
    ],
  },
];
