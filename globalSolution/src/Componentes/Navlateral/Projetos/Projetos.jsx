import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
    { id: 1, name: 'Atlantic Ocean', plasticConcentration: 'High', value: 70 },
    { id: 2, name: 'Pacific Ocean', plasticConcentration: 'Moderate', value: 50 },
    { id: 3, name: 'Indian Ocean', plasticConcentration: 'Low', value: 30 }
];

const COLORS = ['#FF8042', '#0088FE', '#00C49F'];

const OceanPlasticDashboard = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div id='projeto' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <div id='projeto' className="mx-auto max-w-4xl px-4 py-8">
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

                <div id='projeto' className="mx-auto max-w-4xl px-4 py-8">
                    <h1 className="text-center text-xl mt-14 ml-20 font-bold text-[black]">Conscientização e Educação Ambiental nas Escolas</h1>
                    <p className="text-lg text-center pt-8 "> 
                        Complementando a iniciativa de monitoramento, propomos um programa de conscientização e educação ambiental nas escolas. As instituições de ensino serão incentivadas a criar projetos que ensinem sobre a importância da reciclagem e da preservação ambiental. As crianças serão envolvidas ativamente, levando de casa plásticos e outros materiais recicláveis para serem armazenados na escola.
                        Para facilitar o processo, estabeleceremos parcerias com centros de reciclagem que visitarão as escolas regularmente para comprar os resíduos coletados, da mesma forma como compram de catadores. Esse sistema permitirá que os alunos entendam o valor dos materiais recicláveis e a importância do ciclo de reciclagem.
                        Os recursos obtidos com a venda desses materiais recicláveis serão revertidos em benefícios para os alunos e a escola, como passeios educativos, feiras ambientais e novos projetos de sustentabilidade. Dessa forma, os estudantes não apenas aprendem na teoria, mas também veem na prática os impactos positivos de suas ações, promovendo uma cultura de responsabilidade ambiental desde cedo.
                    </p>
                </div>
            </div>

            <div className="container mb-10">
                <Slider {...settings}>
                    <div className="flex justify-center">
                        <img src="https://outraspalavras.net/wp-content/uploads/2022/07/oceanos3.jpg" alt="Imagem 1" className="w-full h-96 object-cover rounded-lg" />
                    </div>
                    <div className="flex justify-center">
                        <img src="https://www.waves.com.br/wp-content/uploads/2023/12/Em-Santos-SP-projeto-%E2%80%9CEmbaixadores-do-S%C3%A9culo-XXI%E2%80%9D-ensina-a-cultura-oce%C3%A2nica-com-m%C3%BAsica-leitura-e-atividades-sobre-reciclagem.-Foto-Matheus-Melo.png" alt="Imagem 3" className="w-full h-96 object-cover rounded-lg" />
                    </div>
                    <div className="flex justify-center">
                        <img src="https://cdn.unenvironment.org/2021-10/naja-bertolt-jensen-BJUoZu0mpt0-unsplash.jpg" alt="Imagem 3" className="w-full h-96 object-cover rounded-lg" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default OceanPlasticDashboard;

// import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

// const data = [
//     { id: 1, name: 'Atlantic Ocean', plasticConcentration: 'High', value: 70 },
//     { id: 2, name: 'Pacific Ocean', plasticConcentration: 'Moderate', value: 50 },
//     { id: 3, name: 'Indian Ocean', plasticConcentration: 'Low', value: 30 }
// ];

// const COLORS = ['#FF8042', '#0088FE', '#00C49F'];

// const OceanPlasticDashboard = () => {
//     return (
//         <div id='projeto' className="max-w-[1040] m-auto md:pl-20 p-4 py-16">
           
