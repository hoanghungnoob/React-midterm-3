import axios from "axios";
import React, { useState } from "react";
import User from './User';

const Search = () => {
    const [text, setText] = useState("");
    const [user, setUser] = useState([]);

    const searchUser = async (text) => {
        try {
            const response = await axios.get(`https://api.github.com/search/users?q=${text}`)
            setUser(response.data.items);
        } catch (error) {
            console.error("Display error", error);
        }
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (text === "") {
            alert('input something')
        }
        else {
            searchUser(text);
            setText("");
        }
    }
    const onChange = (e) => setText(e.target.value);

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
            <User users={user} />
        </div>
    )
}
export default Search;