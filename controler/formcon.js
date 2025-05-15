const db = require('../config/db');

exports.submitForm = (req, res) => {
  const { name, email, number, message } = req.body;

  // Basic validation
  if (!name || !email || !number) {
    return res.status(400).json({ error: 'Please fill all required fields' });
  }

  const query = `INSERT INTO form_data (name, email, number, message) VALUES (?, ?, ?, ?)`;

  db.query(query, [name, email, number, message], (err, result) => {
    if (err) {
      console.error('Insert Error:', err);
      return res.status(500).json({ error: 'Something went wrong' });
    }

    res.status(201).json({ message: 'Form submitted successfully', data: result });
  });
};
