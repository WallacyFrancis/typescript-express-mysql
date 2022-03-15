import Express, { json } from 'express';
import usersRouter from './routers/users';

const app = Express();
app.use(json());
app.use('/users', usersRouter);
app.get('/', (req, res) => res.status(200).send('Hello world'));

export default app;