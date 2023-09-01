import  styled  from 'styled-components';
// import React from 'react'

// interface HeaderProps {
//   onToggleGuide: () => void;
// }

const Title = styled.h1`
font-size: 2em;
font-family: 'Square Peg', cursive;
text-align: center;
color: #BF4F74;
`;

const Button = styled.button`
background: "#BF4F74" 
color:  "white"
font-size: 1em;
font-family: 'Square Peg', cursive;
float: right;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #BF4F74;
border-radius: 3px;
cursor: pointer;
transition: background-color 0.2s;
&:hover 
  background-color: #35a8d4;
`;

const Wrapper = styled.section`
padding: 4em;
background:skyblue;
`;
const Header = (onToggleGuide) =>  {
  
    return (
        <Wrapper>
        <Title>A Simple Markdown Previewer</Title>
        <Button  onClick={onToggleGuide}> Markdown Cheat Sheet</Button>
        </Wrapper>
    );
  }
  
  export default Header;