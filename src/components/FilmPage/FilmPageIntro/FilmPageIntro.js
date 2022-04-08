import React, {memo} from "react";
import { Box, Container } from "@mui/material";
import FilmPageIntroDescription from "./FilmPageIntroDescription";

const FilmPageIntro = memo(({film}) => {
    return (
        <Box>
            <Box className="film-page__intro">
                <img className="film-page__bg" src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${film?.backdrop_path}`} alt={`${film?.title || film?.name}-bg`} />
                <Box className="film-page__content-wrapper">
                    <Container maxWidth="xl">
                        <Box className="film-page__content">
                            <Box>
                                <img className="film-page__poster" src={`https://www.themoviedb.org/t/p/w440_and_h660_bestv2${film?.poster_path}`} alt={`${film?.title || film?.name}-poster`} />
                            </Box>
                            <FilmPageIntroDescription film={film}/>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    )
})
export default FilmPageIntro;
//title, release_date, vote_average, tagline, overview, genres,