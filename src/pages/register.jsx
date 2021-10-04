import { RegisterForm } from 'domains/auth/components/register-form';
import { Redirect } from 'react-router-dom';
import { useAuthState } from 'domains/auth/auth.state';

export const Register = () => {
  const auth = useAuthState()
  if (auth.status === 'authenticated') {
    return <Redirect to="/" />
  }else
  return (
    <div className="bg-gray-50 p-6 sm:p-12 min-h-screen">
      <RegisterForm />
    </div>
  );
};
