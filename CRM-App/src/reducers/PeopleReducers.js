const initialState = {
  people: [],
  detailView: false,
  personSelected: null,
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  company: "",
  project: "",
  notes: "",
  _id: "",
  toUpdate: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "INITIAL_FETCH":
      return {
        ...state,
        people: action.payload,
      };
    default:
      return state;
  }
};
