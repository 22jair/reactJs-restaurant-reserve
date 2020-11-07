/* eslint-disable import/no-anonymous-default-export */

export default (state, action) => {
  switch (action.type) {
    case "ADD_MENU":
      var menus = state.menus;

      var edit = false;
      const menusUpdates = menus.map((menu) => {
        // console.log("plate: ", menu.plate)
        // console.log("action: ", action.payload.id)
        if (menu.plate.id === action.payload.id) {
          console.log(menu);
          const menuUpdate = {
            quantity: menu.quantity + 1,
            plate: menu.plate,
            total: (menu.quantity + 1) * menu.plate.price,
          };
          edit = true;
          return menuUpdate;
        }
        return menu;
      });
      // console.log("menus up: ", menusUpdates)

      if (edit) {
        return { menus: menusUpdates };
      } else {
        const newMenu = {
          quantity: 1,
          plate: action.payload,
          total: action.payload.price,
        };

        return { menus: [newMenu, ...menus] };
      }

    default:
      return state;
  }
};
