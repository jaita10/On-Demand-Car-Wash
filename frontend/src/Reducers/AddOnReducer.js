export const AddOnReducer = (addonpack = [], action) => {
  switch (action.type) {
    case "SET_ADDON":
      return action.payload;
    case "ADD_ADDON":
      for (const element of addonpack) {
        if (element.addonId === action.payload.addonId) return addonpack;
      }
      return [...addonpack, action.payload];
    case "DELETE_ADDON":
      addonpack = addonpack.filter(
        (element) => element.addonId !== action.payload
      );
      return addonpack;
    default:
      return addonpack;
  }
};
