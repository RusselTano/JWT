import type { SigninForm, User } from "../interface";

const BASE_URL = '/api/auth';

export async function signin(signinForm: SigninForm): Promise<User> {
  try {
    const user = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(signinForm)
    })
    if (user.ok) {
      return await user.json()
    }
    else {
      throw new Error('Error signing in')
    }
  }
  catch (error) {
    throw error;
  }
}

