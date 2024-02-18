import localFont from "next/font/local";

export const towFonts = localFont({
  src: [
    {
      path: "../../public/assets/fonts/TowGencyText-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/TowGencyText-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/TowGency-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
