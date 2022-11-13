import { Button, Card, Grid, Typography } from '@mui/material';
import Barchart from './barchart'
import { useEffect, useState } from 'react';
import Chart from './chart'


const Dashboard = (props) => {
  const [timelineData, setTimelineData] = useState([])
  const [SmokerData, setSmokerData] = useState([])
  const [genderDepressionData, setgenderDepressionData] = useState([])
  
  useEffect(() => {
      fetch("http://127.0.0.1:5000/getDepression", {
          'method': "GET",
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(resp => resp.json())
      .then(resp => {
          console.log(resp)
          setTimelineData(resp)
      })
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    fetch("http://127.0.0.1:5000/getSmoker", {
        'method': "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp)
        setSmokerData(resp)
    })
    .catch(error => console.log(error))
  }, [])

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

  return (
    <Grid container rowSpacing={2.5} columnSpacing={3}>
        {/* row 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{padding: 20}}>
            <Typography color="textPrimary" variant="body1">Explore by gender</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{padding: 20}}>
            <Typography color="textPrimary" variant="body1">Explore by location</Typography>
          </Card>
        </Grid>

      {/* row 2 */}
      <Grid item xs={12}>
        <Card style={{padding: 20}}>
          <Chart data={timelineData}/>
        </Card>
      </Grid>

      {/* row 3 */}
      <Grid item xs={12}>
        <Card style={{padding: 20}}>
          <Chart data={SmokerData}/>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card style={{padding: 20}}>
          <Barchart data={genderDepressionData}/>
        </Card>
      </Grid>
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