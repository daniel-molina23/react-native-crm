import { Dispatch } from "redux";

export const selectPerson = (peopleId: string) => {
  return {
    type: "SELECT_PERSON",
    selectId: peopleId,
  };
};

export const noneSelected = () => {
  return {
    type: "NONE_SELECTED",
  };
};

export const formUpdate = ({
  prop,
  value,
}: {
  prop: string;
  value: string;
}) => {
  return {
    type: "FORM_UPDATE",
    payload: { prop, value },
  };
};

export const createNewContact = ({
  firstName,
  lastName,
  phone,
  email,
  company,
  project,
  notes,
}: {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  company: string;
  project: string;
  notes: string;
}) => {
  return (dispatch: Dispatch) => {
    fetch("http://127.0.0.1:3000/contact", {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        company: company,
        project: project,
        notes: notes,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        dispatch({ type: "NEW_CONTACT" });
      })
      .then(() => {
        loadInitialContacts();
      })
      .catch((error) => console.log(error));
  };
};

export const updateContact = (person: {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  company: string;
  project: string;
  notes: string;
}) => {
  return {
    type: "UPDATE_CONTACT",
    payload: person,
  };
};

export const saveContact = ({
  firstName,
  lastName,
  phone,
  email,
  company,
  project,
  notes,
  _id,
}: {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  company: string;
  project: string;
  notes: string;
  _id: string;
}) => {
  return (dispatch: Dispatch) => {
    fetch(`http://127.0.0.1:3000/contact/${_id}`, {
      method: "PUT",
      body: JSON.stringify({
        firstName,
        lastName,
        phone,
        email,
        company,
        project,
        notes,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        dispatch({ type: "SAVE_CONTACT" });
      })
      .then(() => {
        loadInitialContacts();
      })
      .catch((error) => console.log(error));
  };
};

export const deleteContact = (id: string) => {
  return (dispatch: Dispatch) => {
    fetch(`http://127.0.0.1:3000/contact/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        dispatch({ type: "DELETE_CONTACT" });
      })
      .then(() => {
        loadInitialContacts();
      })
      .catch((error) => console.log(error));
  };
};

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
