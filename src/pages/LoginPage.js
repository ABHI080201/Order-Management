import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Input, FormControl, FormLabel } from '@chakra-ui/react';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username === 'user' && password === 'password') {
      onLogin();
      navigate('/sale-orders');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh"
    >
      <Box 
        maxW="sm" 
        mx="auto" 
        p="6" 
        borderWidth="1px" 
        borderRadius="lg" 
        boxShadow="lg"
      >
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormControl>
        <FormControl mt="4">
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button mt="4" onClick={handleSubmit}>Login</Button>
      </Box>
    </Box>
  );
};

export default LoginPage;


