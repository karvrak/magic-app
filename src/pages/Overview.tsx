import {  Link, useParams } from "react-router-dom";
import Grid from '@mui/material/Grid'
import CardElement from '../component/CardElement';
import { createLanguageService } from "typescript";

function Overview() {
    const itemId = useParams();
    
    
    return (
        
          <CardElement nb={itemId.id}></CardElement>  
        
    );
  }

  export default Overview;