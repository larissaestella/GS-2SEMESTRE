

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const COLORS = ['#FF8042', '#0088FE', '#00C49F'];

const OceanPlasticDashboard = () => {
    const [data, setData] = useState([]);
    const [escolaData, setEscolaData] = useState(null);

    useEffect(() => {
        fetch('/projetoData.json')
            .then(response => response.json())
            .then(json => {
                setData(json.oceans);
                setEscolaData(json.escolaData);
            });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div id='projeto' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <div className="mx-auto max-w-4xl px-4 py-8">
                <h1 className="text-3xl font-bold text-center text-[#001b5e]">Monitoramento dos Resíduos Plásticos nos Oceanos</h1>
                <p className="text-lg text-center pt-8 pb-4"> 
                    A poluição plástica nos oceanos é uma das maiores crises ambientais do nosso tempo. Milhões de toneladas de plástico entram nos mares anualmente, afetando gravemente a vida marinha, os ecossistemas e até mesmo a saúde humana. Este projeto tem como objetivo monitorar e conscientizar sobre a concentração de plástico em diferentes oceanos, oferecendo dados precisos e atualizados para pesquisadores, estudantes e o público em geral.
                </p>
                <p className="text-lg text-center"> 
                    Nossa iniciativa utiliza tecnologia de ponta para coletar e analisar amostras de água de várias partes dos oceanos Atlântico, Pacífico e Índico. Com essas informações, criamos dashboards interativos que exibem a concentração de plástico em cada oceano, permitindo uma visualização clara e compreensível dos dados. 
                </p>
            </div>
            <div className="container mt-5 mb-20">
                <h1 className="text-center text-bold">Concentração de Plástico nos Oceanos</h1>
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="text-center">Pie Chart</h3>
                        <ResponsiveContainer width="100%" height={400}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={150}
                                    fill="#8884d8"
                                    dataKey="value"
                                    nameKey="name"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="col-md-6">
                        <h3 className="text-center">Bar Chart</h3>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="mx-auto max-w-4xl px-4 py-8">
                    <h1 className="text-center text-xl mt-14 ml-20 font-bold text-[black]">Conscientização e Educação Ambiental nas Escolas</h1>
                    <p className="text-lg text-center pt-8"> 
                        Complementando a iniciativa de monitoramento, propomos um programa de conscientização e educação ambiental nas escolas. As instituições de ensino serão incentivadas a criar projetos que ensinem sobre a importância da reciclagem e da preservação ambiental. As crianças serão envolvidas ativamente, levando de casa plásticos e outros materiais recicláveis para serem armazenados na escola.
                        Para facilitar o processo, estabeleceremos parcerias com centros de reciclagem que visitarão as escolas regularmente para comprar os resíduos coletados, da mesma forma como compram de catadores. Esse sistema permitirá que os alunos entendam o valor dos materiais recicláveis e a importância do ciclo de reciclagem.
                        Os recursos obtidos com a venda desses materiais recicláveis serão revertidos em benefícios para os alunos e a escola, como passeios educativos, feiras ambientais e novos projetos de sustentabilidade. Dessa forma, os estudantes não apenas aprendem na teoria, mas também veem na prática os impactos positivos de suas ações, promovendo uma cultura de responsabilidade ambiental desde cedo.
                    </p>
                </div>
            </div>

            <div className="container mb-10">
                <Slider {...settings}>
                    <div className="flex justify-center">
                        <img src="https://www.waves.com.br/wp-content/uploads/2023/12/Em-Santos-SP-projeto-%E2%80%9CEmbaixadores-do-S%C3%A9culo-XXI%E2%80%9D-ensina-a-cultura-oce%C3%A2nica-com-m%C3%BAsica-leitura-e-atividades-sobre-reciclagem.-Foto-Matheus-Melo.png" alt="Imagem 1" className="w-full h-96 object-cover rounded-lg" />
                    </div>
                    <div className="flex justify-center">
                        <img src="https://outraspalavras.net/wp-content/uploads/2022/07/oceanos3.jpg" alt="Imagem 3" className="w-full h-96 object-cover rounded-lg" />
                    </div>
                    <div className="flex justify-center">
                        <img src="https://cdn.unenvironment.org/2021-10/naja-bertolt-jensen-BJUoZu0mpt0-unsplash.jpg" alt="Imagem 3" className="w-full h-96 object-cover rounded-lg" />
                    </div>
                </Slider>
            </div>

            {escolaData && (
                <div className="container mt-10 pt-8">
                    <h2 className="text-2xl font-bold text-center text-[#001b5e]">Escola Futuro Azul - Detalhes do Projeto</h2>
                    <div className="bg-gray-200 shadow-md rounded-lg p-6 mt-6">
                        <h3 className="text-xl font-bold text-[#001b5e]">{escolaData.nome_escola}</h3>
                        <p className="text-lg mt-2">Fundos Disponíveis: R$ {escolaData.fundos.toFixed(2)}</p>
                        <h4 className="text-lg font-semibold mt-4">Registros de Vendas</h4>
                        {escolaData.registro_vendas.map((registro, index) => (
                            <div key={index} className="mt-4">
                                <p className="text-sm">Data: {new Date(registro.timestamp).toLocaleDateString()}</p>
                                <p className="text-sm">Garrafas PET: {registro.materiais_coletados['garrafas PET']} kg</p>
                                <p className="text-sm">Sacolas Plásticas: {registro.materiais_coletados['sacolas plásticas']} kg</p>
                                <p className="text-sm">Alumínio: {registro.materiais_coletados['aluminio']} kg</p>
                                <p className="text-sm">Preço por Kg: R$ {registro.preco_por_kg.toFixed(2)}</p>
                                <p className="text-sm">Fundos Obtidos: R$ {registro.fundos.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default OceanPlasticDashboard;
