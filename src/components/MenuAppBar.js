import * as React from 'react';
import { Tabs, Tab, Stack, Typography } from '@mui/material';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { Game } from '../pages/game/Game';
import Menu from '../pages/menu'
import logo from '../images/logo.png'


function MyTabs() {
  return (
    <Tabs value="MyTabs">
      <Tab label="MetalPedal" value="" to="" component={Link} style={{color: "black", fontWeight: 800}}/>
      <Tab label="Dashboard" value="/dashboard" to="/dashboard" component={Link} />
      <Tab label="Game" value="/game" to="/game" component={Link} />
    </Tabs>
  );
}


export default function TabsRouter() {
  return (
      <Stack direction="row" spacing={2}>
        <img src={logo} alt="logo" style={{ width: 80, height: 80 }}/>
        {/* <Typography variant="body1">MentalPedal</Typography> */}
        <MyTabs />
      </Stack>

  );
}
