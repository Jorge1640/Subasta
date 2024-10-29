import { AuthProvider } from './context/AuthContext';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full space-y-8">
          <SignUpForm />
          <LoginForm />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;