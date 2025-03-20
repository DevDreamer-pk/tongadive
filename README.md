# Product API - Tongadive

This is a RESTful API for managing products for **Tongadive**.  
It allows adding multiple products and retrieving the product list.  

## 🚀 Features
- Add multiple products to the database  
- Retrieve all products  
- Input validation using middleware  
- Uses MongoDB as the database  

---

## 🛠️ **Tech Stack**
- **Node.js** - Backend runtime  
- **Express.js** - Web framework for Node.js  
- **MongoDB** - NoSQL database  
- **Mongoose** - ODM for MongoDB  
- **Cors** - Handling Cross-Origin Resource Sharing  
- **Body-parser** - Parsing request bodies
- **Swagger** - API documentation  
- **Joi** - Input validation  

---

## 🔧 **Setup & Installation**

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/tongadive-product-api.git
cd tongadive-product-api
```

### **2️⃣ Install Dependencies**
```sh
     npm install
```

### **3️⃣ Set Up Environment Variables**
```sh
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/tongadive
```
### **4️⃣ Start MongoDB (if not running)**
```sh
     mongod --dbpath /path/to/mongodb/data
```
### **5️⃣ Start the Server**
```sh
    npm start

    Your server should now be running at:
👉 http://localhost:3000/api/tongadive
👉 Swagger documentation : http://localhost:3000/api-docs
```

## 📌 **API Endpoints**

```sh
     Method      Endpoint     Description
     
     POST        /add         Add multiple products
     GET         /get         Get all products
```


## 📩 **Example Request**

### **1️⃣  Add Multiple Products**

#### ***Request***

```sh
    http://localhost:3000/api/tongadive/add HTTP/1.1
    Host: localhost:3000
    Content-Type: application/json
```

#### ***Request body***

```sh
    [
        {
            "name": "Wireless Headphones",
            "description": "High-quality noise-canceling wireless headphones with 40-hour battery life.",
            "category": "Electronics",
            "price": 99.99
        },
        {
            "name": "Smartphone Stand",
            "description": "Adjustable aluminum stand for smartphones and tablets.",
            "category": "Accessories",
            "price": 19.99
        }
    ]

```

### **2️⃣  Get All Products**


#### ***Request***

```sh
    http://localhost:4001/api/tongadive/get HTTP/1.1
    -H 'accept: application/json'
```

## 📜 **License**

This project is open-source and available under the MIT License.


---

### ✅ **What This README Covers**
- 📌 **Project Overview**
- 🛠️ **Tech Stack**
- 🔧 **Setup & Installation**
- 📌 **API Endpoints**
- 📩 **Example Requests** (in proper HTTP request format)
- 📜 **License**  

🚀 Let me know if you need any modifications! 😊

 
 
