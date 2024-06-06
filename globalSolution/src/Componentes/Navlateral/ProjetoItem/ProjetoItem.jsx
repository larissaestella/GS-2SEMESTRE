
const ProjetoItem = ({img, title}) => {
    return(
        <div className="relative flex items-center justify-center h-auto w-full 
        shadow-xl shadow-gray-400 rounded-xl
         group hover:bg-gradient-to-r from-gray-200 to-[#001B5e]">
            <img  src={img} alt="" className="rounded-xl group-hover:opacity-10 w-full h-full"/>
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl fon-bold text-white tracking-wider text-center ">
                    {title}
                </h3>
                <a href="">
                    <p className="text-center mt-4 p-1 rounded-lg bg-white text-gray-700 font-bold  cursor-pointer text-lg ">Mais informações</p>
                </a>
            </div>
        </div>
    );
}
export default ProjetoItem