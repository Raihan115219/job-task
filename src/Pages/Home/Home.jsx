import { Card, Container, Grid, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import BidCard from '../../Components/BidCard/BidCard';
import { Data } from '../../Data/Data';
function Home() {
  return (
    <Stack bg="#1A202C" h={'100vh'}>
      <Grid
        my="8"
        gridTemplateColumns="repeat(auto-fit,minmax(350px,1fr))"
        gap={2}
      >
        {Data?.map((card, i) => {
          console.log(card);
          return <BidCard info={card} />;
        })}
      </Grid>
    </Stack>
  );
}

export default Home;
