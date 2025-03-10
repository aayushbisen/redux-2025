import { useAppDispatch, useAppSelector } from "../../app/store"
import { fetchQuoteAsync, selectError, selectLoading, selectQuote } from "./counterSlice"

export const Quote = () => {
    const loading = useAppSelector(selectLoading)
    const error = useAppSelector(selectError)
    const quote = useAppSelector(selectQuote)
    const author = useAppSelector(state => state.counter.author)

    const dispatch = useAppDispatch()
    return (
        <div>
            <button onClick={()=>dispatch(fetchQuoteAsync())}>Fetch Quote of the Day</button>
            <p></p>
            {/* Display a loading spinner if the quote is loading */}
            {loading && <div>Loading...</div>}
            {/* Display an error message if the quote failed to load */}
            {error && <div>Error: {error}</div>}
            {/* Display the quote of the day */}
            {!loading && !error && quote && <div>
                <h2>Quote of the day</h2>
                <p>
                    {quote} - {author}
                </p>
            </div>}

        </div>
    )
}