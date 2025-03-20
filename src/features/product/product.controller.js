import ProductRepository from "./product.repository.js";

export default class ProductController {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  async getAllProducts(req, res) {
    try {
      const products = await this.productRepository.getAll();
      res.status(200).send(products);
    } catch (err) {
      return res.status(404).send({ message: err.message });
    }
  }

  async addProducts(req, res) {
    try {
      const products = req.body; 
  
      if (!Array.isArray(products) || products.length === 0) {
        return res.status(400).send({ message: "Invalid input data format." });
      }

      const newProducts = products.map(product => ({
        name: product.name,
        description: product.description,
        category: product.category,
        price: parseFloat(product.price), 
      }));
  
      const productsAdded = await this.productRepository.addMany(newProducts);
  
      return res
        .status(201)
        .send({ message: "Products added successfully", productsAdded });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
  

}
