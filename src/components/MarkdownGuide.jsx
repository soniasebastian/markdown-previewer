import styled from 'styled-components';

const GuideContainer = styled.div`
  background-color: #f5f5f5;
  padding: 1rem;
`;

const MarkdownGuide = () => {
  return (
    <GuideContainer>
      <h2>Markdown Guide</h2>
      <ul>
        <li><code># Heading 1</code></li>
        <li><code>## Heading 2</code></li>
        <li><code>### Heading 3</code></li>
        <li><code>**Bold Text**</code></li>
        <li><code>*Italic Text*</code></li>
        <li><code>[Link](http://a.com)</code></li>
        <li><code>![Image](http://url/a.png)</code></li>
        <li><code>`inline code`</code></li>
        <li><code>```block code```</code></li>
        <li><code>- list item</code></li>
      </ul>
    </GuideContainer>
  );
};

export default MarkdownGuide;
