const router = require('express').Router();
const { order, patient } = require('../../models');

// The `/api/orders` endpoint

router.get('/', async (req, res) => {
  try {
    const orders = await order.findAll({
      include: [
        {
          model: patient,
          attributes: [ 'first_name', 'last_name','phone_number' ]
        }
      ]
    });  

    const ptOrders = orders.map((theseOrders) => theseOrders.get({ plain:true}))
    console.log(ptOrders)
    res
      .render('allOrders', {
        loggedIn: req.session.loggedIn,
        ptOrders,
      })
      // .status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async  (req, res) => {
  try {
    const orders = await order.findByPk(req.params.id, {
      
    });

    if (!orders) {
      res.status(404).json({ message: 'No patient with this ID' });
      return;
    }

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.post('/', async (req, res) => {
  try 
  {

    const orders = await order.create({
      individualHooks: true,
      patient_id: req.body.patient_id,
      type: req.body.type,
      status: req.body.status,
    });

    res.status(200).json(orders);
    
  } catch (err) 
  {
    res.status(500).json(err);
  }
});



router.put('/:id',async (req, res) => {
  try {
    const orders = await order.update(req.body, {
      where: {
        id: req.params.id,
      },
      individualHooks: true
    });

    if (!orders) {
      res.status(404).json({ message: 'No order here boss!' });
      return;
    }
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id',async  (req, res) => {
  try {
    const orders = await order.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!orders) {
      res.status(404).json({ message: 'No order here boss!' });
      return;
    }
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;