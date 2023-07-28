import { slateDark } from "@radix-ui/colors"
import { type Config } from "tailwindcss"
import theme from "tailwindcss/defaultTheme"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...slateDark,
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...theme.fontFamily.sans],
        mono: ["var(--font-jetbrains-mono)", ...theme.fontFamily.mono],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config
