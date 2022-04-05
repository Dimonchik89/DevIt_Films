import React, { useEffect, memo } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import PersoneItem from "./PersoneItem";
import { personFetching, personFethced, personFetchingError, setTotalPages } from "../../store/persone/personAction";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";

const PersoneContent = memo(({currentPage}) => {
    const location = useLocation();
    const dispatch = useDispatch()
    const { person } = useSelector(state => state.personReducer)
    const {getResponse} = useHttp();
    useEffect(() => {
        dispatch(personFetching());
        getResponse(`${location.pathname}/popular?language=ru-Ru&page=${currentPage}&`)
            .then(person => {
                dispatch(personFethced(person.results))
                dispatch(setTotalPages(person.total_pages))
            })
            .catch(dispatch(personFetchingError()))
    }, [currentPage])

    if(person.length === 0) {
        <Box sx={{display: "flex", justifyContent: "space-between"}}>
            <CircularProgress/>
        </Box>
    }
    const content = person.map(actor => <PersoneItem key={nanoid()} actor={actor}/>)

    return (
        <Box className="person__content">
            {content}
        </Box>
    )
})
export default PersoneContent;