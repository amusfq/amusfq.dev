'use client';

import {
  Alert,
  AlertContainer,
  AlertDescription,
  AlertDismiss,
  AlertIcon,
  Button,
  Spinner
} from "keep-react";
import {Envelope, Lock} from "@phosphor-icons/react";
import Input from "@/components/input";
import {ChangeEvent, useState} from "react";
import {EmailSignInButton} from "firebase-nextjs/client/components";
import {getUserCS} from "firebase-nextjs/client/auth";

const LoginForm = () => {
  const {currentUser} = getUserCS();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.type === "email") setEmail(e.target.value);
    if (e.target.type === "password") setPassword(e.target.value);
    setError("")
  }

  return (
    <div className="mx-auto max-w-md space-y-2">
      {error && (
        <Alert color="error">
          <AlertContainer>
            <AlertIcon/>
            <AlertDescription>{error}</AlertDescription>
          </AlertContainer>
          <AlertDismiss/>
        </Alert>
      )}
      {
        !currentUser && (
          <>
            <Input
              placeholder="Enter email"
              id='email'
              label='Email'
              type='email'
              icon={<Envelope size={19} color="#AFBACA"/>}
              onChange={handleChange}
            />
            <Input
              placeholder="Enter Password"
              id='password'
              label='Password'
              type="password"
              onChange={handleChange}
              icon={<Lock size={19} color="#AFBACA"/>}
            />
            <EmailSignInButton email={email} password={password} setErrorMessage={setError} setLoading={setIsLoading}>
              <Button size="sm" color="primary">
                {isLoading && (
                  <span className="pr-2">
                    <Spinner color="info" size="md"/>
                  </span>
                )}
                {isLoading ? 'Loading...' : 'Login'}
              </Button>
            </EmailSignInButton>
          </>
        )
      }
      {currentUser && <div className='mx-auto w-full py-8'><Spinner color="info" size="xl"/></div>}
    </div>
  )
}

export default LoginForm;
