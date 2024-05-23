import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import {IconButton } from "@mui/material";
const Navbar = () => {

    const [theme, setTheme] = useState('light');
    useEffect(() => {
        // Thay đổi class của body dựa trên theme
        document.body.className = theme === 'light' ? 'bg-light ' : 'bg-dark';
    }, [theme]);
    const handleClick = (e) => {
        e.preventDefault();
        (theme === "dark" ? setTheme("light") : setTheme('dark'));
    }
    return (
        <nav className="navbar bg-success">
            <h1>
                <i className="fab fa-github" />Github Finber
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <IconButton sx={{ color: "white" }} onClick={handleClick}>{theme === "dark" ? (<DarkModeOutlinedIcon />) : (<LightModeOutlinedIcon />)}</IconButton>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;