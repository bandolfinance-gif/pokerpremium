import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });

export default async function handler(req, res) {
  try {
    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: [
          {
            title: "Produto de teste",
            unit_price: 10,
            quantity: 1,
          },
        ],
      },
    });

    res.status(200).json({ id: result.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}