import styled from 'styled-components';
import Head from 'next/head';
import Header from '../components/Header';
import Inner from '../components/Inner';
import Footer from '../components/Footer';
import Data from '../data/data.json';


const headerTitle = Data.header.title;
const headerText = Data.header.text;
const pageTitle = Data.main.title;
const pageText = Data.main.text;

const Main = styled.main`
  padding: 30px;
  background: #333;
`;

function Home() {
  return (
    <>
      <Head>
        <title>{ headerTitle }</title>
        <meta name="description" content={ headerText } />
        <meta property="og:title" content={ headerTitle } />
        <meta property="og:description" content={ headerText } />
      </Head>
      <Header />
      <Main>
        <Inner />
      </Main>
      <Footer />
    </>
  )
}

export default Home;