const exportss=require('express');
const router=exportss.Router();
const customerController=require('../controllers/customerController');
const auth=require('../middleware/auth');

router.get('/',customerController.getAllCustomers); // /api/customers
router.get('/:id',customerController.getCustomerById); // /api/posts/:id
router.post('/',auth,customerController.createCustomer); // /api/posts
router.put('/:id',auth,customerController.updateCustomer); // /api/customer/:id
router.delete('/:id',auth,customerController.deleteCustomer);// /api/customer/:id

module.exports=router;