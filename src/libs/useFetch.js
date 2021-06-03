import { useEffect } from "react";
import { UseAppContext } from "../appContext";

function useFetch() {



    const { setPeople, refreshSwitch, setRefreshSwitch } = UseAppContext();




    useEffect(() => {
        async function fetchData() {
            let response = await fetch(`http://localhost:5000/person`);
            let data = await response.json();
            console.log(data);

            const arr = [];

            data.map((person, index) =>
                arr.push(
                    {
                        name: person.name
                        ,
                        age: person.age
                    }
                ));


            setPeople(arr);
        }
        fetchData();
    }, [refreshSwitch]);
}

export default useFetch;
