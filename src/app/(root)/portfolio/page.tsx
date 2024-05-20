import Link from '@/components/Link';

export async function generateMetadata() {
  return {
    title: 'Portfolio',
    description: 'Welcome to my portfolio',
  };
}

const Portfolio = () => {
  return (
    <>
      <p>
        Welcome to my portfolio page! Here you will find a carefully curated collection of my work
        and accomplishments. Through this portfolio, I'm to showcase my expertise, creativity, and
        the value I can bring to your projects.
      </p>

      <div className="grid grid-cols-1 justify-items-start gap-3 md:grid-cols-2 xl:grid-cols-3">
        {Array.from(Array(6).keys()).map(elt => (
          <Link className="text-blue-700 hover:underline" key={elt} href={`/portfolio/${elt}`}>
            Portfolio {elt}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
