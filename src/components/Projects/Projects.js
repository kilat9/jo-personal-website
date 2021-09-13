import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ChipStyle,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import Chip from "@material-ui/core/Chip";

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
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
              <CardInfo>{description}</CardInfo>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Chip
                    key={i}
                    label={tag}
                    variant="outlined"
                    size="small"
                    style={{
                      fontSize: "1.5rem",
                      backgroundColor: "#26365C",
                      color: "white",
                    }}
                  ></Chip>
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
