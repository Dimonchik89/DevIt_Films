import React, {memo} from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePopularCategory } from "../../store/popularMain/popularMainAction";
import "../Button/button.scss";

const MainButton = memo(({title, name, url}) => {
    const dispatch = useDispatch();
    const {popularUrl} = useSelector(state => state.popularMainReducer)
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
export default MainButton;