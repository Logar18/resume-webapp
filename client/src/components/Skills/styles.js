import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(4),
    },
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3)
  },
  headers: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  icon: {
    marginTop: '7px',
    marginLeft: '2px'
  },
  ts: {
    marginTop: '8px',
    marginLeft: '14px',
  }
}));