import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default function Homepg() {
  return (
      <div className='container-fluid sticky-top '>
        <div className='row justify-content-center'>
            <navbar className="bg-warning p-1">
            <div>
                <div className='row'>
                    <div className='col-1'>
                        <img className='col-12' src='meclogo.png' alt='Mec Logo'></img>
                    </div>
                    <Typography className='col-lg-8 col-md-10' variant="h6" component="div" >
                        <h4>MUTHAYAMMAL ENGINEERING COLLEGE</h4>
                        <h6>An Autonomous Institution</h6>
                        <h6>Approved by AICTE|Afflited to Anna University</h6>
                    </Typography>
                    {/* <h4 className='col-lg-3 col-4'>Name:Dr.Ajithkumar K</h4>
                    <h3 className='col-lg-2 col-4'>Code : 1027</h3> */}
                    
                    <Button className='col-2' color="inherit">Login</Button>
                    {/* menu button */}
                    <div className='col-1'>
                        <IconButton 
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        className='col-7 mt-3'>
                            <MenuIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
            </navbar>
        </div>
      </div>
  );
}