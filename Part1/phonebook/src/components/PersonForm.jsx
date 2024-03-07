import { useState } from "react";
import personService from "../services/persons";

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const duplicateName = (name) => {
    return persons.some((person) => person.name === name);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (duplicateName(newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const nextId =
      persons.reduce(
        (maxId, item) => Math.max(maxId, parseInt(item.id, 10) || 0),
        0
      ) + 1;

    const personObject = {
      name: newName,
      number: newNumber,
      id: nextId.toString(),
    };

    personService
      .create(personObject)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      })
      .catch((error) => {
        console.log(error);
      });

    // axios
    //   .post("http://localhost:3001/persons", personObject)
    //   .then((response) => {
    //     setPersons(persons.concat(response.data));
    //     setNewName("");
    //     setNewNumber("");
    //   })
    //   .catch((error) => {
    //     console.log(error.response.data);
    //   });
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <form>
      <h2>Add a New</h2>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit" onClick={addPerson}>
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
