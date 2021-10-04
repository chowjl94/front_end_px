import { LoginForm } from 'domains/auth';
import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useAuthState } from 'domains/auth/auth.state';
export const LoginPage = () => {
  const auth = useAuthState()

  if (auth.status === 'authenticated') {
    return <Redirect to="/" />
  }
  return (
    <div className="bg-gray-50 p-6 sm:p-12 min-h-screen">
      <LoginForm />
      <div className="max-w-md mx-auto px-4 sm:px-6 py-6 bg-white shadow">
          <Link to="/register">Register account</Link>
        </div>
    </div>
  );
};
