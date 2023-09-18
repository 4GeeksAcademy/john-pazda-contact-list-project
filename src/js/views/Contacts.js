import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext.js";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});

	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getContacts();
	}, [])
	const navigate = useNavigate();

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map((contact) => {
						return (
							<ContactCard
							contact={contact}
							key={contact.id} 
							onEdit={() => (navigate(`/edit_contacts/${contact.id}`))}
							onDelete={() => setState({ showModal: true })}
							 />
						)	
					})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};