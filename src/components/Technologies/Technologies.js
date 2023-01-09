import React from "react";
import { useState } from "react";
import {
  DiCss3,
  DiGit,
  DiHtml5,
  DiJava,
  DiJavascript,
  DiNetbeans,
  DiNodejs,
  DiPhp,
  DiPython,
  DiRasberryPi,
  DiReact,
  DiVisualstudio,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListItem,
  StackImage,
  StackIconDiv,
  StackDisplay,
  StackText,
  ListTitle,
  StackDescription,
} from "./TechnologiesStyles";
import { StackList } from "../../constants/constants";

const Technologies = () => {
  const iconSize = "5rem";
  const defaultPicture = "./images/StackImage/Code.png";
  const iconColor = "white";

  const [sideImage, setSideImage] = useState(defaultPicture);
  const [stackTitle, setTitle] = useState("My Stacks");
  const [stackDescription, setStackDescription] = useState(
    "I have been exposed to various tech stacks in my programming journey. Click on the stack Icon to know more."
  );

  function changeStack(index) {
    const title = StackList[index]["title"];
    const description = StackList[index]["description"];
    const image = StackList[index]["image"];

    setSideImage(image);
    setTitle(title);
    setStackDescription(description);
  }

  return (
    <Section id="tech">
      <br />
      <br />
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range of technologies to develop various
        applications. I enjoy learning new frameworks and the challenge that
        comes with it.
      </SectionText>
      <StackDisplay>
        <StackIconDiv>
          <StackImage src={sideImage}></StackImage>
        </StackIconDiv>
        <StackText>
          <ListTitle>{stackTitle}</ListTitle>
          <StackDescription>{stackDescription}</StackDescription>
        </StackText>
      </StackDisplay>
      <List>
        <ListItem>
          <DiReact
            size={iconSize}
            color={iconColor}
            onMouseEnter={() => changeStack(0)}
          />
        </ListItem>
        <ListItem>
          <DiNodejs
            size={iconSize}
            color={iconColor}
            onMouseEnter={() => changeStack(1)}
          />
        </ListItem>
        <ListItem>
          <DiHtml5
            size={iconSize}
            color={iconColor}
            onMouseEnter={() => changeStack(2)}
          />
        </ListItem>
        <ListItem>
          <DiCss3
            size={iconSize}
            color={iconColor}
            onMouseEnter={() => changeStack(3)}
          />
        </ListItem>
        <ListItem>
          <DiJavascript
            size={iconSize}
            color={iconColor}
            onMouseEnter={() => changeStack(4)}
          />
        </ListItem>
        <ListItem>
          <DiPhp
            size={iconSize}
            color={iconColor}
            onMouseEnter={() => changeStack(5)}
          />
        </ListItem>
        <ListItem>
          <DiVisualstudio
            size={iconSize}
            color={iconColor}
            onMouseEnter={() => changeStack(6)}
          />
        </ListItem>
        <ListItem>
          <DiPython
            size={iconSize}
            color={iconColor}
            onMouseEnter={() => changeStack(7)}
          />
        </ListItem>
        <ListItem>
          <DiJava
            size={iconSize}
            color={iconColor}
            onMouseEnter={() => changeStack(8)}
          />
        </ListItem>
        <ListItem>
          <DiNetbeans
            size={iconSize}
            color={iconColor}
            onMouseEnter={() => changeStack(9)}
          />
        </ListItem>
        <ListItem>
          <DiGit
            size={iconSize}
            color={iconColor}
            onMouseEnter={() => changeStack(10)}
          />
        </ListItem>
        <ListItem>
          <DiRasberryPi
            size={iconSize}
            color={iconColor}
            onMouseEnter={() => changeStack(11)}
          />
        </ListItem>
      </List>
    </Section>
  );
};

export default Technologies;
