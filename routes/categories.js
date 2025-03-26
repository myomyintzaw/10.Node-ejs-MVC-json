
const exportss=require('express');
const router=exportss.Router();
const categoriesController=require('../controllers/customerController');
const auth=require('../middleware/auth');

router.get('/',categoriesController.getAllCategory); // /api/category
router.get('/:id',categoriesController.getCategoryById); // /api/category/:id
router.post('/',auth,categoriesController.createCateogry); // /api/category
router.put('/:id',auth,categoriesController.updateCategory); // /api/category/:id
router.delete('/:id',auth,categoryController.deleteCategory);// /api/category/:id

module.exports=router;