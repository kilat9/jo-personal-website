import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am working on this website to learn more about Web development using React.
      </SectionText>
      <Button onClick={() => window.location = 'mailto: johariidzman@gmail.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;