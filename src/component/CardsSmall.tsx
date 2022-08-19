import {  Link } from "react-router-dom";
import React, {FunctionComponent} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
type CardProps = {
    nb: number
}

export const CardSmall: FunctionComponent<CardProps> = ({ nb }) => 
            
            <Grid item xs={6}>
                <Link  to={'/overview/'+nb} style={{ textDecoration: 'none' }} >   {/* make the component clickable */}
                <Box sx={{bgcolor: '#1eee11', height: '80vh'}}>       {/* Box for componetn*/}
                    <p>case {nb}</p><br/>
                    <h3>groupe de carte {nb}</h3>
                </Box>
                </Link>
            </Grid>
   

  export default CardSmall;