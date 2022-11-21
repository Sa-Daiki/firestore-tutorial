import { DocumentData, getDocs, Query, query, where } from "firebase/firestore";
import { citiesRef, indexType } from "./indexType";

const App = () => {
  const queries: Query<DocumentData>[] = [];

  queries.push(query(citiesRef, where("state", "==", "CA")));
  queries.push(query(citiesRef, where("name", ">=", "San Francisco")));
  queries.push(query(citiesRef, where("capital", "==", true)));
  queries.push(
    query(citiesRef, where("country", "in", ["USA", "Japan", "China"]))
  );
  //compound equality queries
  queries.push(
    query(
      citiesRef,
      where("country", "==", "USA"),
      where("capital", "==", false),
      where("state", "==", "CA"),
      where("population", "==", 860000)
    )
  );

  const executeQuery = async (query: Query<DocumentData>) => {
    const querySnapshot = await getDocs(query);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  };

  return (
    <div>
      <button onClick={indexType}>indexType</button>
      {queries.map((query, i) => (
        <button onClick={() => executeQuery(query)} key={i}>
          {i}
        </button>
      ))}
    </div>
  );
};

export default App;
