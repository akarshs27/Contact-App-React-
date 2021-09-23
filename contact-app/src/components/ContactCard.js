import { Link } from "react-router-dom";

const ContactCard = ({ user, removeContactHandler }) => {
  const deleteContact = (id) => {
    removeContactHandler(id);
  };

  return (
    <section className="w-2/5">
      <div className="flex items-center justify-between border-b pb-4 mb-4 mt-6 border-gray-200 sm:flex-row flex-col">
        <Link to={{ pathname: `/contact/${user.id}`, state: { user } }}>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              {user.name}
            </h2>
            <p className="leading-relaxed text-base">{user.email}</p>
          </div>
        </Link>
        <div>
          <Link to={{ pathname: `/edit`, state: { user } }}>
            <button
              className="text-white bg-yellow-500 border-0 py-2 mr-4 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
            >
              Edit
            </button>
          </Link>
          <button
            className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
            onClick={() => deleteContact(user.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
