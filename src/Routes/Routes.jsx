import {
	createBrowserRouter,
	
} from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Mainlayout></Mainlayout>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Home></Home>
			},
		]
	},
]);
export default router