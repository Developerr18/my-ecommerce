import logo from "./assets/images/logo.png";
import logoMobile from "./assets/images/logo-mobile.png";
import searchIcon from "./assets/images/icons/search-icon.png";
import cartIcon from "./assets/images/icons/cart-icon.png";

export default function Header() {
    return (
        <div className="fixed top-0 left-0 right-0 h-16 bg-sky-500 text-white px-4 flex items-center justify-between">
            <div className="left-section w-52">
                <a
                    href="#"
                    className="header-link inline-block px-[3px] py-[2px] mt-2 border border-transparent hover:border-white transition-all duration-200"
                >
                    <img src={logo} className="logo h-11" />
                    <img src={logoMobile} className="logo-mobile h-13 hidden" />
                </a>
            </div>

            <div className="middle-section flex flex-1 max-w-[850px] mx-2.5">
                <input
                    className="bg-white text-black flex-1 w-0 text-base h-[38px] pl-[15px] border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none rounded-tl-[5px] rounded-bl-[5px] rounded-tr-none rounded-br-none"
                    placeholder="Search"
                />
                <button className="bg-sky-300 border-none flex items-center justify-center w-[45px] h-[38px] rounded-tr-[5px] rounded-br-[5px] shrink-0 cursor-pointer">
                    <img className="h-5 mt-[3px] ml-0" src={searchIcon} />
                </button>
            </div>

            <div className="right-section w-45 shrink-0 flex justify-end items-center">
                <a
                    href="#"
                    className="orders-link text-white flex items-center border border-transparent hover:border-white transition-all duration-200 h-12 px-2"
                >
                    <span className="orders-text text-black block text-base font-semibold">
                        Orders
                    </span>
                </a>
                <a
                    href="#"
                    className="cart-link header-link flex items-center h-12 px-2 relative border border-transparent hover:border-white transition-all duration-200"
                >
                    <img src={cartIcon} className="w-11 h-10" />
                    <div className="text-black absolute left-7 top-0.75 font-semibold">
                        4
                    </div>
                    <div className="ml-2 font-semibold text-black">Cart</div>
                </a>
            </div>
        </div>
    );
}
