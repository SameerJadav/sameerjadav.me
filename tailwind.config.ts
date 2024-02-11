import { grayDark, blue } from "@radix-ui/colors";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-pp-editorial)", ...fontFamily.serif],
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
      colors: {
        gray: {
          1: grayDark.gray1,
          2: grayDark.gray2,
          3: grayDark.gray3,
          4: grayDark.gray4,
          5: grayDark.gray5,
          6: grayDark.gray6,
          7: grayDark.gray7,
          8: grayDark.gray8,
          9: grayDark.gray9,
          10: grayDark.gray10,
          11: grayDark.gray11,
          12: grayDark.gray12,
        },
        blue: {
          1: blue.blue1,
          2: blue.blue2,
          3: blue.blue3,
          4: blue.blue4,
          5: blue.blue5,
          6: blue.blue6,
          7: blue.blue7,
          8: blue.blue8,
          9: blue.blue9,
          10: blue.blue10,
          11: blue.blue11,
          12: blue.blue12,
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config;
