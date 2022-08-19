import {  Link } from "react-router-dom";
import React, {FunctionComponent} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
type CardProps = {
    nb: any
}

export const CardOverview: FunctionComponent<CardProps> = ({ nb }) => 
    <Grid container spacing = {6}>
        <Grid item xs={8}>
                <Box sx={{bgcolor: '#1eee11', height: '80vh'}}>                        
                    <h3>AFFICHAGE DES CARTES {nb }</h3>
                </Box>
        </Grid>
        <Grid item xs={4}>
                <Box sx={{bgcolor: '#1eee11', height: '80vh'}}>       
                    <h3>ZONE COMMENTAIRE de la carte {nb}</h3>
                </Box>
        </Grid>
    </Grid>


   

  export default CardOverview;