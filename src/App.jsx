import { useState } from 'react';
import Header from './components/Header'; // Import your Header component
import MarkdownGuide from './components/MarkdownGuide'; // Import your MarkdownGuide component
import MarkdownInput from './components/MarkdownInput'; // Import your MarkdownInput component
import MarkdownOutput from './components/MarkdownOutput'; // Import your MarkdownOutput component
import './App.css'; // You can import your CSS file if needed
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
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

  // const handleToggleGuide = (showGuide) => {
  //   setShowGuide(!showGuide);
  // };

  return (
    <>
     <GlobalStyles />
    <div className="App">
      <Header onToggleGuide={() => setShowGuide(!showGuide)} />
      {showGuide && <MarkdownGuide />}
      <Container/>
      <MarkdownInput value={markdown} onChange={handleMarkdownChange} />
      <MarkdownOutput markdown={markdown} />
      </div>
    </>
  );
};

export default App;



