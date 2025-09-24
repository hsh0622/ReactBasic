import styled from "styled-components";

const Cotainer = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <div>
      <Cotainer>
        <H1>Hello</H1>
      </Cotainer>
    </div>
  );
}

export default App;
