import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { account } from "../appwrite/config";

export const Navbar = () => {

    const [click, setClick] = useState(false);
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
        isLogin();
    }, [])

    const isLogin = async () => {
        try {
            const x = await account.get("current");
            // setEmail(x.email);
            setName(x.name);
            setIsLoggedIn(true);
            navigate("/")
             

        } catch (e) {
            setIsLoggedIn(false);
            navigate("/signin")
        }
    };


    const logout = async () => {

        try {
            await account.deleteSession("current");
            setIsLoggedIn(false);
            navigate("/signin")
        } catch (e) {
            console.log(e)

        }

    }







    const handleClick = () => {
        setClick(!click);
    }
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
            <ul className="text-center text-xl p-20">
                <Link spy={true} smooth={true} to='/'><li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li></Link>
                <Link spy={true} smooth={true} to='SignIn'><li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">SignIn</li></Link>
                <Link spy={true} smooth={true} to='SignUp'><li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">SingUp</li></Link>
                <Link spy={true} smooth={true} to='About'><li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li></Link>

            </ul>

        </div>
    </>
    return (

        <nav className="bg-slate-900">

            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1">
                <div className="flex items-center flex-1">
                    <span className="text-3xl font-bold">Logo</span>
                </div>

                <div className="lg:flex md:flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10" >
                        <ul className="flex gap-8 mr-16 text-[18px] ">
                            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                                <NavLink to="/"   > Home </NavLink>
                            </li>
                            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                                <NavLink to="/about"  > About </NavLink>
                            </li>
                            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                                <NavLink to="/dashboard"  >Dashboard </NavLink>
                            </li>
                            {isLoggedIn ? (
                                <>
                                    <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">

                                        <button className="logout-button" onClick={logout}>  Logout </button>
                                    </li>

                                    <p className="bg-white text-gray-600">Hello {name}</p>
                                </>
                            ):(
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                                    <NavLink to="/signin"  > Login </NavLink>
                                </li>)}




                        </ul>
                    </div>
                </div>

                <div>
                    {click && content}
                </div>
                <button className="block sm:hidden transition" onClick={handleClick}>
                    {click ? <FaTimes /> : <CiMenuFries />}
                </button>
            </div>
        </nav>


    );
};

{/* <header>
                <div className="container1">
                    <div className="logo-brand">
                        <NavLink to="/">My Menu</NavLink>
                    </div>

                    <nav>
                        
                    </nav>
                </div>
            </header> */}