import { withStyles } from '@material-ui/core/styles';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';

const AccordionSummary = withStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    borderRadius: '1em',
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
}))(MuiAccordionSummary);

export default AccordionSummary;
