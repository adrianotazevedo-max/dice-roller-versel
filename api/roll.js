module.exports = function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sides = parseInt(req.query.sides, 10);

  if (isNaN(sides) || sides < 2 || sides > 100) {
    return res.status(400).json({ error: 'O número de lados deve ser entre 2 e 100.' });
  }

  const value = Math.floor(Math.random() * sides) + 1;

  return res.status(200).json({
    sides,
    value,
    message: `Você rolou um d${sides} e tirou ${value}!`,
  });
}
