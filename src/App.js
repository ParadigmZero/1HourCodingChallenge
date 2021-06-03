import logo from './logo.svg';
import './App.css';

function App() {

  const people = [
    { name: 'Alice', age: 20 }
    ,
    { name: 'Bob', age: 25 }
    ,
    { name: 'Carol', age: 30 }
    ,
    { name: 'Dave', age: 35 }
  ];

  return (
    <>
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
      {getYoungest()}
      <br />
      <br />
      Oldest:
      <br />
      {getOldest()}

      <br />
      <br />
      Average age:
      <br />
      {averageAge()}


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


}

export default App;
