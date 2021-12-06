import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <h1>Hello World</h1>
    </Container>

  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

export default App;
