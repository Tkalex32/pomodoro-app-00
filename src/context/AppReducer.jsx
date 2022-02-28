export default (state, action) => {
  switch (action.type) {
    case "SET_WORK":
      return {
        ...state,
        workMin: action.payload,
      };
    case "SET_SHORT":
      return {
        ...state,
        shortMin: action.payload,
      };
    case "SET_LONG":
      return {
        ...state,
        longMin: action.payload,
      };
    case "SET_DEFAULT":
      return {
        ...state,
        workMin: 25,
        shortMin: 5,
        longMin: 25,
      };

    default:
      return state;
  }
};
