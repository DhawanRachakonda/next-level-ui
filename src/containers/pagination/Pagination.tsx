import { withStyles, Theme } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const PaginationComponent = withStyles((theme: Theme) => ({
  root: {
    float: 'right',
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
}))(Pagination);

export default PaginationComponent;
