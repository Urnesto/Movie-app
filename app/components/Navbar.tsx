import Link from "next/link"

const Navbar = () => {
    return (
        <div className="flex bg-500 w-full h-24 items-center  bg-slate-200 flex-inline align-middle rounded-lg">
            <div className="pr-24 ml-10 md:ml-10 sm:ml-2">
                <p className="text-green">HULU</p>
            </div>

        <div className="w-full">
            <nav>
            <ul className="flex flex-row gap-10 lg:gap-20">
                <li><Link href="/TV">TV Show</Link></li>
                <li><Link href="/Movies">Movies</Link></li>
                <li><Link href="/Originals">Original</Link></li>
                <li><Link href="/kids">Kids</Link></li>
            </ul>
            </nav>
          
        </div>
        <div className="mx-2 md:mx-40">
            <span>LOGIN</span>
        </div>
        </div>
    )
}


export {Navbar}