import { collection, doc, setDoc, where, query } from "firebase/firestore";
import { db } from "./firebase";

export const citiesRef = collection(db, "cities");

export const indexType = () => {
  setDoc(doc(citiesRef, "SF"), {
    name: "San Francisco",
    state: "CA",
    country: "USA",
    capital: false,
    population: 860000,
    regions: ["west_coast", "norcal"],
  });
  setDoc(doc(citiesRef, "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA",
    capital: false,
    population: 3900000,
    regions: ["west_coast", "socal"],
  });
  setDoc(doc(citiesRef, "DC"), {
    name: "Washington, D.C.",
    state: null,
    country: "USA",
    capital: true,
    population: 680000,
    regions: ["east_coast"],
  });
  setDoc(doc(citiesRef, "TOK"), {
    name: "Tokyo",
    state: null,
    country: "Japan",
    capital: true,
    population: 9000000,
    regions: ["kanto", "honshu"],
  });
  setDoc(doc(citiesRef, "BJ"), {
    name: "Beijing",
    state: null,
    country: "China",
    capital: true,
    population: 21500000,
    regions: ["jingjinji", "hebei"],
  });
};
