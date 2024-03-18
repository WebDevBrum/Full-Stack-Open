import { useEffect, useState } from "react";
import personService from "./services/persons";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newFilter, setNewFilter] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);

  useEffect(() => {
    personService
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );

  const deletePerson = (id, name) => {
    const isConfirmed = window.confirm(
      `Are you sure you want to delete ${name}`
    );

    if (isConfirmed) {
      personService
        .deleteItem(id)
        .then((deletedItem) => {
          console.log("Deletion successful:", deletedItem);
          setPersons(persons.filter((person) => person.id != id));
        })
        .catch((error) => {
          console.error("There was an error deleteing the person:", error);
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setNotificationMessage={setNotificationMessage}
      />
      <Persons
        filteredPersons={filteredPersons}
        deletePerson={deletePerson}
        setNotificationMessage={setNotificationMessage}
      />
    </div>
  );
};

export default App;
