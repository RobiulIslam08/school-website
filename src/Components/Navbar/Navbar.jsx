
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const [nav, setNav] = useState(false);
    // const links = [
    //     {
    //         id: 1,
    //         link: 'Home'
    //     },
    //     {
    //         id: 2,
    //         link: "About"
    //     },
    //     {
    //         id: 3,
    //         link: 'Education'
    //     },
    //     {
    //         id: 4,
    //         link: 'Skills'
    //     },
    //     {
    //         id: 5,
    //         link: 'Project'
    //     },
       
    //     {
    //         id: 6,
    //         link: 'Contact'
    //     },
    // ];
	const links = <>
		<div className={nav? "flex flex-col  space-y-5": "space-x-4"}>

			<NavLink className={({ isActive }) =>
				isActive ? "font-bold text-primary border-b-4 border-purple-500" : "cursor-pointer capitalize hover:text-indigo-500  font-medium text-gray-500 hover:scale-110 duration-300 transition-all "
			} to="/addService">Add Service</NavLink>
			<NavLink className={({ isActive }) =>
				isActive ? "font-bold text-primary border-b-4 border-purple-500" : "cursor-pointer capitalize hover:text-indigo-500  font-medium text-gray-500 hover:scale-110 duration-300 transition-all"
			} to="/manageService">Manage Service</NavLink>
			<NavLink className={({ isActive }) =>
				isActive ? "font-bold text-primary border-b-4 border-purple-500" : "cursor-pointer capitalize hover:text-indigo-500  font-medium text-gray-500 hover:scale-110 duration-300 transition-all"
			} to="/bookedService">Booked Service</NavLink>
			<NavLink className={({ isActive }) =>
				isActive ? "font-bold text-primary border-b-4 border-purple-500" : "cursor-pointer capitalize hover:text-indigo-500  font-medium text-gray-500 hover:scale-110 duration-300 transition-all"
			} to="/serviceTodo">Service Todo</NavLink>
		</div>
	</>
    return (
        <div className="flex justify-between items-center w-full  h-20 px-4 text-white  ">
            <div className="flex items-center justify-center">
                <img className="w-10 h-10 rounded-full" src="https://i.ibb.co/BCpMXV9/school-logo-design-template-free-vector.jpg" alt="logo.png" />
                <h1 className="text-5xl font-signature ml-2">SPS</h1>
            </div>

            <ul className="hidden md:flex ">
                {
                    
                    links
                }
            </ul>

            <div onClick={() => setNav(!nav)} className="pr-4 z-10 cursor-pointer text-gray-400 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {
                nav && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                       <li>{links}</li>
                    </ul>
                )
            }
        </div>
    );
};

export default Navbar;
