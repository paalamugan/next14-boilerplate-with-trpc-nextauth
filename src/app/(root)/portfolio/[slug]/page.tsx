type IPortfolioDetailProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return Array.from(Array(6).keys()).map(elt => ({
    slug: `${elt}`,
  }));
}

export async function generateMetadata(props: IPortfolioDetailProps) {
  const { slug } = props.params;

  return {
    title: `Portfolio ${slug}`,
    description: `Portfolio ${slug} description`,
  };
}

const PortfolioDetail = (props: IPortfolioDetailProps) => {
  const { slug } = props.params;
  return (
    <>
      <h1 className="capitalize">Portfolio {slug}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsum, veritatis ea qui
        laboriosam voluptatum labore harum non pariatur, ipsam maiores minus iste animi nobis eos
        quod minima soluta? Debitis impedit dolore cupiditate aliquid repellendus amet excepturi
        assumenda ad expedita tempore, nostrum cumque eius aspernatur sint repellat necessitatibus.
        Quidem, corrupti.
      </p>
    </>
  );
};

export default PortfolioDetail;
