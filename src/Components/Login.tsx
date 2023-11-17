import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Box,
  Text,
} from "@chakra-ui/react";

interface LoginProps {
  handleLogin: () => void; // Fungsi untuk menangani login
}

const Login: React.FC<LoginProps> = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lakukan logika autentikasi di sini (contoh: cek username dan password)
    if (username === "username" && password === "password") {
      handleLogin(); // Panggil fungsi handleLogin jika login berhasil
    } else {
      setError("Username atau password salah");
    }
  };

  return (
    <Box p={4}>
      <Text fontSize="xl" mb={4}>
        Halaman Login
      </Text>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Masukkan username"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
            />
          </FormControl>
          <Button colorScheme="blue" type="submit">
            Login
          </Button>
          {error && <Text color="red.500">{error}</Text>}
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
