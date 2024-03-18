const Persons = ({ filteredPersons, deletePerson }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}{" "}
          <button onClick={() => deletePerson(person.id, person.name)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
