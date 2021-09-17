import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillRedditCircle} from 'react-icons/ai';
import { DiCode } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, } from './HeaderStyles';
const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
          < DiCode size="3rem"/> <Span>Jo's Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#timeline">
          <NavLink>Timeline</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#accomplishments">
          <NavLink>Accomplishment</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/kilat9" target="_blank" rel="noopener noreferrer">
        <AiFillGithub size="3rem"/>

      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/johari-idzman-bin-dzulkarnain-a92363194/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin size="3rem"/>

      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/profile.php?id=100004719644702" target="_blank" rel="noopener noreferrer"> 
        <AiFillFacebook size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.reddit.com/user/Kilat9" target="_blank" rel="noopener noreferrer"> 
        <AiFillRedditCircle size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);
export default Header;
