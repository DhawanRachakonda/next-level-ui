import React from 'react';
import { Theme, makeStyles, Grid, Box } from '@material-ui/core';
import PinDropOutlinedIcon from '@material-ui/icons/PinDropOutlined';

import DivTypography from 'containers/typography/DivTypography';

const data = [
  {
    title: 'Study AnyWhere',
    description:
      'Maecenas ultricies mi eget mauris pharetra et ultrices. Orcisagittis eu volutpat odio facilisis. Nulla porttitor massa idneque aliquam.',
  },
  {
    title: 'One to One',
    description:
      'Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Leo duis ut diam quam nulla porttitor massa id.',
  },
  {
    title: 'Live Classes',
    description:
      'Dictum varius duis at consectetur lorem donec massa sapien. Pharetra sit amet aliquam id diam maecenas.',
  },
  {
    title: 'One Time',
    description:
      'Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Amet commodo nulla facilisi nullam vehicula.',
  },
  {
    title: 'Remote Learning',
    description:
      'Vitae et leo duis ut. At consectetur lorem donec massa sapien faucibus et.',
  },
  {
    title: 'Self Development',
    description:
      'Maecenas ultricies mi eget mauris pharetra et ultrices. Orci sagittis eu volutpat odio facilisis. Nulla porttitor massa id neque aliquam.',
  },
];

const useObjectiveSyles = makeStyles((theme: Theme) => ({
  containerRoot: {
    maxWidth: '90%',
    margin: 'auto',
    marginTop: theme.spacing(9),
    '& .MuiSvgIcon-root': {
      color: '#18a4e1',
      fontSize: '4.5rem',
    },
    '& .MuiTypography-body2': {
      margin: theme.spacing(1, 0),
      color: '#6d7b82',
      lineHeight: '1.4',
      fontWeight: 'lighter',
    },
  },
}));

export default function Objectives() {
  const styles = useObjectiveSyles();
  return (
    <Grid classes={{ root: styles.containerRoot }} item={true} xs={12}>
      <Grid container={true}>
        {data.map((item) => (
          <Objective key={item.title} object={item} />
        ))}
      </Grid>
    </Grid>
  );
}

const useBoxstyles = makeStyles((theme: Theme) => ({
  boxRoot: {
    margin: `calc(0.1em + ${theme.spacing(5)}px)`,
    marginBottom: 0,
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      margin: `calc(0.1em + ${theme.spacing(1)}px)`,
      marginBottom: 0,
      marginTop: theme.spacing(2),
    },
  },
}));

function Objective({ object }: any) {
  const styles = useBoxstyles();

  return (
    <Grid item={true} sm={12} md={4}>
      <Box className={styles.boxRoot}>
        <DivTypography variant="h5" gutterBottom={true}>
          <PinDropOutlinedIcon fontSize="large" />
        </DivTypography>
        <DivTypography variant="h5" gutterBottom={true}>
          {object.title}
        </DivTypography>
        <DivTypography variant="body2" gutterBottom={true}>
          {object.description}
        </DivTypography>
      </Box>
    </Grid>
  );
}
