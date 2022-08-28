import React from 'react';
import Link from "@mui/material/Link";
import { Container } from '@mui/system';
type CardProps = {
    id: number,
    imgUrl: string
}


export function CardsItem({ id, imgUrl}: CardProps){
  
    
    return  (   
        <Container>
           <a href={'/overview/'+id}><img src={imgUrl}alt={imgUrl}/></a> 
        </Container>    
    )
}            
            
                
            
   

