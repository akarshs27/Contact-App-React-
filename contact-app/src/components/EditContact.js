import { useState } from "react";
import { useHistory } from "react-router";

const EditContact = (props) => {
    const historyRoute = useHistory();
    const { id, name, email } = props.history.location.state.user;
    const [updatedName, setName] = useState("");
    const [updatedEmail, setEmail] = useState("");
    
    const submitContact = (e) => {
      e.preventDefault();
      
      if (name === "" || email === "") {
        alert("All fields are mandatory");
        return;
      }
  
      props.onUpdateContact(name, email);
      setName("");
      setEmail("");
      historyRoute.push("/");
    };

    return (
        <div className="flex justify-center items-center">
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-4">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Edit Contact
          </h2>
          <form onSubmit={submitContact}>
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Update
            </button>
          </form>
        </div>
      </div>
    );
}

export default EditContact
