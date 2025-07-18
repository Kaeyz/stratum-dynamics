import { CustomThemeConfig } from "tailwindcss/types/config";

export const themeConfig: Partial<CustomThemeConfig> = {
  fontFamily: {
    geist: ["Geist"],
  },
  colors: {
    white: "#FFFFFF",
    slated_navy: "#394B61",
    light_gray: "#C1C1C166",
    cadet_gray: "#A8B1B4",
  },
  fontSize: {
    "74": "4.625em",
    "48": "3em",
    "40": "2.5em",
    "38": "2.375em",
    "36": "2.25em",
    "34": "2.125em",
    "32": "2em",
    "28": "1.75em",
    "24": "1.5em",
    "22": "1.375em",
    "20": "1.25em",
    "18": "1.125em",
    "16": "1em",
    "14": "0.875em",
    "12": "0.75em",
  },
  lineHeight: {
    "82": "82px",
    "70": "70px",
    "56": "56px",
    "50": "50px",
    "48": "48px",
    "44": "44px",
    "40": "40px",
    "36": "36px",
    "32": "32px",
    "30": "30px",
    "28": "28px",
    "26": "26px",
    "24": "24px",
    "22": "22px",
    "21": "21px",
    "20": "20px",
    "18": "18px",
  },
  fontWeight: {
    regular: "400",
    medium: "500",
    semi_bold: "600",
    bold: "700",
  },
  letterSpacing: {
    tight_sm: "0.6px",
  },
  backgroundImage: {
    "gradient-turquoise": "linear-gradient(180deg, #1E6980, #003849)",
    "gradient-blue": "linear-gradient(180deg, #D5F0F8, #B0E2F1)",
    "gradient-gold": "linear-gradient(180deg, #CB9C45, #B18027)",
    "gradient-gray": "linear-gradient(180deg, #F3F5F6, #E6EDF1)",
  },
  listStyleType: {
    square: "square",
  },
  aspectRatio: {
    "4/3": "4 / 3",
  },
  spacing: {
    "84": "21rem",
  },
  height: {
    "13": "3.25rem",
    "101": "25.25rem",
  },
  screens: {
    sm: "375px",
    lg: "1320px",
    xl: "1512px",
  },
};
