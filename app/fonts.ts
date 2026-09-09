import localFont from "next/font/local";

export const gmarketSans = localFont({
  src: [
    {
      path: "./fonts/GmarketSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/GmarketSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/GmarketSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-gmarket-sans",
});

export const astaSans = localFont({
  src: "./fonts/AstaSans-Variable.woff2",
  display: "swap",
  variable: "--font-asta-sans",
});
