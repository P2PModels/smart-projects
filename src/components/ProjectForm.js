import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  fab: {
    margin: theme.spacing.unit,
    float: 'right'
  },
});

function DialogSelect({ handleNew, classes }) {
  const [name, setName] = useState("")
  const [open, setOpen] = useState(false)

  const handleChange = event => {
    setName(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = sent => event => {
    setOpen(false)
    if (sent) {
      event.preventDefault()
      handleNew(name)
    }
  };

  return (
    <div>
      <Fab color="primary" aria-label="Add" className={classes.fab} onClick={handleClickOpen} >
        +
      </Fab>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose(false)}
      >
        <DialogTitle>Add a Project</DialogTitle>
        <DialogContent>
          <form className={classes.container} onSubmit={handleClose(true)}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Project Name</InputLabel>
              <Input
                value={name}
                onChange={handleChange}
              >
              </Input>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose(true)} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

DialogSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DialogSelect);
