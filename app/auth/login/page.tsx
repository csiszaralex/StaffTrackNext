'use client';

import { useState } from 'react';
import { Input } from '@/utilities/input';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Hibás bejelentkezési adatok');
      }

      const data = await response.json();
      console.log('Sikeres bejelentkezés', data);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-blue-50 dark:bg-gray-900'>
      <div className='w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-800'>
        <h2 className='text-2xl font-semibold text-center text-blue-600 dark:text-blue-200'>
          Bejelentkezés
        </h2>
        <form onSubmit={handleLogin} className='mt-4'>
          <Input
            label='Email'
            type='email'
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            placeholder='Kérlek add meg az email címed'
            required
          />
          <div className='mt-4'>
            <Input
              label='Jelszó'
              type='password'
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              placeholder='Kérlek add meg a jelszavad'
              required
            />
          </div>
          {error && <p className='mt-2 text-sm text-red-500 dark:text-red-400'>{error}</p>}
          <button
            type='submit'
            className='w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500'>
            Bejelentkezés
          </button>
        </form>
      </div>
    </div>
  );
}
