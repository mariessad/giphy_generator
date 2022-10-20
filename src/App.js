import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import GiphyDisplay from "./components/GiphyDisplay";

function App() {
  const apiKey = `${process.env.REACT_APP_API_KEY}`;
  // console.log(apiKey)

  // state to hold giphy data
  const [giphy, setGiphy] = useState(null);

  // function to get giphys
  const getGiphy = async (searchTerm) => {
    try {
      // make a fetch request and store the response
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${searchTerm}&rating=pg-13`
      );

      // parse JSON response into a javascript object
      const data = await response.json();

      // set giphy state to the giphy
      setGiphy(data);
    } catch (e) {
      console.error(e);
    }
  };
  // useEffect React hook, this will run on the first render but not on subsuequent renders
  useEffect(() => {
    getGiphy("welcome");
  }, []);

  return (
    <div className="App">
      <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
      <Navbar />
      <Form giphysearch={getGiphy} />
      <GiphyDisplay giphy={giphy} />
    </div>
  );
}

export default App;
