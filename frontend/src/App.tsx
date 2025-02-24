import './App.css';
import { Box, Button, ChakraProvider, defaultSystem } from '@chakra-ui/react'; 
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const onChangeFirstName = (event: any) => {
    setFirstName(event.target.value);
  }

  const onChangeLastName = (event: any) => {
    setLastName(event.target.value);
  }

  const callBackend = async () => {
    const response = await axios.post('http://localhost:3000/name', {
    firstName,lastName
  });
    console.log('RESPONSE: ',response.data);
  };

  return (
    <ChakraProvider value={defaultSystem}>
      <Box m={10} display="flex" gap={5} justifyContent={"center"}>
        
        <input type="text" placeholder=" Enter your first name" onChange={onChangeFirstName}/>
        <input type="text" placeholder=" Enter your last name" onChange={onChangeLastName}/>
        <Button colorScheme="blue" onClick={callBackend}>Add Name</Button>
      </Box> 
      
      </ChakraProvider>
  );
}

export default App;
