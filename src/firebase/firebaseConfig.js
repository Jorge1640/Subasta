// Importa los módulos necesarios de Firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDa5NdNLCmA4fyZxJgxY2NrvZcT1sKh-PQ",
  authDomain: "subasta-7f7f8.firebaseapp.com",
  projectId: "subasta-7f7f8",
  storageBucket: "subasta-7f7f8.appspot.com",
  messagingSenderId: "1024485702368",
  appId: "1:1024485702368:web:1f5cbd4ad063cb2b6aae85"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa el servicio de autenticación y el proveedor de Google
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
