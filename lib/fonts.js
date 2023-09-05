import {
  Inter,
} from "next/font/google";
import localFont from "next/font/local";

export const fontInter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const fontRecklessNue = localFont({
  src: [
    {
      path: "../public/font/RecklessNeue-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/font/RecklessNeue-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/font/RecklessNeue-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/RecklessNeue-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/font/RecklessNeue-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/RecklessNeue-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/font/RecklessNeue-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/font/RecklessNeue-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/font/RecklessNeue-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/RecklessNeue-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },

  ],
  variable: "--font-nue",
});
