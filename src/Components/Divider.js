import React from "react";
import { Grid, Divider, Typography } from "@material-ui/core";

const MyDivider = ({ text }) => {
  const DividerText = (
    <Grid className="divider" container justify="center" alignItems="center">
      <Grid item xs={5}>
        <Divider />
      </Grid>
      <Grid item xs={1}>
        <Typography variant="body1" align="center">
          {text}
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <Divider />
      </Grid>
    </Grid>
  );

  const DividerSimple = <Divider />;

  return text ? DividerText : DividerSimple;
};

export default MyDivider;
