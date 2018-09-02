export const RECIPES_FETCHING = 'RECIPES_FETCHING';
export const RECIPES_FETCHING_SUCCESS = 'RECIPES_FETCHING_SUCCESS';
export const RECIPES_FETCHING_FAILURE = 'RECIPES_FETCHING_FAILURE';

export const FIRST_PAGE = 'FIRST_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';

export const REQUEST_SIGNUP = 'REQUEST_SIGNUP';
export const RECEIVE_SIGNUP = 'RECEIVE_SIGNUP';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const LOGOUT_USER = 'LOGOUT_USER';

export const REQUEST_AUTHENTICATED = 'REQUEST_AUTHENTICATED';
export const RECEIVE_AUTHENTICATED = 'RECEIVE_AUTHENTICATED';
export const ERROR_AUTHENTICATED = 'ERROR_AUTHENTICATED';
export const RECEIVE_FAVORITES = ' RECEIVE_FAVORITES';

export const REQUEST_FAVORITES = 'REQUEST_FAVORITES';
export const RECEIVE_ALL_FAVORITES = ' RECEIVE_ALL_FAVORITES';
export const ADD_PREFERENCE='ADD_PREFERENCE';
export const REMOVE_PREFERENCE='REMOVE_PREFERENCE';
export const ADD_HEALTH_LABEL = 'ADD_HEALTH_LABEL';
export const ADD_DIET_LABEL = 'ADD_DIET_LABEL';
export const REMOVE_FILTER_LABEL = 'REMOVE_FILTER_LABEL';
export const minTime = new Date();
minTime.setHours(7, 0, 0);
export const maxTime = new Date();
maxTime.setHours(20, 0, 0);
export const calendarInitialState = {
  events: [],
  recipes: [],
  modal: {
    id: null,
    name: null,
    desc: null,
    start: new Date(2018, 4, 4, 7, 0, 0),
    end: new Date(2018, 4, 4, 8, 0, 0)
  },
  modalOpen: false,
  recipesOpen: false
};
export const RECEIVE_ALL_PREFERENCES = 'RECEIVE_ALL_PREFERENCES';
export const REQUEST_PREFERENCES = 'REQUEST_PREFERENCES';
export const RANDOM_FOODS = [
  { name: 'egg' },
  { name: 'soy' },
  { name: 'pasta' },
  { name: 'french fries' },
  { name: 'ice-cream' },
  { name: 'bread' },
  { name: 'fried rice' },
  { name: 'pancakes' },
  { name: 'burger' },
  { name: 'pizza' },
  { name: 'pumpkin pie' },
  { name: 'chicken pot pie' },
  { name: 'banana' },
  { name: 'apple pie' },
  { name: 'bagel' },
  { name: 'muffins' },
  { name: 'alfredo sauce' },
  { name: `reece's peanut cups` },
  { name: 'ice cream cake' },
  { name: 'cheesecake' },
  { name: 'cheese' },
  { name: 'banana bread' },
  { name: 'potato chips' },
  { name: 'cheetos' },
  { name: 'doritos' },
  { name: 'tacos' },
  { name: 'burritos' },
  { name: 'chimichanga' },
  { name: 'enchilada' },
  { name: 'salsa' },
  { name: 'marinara sauce' },
  { name: 'broccoli' },
  { name: 'chocolate covered strawberries' },
  { name: 'kiwi' },
  { name: 'tomato' },
  { name: 'salad' },
  { name: 'steak' },
  { name: 'chicken tenders' },
  { name: 'grilled chicken' },
  { name: 'ribs' },
  { name: 'biscuits and gravy' },
  { name: 'hot dogs' },
  { name: 'eggs' },
  { name: 'lemon' },
  { name: 'fish' },
  { name: 'yogurt' },
  { name: 'chicken' },
  { name: 'eggplant' },
  { name: 'spaghetti' },
  { name: 'sardou' },
  { name: 'potato' },
  { name: 'pea' },
  { name: 'soup' },
  { name: 'mushrooms' },
  { name: 'chowder' },
  { name: 'apple' },
  { name: 'porridge' },
  { name: 'cucumber' },
  { name: 'arugula' },
  { name: 'risotto' },
  { name: 'mango' },
  { name: 'berry' },
  { name: 'courgette' },
  { name: 'panini' },
  { name: 'sausage' },
  { name: 'cauliflower' },
  { name: 'saffron' },
  { name: 'milk' },
  { name: 'polenta' },
  { name: 'chocolate' },
  { name: 'blackberry' },
  { name: 'coffee' },
  { name: 'cardamom' },
  { name: 'tea' },
  { name: 'trail' },
  { name: 'cheddar' },
  { name: 'biscuits' },
  { name: 'vegan' },
  { name: 'milkshake' },
  { name: 'leaf' },
  { name: 'quinoa' },
  { name: 'rhubarb' },
  { name: 'pistachios' }
];
