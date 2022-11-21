import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "./firebase";

const App = () => {
  const onClick1 = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const onClick2 = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const onClick3 = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(doc);
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };

  return (
    <div>
      <button onClick={onClick1}>fire store1</button>
      <button onClick={onClick2}>fire store2</button>
      <button onClick={onClick3}>fire store3</button>
    </div>
  );
};

export default App;
