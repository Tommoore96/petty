const Router = require('koa-router');
const router = new Router();
const mongoose = require('mongoose');
const Car = require('./model');


const controller = require('./controller');

router.get('/:reg', async (ctx, next) => {
  console.log(ctx.params.reg);
  const car = Car.find({}, (err, car) => {
    console.log(car)
  })

  const carFromDb = await findCar(ctx.params.reg);

  ctx.ok(carFromDb)

});

router.post('/', (ctx, next) => {

  const { body } = ctx.request

  const car = {
    reg: body.reg,
    mpg: body.mpg
  }

  Car.create(car).then((car) => {
    console.log(car)
    return car
  })

  ctx.ok()

})

async function findCar(reg) {
  const car = await Car.findOne({ "reg": reg })
  return car
}

module.exports = router;
