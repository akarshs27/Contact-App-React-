import { Link } from "react-router-dom";

const ContactDetail = (props) => {
    const { name, email } = props.history.location.state.user;
  return (
    <div className="flex justify-center items-center mt-10">

      <div className="bg-gray-100 rounded-lg p-4 md:w-1/3 flex flex-col text-center items-center">
       
      <div className="flex flex-col items-center text-center justify-center">
      <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{name}</h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p className="text-base">{email}</p>
          </div>
          <Link to="/" className="mt-3 text-indigo-500 inline-flex items-center">
            Back to Contact List
          </Link>
        </div>
      </div>
  );
};

export default ContactDetail;
