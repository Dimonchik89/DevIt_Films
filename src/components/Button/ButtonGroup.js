import React from "react";
import MainButton from "../Main/MainButton";
import { nanoid } from "nanoid";
import "./button.scss";

const buttons = [
    {title: "Сериалы", name: "movie", url: "/tv"},
    {title: "Фильмы", name: "movie", url: "/movie"}
]

const ButtonGroup = () => {
    const contentButtons = buttons.map(button => <MainButton key={nanoid()} {...button}/>)

    return (
        <div className="button-group">
            {contentButtons}
        </div>
    )
}
export default ButtonGroup;