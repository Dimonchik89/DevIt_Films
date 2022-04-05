import React, {memo} from "react";
import { useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import "./find.scss";

let Find = memo((props) => {
    const {handleSubmit} = props;
    const {find} = useSelector(state => state.form);

    return (
        <form
            className="mt-3"
            onSubmit={handleSubmit}
        >
            <div className="find">
                <Field name="find" component="input" className="find__input" placeholder="Найти фильм, сериал, персону..."/>
                <Link to={`/search?query=${find?.values?.find}`}>
                    <button type="submit" className="find__button">Search</button>
                </Link>
            </div>
        </form>
    )
})

Find = reduxForm({
    form: "find"
})(Find)
export default Find