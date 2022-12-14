import AuthPage from "./pages/authPage/AuthPage";
import './reset.css'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";

export default function App() {

    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [photos, setPhotos] = useState([])
    const [isLoged, setIsLoged] = useState(false)

    const usersAcc = [
        {
            login: 'admin',
            password: 'admin'
        },
        {
            login: 'admin2',
            password: 'admin2'
        },
    ]


    useEffect(() => {
        const getUsers = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            setUsers(await res.json())
        };
        const getPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            setPosts(await res.json())
        };
        const getPhotos = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/photos')
            setPhotos(await res.json())
        };

        getUsers();
        getPosts();
        getPhotos();
    }, []);

    const setLoginInfo = () => {
        setIsLoged(true)
    }

    if (users.length === 0 || posts.length === 0 || photos.length === 0) return

    return (
        <React.StrictMode>
            <BrowserRouter>
                <div className="app">
                    <Routes>
                        <Route
                            path="/"
                            element={<AuthPage
                                users={usersAcc}
                                setLoginInfo={setLoginInfo}
                            />}
                        />
                        <Route
                            path="/main"
                            element={<MainPage
                                posts={posts}
                                users={users}
                                photos={photos}
                                isLoged={isLoged}
                            />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </React.StrictMode>
    )
}