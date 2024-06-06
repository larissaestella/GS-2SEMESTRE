import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai'
import { BsArrowBarRight } from "react-icons/bs";
import { Link } from 'react-router-dom'

const Navlateral = () => {

    const [nav,setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav) 
        console.log('Estado mudado')
    }

    return(
        <div>
            {/*Ícone do menu de navegação*/} {/*estilo para mudar a posição do icone do menu . md - media query for mobile*/}
            <AiOutlineMenu size={30} onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden cursor-pointer'/>
            {   
                // Se o estado é true , vai mostrar na tela
                nav ? (
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                                                                                           {/*Border-radius, shadow-large, margin:8px , padding: 16px*/}
                        <Link to='/login'>
                            <a onClick={handleNav} href="#login" className ='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                                <BsArrowBarRight size={20}/>
                                <span className='pl-4'>Login</span>
                            </a>
                        </Link>
                        
                        <Link to='/'>
                            <a onClick={handleNav} href="#main" className ='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                                <AiOutlineHome size={20}/>
                                <span className='pl-4'>Home</span>
                            </a>
                        </Link>

                        <Link to='/projeto'>     
                            <a onClick={handleNav} href="#sobre" className ='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                                <AiOutlineProject size={20}/>
                                <span className='pl-4'>Sobre</span>
                            </a>
                        </Link>
                        
                        <Link to='/contato'>

                            <a onClick={handleNav} href="#contato" className ='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                                <AiOutlineMail size={20}/>
                                <span className='pl-4'>Contato</span>
                            </a>
                        </Link>

                    </div>
                )
                // Se o estado não for true não mostrará na tela
                : (
                    ''
                )
            }

            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <Link to='/login'>
                        <a href="#" className='  flex items-center gap-5 rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-90 ease-in duration-300 '>
                            <BsArrowBarRight size={20} className=''/>
                            <h1>Login</h1>
                        </a>
                    </Link>

                    <Link to='/'>
                        <a href="#main" className=' flex items-center gap-5 justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-90 ease-in duration-300 '>
                            <AiOutlineHome size={20} className=''/>
                            <h1>Home</h1>
                        </a>
                    </Link>
                    
                    <Link to='/projeto'>     
                        <a href="#" className='  flex items-center gap-5 rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-90 ease-in duration-300 '>
                            <AiOutlineProject size={20} className=''/>
                            <h1>Projeto</h1>
                        </a>
                    </Link>
                    
                    <Link to='/contato'>
                        <a href="#" className='  flex items-center gap-5 rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-90 ease-in duration-300 '>
                            <AiOutlineMail size={20} className=''/>
                            <h1>Contato</h1>
                        </a>
                    </Link>


                    
                </div>
            </div>
        </div>
    );
}
export default Navlateral