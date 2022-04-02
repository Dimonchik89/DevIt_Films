import React from "react";
import Header from "../Header/Header";
import TitlePage from "../Pages/TitlePage/TitlePage";
import FindPage from "../FindPage/FindPage";
import FilmPage from "../FilmPage/FilmPage";
import CategoryPage from "../CategoryPage/CategoryPage";
import CategoryPageWrapper from "../CategoryPage/CategoryPageWrapper";
import FilmPageIntro from "../FilmPage/FilmPageIntro";
import FilmPageMain from "../FilmPage/FilmPageMain";
import { Routes, Route } from "react-router-dom";
import Persone from "../Persone/Persone";
import ActorPage from "../ActorPage/ActorPage";
import "../../style/reset.scss";

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<TitlePage/>}/>
                <Route path="/search*" element={<FindPage/>}/>
                <Route path="/movie/*" element={<CategoryPageWrapper/>}>
                    <Route path="popular" element={<CategoryPage/>}/>
                    <Route path="now_playing" element={<CategoryPage/>}/>
                    <Route path="upcoming" element={<CategoryPage/>}/>
                    <Route path="top_rated" element={<CategoryPage/>}/>
                </Route>
                <Route path="/movie/:id" element={<FilmPage/>}>
                    <Route index element={<FilmPageMain/>}/>
                </Route>
                <Route path="/tv/*" element={<CategoryPageWrapper/>}>
                    <Route path="popular" element={<CategoryPage/>}/>
                    <Route path="airing_today" element={<CategoryPage/>}/>
                    <Route path="on_the_air" element={<CategoryPage/>}/>
                    <Route path="top_rated" element={<CategoryPage/>}/>
                </Route>
                <Route path="/person/*" element={<Persone/>} />
                <Route path="/person/:id" element={<ActorPage/>}/>
            </Routes>
        </>

    )
}
export default App;
