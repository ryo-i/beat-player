import Link from 'next/link';
import Router from 'next/router';
import Data from '../data/data.json';
import styled from 'styled-components';
import { pageSize } from '../styles/mixin';
import cssVariables from '../styles/variables.json';
import * as Tone from 'tone';


const variable = cssVariables.variable;
const title = Data.header.title;
const text = Data.header.text;


// Style
const HeaderTag = styled.header`
  text-align: center;
  background: ${variable.bgColor_g};
  .wrapper {
    ${pageSize}
    padding: 30px;
  }
  h1 {
    font-size: 2em;
  }
  nav span, nav a {
    padding-right: 0.5em;
  }
`;


// 再生停止
const stopBeatPlay = (url) => {
  // console.log('App is changing to: ', url);
  if (url === '/about') {
    Tone.Transport.stop();
    Tone.Transport.cancel();
  }
};
Router.events.on('routeChangeStart', stopBeatPlay);


// Component
function Header() {
  return (
    <HeaderTag>
      <div className="wrapper">
        <h1>{ title }</h1>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
        <nav>
          <span>MENU:</span>
          <Link href="/"><a>Home</a></Link>
          <Link href="/about"><a>About</a></Link>
        </nav>
      </div>
    </HeaderTag>
  );
}

export default Header;
