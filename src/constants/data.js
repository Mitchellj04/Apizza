import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const beers = [
  {
    title: 'Board Walk',
    price: '$20',
    tags: 'Lager | Pale Ale',
  },
  {
    title: "Newburge Heights",
    price: '$16',
    tags: ' IPA | American IPA',
  },
  {
    title: 'Drop of Sunshine',
    price: '$10',
    tags: 'IPA | Hazy Juicy | ',
  },
  {
    title: 'Criss craft tuesday',
    price: '$31',
    tags: 'Lager | American Lager',
  },
  {
    title: 'Speculator Night',
    price: '$26',
    tags: ' Stout | Irish Dry | Dark',
  },
];

const pizza = [
  {
    title: 'Original Cheese',
    small: '$12',
    medium: '$16',
    large: '$19',
    tags: 'Red Sauce | Cheese '
  },
  {
    title: 'Margarita',
    small: '$15',
    medium: '$17',
    large: '$22',
    tags: 'Fresh tomato | Mozzerella | Basil'
  }
 , {
    title: 'Cheese and Pepporoni',
    small: '$14',
    medium: '$18',
    large: '$20',
    tags: 'Red Sauce | Cheese | Pepporoni'
  },
  {
    title: 'Meat Lovers',
    small: '$17',
    medium: '$24',
    large: '$28',
    tags: 'Red Sauce | Cheese | Pepporoni | Sausage | Bacon | Meatballs'
  },
  {
    title: 'White Sauce',
    small: '$12',
    medium: '$16',
    large: '$19',
    tags: 'White Sauce | Cheese | Basil'
  },
];

const toppings = [
  {name: 'Bacon'},{name: 'Meatball'},{name: 'Pepporoni'},{name: 'Sausage'},{name: 'Chicken'},{name: ''},{name: ''},{name: ''}

]

const specialty = [
  {
    title: 'CT Spud Pie',
    small: '$15',
    medium: '$25',
    large: '$30',
    tags: 'Mashed Potato | Bacon | Cheese | Sour cream | Green onion',
  },
  {
    title: 'Buffalo Chicken',
    small: '$15',
    medium: '$25',
    large: '$28',
    tags: 'Buffalo Chicken | Cheese | Ranch',
  },
  {
    title: 'Ham and Sea',
    small: '$17',
    medium: '$26',
    large: '$32',
    tags: 'White Sauce | Shrimp | Prescuto | Cheese',
  },
  {
    title: 'Chicken Bacon Ranch',
    small: '$15',
    medium: '$24',
    large: '$28',
    tags: 'Chicken | Bacon | Ranch | Cheese',
  },

];

export default { wines, beers, pizza, specialty, toppings };