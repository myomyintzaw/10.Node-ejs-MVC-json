
const exportss=require('express');
const router=exportss.Router();
const productsController=require('../controllers/customerController');
const auth=require('../middleware/auth');

router.get('/',productsController.getAllProducts); // /api/products
router.get('/:id',productsController.getProductById); // /api/products/:id
router.post('/',auth,productsController.createProduct); // /api/products
router.put('/:id',auth,productsController.updateProduct); // /api/products/:id
router.delete('/:id',auth,productsController.deleteProduct);// /api/products/:id

module.exports=router;