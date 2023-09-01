import  { useState } from 'react';
import Header from './components/Header';
import MarkdownGuide from './components/MarkdownGuide';
import MarkdownInput from './components/MarkdownInput';
import MarkdownOutput from './components/MarkdownOutput';
import './App.css';
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between; /* Add this to space the input and output */
`;

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    box-sizing: border-box;
    color: #333;
  }
`;

const App = () => {
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);

  const handleMarkdownChange = (newMarkdown) => {
    setMarkdown(newMarkdown);
  };

  const handleToggle = () => {
    setShowGuide(!showGuide)
  };

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Header onToggleGuide={handleToggle} />
        {showGuide && <MarkdownGuide />}
        <Container>
          <MarkdownInput value={markdown} handleChange={handleMarkdownChange} />
          <MarkdownOutput value={markdown} />
        </Container>
      </div>
    </>
  );
};

export default App;
