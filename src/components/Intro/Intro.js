import React from "react";
import { useDispatch, connect } from "react-redux";
import Find from "../Find/Find";
import useHttp from "../../hooks/useHttp";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useContains } from "../../hooks/useContaine";
import { setFind } from "../../store/find";
import bg from "../../img/bg.jpg"
import "../../style/style.scss";
import "./intro.scss";

const Intro = ({setFind}) => {
    const dispatch = useDispatch();
    const {getResponse} = useHttp()
    const {newArr, hashMapReturn} = useContains();
    const onSubmit = (formData) => {
        console.log("intro");
        // getResponse(`/search/multi?query=${formData.find}&language=ru-Ru&`)
        //     .then(response => {
        //         dispatch(setFind(hashMapReturn(response.results)))
        //     })
        setFind(formData.find)
    }
    return (
        <Box className="intro">
            <img className="intro__bg" src={bg} alt="intro-bg" />
            <Box className="intro-container">
                <Container maxWidth="xl">
                    <Box className="intro-content">
                        <Typography
                            sx={{fontSize: {xl: "60px", lg: "50px", md: "40px"}}}
                            className="color-white bold"
                        >
                            Добро пожаловать.
                        </Typography>

                        <Typography
                            variant="h3"
                            component="h3"
                            className="color-white"
                        >
                            Миллионы фильмов, сериалов и людей. Исследуйте сейчас.
                        </Typography>
                        <Find onSubmit={onSubmit}/>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

const mapDispatch = {
    setFind
}

export default connect(null, mapDispatch)(Intro);