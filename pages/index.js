import { Grid, Typography, Button, Link } from "@mui/material";
import IntroContentSummaries from "./components/IntroContentSummaries";
import IntroArticle from "./components/IntroArticle";
import { Container } from "@mui/material";
import palette from "../theme/palette";
import SectionBreaker from "./components/SectionBreaker";
import CardList from "./components/CardList";
import { mockArticles } from "../MOCK_DATA";
import ListView from "../components/ListView";
import ArticleCarousel from "../components/ArticleCarousel";

function App() {
    return (
        <Grid>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="row"
                sx={{ backgroundColor: palette.orange.main }}
            >
                <Typography
                    variant="overline"
                    component="div"
                    sx={{ color: "black", padding: "2rem" }}
                ></Typography>
            </Grid>
            <Container>
                {/* Intro */}
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    sx={{
                        paddingTop: "3rem",
                        paddingBottom: "3rem",
                    }}
                >
                    <Grid item lg={7} md={7} sm={12} sx={{ padding: "1rem" }}>
                        <IntroArticle />
                    </Grid>
                    <Grid
                        item
                        lg={5}
                        md={5}
                        sm={12}
                        sx={{
                            paddingTop: "0rem",
                            paddingRight: "2rem",
                            paddingLeft: "2rem",
                            height: "100%",
                            alignSelf: "center",
                        }}
                    >
                        <IntroContentSummaries />
                    </Grid>
                </Grid>
                {/* End Intro */}
            </Container>
            <SectionBreaker text="Articles" color="whitesmoke" />
            {/* Articles Section */}
            <ArticleCarousel />
            {/* End Articles Section */}
            <SectionBreaker text="Reports" color="whitesmoke" />
            {/* Reports Section */}
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                sx={{ paddingTop: "1rem", paddingBottom: "1rem" }}
            >
                <CardList type={"report"} />
            </Grid>
            {/* End Reports Section */}
            <SectionBreaker text="More Stories" color="whitesmoke" />
            {/* Popular Reads Section */}
            <Container>
                {mockArticles.map((article, index) => {
                    return (
                        <Link key={index} href={`/analysis/${article.id}`}>
                            <ListView
                                heading={article.title}
                                date={article.date}
                                author={article.author}
                                image={article.image}
                            />
                        </Link>
                    );
                })}
            </Container>

            {/* End Popular Reads Section */}
        </Grid>
    );
}

export default App;
