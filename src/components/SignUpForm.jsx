import { useState } from "react"
import { useAuth } from "../context/AuthContext"

const SignUpForm = () => {
    const { signUpWithEmail } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignUp = async (e) => {
      e.preventDefault();
      try {
        await signUpWithEmail(email, password);
        alert('Usuario registrado con éxito');
      } catch (error) {
        console.error(error);
        alert('Error al registrar el usuario');
      }
    };
  
    return (
      <form onSubmit={handleSignUp} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Registrarse</h2>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded">Registrarse</button>
      </form>
    );
  };

export default SignUpForm