
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

// Styled component
const OutputContainer = styled.div`
width: 50%;
height: calc(100vh - 58.5px);
padding: 20px;
box-sizing: border-box;
overflow: auto;
border-left: 1px solid #ddd;
background-color: #f9f9f9;
`;


// MarkdownOutput component
const MarkdownOutput = (props) => {
  console.log(props.value);
  return (
    <OutputContainer>
      <ReactMarkdown>{props.value}</ReactMarkdown>
    </OutputContainer>
  );
};

// Basic prop type checking
MarkdownOutput.propTypes = {
  value: 'string',
};


export default MarkdownOutput;
