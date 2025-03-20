import { ObjectId } from "mongodb";
import { getDb } from "../../config/mongodb.js";
import ApplicationError from "../../error-handler/applicationError.js";

class ProductRepository {
  constructor() {
    this.collection = "products";
  }

  async addMany(newProducts) {
    try {
      const database = getDb();
      const collection = database.collection(this.collection);
      
      await collection.insertMany(newProducts); // Bulk insert
  
      return newProducts; 
    } catch (err) {
      throw new ApplicationError("Error while creating products", 500);
    }
  }
  

  async getAll() {
    try {
      const database = getDb();
      const collection = database.collection(this.collection);

      const products = await collection.find({}).toArray();
      
      return products;
    } catch (err) {
      throw new ApplicationError("Error while getting product", 500);
    }
  }

}

export default ProductRepository;
