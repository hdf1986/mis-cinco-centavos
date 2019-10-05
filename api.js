import { database } from "./firebase/client";

function parse(doc) {
  const project = doc.data();

  return {
    id: doc.id,
    funded: project.donations.reduce((funded, donation) => funded + donation.ammount, 0),
    ...project,
  };
}

export default {
  donate: (id, amount) => {
    return fetch("/api/preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, amount }),
    })
      .then(res => (res.ok ? res.json() : Promise.reject("Hubo un error al preparar la donacion")))
      .then(({ init_point }) => window.open(init_point))
  },
  get: project =>
    database
      .collection("projects")
      .doc(project)
      .get()
      .then(parse),
  list: () =>
    database
      .collection("projects")
      .get()
      .then(({ docs }) => docs.map(parse)),
  subscribe: (project, callback) =>
    database
      .collection("projects")
      .doc(project)
      .onSnapshot(snapshot => callback(parse(snapshot))),
};
