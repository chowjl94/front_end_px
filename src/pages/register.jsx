import { RegisterForm } from 'domains/auth/components/register-form';
import * as React from 'react';

export const Register = () => {
  return (
    <div className="bg-gray-50 p-6 sm:p-12 min-h-screen">
      <RegisterForm />
    </div>
  );
};
