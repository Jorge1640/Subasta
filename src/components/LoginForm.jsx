import { useState } from "react"
import { useAuth } from "../context/AuthContext"


const LoginForm = () => {
  const { loginWithEmail, signUpWithGoogle } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      alert('Inicio de sesión exitoso');
    } catch (error) {
      console.error(error);
      alert('Error al iniciar sesión');
    }
  };

  return (
    <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Iniciar Sesión</h2>
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
      <button className="w-full bg-blue-500 text-white p-2 rounded">Iniciar Sesión</button>
      <button
        type="button"
        onClick={signUpWithGoogle} // Cambiado aquí
        className="w-full bg-red-500 text-white p-2 rounded mt-4"
      >
        Iniciar con Google
      </button>

    </form>
  );
};


export default LoginForm