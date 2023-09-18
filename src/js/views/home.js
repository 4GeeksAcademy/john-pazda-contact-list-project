import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
		<div className="row">
			<div className="container m-2 d-flex align-items-center justify-content-center">
				<Link to="/contacts" className="btn btn-success btn-md">
				<span>Go to Contacts</span>
				</Link>
			</div>
		</div>
	</div>
);
