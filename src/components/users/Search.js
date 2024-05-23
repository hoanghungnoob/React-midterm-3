// Search.js
import React, { useState, useContext, useEffect } from "react";
import Users from './Users';
import { getUserSearch } from "../../data/api";
import SearchContext from "../../SearchContext";

const Search = () => {
    const { searchQuery, setSearchQuery, searchResults, setSearchResults } = useContext(SearchContext);
    const [text, setText] = useState(searchQuery);

    useEffect(() => {
        setText(searchQuery);
    }, [searchQuery]);

    const searchUser = async (text) => {
        try {
            const users = await getUserSearch(text);
            setSearchResults(users);
        } catch (error) {
            console.error("Display error", error);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === "") {
            alert('Please enter a search term');
        } else {
            searchUser(text);
            setSearchQuery(text);
            setText("");
        }
    }

    const onChange = (e) => setText(e.target.value);
    const clearUsers = () => {
        setSearchResults([]);
        setSearchQuery('')
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input
                    type="text"
                    name="text"
                    placeholder="Search User"
                    value={text}
                    onChange={onChange}
                />
                <input
                    type="submit"
                    value="Search"
                    className="btn btn-success btn-block"
                />
            </form>
            {searchResults.length > 0 && (
                <button className="btn btn-danger btn-block" onClick={clearUsers}>Clear</button>
            )}
            <Users users={searchResults} />
        </div>
    )
}

export default Search;
