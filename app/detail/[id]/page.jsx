import Link from "next/link"

const fetchID = (id)=>{
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res=>res.json())
}

export default async function Detail({params}){
    const { id } = params
    const {name,image,location,origin,gender,status,episode} = await fetchID(id)
    return(
        <div class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
            <div class="w-full md:w-1/3 bg-white grid place-items-center">
                <img src={image} alt="" class="rounded-xl"/>
            </div>
            <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
            <div class="flex justify-between item-center">      
                <Link href='/home'><div class="bg-blue-900 px-3 py-1 rounded-full text-xs font-medium text-white hidden md:block cursor-pointer">Volver</div></Link>
            </div>
                <h1 class="font-black text-gray-800 md:text-3xl text-xl">{name}</h1>
                <p class="md:text-lg text-gray-500 text-base">Ubicación: {location.name}</p>
                <p class="md:text-lg text-gray-500 text-base">Origen: {origin.name}</p>
                <p class="md:text-lg text-gray-500 text-base">Genero: {gender}</p>
                <p class="md:text-lg text-gray-500 text-base">Estado: {status}</p>
                <p class="md:text-lg text-gray-500 text-base">Numero de episodios: {episode.length}</p>
            </div>
        </div>
    )
}