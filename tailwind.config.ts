import { blueDark, grayDark } from "@radix-ui/colors"
import { type Config } from "tailwindcss"
import theme from "tailwindcss/defaultTheme"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...grayDark,
        ...blueDark,
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...theme.fontFamily.sans],
        mono: ["var(--font-jetbrains-mono)", ...theme.fontFamily.mono],
        serif: ["var(--font-pp-editorial-new)", ...theme.fontFamily.serif],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config
