const mercadopago = require("../../mercadopago");

export default (req, res) => {
  const { amount, id } = req.body;
  mercadopago.preferences
    .create({
      notification_url: `${process.env.SERVER_URL}/api/donation?project=${id}&amount=${amount}`,
      auto_return: 'approved',
      back_urls: {
        success: `${process.env.SERVER_URL}/${id}`,
        pending: `${process.env.SERVER_URL}/${id}`,
        failure:  `${process.env.SERVER_URL}/${id}`
      },
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
