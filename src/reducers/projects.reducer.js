import { projectConstants } from '../constants';

export function project(state={}, action) {
  switch (action.type) {
    case projectConstants.ADD_PARTICIPANT_REQUEST:
      return {...state, participants: [...state.participants, action.user.id]}
    case projectConstants.REMOVE_PARTICIPANT_REQUEST:
      return {...state, participants: state.participants.filter(p => p !== action.user.id)}
    default:
      return state
  }
}

export function projects(state = {}, action) {
  switch (action.type) {
    case projectConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case projectConstants.GETALL_SUCCESS:
      return {
        items: action.projects
      };
    case projectConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    // case projectConstants.DELETE_REQUEST:
    //   // add 'deleting:true' property to user being deleted
    //   return {
    //     ...state,
    //     items: state.items.map(user =>
    //       user.id === action.id
    //         ? { ...user, deleting: true }
    //         : user
    //     )
    //   };
    // case projectConstants.DELETE_SUCCESS:
    //   // remove deleted user from state
    //   return {
    //     items: state.items.filter(project => project.id !== action.id)
    //   };
    // case projectConstants.DELETE_FAILURE:
    //   // remove 'deleting:true' property and add 'deleteError:[error]' property to user
    //   return {
    //     ...state,
    //     items: state.items.map(user => {
    //       if (user.id === action.id) {
    //         // make copy of user without 'deleting:true' property
    //         const { deleting, ...userCopy } = user;
    //         // return copy of user with 'deleteError:[error]' property
    //         return { ...userCopy, deleteError: action.error };
    //       }
    //
    //       return user;
    //     })
    //   };
    case projectConstants.ADD_PARTICIPANT_REQUEST:
      return { ...state, items: state.items.map(p => project(p, action)) }
    case projectConstants.ADD_PARTICIPANT_SUCCESS:
      return state;
    case projectConstants.ADD_PARTICIPANT_FAILURE:
      return {
        error: action.error
      };
    case projectConstants.REMOVE_PARTICIPANT_REQUEST:
      return { ...state, items: state.items.map(p => project(p, action)) }
    case projectConstants.REMOVE_PARTICIPANT_SUCCESS:
      return state;
    case projectConstants.REMOVE_PARTICIPANT_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}
