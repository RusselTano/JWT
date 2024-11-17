import type { User, UserForm } from "../interface";

const BASE_URL = '/api/user';


export async function createUser(userForm: UserForm) {
  try {
    const user = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userForm)
    })
    if (user.ok) {
      return await user.json()
    }
    else {
      throw new Error('Error creating user')
    }
  }
  catch (error) {
    throw error;
  }
}

export async function fecthCurrentUser(): Promise<User | null> {
    return  await(await fetch(`${BASE_URL}/current`)).json();
}
