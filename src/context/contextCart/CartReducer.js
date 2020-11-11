/* eslint-disable import/no-anonymous-default-export */

export default (state, action) => {
  switch (action.type) {
    case "ADDLOCALSTORAGE_MENU":
      return action.payload;

    case "REMOVE_MENU":
      const menusRemoveUpdates = state.menus.filter(
        (menu) => menu.plate.id !== action.payload.plate.id
      );
      return { menus: menusRemoveUpdates, total: state.total - action.payload.total };

    case "DESCREASE_MENU":
      var decreasePrice = 0;
      const menusDecreaseUpdates = state.menus.map((menu) => {
        if (menu.plate.id === action.payload.plate.id) {
          if (menu.quantity > 1) {
            // actualizamos o disminuimos solo cuando hay mas de uno
            const menuDecrease = {
              quantity: menu.quantity - 1,
              plate: menu.plate,
              total: (menu.quantity - 1) * menu.plate.price,
            };
            decreasePrice = menu.plate.price;
            return menuDecrease;
          }
        }
        return menu;
      });
      //si solo queda un elemento no se resta se mantiene
      return {
        menus: menusDecreaseUpdates,
        total: state.total - decreasePrice,
      };

    case "ADD_MENU":
      const newMenu = action.payload;

      var edit = false;
      const menusUpdates = state.menus.map((menu) => {
        if (menu.plate.id === newMenu.plate.id) {
          edit = true;
          return {
            quantity: menu.quantity + 1,
            plate: menu.plate,
            total: menu.total + menu.plate.price,
          };
        }
        return menu;
      });
      // si es true significa q existe y ya se edito
      return {
        menus: edit ? menusUpdates : [newMenu, ...state.menus],
        total: state.total + newMenu.plate.price,
      };
    
    case "RESET_MENUS":
      return { menus: [], total: 0 }
    default:
      return state;
  }
};
