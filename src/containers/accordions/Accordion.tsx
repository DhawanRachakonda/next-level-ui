import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    borderRadius: '1em',
    marginBottom: '15px',
    padding: '0 16px',
    '&:before': {
      display: 'none',
    },
  },
})(MuiAccordion);

export default Accordion;
