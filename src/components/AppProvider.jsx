import React, { useContext, createContext, useReducer, useEffect } from "react";
import reducer from "./reducer";


// API
let API = 'https://newsdata.io/api/1/news?';
const API_KEY = import.meta.env.VITE_API_KEY

const intialState = {
    isLoading: true,
    query: '',
    totalResults: 0,
    page: 1,
    results: [],
    category: 'world',
    bookMarks:[]
}

const AppContext = createContext();

function AppProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, intialState)



    // Search
    const searchPost = (searchQuery) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: searchQuery
        });
    }

     // Pagination
     const getNextPage = () => {
        dispatch({
            type: "NEXT_PAGE",
        })
    }

    const getPrevPage = () => {
        dispatch({
            type: "PREV_PAGE",
        })
    }


    return (
        <>
            <AppContext.Provider value={{ state, ...state, dispatch, searchPost ,getNextPage,getPrevPage,}}>
                {children}
            </AppContext.Provider>
        </>
    )
}

// Custom hook create
const useGlobalContext = () => {
    return useContext(AppContext)
}

AppProvider.defaultProps = {
    // category: "top"
}

export { AppProvider, useGlobalContext, }
