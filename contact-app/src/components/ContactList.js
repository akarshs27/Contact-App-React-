import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = ({
  contacts,
  removeContactHandler,
  searchHandler,
}) => {
  const renderedCard = contacts.map((user) => (
    <ContactCard
      user={user}
      removeContactHandler={removeContactHandler}
      key={user.id}
      id={user.id}
    />
  ));

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-2/5 flex items-center justify-between border-b pb-4 mb-4 mt-6 border-gray-200 sm:flex-row flex-col">
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h1 className="title-font  text-gray-900 text-lg title-font font-medium ">
            Contact List
          </h1>
        </div>
        <Link to="/add">
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Add contact
          </button>
        </Link>
      </div>
      <div className="w-1/5 flex relative mb-2">
        <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#6b7280"
            viewBox="0 0 50 50"
            width="20px"
            height="20px"
          >
            <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
          </svg>
        </span>
        <input
          type="text"
          id="email-with-icon"
          className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          name="search"
          placeholder="Search Contacts"
          onChange = { (e) => searchHandler(e.target.value)}
        />
      </div>

      {renderedCard.length > 0 ? renderedCard : <p>No contacts available</p>}
    </div>
  );
};

export default ContactList;
