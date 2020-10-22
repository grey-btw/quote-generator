import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchRandomQuote, fetchAuthorQuotes } from './api';
import { Quote, ListQuote } from './Components'

function App() {
  const [quote, setQuote] = useState({});
  const [listQuote, setlistQuote] = useState([]);
  const [isQuote, setisQuote] = useState(true);

  useEffect(() => {
    handleRequestRandom();
  }, []);

  const handleRequestRandom = async () => {
    const data = await fetchRandomQuote();
    if(data.status === 200) {
      setQuote({
        quoteAuthor: data.quoteAuthor,
        quoteGenre: data.quoteGenre,
        quoteText: data.quoteText,
        _id: data._id
      });
    }
    setisQuote(true);
  }

  return (
    <div className="container">
      <div className="btn">
        <button onClick={handleRequestRandom}
          className="random-btn"
        >
          random 
          <span className="material-icons">
            autorenew
          </span>
        </button>
      </div>
      { isQuote ? (
        <Quote 
          quote={quote} isQuote={isQuote} setisQuote={setisQuote}
          listQuote={listQuote} setlistQuote={setlistQuote}
          fetchAuthorQuotes={fetchAuthorQuotes}
        />
      )
       : (
        <ListQuote 
          isQuote={isQuote} setisQuote={setisQuote}
          listQuote={listQuote}
        />
       )
       }
       
       <div className="copyright">
         Grey@DevChallenges.io
       </div>
    </div>
  );
}

export default App;
