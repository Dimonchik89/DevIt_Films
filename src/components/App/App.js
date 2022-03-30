import React from "react";
import Header from "../Header/Header";
import TitlePage from "../Pages/TitlePage/TitlePage";
import FindPage from "../FindPage/FindPage";
import { Routes, Route } from "react-router-dom";
import "../../style/reset.scss";

const App = () => {
    // const {getResponse} = useHttp();
    // getResponse("/movie/popular?")
    //     .then(films => console.log(films))
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<TitlePage/>}/>
                <Route path="/search*" element={<FindPage/>}/>
            </Routes>
        </>

    )
}
export default App;
