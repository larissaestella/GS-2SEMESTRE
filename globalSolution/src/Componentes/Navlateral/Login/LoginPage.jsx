// Login.js
import React, { useState } from 'react';
import { getUserByUsername } from '../Services/userService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = getUserByUsername(username);

    if (user && user.password === password) {
      // Login bem-sucedido
      // redirecionar o usuário para a página principal ou armazenar o token de autenticação
      console.log('Login bem-sucedido');
    } else {
      // Credenciais inválidas
      setError('Credenciais inválidas');
    }
  };

  return (
    <div>
        <img className="  w-full h-screen object-cover" src="/public/imagens/logo2.png" alt="" />
        <div className="flex items-center justify-center h-screen w-full  absolute top-0 left-0 bg-white/55">
            
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl mb-4 text-center">Login</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Usuário
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="nome de usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Senha
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div className="flex items-center justify-between">
            <button
                className="bg-[#001b5e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                >
                Entrar
            </button>
            </div>
        </form>
        </div>
    </div>
  );
};

export default Login;



// Login.js
// import React from 'react';
// import { signInWithGoogle } from './Componentes/Navlateral/firebase/firebase'; // Função para login com o Google

// const Login = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Entre na sua conta</h2>
//         </div>
//         <div className="mt-8">
//           <div className="mt-6">
//             <button
//               onClick={signInWithGoogle}
//               type="button"
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//             >
//               Entrar com o Google
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
