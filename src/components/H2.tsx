interface H2Props {
  lable: string;
}

export default function H2({ lable }: H2Props) {
  return (
    <h2 className="relative mt-14 font-serif text-3xl font-medium before:absolute before:-top-4 before:left-0 before:h-[3px] before:w-6 before:bg-current before:content-[''] md:text-4xl">
      {lable}
    </h2>
  );
}
