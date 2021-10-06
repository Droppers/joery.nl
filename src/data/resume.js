import SvgBronkhorst from "assets/vector/experience/bronkhorst.svg";
import SvgArborMedia from "assets/vector/experience/arbor-media.svg";
import SvgGraafschapCollege from "assets/vector/experience/graafschap-college.svg";
import SvgSaxion from "assets/vector/experience/saxion.svg";

import SvgMapMarker from "assets/vector/icons/map-marker.svg";
import SvgEmailOutline from "assets/vector/icons/email.svg";
import SvgCellphoneAndroid from "assets/vector/icons/cellphone-android.svg";
import SvgEarth from "assets/vector/icons/earth.svg";

import SvgDotnet from "assets/vector/icons/skills/dotnet.svg";
import SvgJavascript from "assets/vector/icons/skills/javascript.svg";
import SvgPowershell from "assets/vector/icons/skills/powershell.svg";
import SvgDatabase from "assets/vector/icons/skills/database.svg";

import SvgProgramming from "assets/vector/icons/programming.svg";
import SvgTennis from "assets/vector/icons/tennis.svg";

const resume = {
  personalia: [
    {
      icon: SvgCellphoneAndroid,
      text: "+31 6 18158333",
    },
    {
      icon: SvgEmailOutline,
      text: "mail@joery.nl",
    },
    {
      icon: SvgEarth,
      text: "<a href='https://joery.nl/'>Joery.nl</a>",
    },
    {
      icon: SvgMapMarker,
      text: "Alexandrinalaan 26\n7271 NN Borculo",
    },
  ],
  languages: [
    { text: { en: "Dutch (native)", nl: "Nederlands (moedertaal)" } },
    { text: { en: "English (professional)", nl: "Engels (professioneel)" } },
  ],
  skills: [
    {
      icon: SvgDotnet,
      text: { en: "C# and VB.NET", nl: "C# en VB.NET" },
    },
    {
      icon: SvgJavascript,
      text: {
        en: "JavaScript and TypeScript",
        nl: "JavaScript en TypeScript",
      },
    },
    {
      icon: SvgPowershell,
      text: { en: "PowerShell", nl: "PowerShell" },
    },
    {
      icon: SvgDatabase,
      text: {
        en: "SQL Server and MySQL",
        nl: "SQL Server en MySQL",
      },
    },
  ],
  hobbies: [
    {
      icon: SvgProgramming,
      text: {
        en: "Programming",
        nl: "Programmeren",
      },
    },
    {
      icon: SvgTennis,
      text: "Tennis",
    },
  ],
  work: [
    {
      en: {
        title: "Bronkhorst",
        description:
          "During this side job, my primary occupation was optimizing database speed while also  working on other regular tasks.",
      },
      nl: {
        title: "Bronkhorst",
        description:
          "Tijdens deze bijbaan was mijn primaire bezigheid het optimaliseren van .NET database-operaties om de database snelheid te verbeteren en daarnaast het werken aan overige taken.",
      },
      logo: SvgBronkhorst,
      children: [
        {
          en: {
            subtitle: "Sidejob – Software Developer",
            from: "jul. 2019",
            to: "may 2020",
          },
          nl: {
            subtitle: "Bijbaan – Softwareontwikkelaar",
            from: "jul. 2019",
            to: "mei 2020",
          },
        },
        {
          en: {
            subtitle: "Summer job – Software Developer",
            from: "jul. 2018",
            to: "aug. 2018",
          },
          nl: {
            subtitle: "Vakantiewerk – Softwareotwikkelaar",
            from: "jul. 2018",
            to: "aug. 2018",
          },
        },
      ],
    },
    {
      logo: SvgArborMedia,
      en: {
        title: "Arbor Media",
        subtitle: "Summer job – Software Developer",
        description:
          "Completing the internship assignment and in addition providing support to the test engineer.",
        from: "jul. 2017",
        to: "aug. 2017",
      },
      nl: {
        title: "Arbor Media",
        subtitle: "Vakantiewerk – Softwareontwikkelaar",
        description:
          "Het afronden van de stageopdracht en daarnaast het bieden van ondersteuning aan de test engineer.",
        from: "jul. 2017",
        to: "aug. 2017",
      },
    },
  ],
  education: [
    {
      logo: SvgSaxion,
      en: {
        title: "Saxion University of Applied Sciences",
        subtitle: "HBO-ICT – Software Developer",
        from: "2018",
        to: "current",
      },
      nl: {
        title: "Hogeschool Saxion",
        subtitle: "HBO-ICT – Softwareontwikkelaar",
        from: "2018",
        to: "heden",
      },
      children: [
        {
          logo: SvgBronkhorst,
          en: {
            title: "Bronkhorst High-Tech",
            subtitle: "Internship – Software Developer",
            description:
              "Defining and introducing a standard for documenting software architecture using the ArchiMate (EA) description language.",
            from: "aug. 2020",
            to: "feb. 2021",
          },
          nl: {
            title: "Bronkhorst High-Tech",
            subtitle: "Stage – Softwareontwikkelaar",
            description:
              "Vaststellen en introduceren van een standaard voor het documenteren van softwarearchitectuur door middel van de ArchiMate (Enterprise Architecture) beschrijvingstaal.",
            from: "aug. 2020",
            to: "feb. 2021",
          },
        },
      ],
    },
    {
      logo: SvgGraafschapCollege,
      en: {
        title: "Graafschap College",
        subtitle: "Application Developer",
        from: "2015",
        to: "2018",
      },
      nl: {
        title: "Graafschap College",
        subtitle: "Applicatieontwikkelaar",
        from: "2015",
        to: "2018",
      },
      children: [
        {
          logo: SvgBronkhorst,
          en: {
            title: "Bronkhorst High-Tech",
            subtitle: "Internship – Software Developer",
            description:
              "Automating the process of adding new employees to the database, a manual operation. This involved revamping and converting existing database structure and writing an application for the conversion and automation.",
            from: "feb. 2018",
            to: "jul. 2018",
          },
          nl: {
            title: "Bronkhorst High-Tech",
            subtitle: "Stage – Softwareontwikkelaar",
            description:
              "Het toevoegen van nieuwe medewerkers aan de database, een handmatige handeling, automatiseren. Dit hield in het moderniseren en converteren van bestaande database structuur en het schrijven van een applicatie voor de conversie en automatisering.",
            from: "feb. 2018",
            to: "jul. 2018",
          },
        },
        {
          logo: SvgArborMedia,
          en: {
            title: "Arbor Media",
            subtitle: "Internship – Software Developer",
            description:
              "Designing and realizing a desktop application to generate thumbnails for media files in the Arbor Media thumbnail file format.",
            from: "sep. 2016",
            to: "feb. 2017",
          },
          nl: {
            title: "Arbor Media",
            subtitle: "Stage – Softwareontwikkelaar",
            description:
              "Ontwerpen en realiseren van een desktopapplicatie om video thumbnails te genereren voor bestaande mediabestanden in de vorm van het intern ontworpen Arbor Media thumbnail-formaat.",
            from: "sep. 2016",
            to: "feb. 2017",
          },
        },
      ],
    },
  ],
};

export default resume;
