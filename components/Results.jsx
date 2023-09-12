
import Card from "./Card"


export default async function Results() {
    const fetchPosts1 = ()=>{
        return fetch(`https://rickandmortyapi.com/api/character?page=1`)
        .then(res=>res.json())
    }
    const fetchPosts2 =()=>{
        return fetch(`https://rickandmortyapi.com/api/character?page=2`)
        .then(res=>res.json())
    }
    let primero = await fetchPosts1()
    let segundo = await fetchPosts2()
    const results = primero.results.concat(segundo.results)
    return(
        <div class="min-h-screen bg-gray-100 flex justify-center items-center flex-wrap">
            {results.map(({id,name,status,location,image})=>{
                return(<Card
                key={id}
                id={id}
                name={name}
                status={status}
                location={location.name}
                image={image}
                />)
            })}
        </div>
    )
}