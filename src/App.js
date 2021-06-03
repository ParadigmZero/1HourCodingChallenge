import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import useFetch from './libs/useFetch';
import { UseAppContext } from './appContext';

function App() {

  useFetch();

  const { people, setPeople, refreshSwitch, setRefreshSwitch } = UseAppContext();

  // for controlled components
  const [name, setName] = useState("");
  const [age, setAge] = useState("");



  return (
    <>
      Name<input value={name} onChange={(event) => setName(event.target.value)}></input>
      Age<input value={age} onChange={(event) => setAge(event.target.value)}></input>
      <br />
      <button onClick={addUser}>submit</button>

      <br /><br />

      <ul>


        {people.map((person, index) => [
          <li>
            {person.name} - {person.age}
          </li>
        ]
        )
        }


      </ul>

      <br />
  Youngest:
      <br />
      { getYoungest()}
      <br />
      <br />
  Oldest:
      <br />
      { getOldest()}

      <br />
      <br />
  Average age:
      <br />
      { averageAge()}


    </>
  );


  function averageAge() {

    let average = 0;


    people.forEach(function (person) {
      average += person.age;
    });

    return Math.round(average / people.length);


  }

  function getOldest() {
    let oldest = { age: -1 };

    people.forEach(function (person) {
      if (person.age > oldest.age) {
        oldest = person;
      }
    });

    return `${oldest.name} - ${oldest.age}`;
  }

  function getYoungest() {
    let youngest = { age: 1000 };

    people.forEach(function (person) {
      if (person.age < youngest.age) {
        youngest = person;
      }
    });

    return `${youngest.name} - ${youngest.age}`;

  }

  function addUser() {
    console.log("user added");

    const person = {
      name: name,
      age: age
    };

    postPerson("POST", person);

  }

  async function postPerson(method, body) {
    let data = await fetch(`http://localhost:5000/person`, {
      method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });

    setRefreshSwitch(!refreshSwitch);


    setName("");
    setAge("");
  }





}

export default App;
