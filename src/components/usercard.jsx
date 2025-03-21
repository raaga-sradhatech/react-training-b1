import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function UserCard({userid}) {

    const [user, setUser] = useState(null);
    const theme = useContext(ThemeContext);

    useEffect(() => {

        async function fetchData() {
            console.log("Fetching data...");
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${userid}`);
            const data = await response.json();
            setUser(data);
            console.log(data);
        }
        fetchData();

        console.log("UserCard component mounted");

        return () => {
            setUser(null);
        }
    }
    , [userid]);



        if (!user) {
            return <div>Loading...</div>;
        }
        return  (
        <div className="user-card">
            <h2 style={{ background: theme.background, color: theme.foreground }}>{user.id}</h2>
            <h3>{user.body}</h3>
            <p>{user.title}</p> 
        </div>
    );
}


export default UserCard;