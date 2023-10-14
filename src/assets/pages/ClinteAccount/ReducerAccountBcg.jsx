export const initialState = {
  Li1: "liBcgDynamic",
  Li2: "liBcgDynamic",
  Li3: "liBcgDynamic",
};

const ReducerAccountBcg = (state, action) => {
  if (action.type === "li1") {
    return {
      ...state,
      Li1: (state.Li1 = "Li1"),
      Li2: (state.Li2 = "liBcgDynamic"),
      Li3: (state.Li3 = "liBcgDynamic"),
    };
  }
  if (action.type === "li2") {
    return {
      ...state,
      Li1: (state.Li1 = "liBcgDynamic"),
      Li2: (state.Li2 = "Li2"),
      Li3: (state.Li3 = "liBcgDynamic"),
    };
  }
  if (action.type === "li3") {
    return {
      ...state,
      Li1: (state.Li1 = "liBcgDynamic"),
      Li2: (state.Li2 = "liBcgDynamic"),
      Li3: (state.Li3 = "Li3"),
    };
  }
};

export default ReducerAccountBcg;
