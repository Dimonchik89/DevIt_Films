import React, {memo} from "react";

const Button = memo(({title, type, className}) => {
    return (
        <button
            type={type}
            className={className}
        >
            {title}
        </button>
    )
})
export default Button;