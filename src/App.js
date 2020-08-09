import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Quote from "./components/Quote";
import axios from 'axios'


const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #fed90f 0%,
    #dcbc0d 40%,
    #fed90f 100%
  );
  background-size: 300px;
  font-family: 'Simpsonfont', sans-serif;
  font-family: 'Akbar', sans-serif;
  font-weight:bold;
  color: white;
  margin: 3rem 0;
  font-size: 2rem;
  border: 2px solid #000;
  padding: 1rem 3rem;
  transition:background-size .3s ease-in;
  &:hover{
    cursor:pointer;
    background-size:400px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

function App() {
  const [data, setData] = useState([]);

  const handleClick = async () => {
  const api = 'https://thesimpsonsquoteapi.glitch.me/quotes'
  const response = await axios.get(api);
  setData(response.data[0])
  };
 
  useEffect(() => {
    handleClick();
  }, []);

  return (
    <Container>
        <>
        <Quote data={data} />
        <Button onClick={() => handleClick()}>Get Quote</Button>
        </>
      
    </Container>
  );
}

export default App;
