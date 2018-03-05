const Router = require('koa-router');
const router = new Router();
const mongoose = require('mongoose');
const Car = require('./model');

const controller = require('./controller');

router.get('/:reg', (ctx, next) => {
  return Car.findOne({ where: { "reg": ctx.params.reg } }).then(function(car) {
    ctx.car = car;
    console.log('Recieved get req');
  })
});

module.exports = router;
