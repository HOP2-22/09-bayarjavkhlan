import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box, Avatar } from "@mui/material";

const Body = ({ title, comment, avatar, name, image, date, key }) => {
  console.log(image);
  return (
    <Card className="max-w-[370px] max-h-[440px] rounded-[30px] pb-5">
      <CardActionArea>
        <CardMedia
          component="img"
          height="147"
          image={image}
          className="pb-[21px]"
        />
        <CardContent>
          <Typography gutterBottom className="text-[24px]" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="pb-[40px]"
          >
            {comment}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box className="flex pl-6 gap-10">
        <Avatar alt="Remy Sharp" src={avatar} />
        <Box className="flex divide-x">
          <div className="pr-5 text-sm text-gray-500">{name}</div>
          <div className="pl-5 text-sm text-gray-500">{date}</div>
        </Box>
      </Box>
    </Card>
  );
};

export default Body;
