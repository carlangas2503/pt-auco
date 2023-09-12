import Link from "next/link";


export default function Card({id,name,status,location,image}) {
    return(
        <div class="max-w-xs container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl mx-10 my-5">
            <Link href={`/detail/${id}`}><span class="text-white text-xs font-bold rounded-lg bg-blue-900 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">Detalle</span></Link>
            <div ><h1 class="text-2xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">{name}</h1>
            <img class="w-full cursor-pointer" src={image} alt="" />
            <p class="text-gray-800 font-bold cursor-pointer">Ubicación: {location}</p>
            <p class="text-gray-800 font-bold cursor-pointer">Estado: {status}</p></div>
        </div>
    )
}