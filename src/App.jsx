import { useState } from 'react';
import styled from "styled-components";
import Footer from './components/Footer';
import Layout from './layouts/Layout';
import { projects } from "./data/index.json";


function App() {
  const [count, setCount] = useState(0)

  // Create a Title component that'll render an <h1> tag with some styles
    const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    `;

// Create a Wrapper component that'll render a <section> tag with some styles
    const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
    `;

  return (
      <Layout>
        <Wrapper>
            <Title>
            Hello World!
            </Title>
            {
                projects.map((p) => {
                    return <h1>{p.name}</h1>
                })
            }
            <Footer />
        </Wrapper>
      </Layout>
  )
}

export default App
