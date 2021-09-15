import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  StyledChip,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} />

            <TitleContent>
              <HeaderThree title="Title">{title}</HeaderThree>
              <Hr />
              <CardInfo>{description}</CardInfo>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <StyledChip key={i}>{tag}</StyledChip>
                ))}
              </TagList>
              <UtilityList>
                <ExternalLinks
                  href={source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </ExternalLinks>
                {/* <ExternalLinks
                  href={visit}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </ExternalLinks> */}
              </UtilityList>
            </TitleContent>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
