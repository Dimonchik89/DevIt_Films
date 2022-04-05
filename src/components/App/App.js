import React from "react";
import Layout from "../Layout/Layout";
import TitlePage from "../Pages/TitlePage/TitlePage";
import FindPage from "../FindPage/FindPage";
import FilmPage from "../FilmPage/FilmPage";
import CategoryPage from "../CategoryPage/CategoryPage";
import CategoryPageWrapper from "../CategoryPage/CategoryPageWrapper";
import FilmPageMain from "../FilmPage/FilmPageMain";
import { Routes, Route } from "react-router-dom";
import Persone from "../Persone/Persone";
import ActorPage from "../Actor/ActorPage";
import Favorite from "../Favorite/Favorite";
import Discuss from "../Discuss/Discuss";
import "../../style/reset.scss";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<TitlePage/>}/>
                    <Route path="search*" element={<FindPage/>}/>
                    <Route path="movie/*" element={<CategoryPageWrapper/>}>
                        <Route path="popular" element={<CategoryPage/>}/>
                        <Route path="now_playing" element={<CategoryPage/>}/>
                        <Route path="upcoming" element={<CategoryPage/>}/>
                        <Route path="top_rated" element={<CategoryPage/>}/>
                    </Route>
                    <Route path="movie/:id" element={<FilmPage/>}>
                        <Route index element={<FilmPageMain/>}/>
                        <Route path="reviews" element={<Discuss/>}/>
                    </Route>
                    <Route path="tv/*" element={<CategoryPageWrapper/>}>
                        <Route path="popular" element={<CategoryPage/>}/>
                        <Route path="airing_today" element={<CategoryPage/>}/>
                        <Route path="on_the_air" element={<CategoryPage/>}/>
                        <Route path="top_rated" element={<CategoryPage/>}/>
                    </Route>
                    <Route path="tv/:id" element={<FilmPage/>}>
                        <Route index element={<FilmPageMain/>}/>
                        <Route path="reviews" element={<Discuss/>}/>
                    </Route>
                    <Route path="person/*" element={<Persone/>} />
                    <Route path="person/:id" element={<ActorPage/>}/>
                    <Route path="favorite" element={<Favorite/>}/>
                </Route>
            </Routes>
        </>

    )
}
export default App;
