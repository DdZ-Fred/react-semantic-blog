import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Development Express server is running at localhost:${PORT}`);
});
