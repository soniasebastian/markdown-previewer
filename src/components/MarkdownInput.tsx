import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import React from 'react';

// Styled component
const InputContainer = styled.div`
width: 50%;
height: calc(100vh - 58.5px);
padding: 20px;
box-sizing: border-box;
overflow: auto;
border-left: 1px solid #ddd;
background-color: #f9f9f9;
`;


const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  padding: 10px;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
`;


// MarkdownInput component
const MarkdownInput = (props) => {
  return (
    <InputContainer>
      <StyledTextArea value={props.value} onChange= { (e) => props.handleChange(e.target.value) }/>
      <ReactMarkdown>{props.value}</ReactMarkdown>
    </InputContainer>
  );
};

// Basic prop type checking
MarkdownInput.propTypes = {
  value: 'string',
  onChange: 'function',
};

export default MarkdownInput;
