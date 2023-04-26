import Images from "assets/images";

const {
  NigeriaLogo,
  USALogo,
  Netherlands,
  Andorra,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
} = Images;

const LocationRCData = {
  title: "Top Locations",
  dataEnteries: [
    {
      icon: NigeriaLogo,
      "name": "Nigeria",
      "percentage": 50,
      "fill": "#599EEA",
    },
    {
      icon: USALogo,
      "name": "United States",
      "percentage": 30,
      fill: "#844FF6",
    },
    {
      icon: Netherlands,
      "name": "Netherlands",
      "percentage": 10,
      fill: "#0FB77A",
    },
    {
      icon: Andorra,
      "name": "Andorra",
      "percentage": 3.5,
      fill: "#FAB70A",
    },
    {
      "name": "Others",
      "percentage": 6.5,
      fill: "#F09468",
    },
  ],
};

const TopReferralSourceRCData = {
  title: "Top Locations",
  dataEnteries: [
    {
      icon: Facebook,
      name: "Facebook",
      percentage: 50,
      "fill": "#599EEA",
    },
    {
      icon: Instagram,
      name: "Instagram",
      percentage: 30,
      fill: "#844FF6",
    },
    {
      icon: LinkedIn,
      name: "LinkedInTwitter",
      percentage: 10,
      fill: "#F09468",
    },
    {
      icon: Twitter,
      name: "Twitter",
      percentage: 3.5,
      fill: "#FAB70A",
    },
    {
      name: "Others",
      percentage: 6.5,
      fill: "#0FB77A",
    },
  ],
};

const SupplementaryData = [
  {
    name: "Nigeria",
    icon: NigeriaLogo,
    fill: "#599EEA",
  },

  {
    icon: USALogo,
    name: "United States",
    fill: "#844FF6",
  },
  {
    icon: Netherlands,
    name: "Netherlands",
    fill: "#0FB77A",
  },
  {
    icon: Andorra,
    name: "Andorra",
    fill: "#FAB70A",
  },
  {
    name: "Others",
    fill: "#F09468",
  },
];

export { LocationRCData, SupplementaryData, TopReferralSourceRCData };
