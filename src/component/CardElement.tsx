import React, {FunctionComponent} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
type CardProps = {
    id: number
}

export const CardElement: FunctionComponent<CardProps> = ({ id }) => 
    
    <Grid container spacing = {6}>
        <Grid item xs={8}>
                <Box sx={{bgcolor: '#1eee11', height: '80vh'}}>                        
                    <img src={"/imgs/"+id+".png"} alt={"/imgs/"+id+".png"}></img>
                </Box>
        </Grid>
        <Grid item xs={4}>
                <Box sx={{bgcolor: '#1eee11', height: '80vh'}}>       
                    <h3>ZONE COMMENTAIRE de la carte {id}</h3>
                </Box>
        </Grid>
    </Grid>




   

  export default CardElement;