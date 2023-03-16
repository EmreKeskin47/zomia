import { Grid } from "@mui/material";
import ActiveLink from "./ActiveLink";
import NewsSummary from "./NewsSummary";
import {
  useReverseReportData,
  useArticleData,
} from "../../store/hooks/useData";
import { getShortenedString } from "../../utils/ArticleParagraph";

const CardList = ({ type }) => {
  const reportList = useReverseReportData();
  const articleList = useArticleData();
  const generateList = () => {
    if (type === "report") {
      return (
        <Grid container direction={"row"} justifyContent={"center"}>
          {reportList &&
            reportList.slice(0, 3).map((item) => (
              <Grid
                item
                key={item.id}
                sx={{
                  paddingLeft: 1,
                  paddingRight: 1,
                }}
              >
                <ActiveLink
                  href={`/Reports/${item.id}`}
                  // sx={{ paddingLeft: 3, paddingRight: 3 }}
                  // replace="true"
                >
                  <NewsSummary
                    image={item.image}
                    title={
                      item.title.length > 70
                        ? getShortenedString(item.title, 65)
                        : item.title
                    }
                    // date={item.date}
                    description={
                      item.description
                        ? getShortenedString(item.description, 110)
                        : "No Description"
                    }
                    // author={item.author}
                  />
                </ActiveLink>
              </Grid>
            ))}
        </Grid>
      );
    } else {
      return (
        <Grid container direction={"row"} justifyContent={"center"}>
          {articleList &&
            articleList.slice(0, 3).map((item) => (
              <Grid
                item
                key={item.id}
                sx={{
                  paddingLeft: 3,
                  paddingRight: 3,
                }}
              >
                <ActiveLink
                  href={`/Articles/${item.id}`}
                  sx={{ paddingLeft: 3, paddingRight: 3 }}
                  replace="true"
                >
                  <NewsSummary
                    image={item.image}
                    title={
                      item.title.length > 51
                        ? `${item.title.slice(0, 48)}...`
                        : item.title
                    }
                    date={item.date}
                    description={
                      item.description
                        ? item.description.slice(0, 400)
                        : "No Description"
                    }
                    author={item.author}
                  />
                </ActiveLink>
              </Grid>
            ))}
        </Grid>
      );
    }
  };
  return <Grid>{generateList()}</Grid>;
};

export default CardList;
