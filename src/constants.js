export const RECIPES_FETCHING = 'RECIPES_FETCHING';
export const RECIPES_FETCHING_SUCCESS = 'RECIPES_FETCHING_SUCCESS';
export const RECIPES_FETCHING_FAILURE = 'RECIPES_FETCHING_FAILURE';
export const RECIPES_UPDATE_SUCCESS = 'RECIPES_UPDATE_SUCCESS';
export const RECIPES_UPDATE_FAILURE = 'RECIPES_UPDATE_FAILURE';

export const FIRST_PAGE = 'FIRST_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';

export const REQUEST_SIGNUP = 'REQUEST_SIGNUP';
export const RECEIVE_SIGNUP = 'RECEIVE_SIGNUP';
export const ERROR_SIGNUP = ' ERROR_SIGNUP';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const ERROR_LOGIN = 'ERROR_LOGIN';
export const LOGOUT_USER = 'LOGOUT_USER';

export const REQUEST_ME = 'REQUEST_ME';
export const RECEIVE_ME = 'RECEIVE_ME';

export const REQUEST_AUTHENTICATED = 'REQUEST_AUTHENTICATED';
export const RECEIVE_AUTHENTICATED = 'RECEIVE_AUTHENTICATED';

export const RECEIVE_FAVOURITES = ' RECEIVE_FAVORITES';
export const CHECK_FAVOURITE = 'CHECK_FAVOURITE';
export const DELETE_FAVOURITE = 'DELETE_FAVOURITE';
export const REQUEST_FAVOURITES = 'REQUEST_FAVOURITES';

export const ADD_PREFERENCE = 'ADD_PREFERENCE';
export const REMOVE_PREFERENCE = 'REMOVE_PREFERENCE';
export const ADD_HEALTH_LABEL = 'ADD_HEALTH_LABEL';
export const ADD_DIET_LABEL = 'ADD_DIET_LABEL';
export const REMOVE_FILTER_LABEL = 'REMOVE_FILTER_LABEL';

export const REQUEST_COMMENT = 'REQUEST_COMMENT';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REQUEST_POST_COMMENT = 'REQUEST_POST_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';

export const REQUEST_DETAIL = 'REQUEST_DETAIL';
export const RECEIVE_DETAIL = 'RECEIVE_DETAIL';

export const CHANGE_CALORIES = 'CHANGE_CALORIES';

export const RECEIVE_ALL_PREFERENCES = 'RECEIVE_ALL_PREFERENCES';
export const REQUEST_PREFERENCES = 'REQUEST_PREFERENCES';
export const NOTIFICATION_FETCHING = 'NOTIFICATION_FETCHING';
export const NOTIFICATION_FETCHING_SUCCESS = 'NOTIFICATION_FETCHING_SUCCESS';
export const NOTIFICATION_FETCHING_FAILURE = 'NOTIFICATION_FETCHING_FAILURE';
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

export const EDAMAM_KEYS = [
  { appId: '3767af3b', appKey: '69ee56473afc34c85e1710efe3de4b8d' },
  { appId: '3db55968', appKey: 'bc9ab2f54295ce6e82c5fa5164ac0ca0' },
  { appId: '8d30ad7e', appKey: '2e15423acdc14ff0c010ea43cd8c94e8' },
  { appId: '466f05fe', appKey: 'df1f7c8e047ca64161163780b3db0941' },
  { appId: '227a70ef', appKey: '468efd20350ce1b05596a4735b53380c' },
  { appId: 'ea049b37', appKey: '603ff4b1649aa987b0ca427871c00ff7' },
  { appId: '1e3833cb', appKey: '9c239ee88ec503f1c77da6bb8d4de5a6' },
  { appId: '5322f28f', appKey: '17440feafedfb9f5aba5e275ee89828a' },
  { appId: 'da384541', appKey: '2d3acc6f361d2dc87c71c5fbff2d0203' },
  { appId: 'fc73119a', appKey: 'c4f3820ce1155909b446ca73f75f2758' }
];

export const BREAKFAST=['eggs','yogurt','coffee','oatmeal','nuts','tea','fruit'];
export const DINNER=['potato','chicken','pizza','vegetable','spaghetti'];
export const LUNCH=['salad','vegan','cutlet'];

