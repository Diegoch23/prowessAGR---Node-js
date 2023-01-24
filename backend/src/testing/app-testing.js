import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import seedRouter from "../routes/seedRoutes.js";
import CategoryRouter from "../routes/categoryRoutes.js";
import ProductRouter from "../routes/productRoutes.js";
import UserRouter from "../routes/userRoutes.js";
import OrderRouter from "../routes/orderRoutes.js";
import "../databases/databaseMongoDB.js";
import "../databases/databaseCloudinary.js";
 
dotenv.config();
const PORT = 3000;
const LOG_FORMAT = "dev";
const API_PREFIX = '/api'

const app = express();

//middlewares
app.use(cors());
app.use(morgan(LOG_FORMAT));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//server listening
app.listen(() => {
  console.log(`Server at: http://localhost:${PORT}`);
  });

//routers
app.use(`${API_PREFIX}/seed/`, seedRouter);
app.use(`${API_PREFIX}/category/`, CategoryRouter);
app.use(`${API_PREFIX}/products/`, ProductRouter);
app.use(`${API_PREFIX}/users/`, UserRouter);
app.use(`${API_PREFIX}/orders/`, OrderRouter);

export default app;