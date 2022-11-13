import { Button, Card, Grid, Typography } from '@mui/material';
import Barchart from './barchart'
import { useEffect, useState } from 'react';
import Chart from './chart'
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';


const Dashboard = (props) => {
  const [genderDepressionData, setgenderDepressionData] = useState([])
  const [genderSmokerData, setgenderSmokerData] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:5000/getGenderDepression", {
        'method': "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp)
        setgenderDepressionData(resp)
    })
    .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getGenderSmoker", {
            'method': "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            setgenderSmokerData(resp)
        })
        .catch(error => console.log(error))
    }, [])

  return (
    <Grid container rowSpacing={2.5} columnSpacing={3}>
        {/* row 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{padding: 20}}>
            <Typography color="textPrimary" variant="body1" to="/dashboard" component={Link}>Explore by Time</Typography>
          </Card>
        </Grid>

        {/* row 2 */}
        <Grid item xs={12}>
            <Card style={{padding: 20}}>
                <Barchart data={genderDepressionData}/>
            </Card>
        </Grid>

        {/* row 3 */}
        <Grid item xs={12}>
            <Card style={{padding: 20}}>
                <Barchart data={genderSmokerData}/>
            </Card>
        </Grid>

        {/* row 4 */}
      <Grid item sm={12} xs={12} >
          <Card style={{padding: 20}}>
            <Typography color="textPrimary" variant="body1">Our data is from Behavioral Risk Factor Surveillance System (BRFSS). It is the nation’s premier system of health-related telephone surveys that collect state data about U.S. residents regarding their health-related risk behaviors, chronic health conditions, and use of preventive services. Established in 1984 with 15 states, BRFSS now collects data in all 50 states as well as the District of Columbia and three U.S. territories. BRFSS completes more than 400,000 adult interviews each year, making it the largest continuously conducted health survey system in the world.</Typography>
            <Button variant="text" onClick={() => window.location.href='https://www.cdc.gov/brfss/'}>Learn more</Button>
          </Card>
      </Grid>
    </Grid>
  );
}

export default Dashboard;