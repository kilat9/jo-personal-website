import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import Raining from "../components/Raining/Raining";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <>
      <Layout>
        <Raining id="c" />
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>

        <Projects />
        <Technologies />
        <Timeline />
        <Acomplishments />
      </Layout>
    </>
  );
};

export default Home;
