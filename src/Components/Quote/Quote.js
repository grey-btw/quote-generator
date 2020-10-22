import React, { useRef } from 'react';
import './Quote.css';

const Quote = ({ quote, isQuote, setisQuote, listQuote, setlistQuote, fetchAuthorQuotes }) => {
    
    const changeToListQuote = async () => {
        if(Array.isArray(listQuote) && !listQuote.length) {
            const data = await fetchAuthorQuotes(quote.quoteAuthor);
            setlistQuote(data);
        }
        setisQuote(!isQuote);
    }

    return (
        <div className="quote"> 
            <div className="quote--text">
                <p>{quote.quoteText}</p>
            </div>

            <div className="quote--author"
                onClick={changeToListQuote}
            >
                <div>
                    <p className="quote--author_name">{quote.quoteAuthor}</p>
                    <p className="quote--author_genre">{quote.quoteGenre}</p>
                </div>
                <div>
                    <span className="material-icons">
                        arrow_right_alt
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Quote;