export async function generateMetadata() {
  return {
    title: 'About',
    description: 'About this site',
  };
}

const About = () => {
  return <p>Welcome to our About page</p>;
};

export default About;
