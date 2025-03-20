import ProductController from "./product.controller.js";
import express from "express";
import { validateAddProducts } from "../../middlewares/validators.js";

const router = express.Router();

const productController = new ProductController();

router.get("/get", (req, res) => {
    productController.getAllProducts(req, res);
});

router.post("/add", validateAddProducts, (req, res) => {
    productController.addProducts(req, res);
});

export default router;

