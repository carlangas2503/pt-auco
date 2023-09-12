import Link from "next/link";

const landing = ()=>{
    return(
<div class="bg-white dark:bg-gray-800 ">
    <div class="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <img src="https://www.auco.ai/_next/static/media/logo-auco.358e58f4.png" alt="imagen auco" />
            <span class="block text-blue-900">
                Prueba tecnia.
            </span>
        </h2>
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class=" inline-flex rounded-md shadow">
                <Link href='/home'><button type="button" class="py-4 px-6  bg-blue-900 hover:bg-blue-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Iniciar!
                </button></Link>
            </div>
        </div>
    </div>
</div>
    )
}
export default landing;