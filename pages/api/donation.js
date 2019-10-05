const { database, firestore } = require("../../firebase/admin");

export default (req, res) => {
  const { project, amount, id, timestamp, name } = req.query;

  if (id && project) {
    database
      .collection("projects")
      .doc(project)
      .get()
      .then(doc => ({ ...doc.data(), id: doc.id }))
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
              name,
            }),
          })
          .then(donation => res.status(200).json(donation))
          .catch(error => res.status(400).json(error));
      });
  } else {
    res.status(304).end();
  }
};
