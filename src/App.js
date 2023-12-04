import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState, useEffect } from "react";
import SinglePage from "./components/SinglePage";
import "./style.css";
import { getData } from "./components/utility.js";
import { AppProvider } from "./components/context.js";

function App() {
  const [show, setShow] = useState(null);
  const [load,setLoad]=useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getData(setMovies,setLoad);
    
  }, []);

  return (
    <>
    <AppProvider value={setShow}>
      <div className="container">
        <Header setMovies={setMovies} setShow={setShow}/>
        {!show ? <Main movies={movies} setShow={setShow}/> : <SinglePage show={show}/>}
      {load ? <p className="error">We couldnt reach your page! 😟</p> : null}
        <Footer />
      </div>
    </AppProvider>
    </>
  );
}

export default App;