//             <div id='projeto' className="mx-auto max-w-4xl px-4 py-8">
//                 <h1 className="text-3xl font-bold text-center text-[#001b5e]">Monitoramento dos Resíduos Plásticos nos Oceanos</h1>
//                 <p className="text-lg text-center pt-8 pb-4 "> 
//                 A poluição plástica nos oceanos é uma das maiores crises ambientais do nosso tempo. Milhões de toneladas de plástico entram nos mares anualmente, afetando gravemente a vida marinha, os ecossistemas e até mesmo a saúde humana. Este projeto tem como objetivo monitorar e conscientizar sobre a concentração de plástico em diferentes oceanos, oferecendo dados precisos e atualizados para pesquisadores, estudantes e o público em geral.
//                 </p>
//                 <p className="text-lg text-center "> 
//                 Nossa iniciativa utiliza tecnologia de ponta para coletar e analisar amostras de água de várias partes dos oceanos Atlântico, Pacífico e Índico. Com essas informações, criamos dashboards interativos que exibem a concentração de plástico em cada oceano, permitindo uma visualização clara e compreensível dos dados. 
//                 </p>
//             </div>
//                 <div className="container mt-5 mb-20">
//                     <h1 className="text-center text-bold">Concentração de Plástico nos Oceanos</h1>
//                     <div className="row">
//                         <div className="col-md-6">
//                             <h3 className="text-center">Pie Chart</h3>
//                             <ResponsiveContainer width="100%" height={400}>
//                                 <PieChart>
//                                     <Pie
//                                         data={data}
//                                         cx="50%"
//                                         cy="50%"
//                                         labelLine={false}
//                                         outerRadius={150}
//                                         fill="#8884d8"
//                                         dataKey="value"
//                                         nameKey="name"
//                                     >
//                                         {data.map((entry, index) => (
//                                             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                                         ))}
//                                     </Pie>
//                                     <Tooltip />
//                                     <Legend />
//                                 </PieChart>
//                             </ResponsiveContainer>
//                         </div>
//                         <div className="col-md-6">
//                             <h3 className="text-center">Bar Chart</h3>
//                             <ResponsiveContainer width="100%" height={400}>
//                                 <BarChart data={data}>
//                                     <CartesianGrid strokeDasharray="3 3" />
//                                     <XAxis dataKey="name" />
//                                     <YAxis />
//                                     <Tooltip />
//                                     <Legend />
//                                     <Bar dataKey="value" fill="#82ca9d" />
//                                 </BarChart>
//                             </ResponsiveContainer>
//                         </div>
//                     </div>
            
//             <div id='projeto' className="mx-auto max-w-4xl px-4 py-8">
//                 <h1 className="text-center text-xl mt-5 ml-20 font-bold  text-[black]">Conscientização e Educação Ambiental nas Escolas</h1>
//                 <p className="text-lg text-center py-8 "> 
//                  Complementando a iniciativa de monitoramento, propomos um programa de conscientização e educação ambiental nas escolas. As instituições de ensino serão incentivadas a criar projetos que ensinem sobre a importância da reciclagem e da preservação ambiental. As crianças serão envolvidas ativamente, levando de casa plásticos e outros materiais recicláveis para serem armazenados na escola.
//                  Para facilitar o processo, estabeleceremos parcerias com centros de reciclagem que visitarão as escolas regularmente para comprar os resíduos coletados, da mesma forma como compram de catadores. Esse sistema permitirá que os alunos entendam o valor dos materiais recicláveis e a importância do ciclo de reciclagem.
//                  Os recursos obtidos com a venda desses materiais recicláveis serão revertidos em benefícios para os alunos e a escola, como passeios educativos, feiras ambientais e novos projetos de sustentabilidade. Dessa forma, os estudantes não apenas aprendem na teoria, mas também veem na prática os impactos positivos de suas ações, promovendo uma cultura de responsabilidade ambiental desde cedo.
//                 </p>
               
//                 {/* <h1 className="text-center text-xl mt-5 ml-20 font-bold  text-[black]">Conscientização e Educação Ambiental nas Escolas</h1>
//                 <p className="text-lg text-center py-8 "> 
//                  Este projeto visa criar uma rede integrada de monitoramento ambiental e educação, conectando o trabalho dos barcos nos oceanos com o aprendizado e a ação nas escolas. Esperamos, com isso, não apenas reduzir a quantidade de resíduos plásticos nos mares, mas também formar uma geração consciente e engajada na luta pela preservação do meio ambiente.
//                  A longo prazo, a iniciativa tem o potencial de transformar hábitos e promover uma economia circular, onde os resíduos são vistos como recursos valiosos, contribuindo para um planeta mais limpo e sustentável.
//                 </p> */}
//             </div>

//                 </div>
//         </div>

//     );
// }

// export default OceanPlasticDashboard;





