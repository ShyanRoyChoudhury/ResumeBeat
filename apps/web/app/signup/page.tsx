import { Card, SignupForm } from '@repo/ui';
import React from 'react';

function Signup() {
  return (
    <div className="flex justify-center py-10">
      <Card className="w-11/12 md:w-10/12 lg:4/6 bg-black text-white space-y-2 p-4 ">
        <div>
          <div className="font-bold text-lg">Sign in to your account</div>
          <div className="flex space-x-1">
            <p>Already have an account?</p>
            <a>Sign in now</a>
          </div>
          <SignupForm />
        </div>
      </Card>
    </div>
  );
}

export default Signup;
