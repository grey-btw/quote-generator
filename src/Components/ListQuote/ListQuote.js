import React from 'react';
import './ListQuote.css';

const ListQuote = ({ isQuote, setisQuote, listQuote}) => {
    const handleChangeToQuote = () => {
        setisQuote(!isQuote);
    }

    return (
        <div className="listQuote">
            <div className="listQuote--heading">
                <span className="material-icons" onClick={handleChangeToQuote}>
                    keyboard_backspace
                </span>
                <h1>{listQuote[0].quoteAuthor}</h1> 
            </div>
            {listQuote.map((quote) => {
                return (
                    <div className="quote" key={quote._id}> 
                        <div className="quote--text">
                            <p>{quote.quoteText}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ListQuote;