import axios from "axios";
import React, { useState } from "react";
import Users from './Users';
import { getUserSearch } from "../../data/api";
const Search = () => {
    const [text, setText] = useState("");
    const [user, setUser] = useState([]);

    const searchUser = async (text) => {
        try {
            const users = await getUserSearch(text);
            setUser(users);
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
            setText("");
        }
    }

    const onChange = (e) => setText(e.target.value);
    const clearUsers = ()=>{
        setUser([]);
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
            {user.length>0 && (
                <button className="btn btn-danger btn-block" onClick={clearUsers}>Clear</button>
            )}
            <Users users={user} />
        </div>
    )
}
export default Search;