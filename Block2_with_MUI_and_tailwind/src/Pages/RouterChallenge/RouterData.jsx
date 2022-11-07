import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Data from "../../JS/RouterCard";
import Body from "./Body";

const RouterData = () => {
  return (
    <Container>
      <Grid container spacing={8} columns={{ xs: 4, md: 8, lg: 12 }}>
        {Data.map((data, ind) => {
          return (
            <Grid item xs={4}>
              <Body
                title={data.title}
                comment={data.comment}
                avatar={data.avatar}
                name={data.name}
                image={data.image}
                date={data.date}
                key={ind}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default RouterData;
