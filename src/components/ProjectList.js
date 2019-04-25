
import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddProjectButton from './ProjectForm'
import { useTranslation } from 'react-i18next';
import { Context } from '../context'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function ProjectList({ projects, onAction, classes }) {
  const {state, dispatch} = useContext(Context)
  const { t } = useTranslation('ProjectList')

  const amIIn = project => project.participants.includes(state.user)
  const handleNewProject = project => dispatch({type: 'ADD_PROJECT', project, user: state.user})
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>{t('Project')}</TableCell>
            <TableCell>{t('Organizer')}</TableCell>
            <TableCell>{t('Participants')}</TableCell>
            <TableCell>{t('Actions')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map(project => (
            <TableRow key={project.id} style={amIIn(project) ? {background:'yellow'}: {}}>
              <TableCell component="th" scope="row">
                {project.name}
              </TableCell>
              <TableCell>{project.organizer}</TableCell>
              <TableCell>{project.participants.join(', ')}</TableCell>
              <TableCell>
              { amIIn(project) ?
                <Button onClick={() => onAction(project.id)} color="primary">{t('Leave')}</Button>
                :
                <Button disabled={!state.user} onClick={() => onAction(project.id)} color="primary">{t('Join')}</Button>
              }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddProjectButton handleNew={handleNewProject}/>

    </Paper>
  );
}

ProjectList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectList);
