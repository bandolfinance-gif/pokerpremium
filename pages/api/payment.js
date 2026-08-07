// pages/api/payment.js
import { MercadoPagoConfig, Payment } from 'mercadopago';

export default async function handler(req, res) {
  try {
    const client = new MercadoPagoConfig({
      accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN,
    });

    const payment = new Payment(client);

    const response = await payment.create({
      body: {
        transaction_amount: 1,
        description: 'Teste de pagamento',
        payment_method_id: 'pix',
        payer: {
          email: 'teste@example.com',
        },
      },
    });

    // ✅ Retorna a resposta para o cliente
    res.status(200).json(response);
  } catch (error) {
    // ✅ Captura e retorna erro corretamente
    console.error('Erro na rota /api/payment:', error);
    res.status(500).json({ error: error.message });
  }
}