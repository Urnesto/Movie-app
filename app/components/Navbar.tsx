import Link from "next/link"

const Navbar = () => {
    return (
       
        <div className="flex  w-full bg-500  h-24 items-center  bg-slate-200  align-middle rounded-lg">
            <div className=" grow  ml-10">
                <p className="text-green">HULU</p>
            </div>
        <div className=" hidden lg:contents">
        <div className="w-full">
            <ul className="flex flex-row gap-20 p-24">
                <li><Link href="/TV">TV Show</Link></li>
                <li><Link href="/Movies">Movies</Link></li>
                <li><Link href="/Originals">Original</Link></li>
                <li><Link href="/Originals">Kids</Link></li>
            </ul>
        </div>
        <div className="mx-2 md:mx-40">
            <span>LOGIN</span>
        </div>
        </div>
        <div className=" mx-5 lg:hidden">
        <button  type="button" className=" text-black  ">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
        </div>
    )
}


export {Navbar}