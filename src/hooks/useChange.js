import { useState } from "react";

export const useChangeActive = (initial) => {
    const [activeBtn, setActiveBtn] = useState(initial);

    const handleChangeActiveButton = (value) => {
        setActiveBtn(value)
    }
    return {activeBtn, handleChangeActiveButton}
}