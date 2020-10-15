import express, { json } from 'express';

const app = express();

app.use(express.json());

app.get('/teste', (req, res) => {
  const { teste } = req.body;

  return res.json(teste);
})

app.listen(3333, () => {
  console.log('✅ Server running. Port(3333)');
});