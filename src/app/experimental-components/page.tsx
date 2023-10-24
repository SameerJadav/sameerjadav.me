import Counter from "~/components/Counter"
import CustomLink from "~/components/CustomLink"
import H2 from "~/components/H2"
import Visualizer from "~/components/Visualizer"

export default function ExperimentalComponentsPage() {
  return (
    <main>
      <H2 lable="Visualizer" />
      <p className="mt-2">
        The Visualizer is a cool custom component I use in my blogs to show off
        my custom components. Inspired by{" "}
        <CustomLink href="https://www.nan.fyi" underline icon>
          nan.fyi
        </CustomLink>
        . Source code is avaliable on{" "}
        <CustomLink
          href="https://github.com/SameerJadav/sameerjadav.me/blob/main/src/components/Visualizer.tsx"
          underline
          icon
        >
          Github
        </CustomLink>
      </p>
      <Visualizer className="mt-4">
        <Counter />
      </Visualizer>
    </main>
  )
}
