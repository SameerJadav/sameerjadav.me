import Balancer from "react-wrap-balancer"

interface H1Props {
  lable: string
}

export default function H1({ lable }: H1Props) {
  return (
    <h1 className="mt-8 font-serif text-4xl font-medium md:text-5xl">
      <Balancer>{lable}</Balancer>
    </h1>
  )
}
