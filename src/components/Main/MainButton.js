import React, {memo} from "react";
import { useDispatch, connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {  changePopularCategory, popularUrl } from "../../store/popularMain";
import "../Button/button.scss";

const MainButton = memo(({title, name, url, popularUrl, changePopularCategory}) => {
    const dispatch = useDispatch();
    const activeClass = popularUrl === url ? "active" : null;
    const handleChange = () => {
            dispatch(changePopularCategory(url))
    }
    return (
        <>
            <div className={`button-change__category bold ${activeClass}`}>
                <label htmlFor={title}>{title}</label>
                <input type="radio" name={name} id={title} onChange={handleChange}/>
            </div>
        </>

    )
})

const mapState = createStructuredSelector({
    popularUrl
})

const mapDispatch = {
    changePopularCategory
}

export default connect(mapState, mapDispatch)(MainButton);