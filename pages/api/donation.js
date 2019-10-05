const { database, firestore } = require("../../firebase/admin");

function parse(doc) {
  const project = doc.data();

  return {
    id: doc.id,
    funded: project.donations.reduce((funded, donation) => funded + donation.ammount, 0),
    ...project,
  };
}

export default (req, res) => {
  const { project, amount, id, timestamp } = req.query;

  if (id && project) {
    database
      .collection("projects")
      .doc(project)
      .get()
      .then(parse)
      .then(proj => {
        if (proj.donations.find(current => current.donationId === timestamp)) return;

        database
          .collection("projects")
          .doc(project)
          .update({
            donations: firestore.FieldValue.arrayUnion({
              id,
              amount: Number(amount),
              timestamp: +new Date(),
              donationId: timestamp,
            }),
          })
          .then(donation => res.status(200).json(donation))
          .catch(error => res.status(400).json(error));
      })
  } else {
    res.status(304).end();
  }
};
