import { Request, Response } from 'express';
import { db } from '../config/connection';
import { ProductsTable } from '../models/productSchema';

// Get all products
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await db.select().from(ProductsTable);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving products');
  }
};

// Create a new product
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, stock_quantity, category_id, image_url, user_id } = req.body; // Include user_id

    const newProduct = {
      name,
      description,
      price,
      stock_quantity,
      category_id,
      image_url,
      created_at: new Date(), // Use the current date and time
      updated_at: new Date(), // Use the current date and time
      user_id, // Ensure user_id is included
    };

    // Insert the new product into the database
    await db.insert(ProductsTable).values(newProduct);

    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating product');
  }
};

// Search for products based on query parameters
// export const searchProducts = async (req: Request, res: Response) => {
//   try {
//     const { name, description, id, price } = req.query;

//     // Build the query
//     const query = db.select().from(ProductsTable);

//     // Apply filters based on provided query parameters
//     if (name) {
//       query.where(ProductsTable.name.like(`%${name}%`)); // Search by name
//     }
//     if (description) {
//       query.where(ProductsTable.description.like(`%${description}%`)); // Search by description
//     }
//     if (id) {
//       query.where(ProductsTable.product_id.eq(Number(id))); // Search by ID
//     }
//     if (price) {
//       query.where(ProductsTable.price.eq(Number(price))); // Search by price
//     }

//     const products = await query;

//     res.json(products);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error searching for products');
//   }
// };