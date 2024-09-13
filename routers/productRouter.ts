import { Router } from 'express';
import { getProducts, createProduct } from '../controllers/productController';

const router = Router();

// Define routes
router.get('/', getProducts); // GET /products - Get all products
router.post('/', createProduct); // POST /products - Create a new product
router.get('/search'); // GET /products/search - Search for products

export default router;