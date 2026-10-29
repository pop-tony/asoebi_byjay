exports.subscribe = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }
  return res.status(200).json({ message: 'Thanks for subscribing to VELA notes.' });
};
