import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import { withRouter } from 'react-router-dom'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop: '15px',
    marginLeft: '-7.5px',
  },
  gridList: {
    height: '100%',
    width: '100%',
  },
})

const NewProjectTile = ({ history, ...props }) => (
  <GridListTile {...props} onClick={() => history.push(`/project/new`)}>
    <img src={'https://placeimg.com/640/480/any/new'} alt={'x'} />
    <GridListTileBar title={'New'} subtitle={<span />} />
  </GridListTile>
)

function ProjectList({ projects, showNewProjectTile, classes, history }) {
  return (
    <div className={classes.root}>
      <GridList
        cellHeight={360}
        spacing={15}
        className={classes.gridList}
        cols={3}
      >
        {projects.map(({ id, name, areas = [] }) => (
          <GridListTile key={id} onClick={() => history.push(`/project/${id}`)}>
            <img src={'https://placeimg.com/640/480/any/' + name} alt={name} />
            <GridListTileBar
              title={name}
              subtitle={<span>{areas.join(', ')}</span>}
            />
          </GridListTile>
        ))}
        {showNewProjectTile && <NewProjectTile history={history} />}
      </GridList>
    </div>
  )
}

ProjectList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRouter(withStyles(styles)(ProjectList))
