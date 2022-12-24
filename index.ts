import express from 'express';
import authentication from './middlewares/authentication';
import requestLogger from './middlewares/requestlogger';
import pokemonRouter from './routes/pokemon';

const app = express();

app.use(authentication);
app.use(requestLogger);
app.use('/pokemon', pokemonRouter);

app.listen(3000, () => {
  console.log('Pokedex server listening on port 3000');
});
