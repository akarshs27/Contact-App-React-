import "./App.css";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContactDetail from "./components/ContactDetail";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const onSubmitContact = async (name, email) => {
    const request = {
      id: uuid(),
      name,
      email,
    };

    const response = await fetch("http://localhost:3200/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    const data = await response.json();
    setContacts((prev) => {
      return [...prev, data];
    });
  };

  const retrieveData = async () => {
    const response = await fetch("http://localhost:3200/contacts");
    const data = response.json();
    return data;
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveData();
      if (allContacts) {
        setContacts(allContacts);
      }
    };
    getAllContacts();
  }, []);

  const removeContactHandler = async (id) => {
    await fetch(`http://localhost:3200/contacts/${id}`, {
      method: "DELETE",
    });
    const filteredContacts = await contacts.filter((contact) => {
      return contact.id !== id;
    });
    console.log(filteredContacts);
    setContacts(filteredContacts);
  };

  const onUpdateContact = (name, email) => {};

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResult(newContactList);
    } else {
      setSearchResult(contacts);
    }
  };
  //  useEffect(() => {
  //    const storedContact = JSON.parse(localStorage.getItem("contacts"));
  //    setContacts(storedContact);
  //  },[]);

  //  useEffect(() => {
  //    localStorage.setItem("contacts", JSON.stringify(contacts));
  //  },[contacts]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={searchTerm.length < 1 ? contacts : searchResult}
                removeContactHandler={removeContactHandler}
                searchHandler={searchHandler}
              />
            )}
          />

          <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} onSubmitContact={onSubmitContact} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditContact {...props} onUpdateContact={onUpdateContact} />
            )}
          />

          <Route path="/contact/:id" component={ContactDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
