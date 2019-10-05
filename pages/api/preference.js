const mercadopago = require("../../mercadopago");

export default (req, res) => {
  const { amount, id } = req.body;

  mercadopago.preferences
    .create({
      notification_url: `${process.env.SERVER_URL}/api/donation?project=${id}&amount=${amount}`,
      items: [
        {
          title: "Donación",
          quantity: 1,
          unit_price: amount,
        },
      ],
    })
    .then(response => res.status(200).json(response.body))
    .catch(error => res.status(403).json(error));
};
