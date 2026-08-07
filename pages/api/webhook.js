// pages/api/webhook.js
import { MercadoPagoConfig } from 'mercadopago';

export default async function handler(req, res) {
  try {
    // Inicializa o cliente Mercado Pago
    const client = new MercadoPagoConfig({
      accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN,
    });

    // O Mercado Pago envia notificações via POST
    if (req.method === 'POST') {
      const data = req.body;

      // ✅ Aqui você pode tratar os eventos recebidos
      // Exemplo: pagamento aprovado, recusado, etc.
      console.log('Webhook recebido:', data);

      res.status(200).json({ message: 'Webhook recebido com sucesso', data });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro na rota /api/webhook:', error);
    res.status(500).json({ error: error.message });
  }
}