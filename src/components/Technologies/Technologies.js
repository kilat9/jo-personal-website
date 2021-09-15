import React from "react";
import { useState } from "react";
import {
  DiCss3,
  DiFirebase,
  DiGit,
  DiGithubBadge,
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
  DiZend,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  StackImage,
  StackIconDiv,
} from "./TechnologiesStyles";
import { StackList } from "../../constants/constants";

const Technologies = () => {
  const iconSize = "5rem";
  const defaultPicture = "/images/StackImage/Code.png";
  const iconColor = "white";

  const [sideImage, setSideImage] = useState(defaultPicture);
  const [stackTitle, setTitle] = useState("My Stacks");
  const [stackDescription, setStackDescription] = useState("I have been exposed to various tech stacks in my programming journey. Click on the stack Icon to know more.");
  
  function changeStack(index){
    const title = StackList[index]['title'];
    const description = StackList[index]['description'];
    const image = StackList[index]['image'];

    setSideImage(image)
    setTitle(title)
    setStackDescription(description)
  }



  return (
    <Section id="tech">
      <SectionDivider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range of technologies to develop various
        applications. I enjoy learning new frameworks and the challenge that
        comes with it.
      </SectionText>
      <table>
        <tbody>
        <tr>
          <th style={{width:"300px"}}>
          <StackIconDiv>
        <StackImage src={sideImage}></StackImage>
      </StackIconDiv>
          </th>
          <th>
          <h2>{stackTitle}</h2>
          <p style={{width: '500px', marginLeft: 'auto', marginRight: 'auto', marginTop:'10px'}}>{stackDescription}</p>
          </th>
        </tr>
        </tbody>
      </table>
      <List>
        <ListItem>
          <DiReact
            size={iconSize}
            color={iconColor}
            onClick={() => changeStack(0)}
          />
        </ListItem>
        <ListItem>
          <DiNodejs
            size={iconSize}
            color={iconColor}
            onClick={() => changeStack(1)}
          />
        </ListItem>
        <ListItem>
          <DiHtml5
            size={iconSize}
            color={iconColor}
            onClick={() => changeStack(2)}
          />
        </ListItem>
        <ListItem>
          <DiCss3
            size={iconSize}
            color={iconColor}
            onClick={() => changeStack(3)}
          />
        </ListItem>
        <ListItem>
          <DiJavascript
            size={iconSize}
            color={iconColor}
            onClick={() => changeStack(4)}
          />
        </ListItem>
        <ListItem>
          <DiPhp
            size={iconSize}
            color={iconColor}
            onClick={() => changeStack(5)}
          />
        </ListItem>
        <ListItem>
          <DiVisualstudio
            size={iconSize}
            color={iconColor}
            onClick={() => changeStack(6)}
          />
        </ListItem>
        <ListItem>
          <DiPython
            size={iconSize}
            color={iconColor}
            onClick={() => changeStack(7)}
          />
        </ListItem>
        <ListItem>
          <DiJava
            size={iconSize}
            color={iconColor}
            onClick={() => changeStack(8)}
          />
        </ListItem>
        <ListItem>
          <DiNetbeans
            size={iconSize}
            color={iconColor}
            onClick={() => changeStack(9)}
          />
        </ListItem>
        <ListItem>
          <DiGit
            size={iconSize}
            color={iconColor}
            onClick={() => changeStack(10)}
          />
        </ListItem>
        <ListItem>
          <DiRasberryPi
            size={iconSize}
            color={iconColor}
            onClick={() => changeStack(11)}
          />
        </ListItem>
      </List>
    </Section>
  );
};

export default Technologies;
