import React, { useState } from "react";
import {
  BlockContainer,
  FullScreen,
} from "../components/containers/Containers";
import Grid from "../components/grid/Grid";

const Calendar = (): JSX.Element => {
  const [days, setDays] = useState([]);
  return (
    <FullScreen classNames="padding-medium">
      <BlockContainer>
        <h1>hola</h1>
      </BlockContainer>
      <Grid classes="calendar-grid h-80">
        {[1, 2, 3, 4, 5].map((i) => (
          <p key={i}>{i}</p>
        ))}
      </Grid>
    </FullScreen>
  );
};

export default Calendar;
