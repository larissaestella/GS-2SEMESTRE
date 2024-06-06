import SobreItens from "../SobreItens/SobreItens"

const Sobre = () => {
         
    // criando array de objetos
        const data = [
            {
                idade: 18 + ' anos',
                nome: 'Jeferson Gabriel',
                instituicao:'FIAP',
                detalhes: '  Sou fascinado pelo universo da tecnologia. O que eu mais gosto é a área de Front-End Development e UX. Trabalhar com a criatividade, diversidade de pensamento e em equipe faz parte do meu perfil profissional.'
            },
            {
                idade: 19 + ' anos',
                nome: 'Larissa Estella',
                instituicao:'FIAP',
                detalhes: '  Estudante de engenharia de software na FIAP. Amo tecnologia, principalmente aquelas que causam impacto por serem diferentes e inusitadas. Sou organizada e dedicada no que me proponho fazer, além de responsável.'
            },
            {
                idade: 19 + ' anos',
                nome: 'Victor Vilares',
                instituicao:'FIAP',
                detalhes: '  Estudante de engenharia de software na FIAP. Entusiasta da tecnologia, amo e gosto de aprender tudo relacionado a tecnologia. Além disso, sou dedicado em tudo em que faço, principalmente ligado ao que amo!'
            },

        ]

    return(
        <div id='sobre' className=" flex flex-col items-center justify-center m-w-[1040px] m:auto md:pl-20 p-4 py-16"> 

        <div id='projeto' className="mx-auto max-w-4xl px-4 py-8">
                <h1 className="text-3xl font-bold text-center text-[#001b5e]">Sobre o Projeto</h1>
                {/* <h2 className="text-xl mt-5 ml-40 font-bold  text-[#001b5e]">Monitoramento dos Resíduos Plásticos no Oceano</h2> */}
                <p className="text-lg text-center py-8 "> 
                Propomos um projeto abrangente que combina monitoramento dos resíduos plásticos nos oceanos  utilizando arduino com educação ambiental nas escolas. Sensores infravermelhos serão instalados em barcos pesqueiros para detectar plásticos na superfície do oceano, fornecendo dados valiosos sobre as condições ambientais e mapeando áreas de concentração de resíduos. Paralelamente, um programa educacional incentivará a conscientização desde a infância, envolvendo os alunos na coleta de plásticos recicláveis, que serão vendidos a centros de reciclagem em parceria com as escolas. Os recursos obtidos serão reinvestidos em benefícios educacionais, promovendo uma cultura de responsabilidade ambiental desde cedo. A integração dessas iniciativas não apenas visa limpar os oceanos, mas também formar uma geração engajada na preservação ambiental, impulsionando uma economia circular e contribuindo para um futuro sustentável.
                </p>
                
        </div>
        <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8 ">Quem somos</h1>
        <h2 className="mx-auto max-w-4xl px-4 text-md text-center mb-8 ">Nosso time é composto por profissionais apaixonados e dedicados, cada um trazendo uma habilidade única para nossa missão comum de preservar o meio ambiente.</h2>

        {data.map((item,id) => (
            <SobreItens key={id} idade={item.idade} nome={item.nome} instituicao={item.instituicao} detalhes={item.detalhes}/>
    ))}

    </div>
        
    );
}
export default Sobre