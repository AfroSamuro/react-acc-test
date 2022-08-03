import AuthPage from "./pages/authPage/AuthPage";
import './reset.css'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import { useEffect } from "react";
import { useState } from "react";

export default function App() {

    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [photos, setPhotos] = useState([])

    const usersAcc = [
        {
            login: 'admin',
            password: 'admin'
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
    
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path="/auth" element={<AuthPage users={usersAcc} />} />
                    <Route path="/main" element={<MainPage posts={posts} users={users} photos={photos}/>} />
                </Routes>
            </div>
        </BrowserRouter>

    )
}