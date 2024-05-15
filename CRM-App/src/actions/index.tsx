import { Dispatch } from "redux";

export const loadInitialContacts = () => {
  return (dispatch: Dispatch) => {
    fetch("http://127.0.0.1:3000/contact")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "INITIAL_FETCH", payload: data });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };
};
