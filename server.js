import express from 'express';
import 'dotenv/config';
import { fileURLToPath } from 'url';
import session from 'express-session';
import errorHandler from './middleware/errorMw.js';
import indexRouter from './routes/index.js';

const port = process.env.PORT || 5000;
const app = new express();

const viewsPath = fileURLToPath(new URL('views', import.meta.url));
const staticsPath = fileURLToPath(new URL('public', import.meta.url));

app.set('views', viewsPath);
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static(staticsPath));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`App server listening on port ${port}`);
});
