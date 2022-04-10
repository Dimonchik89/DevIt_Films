import React, { useEffect, memo } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";
import PersoneItem from "./PersoneItem";
import { fetchPersone, setTotalPages, person, totalPages, loading } from "../../store/persone";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { nanoid } from "nanoid";

const PersoneContent = memo(({currentPage, fetchPersone, person}) => {
    const location = useLocation();
    useEffect(() => {
        fetchPersone(location.pathname, currentPage)
    }, [currentPage])

    if(person.length === 0) {
        <Box sx={{display: "flex", justifyContent: "space-between"}}>
            <CircularProgress/>
        </Box>
    }
    const content = person?.map(actor => <PersoneItem key={nanoid()} actor={actor}/>)

    return (
        <Box className="person__content">
            {content}
        </Box>
    )
})

const mapState = createStructuredSelector({
    person,
    totalPages,
    loading
})

const mapDispatch = {
    fetchPersone,
    setTotalPages
}

export default connect(mapState, mapDispatch)(PersoneContent);