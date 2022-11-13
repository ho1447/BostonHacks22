import Grid from '@mui/material/Grid';
import tree from "../images/tree.png"
import Typography from '@mui/material/Typography';

function Menu() {
    return (
        <Grid container >
            <Grid item></Grid>
            <Grid item>
            <Typography variant="h2">Live the life you want.</Typography>
            </Grid>
            <Grid item>
            <img src={tree} alt="Tree" style={{ width: 600, height: 600 }} />
            </Grid>
        </Grid>
    )
}

export default Menu;
