import React, { useEffect, useState } from "react";

const Video = () => {
    const [key, setKey] = useState("");
    useEffect(() => {
        getResponse(`${location.pathname}/videos?language=ru-RU&`)
        .then(film => {
            console.log(film)
            setKey(film?.results[0].key);
        })
    }, [])
    return (
        <>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </>
    )
}