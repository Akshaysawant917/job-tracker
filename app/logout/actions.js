'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logoutUser() {
  // 🧹 Clear the userId cookie
  cookies().delete('userId');

  // 🔁 Redirect to login page
  redirect('/login');
}
