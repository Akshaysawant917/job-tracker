'use client';
import { useState, useEffect } from 'react';
import { updateUserName } from '@/app/profile/actions';

export default function UpdateProfileForm({ currentName }) {
  const [name, setName] = useState(currentName || '');
  const [status, setStatus] = useState('');

  useEffect(() => {
    setName(currentName || '');
  }, [currentName]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      setStatus('⚠️ Name cannot be empty');
      return;
    }
    setStatus('Updating...');

    try {
      const res = await updateUserName(name);
      console.log('📦 Response from server:', res);
      setStatus('✅ ' + res.message);
    } catch (err) {
      console.error('🔥 Error in handleSubmit:', err);
      setStatus('❌ Failed to update profile');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <label
        htmlFor="name"
        className="block text-gray-700 font-semibold text-lg"
      >
        Update Your Name
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
      >
        Update Profile
      </button>
      {status && (
        <p
          className={`text-center font-medium ${
            status.startsWith('✅')
              ? 'text-green-600'
              : status.startsWith('❌')
              ? 'text-red-600'
              : 'text-yellow-600'
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
}
