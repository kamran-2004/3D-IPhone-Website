import {appleImg, bagImg, searchImg} from "../utils"

const Navbar = () => {
  return (
    <div>
      <header className="w-full py-5 sm:px-10 flex justify-between items-centre ">
        <nav className="flex w-full screen-max-width">
            <img src={appleImg} alt="appleImage" width={14} height={18} />

            <div className="flex flex-1 justify-center max-sm:hidden">
                {['Phones', 'Macbooks','Tablets'].map((nav) =>(
                    <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white ">
                        {nav}
                    </div>
                ))}
            </div>

            <div className="flex items-baseline gap-7 max-sm: justify-end max-sm:flex-1">
                <img src={searchImg} alt="search" width={18} height={18} />
                <img src={bagImg} alt="bag" width={18} height={18} />
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
