export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Método não permitido' });
    }

    // O Mercado Pago envia notificações aqui
    const body = req.body;

    console.log('Webhook recebido:', body);

    // Exemplo: validar se veio o ID do pagamento
    if (body && body.data && body.data.id) {
      // Aqui você poderia consultar o pagamento no Mercado Pago usando o ID
      // const paymentInfo = await mp.payment.get({ id: body.data.id });
      // console.log('Pagamento consultado:', paymentInfo);

      res.status(200).json({ message: 'Webhook processado com sucesso', id: body.data.id });
    } else {
      res.status(400).json({ error: 'Webhook inválido, sem ID de pagamento' });
    }
  } catch (error) {
    console.error('Erro na rota /api/webhook:', error);
    res.status(500).json({ error: error.message });
  }
}