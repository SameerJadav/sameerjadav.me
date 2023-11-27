interface H1Props {
  lable: string;
}

export default function H1({ lable }: H1Props) {
  return (
    <h1 className="text-balance mt-8 font-serif text-4xl md:text-5xl">
      {lable}
    </h1>
  );
}
