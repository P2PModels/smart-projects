import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'
const styles = {
  avatar: {
    margin: 10,
    color: '#fff',
  },
}

// https://en.wikipedia.org/wiki/Linear_congruential_generator
function _stringAsciiPRNG(value, m) {
    // Xn+1 = (a * Xn + c) % m
    // 0 < a < m
    // 0 <= c < m
    // 0 <= X0 < m

    const charCodes = [...value].map(letter => letter.charCodeAt(0));
    const len = charCodes.length;

    const a = (len % (m - 1)) + 1;
    const c = charCodes.reduce((current, next) => current + next) % m;

    let random = charCodes[0] % m;
    for (let i = 0; i < len; i++)
        random = ((a * random) + c) % m;

    return random;
}

const defaultColors = [
    '#d73d32',
    '#7e3794',
    '#4285f4',
    '#67ae3f',
    '#d61a7f',
    '#ff4080',
];

function getRandomColor(name, colors = defaultColors) {
    const colorIndex = _stringAsciiPRNG(name, colors.length)
    return colors[colorIndex];
}

function defaultInitials(name) {
    return name.split(/\s/)
        .map(part => part.substring(0, 1).toUpperCase())
        .filter(v => !!v)
        .slice(0, 2)
        .join('');
}


const CustomAvatar = ({user, classes}) => (
  <Avatar alt={user.name} style={{backgroundColor: getRandomColor(user.name)}} className={classes.avatar}>{defaultInitials(user.name)}</Avatar>
)

export default withStyles(styles)(CustomAvatar)
