import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "start"
    
    },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className="{classes.root}">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} >
          <h3 className="Head">Shoe-Store</h3>
          </Typography>
          <Typography className="Header">
          <Link to='/' className="Nav" > Home </Link>  
           <Link to='/Products'   className="Nav" >products </Link>
          <Link to='/about'  className="Nav" > About-us</Link>
          
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
