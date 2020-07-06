const keystone = require('keystone');

const { Types } = keystone.Field;

const FoodCard = new keystone.List('FoodCard');

FoodCard.add({
  name: { type: Types.Text, required: true, initial: true, index: true },
  image: { type: Types.CloudinaryImages, require: true, initial: true, },
  price: { type: Types.Text, require: true, initial: true, },
});

FoodCard.register();