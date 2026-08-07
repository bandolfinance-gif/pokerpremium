export default async function handler(req, res) {
  try {
    const payment = req.body;

    // Aqui você pode atualizar o saldo do jogador no banco de dados
    console.log("Webhook recebido:", payment);

    res.status(200).send("OK");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}