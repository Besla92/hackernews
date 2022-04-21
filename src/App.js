import './App.css';
import { useState, useEffect } from 'react';
import Fetch from './Fetch';
import { Button } from 'react-bootstrap';

function App() {
  const [input, setInput] = useState("http://hn.algolia.com/api/v1/search?query=");
  const [currentPage, setCurrentPage] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(e.target.search.value === "")  {
      alert("Please fill the field")
    } else  {
    //const input = e.target.search.value;
    setInput(`http://hn.algolia.com/api/v1/search?query=${e.target.search.value}`);
    e.target.search.value = "";
    }
  }

  console.log(input);

  
  const Render = () => <Fetch searchURL={input} />
  
 

  return (
    <div className="container">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <input type="text" name="search" placeholder="search for an keyword" />
          <Button type="submit">Submit</Button>
        </form>
      </div>
      <div className="ListArticle">
        <Render />
      </div>
    </div>  
  )
     
}

export default App;
