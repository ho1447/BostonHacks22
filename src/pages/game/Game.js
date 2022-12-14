import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import game from "../../images/game.png"


export const Game = (props) => (
    <>
        <Card {...props}>
            <CardContent>
            <Grid
                container
                spacing={3}
                sx={{ justifyContent: 'space-between' }}
            >
                <Grid item xs={12}>
                {/* <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="overline"
                >
                    TOTAL GAME
                </Typography> */}
                <Typography
                    color="textPrimary"
                    variant="h4"
                >
                    Overwhelmed with data? Why not play a game:
                </Typography>
                </Grid>
                <Grid item xs={8}>
                    <img src={game} alt="Tree" style={{ width: 600, height: 600 }} />
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" style={{backgroundColor: "#4576b5", padding: 10}} onClick={() => window.location.href='https://ncase.me/anxiety/'}>Play</Button>
                </Grid>
            </Grid>
            </CardContent>
        </Card>
    </>
);