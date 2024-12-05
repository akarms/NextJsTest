import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Users</h1>
      <ul className="w-full max-w-md bg-white rounded-lg shadow-lg p-4">
        {users.map(user => (
          <li
            key={user.id}
            className="border-b last:border-none py-3 px-4 flex items-center justify-between hover:bg-gray-50 transition duration-150"
          >
            <span className="text-gray-800 font-medium">{user.name}</span>
            <a
              href={`mailto:${user.email}`}
              className="text-sm text-blue-500 hover:underline"
            >
              {user.email}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
