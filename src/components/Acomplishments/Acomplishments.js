import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText, Img } from "./AcomplishmentsStyles";
import { Hr } from "../Projects/ProjectsStyles";
import { accomplishments } from "../../constants/constants";

const Acomplishments = () => (
  <Section id="accomplishments">
    <br />
    <br />
    <SectionDivider />
    <br />
    <SectionTitle>Accomplishments</SectionTitle>
    <Boxes>
      {accomplishments.map((card, index) => (
        <Box key={index}>
          <div style={{ height: "150px" }}>
            <Img src={card.image} />
          </div>
          <div style={{ height: "120px", display: "block", margin: "auto" }}>
            <BoxNum>{card.title}</BoxNum>
          </div>
          <Hr />
          <BoxText>{card.organization}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
