/* eslint-disable import/no-anonymous-default-export */

export default (state, action) => {
  switch (action.type) {

    case "ADDLOCALSTORAGE_USER":
      return action.payload;

    case "REMOVE_USER":
      return action.payload;;

    default:
      return state;
  }
};
