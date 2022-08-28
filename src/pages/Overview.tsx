import {useParams } from "react-router-dom";
import CardElement from '../component/CardElement';

export function Overview() {
    let itemId  = useParams();
    var r: number = +itemId.id !
    console.log(r)
    return (
        
          <CardElement id={r}></CardElement>  
        
    );
  }

