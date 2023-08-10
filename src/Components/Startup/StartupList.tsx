// import { Fragment, ReactElement } from "react";

// export default function StartupList(): ReactElement {
//   return <Fragment></Fragment>;
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards';
import { StartupDTO } from "../../Types/Startup";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { set } from 'msw/lib/types/context';


function StartupList() {
  const [startups, setStartups] = useState<StartupDTO[]>([]);
  const [page, setPage] = React.useState(1);
  const [startups_new, setStartups_new] = useState<StartupDTO[]>([]);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setStartups_new(startups.slice((value-1)*20, value*20));
  };

  useEffect(() => {
    axios.get('/api/startups?all=true')
      .then(response => {
        setStartups(response.data);
        console.log(response.data);
        setStartups_new(response.data.slice(0, 20));
      })
      .catch(error => {
        console.log('Error fetching startup data:', error);
      });
  }, []); 
  

  return (
    <div>
      <h1>Startup Information</h1>
      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination count={10} page={page} onChange={handleChange} />
      </Stack>
      <div>
      
      {startups_new.map(startup => (
        <Cards id={startup.id} name ={startup.name} 
          description= {startup.shortDescription} founded = {startup.dateFounded}
          employees =  {startup.employees}
          funding =  {startup.totalFunding}
          currentInvestmentStage = {startup.currentInvestmentStage} />
    
      ))}
    </div>
    </div>
  );
}

export default StartupList;



