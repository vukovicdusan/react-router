import { Link } from "react-router-dom";
import { Context } from "../App";
import { useContext } from "react";

const Products = () => {
	const value = useContext(Context);
	return <section>
		<h1>The Products Page - {value}</h1>	
		<ul>
			<li><Link to={"/products/p1"}>Book</Link></li>
			<li><Link to={"/products/p2"}>Carpet</Link></li>
			<li><Link to={"/products/p3"}>Online Course</Link></li>			
		</ul>
	</section>
};

export default Products; 