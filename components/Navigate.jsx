import Link from "next/link"

const links = [{
    nombre:'Inicio',
    destino:'/'
},{
    nombre:'Sobre mi',
    destino:'/about'
},{
    nombre:'Productos',
    destino:'/home'
}]

export default function Navigate(){
    return(
     <header>
        <nav class="nav font-semibold text-lg">
         <ul class="flex items-center justifi justify-center">
          {links.map(({nombre,destino})=>{
            return<li class="p-4 border-b-2 border-blue-900 border-opacity-0 hover:border-opacity-100 hover:text-blue-900 duration-200 cursor-pointer active" key={destino}><Link href={destino} >{nombre}</Link></li>
          })}
         </ul>           
        </nav>
    </header>
    )
}