// import React, { useState, useEffect } from 'react';
// import projetoData from '../Projetos/projetoData.json';
// // import OceanPlasticDashboard from './Componentes/Navlateral/OceanPlasticDashboard'

// function Projetos() {
//     const [projetos, setProjetos] = useState([]);

//     useEffect(() => {
//         setProjetos(projetoData);
//     }, []);

//     return (
//         <div id='projeto' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
//             <h1 className="ml-80 col-8 text-3xl font-bold text-center text-[black]">
//                 Projeto de Monitoramento dos Oceanos e Conscientização Ambiental nas Escolas
//             </h1>
            
//             {projetos.map((projeto) => (
//                 <div key={projeto.id}>
//                     <h2 className="text-xl mt-5 ml-60 font-bold text-[black]">{projeto.name}</h2>
//                     <p className="py-8 ml-60">{projeto.description}</p>
//                 </div>
//             ))}
            
//             <div className="mt-10">
//                 {/* <OceanPlasticDashboard /> */}
//             </div>
//         </div>
//     );
// }

// export default Projetos;




// function Projetos () {
//     return(
      <div id='projeto' className="max-w-[1040] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-3xl font-bold text-center text-[black]">Projeto de Monitoramento dos Oceanos e Conscientização Ambiental nas Escolas</h1>
        <h2 className="text-xl mt-5 ml-20 font-bold  text-[black]">Monitoramento dos Resíduos Plásticos no Oceano</h2>
        <p className=" py-8 ml-20 "> 
            Nosso projeto propõe a instalação de sensores avançados em barcos pesqueiros e grandes embarcações, equipados com tecnologia de infravermelho para detectar plásticos visíveis na superfície do oceano. Além disso, esses sensores também serão capazes de analisar a temperatura da água, fornecendo dados valiosos sobre as condições ambientais.
            Cada barco será equipado com um compartimento especial para coletar amostras de água do oceano. Essas amostras serão enviadas periodicamente a institutos de oceanografia para análise detalhada. Através desse monitoramento, será possível mapear as áreas com maior concentração de resíduos plásticos, facilitando a coleta eficiente e direcionada desses materiais. Esse sistema não apenas contribuirá para a limpeza dos oceanos, mas também fornecerá dados importantes para a pesquisa científica e políticas ambientais.
        </p>

        <h2 className="text-xl mt-5 ml-20 font-bold  text-[black]">Conscientização e Educação Ambiental nas Escolas</h2>
        <p className=" py-8 ml-20 ">
            Complementando a iniciativa de monitoramento, propomos um programa de conscientização e educação ambiental nas escolas. As instituições de ensino serão incentivadas a criar projetos que ensinem sobre a importância da reciclagem e da preservação ambiental. As crianças serão envolvidas ativamente, levando de casa plásticos e outros materiais recicláveis para serem armazenados na escola.
            Para facilitar o processo, estabeleceremos parcerias com centros de reciclagem que visitarão as escolas regularmente para comprar os resíduos coletados, da mesma forma como compram de catadores. Esse sistema permitirá que os alunos entendam o valor dos materiais recicláveis e a importância do ciclo de reciclagem.
            Os recursos obtidos com a venda desses materiais recicláveis serão revertidos em benefícios para os alunos e a escola, como passeios educativos, feiras ambientais e novos projetos de sustentabilidade. Dessa forma, os estudantes não apenas aprendem na teoria, mas também veem na prática os impactos positivos de suas ações, promovendo uma cultura de responsabilidade ambiental desde cedo.
        </p>
        
        <h2 className=" text-xl mt-5 ml-20 font-bold  text-[black]">Impacto Esperado</h2>
        <p className=" py-8 ml-20 text-lg ">
            Este projeto visa criar uma rede integrada de monitoramento ambiental e educação, conectando o trabalho dos barcos nos oceanos com o aprendizado e a ação nas escolas. Esperamos, com isso, não apenas reduzir a quantidade de resíduos plásticos nos mares, mas também formar uma geração consciente e engajada na luta pela preservação do meio ambiente.
            A longo prazo, a iniciativa tem o potencial de transformar hábitos e promover uma economia circular, onde os resíduos são vistos como recursos valiosos, contribuindo para um planeta mais limpo e sustentável.
        </p>
        
        

      </div>
//     );
// }
// export default Projetos