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
