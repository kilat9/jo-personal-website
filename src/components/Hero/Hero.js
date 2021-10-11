import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Name } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        <Name> My name is Johari Idzman bin Dzulkarnain.</Name> I am currently
        pursuing my degree in Computer Science in Asia Pacific University.
        Computers have always been my passion and I aspire to develop quality
        applications.
      </SectionText>
      <Button
        onClick={() => (window.location = "mailto: johariidzman@gmail.com")}
      >
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
