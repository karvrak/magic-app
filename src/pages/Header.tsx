import Box from "@mui/material/Box"
import {  Link } from "react-router-dom";

function Header() {
    return (
        <Link to='/'>
            <Box sx={{bgcolor: '#4b0082',  height: '10vh', weight: '100vh' }}>
             
            </Box>
            </Link>
    );
  }

  export default Header;