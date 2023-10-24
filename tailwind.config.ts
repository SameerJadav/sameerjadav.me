import { blue, grayDark } from "@radix-ui/colors"
import { type Config } from "tailwindcss"
import theme from "tailwindcss/defaultTheme"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        grid: "2.75rem 2.75rem",
      },
      colors: {
        ...grayDark,
        ...blue,
      },
      fontFamily: {
        sans: ["var(--font-nunito)", ...theme.fontFamily.sans],
        mono: ["var(--font-jetbrains-mono)", ...theme.fontFamily.mono],
        serif: ["var(--font-pp-editorial-new)", ...theme.fontFamily.serif],
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config
