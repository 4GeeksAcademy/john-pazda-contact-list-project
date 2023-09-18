const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		idForModal: undefined,


		actions: {
			getContacts: () => {
				fetch('https://playground.4geeks.com/apis/fake/contact/agenda/john_pazda')
				.then((response) => {
					if(response.ok) {
						return response.json();
					}
				})
				.then((body) => {
					setStore(
						{
							contacts: body
						}
					)
					console.log(body);
				})	
			},

			updateIdForModal: (contactID) => {
				setStore({idForModal: contactID})
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });

			
			}
		}
	};
};

export default getState;
