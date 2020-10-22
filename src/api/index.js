import axios from 'axios';

const url = "https://quote-garden.herokuapp.com/api/v2";
export const fetchRandomQuote = async () => {
    try {
        const data = await axios.get(`${url}/quotes/random`).catch(
            function(err) {
                return err;
            }
        )
        const modifiedData = {
            quoteAuthor: data.data.quote.quoteAuthor,
            quoteGenre: data.data.quote.quoteGenre,
            quoteText: data.data.quote.quoteText,
            _id: data.data.quote._id,
            status: data.status
        }
        return modifiedData;
    }
    catch (err) {
        console.log(err);
    }
}

export const fetchAuthorQuotes = async (authorName) => {
    try {
        const data = await axios.get(`${url}/authors/${authorName.replace(' ', '%20')}?page=1&limit=10`).catch(
            function(err) {
                return err;
            }
        )
        const modifiedData = data.data.quotes.map((element) => {
            return(element);
        });
        return modifiedData;
    }
    catch (err) {
        console.log(err);
    }
}