import { GiMechanicGarage, GiTowTruck } from "react-icons/gi";

export const HeaderItem = [
  {
    id: 0,
    title: "Services",
    url: "/services",
    hasSub: false,
    sub: [],
  },
  {
    id: 1,
    title: "Partners",
    url: "/partners",
    hasSub: false,
    sub: [],
  },
  {
    id: 2,
    title: "About",
    url: "/about",
    hasSub: true,
    sub: [
      {
        id: 0,
        title: "About us",
        url: "/about",
      },
      {
        id: 1,
        title: "How TowGency works",
        url: "/HOW",
      },
      {
        id: 2,
        title: "Blog",
        url: "/blog",
      },
      {
        id: 3,
        title: "Careers",
        url: "/careers",
      },
    ],
  },
];

export const UserType = [
  {
    id: 1,
    title: "Signup as a towing truck driver",
    desc: "Make money by helping stranded motorists",
    icon: <GiTowTruck size={24} />,
    slug: "truck-driver",
    stitle: "truck driver",
  },
  {
    id: 2,
    title: "Auto Mechanic",
    desc: "Get more jobs and grow your business",
    icon: <GiMechanicGarage size={24} />,
    slug: "mechanic",
    stitle: "auto mechanic",
  },
  // {
  //   id: 0,
  //   title: "Motorist",
  //   desc: "Get towing services and repairs at a click",
  //   icon: <LuCar size={24} />,
  //   slug: "motorist",
  // },
];
