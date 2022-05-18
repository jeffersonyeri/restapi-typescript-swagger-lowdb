import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import taskRoutes from './routers/tasks.routes';
//Swagger
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { options } from './swaggerOptions';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const specs = swaggerJsDoc(options);

app.use(taskRoutes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

export default app;