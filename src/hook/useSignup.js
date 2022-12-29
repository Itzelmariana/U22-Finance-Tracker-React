import { useState } from 'react';
import { auth } from '../firebase/config';

export function useSignup() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  async function signup(email, password, name) {
    setError(null);
    setIsPending(true);

    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      console.log(res.user);
      if (!res) {
        throw new Error('Could not complete signup');
      }
      await res.user.updateProfile({ name: name });
      setIsPending(false);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  }

  return { error, isPending, signup };
}
