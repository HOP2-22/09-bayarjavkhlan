import { Button } from "@mui/material";

const Btn = () => {
  return (
    <div>
      {times(9, (i) => {
        <Button
          variant="contained"
          sx={{
            color: "black",
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "pink",
            },
          }}
        >
          Hello World
        </Button>;
      })}
    </div>
  );
};

export default Btn;
