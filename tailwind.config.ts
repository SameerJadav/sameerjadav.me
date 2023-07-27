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
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config
