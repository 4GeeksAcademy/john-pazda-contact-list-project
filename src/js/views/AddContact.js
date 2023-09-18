import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [ contact, setContact ] = useState({
		full_name: "",
		phone: "",
		address: "",
        agenda_slug: "john_pazda"

	});
	const navigate = useNavigate("");
	const createContact = () => {
		fetch("https://playground.4geeks.com/apis/fake/contact/", {
			method: "POST",
			body: JSON.stringify(contact),
			headers: {
				"Content-Type": "application/json"
			},
		})
		.then((resp) => {
			return resp.json()
		})
		.then((data) => {
			actions.getContacts();
			navigate("/contacts")
		})
        .catch((err) => {
            console.log(err)
        })
	}

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">
					{contact?.id ? "edit " : "add a new "}contact
					</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input 
						type="text" 
						className="form-control" 
						placeholder="Full Name" 
						value={
							contact?.full_name || ""
						}
						onChange={(event) => {
							setContact((previousContact) => {
								if (!previousContact) {
									return {full_name: event.target.value}
								}
								return {
									...previousContact,
									full_name: event.target.value
								}
							})
						}}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input 
						type="email" 
						className="form-control" 
						placeholder="Enter email" 
						value={
							contact?.email || "" 
						}
						onChange={(event) => {
							setContact((previousContact) => {
								if(!previousContact) {
									return {email: event.target.value}
								}
								return {
									...previousContact,
									email: event.target.value
								}
							})
						}}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input 
						type="phone" 
						className="form-control" 
						placeholder="Enter phone" 
						value={ contact?.phone || ""}
						onChange={(event) => {
							setContact((previousContact) => {
								if(!previousContact) {
									return {phone: event.target.value}
								}
								return {
									...previousContact,
									phone: event.target.value
								}
							})
						}}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input 
						type="text" 
						className="form-control" 
						placeholder="Enter address" 
						value={contact?.address || ""}
						onChange={(event) => {
							setContact((previousContact) => {
								if(!previousContact) {
									return {address: event.target.value}
								}
								
								return {
									...previousContact,
									address: event.target.value
									
								};
							})
						}}	
						/>
					</div>
					<button 
					type="button" 
					className="btn btn-primary form-control" 
					onClick={() => createContact()}

					>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

