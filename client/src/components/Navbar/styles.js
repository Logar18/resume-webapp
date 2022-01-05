import { makeStyles } from '@material-ui/core/styles';
import { deepPurple, red } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',   
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: '#262322',
    textDecoration: 'none',
    fontSize: '40px',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '700px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '160px',
  },
  networking: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2px',
    width: '85px',
    marginLeft: '35px'
    
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    // color: theme.palette.getContrastText(deepPurple[500]),
    color: 'red',
    // backgroundColor: deepPurple[500],
    backgroundColor: 'red',
  },
}));