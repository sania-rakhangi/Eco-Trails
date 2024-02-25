import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(() => ({
  paper: {
    padding: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
  },
  mapContainer: {
    height: '128%', width: '100%',
  },
  markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 }, margin:0,
  },
  pointer: {
    cursor: 'pointer',
  },
}));