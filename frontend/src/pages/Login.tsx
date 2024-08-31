import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      dispatch(login({ user: response.data.user, token: response.data.token }));
    } catch (error) {
      console.error("Error logging in", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
    </form>
  );
};

export default Login;
