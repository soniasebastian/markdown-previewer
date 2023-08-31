import { styled } from 'styled'

function Header(onCheatSheet) {
    
 const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const Button = styled.button<{ $primary?: boolean; }>`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

    return (
        <Wrapper>
        <Title>Markdown Previewer</Title>
        <Button onclick={onCheatSheet}> Markdown Cheat Sheet</Button>
        </Wrapper>
    );
  }
  
  export default Header;