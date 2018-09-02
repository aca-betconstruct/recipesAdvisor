import {
  RECIPES_FETCHING,
  RECIPES_FETCHING_FAILURE,
  RECIPES_FETCHING_SUCCESS,
  RANDOM_FOODS
} from '../constants';

const randomRecipes = RANDOM_FOODS.map(food => food.name);

const recipesFetching = () => {
  return { type: RECIPES_FETCHING };
};

const recipesFetchingSuccess = (recipe, favs) => {
  return {
    type: RECIPES_FETCHING_SUCCESS,
    payload: {
      recipe,
      favs
    }
  };
};

const recipesFetchingFailure = () => {
  return {
    type: RECIPES_FETCHING_FAILURE
  };
};

const joiner = (arr, type) => {
  return `&${type}=` + arr.join(`&${type}=`);
};

export const getRecipes = (
  page = 0,
  labels = [],
  q,
  labelsType,
  preferences = [],
  favourites = [],
  type = 'daily'
) => dispatch => {
  dispatch(recipesFetching());
  const favs = favourites.map(fav => fav.favoriteId);
  const excludes = preferences
      .filter(item => !item.isLike)
      .map(item => item.text),
    includes = preferences.filter(item => item.isLike).map(item => item.text);

  let count = 10;
  let excludesFoods = '',
    connectedLabels = '';
  if (labels.length) connectedLabels = joiner(labels, labelsType);
  if (excludes.length) excludesFoods = joiner(excludes, 'excluded');
  let include = [];
  switch (type) {
    case 'daily':
      include.push(
        includes[Math.floor(Math.random() * includes.length)],
        includes[Math.floor(Math.random() * includes.length)]
      );
      break;
    case 'search':
      include.push(q);
      break;
    case 'random':
      include.push(
        randomRecipes[Math.floor(Math.random() * randomRecipes.length)],
        randomRecipes[Math.floor(Math.random() * randomRecipes.length)]
      );
      break;
    default:
      break;
  }
  include.forEach(inclFoods => {
    fetch(
      `https://api.edamam.com/search?q=${inclFoods}&app_id=a37bb1eb&app_key=3f704a5ce747891ed2b8978661054585&from=${page *
        count}&to=${count * (page + 1)}${connectedLabels}${excludesFoods}`
    )
      .then(recipes => recipes.json())
      .then(recipes => {
        return dispatch(recipesFetchingSuccess(recipes, favs));
      })
      .catch(error => {
        console.log(error);
        dispatch(recipesFetchingFailure());
      });
  });
};
