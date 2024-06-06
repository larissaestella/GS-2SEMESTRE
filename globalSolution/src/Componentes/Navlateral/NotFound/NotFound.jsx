import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-400">404</h1>
                <h2 className="text-3xl md:text-5xl font-medium mt-4">Página Não Encontrada</h2>
                <p className="text-gray-500 mt-2">A página que você está procurando não existe ou foi movida.</p>
                <Link to="/" className="mt-6 inline-block bg-[#001b5e] text-white py-2 px-4 rounded hover:bg-blue-700">
                    Voltar para a Página Inicial
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
