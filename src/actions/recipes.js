import {
  RECIPES_FETCHING,
  RECIPES_FETCHING_FAILURE,
  RECIPES_FETCHING_SUCCESS,
  RECIPES_UPDATE_SUCCESS,
  RECIPES_UPDATE_FAILURE,
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

const recipesUpdateSuccess = (recipe, favs) => {
  return {
    type: RECIPES_UPDATE_SUCCESS,
    payload: {
      recipe,
      favs
    }
  };
};

const recipesUpdateFailure = () => {
  return {
    type: RECIPES_UPDATE_FAILURE
  };
};

const joiner = (arr, type) => {
  return `&${type}=${arr.join(`&${type}=`)}`;
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

  let count = 20;
  let excludesFoods = '',
    connectedLabels = '';
  if (labels.length) connectedLabels = joiner(labels, labelsType);
  if (excludes.length) excludesFoods = joiner(excludes, 'excluded');
  let include = [];
  switch (type) {
    case 'random':
      include.push(
        randomRecipes[Math.floor(Math.random() * randomRecipes.length)],
        randomRecipes[Math.floor(Math.random() * randomRecipes.length)]
      );
      break;
    case 'daily':
      if (includes.length) {
        if (includes.length > 2) {
          include.push(
            includes[Math.floor(Math.random() * includes.length)],
            includes[Math.floor(Math.random() * includes.length)]
          );
        } else {
          include = includes;
        }
      } else {
        include.push(
          randomRecipes[Math.floor(Math.random() * randomRecipes.length)],
          randomRecipes[Math.floor(Math.random() * randomRecipes.length)]
        );
      }
      break;
    case 'search':
      include.push(q);
      break;
    default:
      break;
  }
  let recipe = [];
  include.forEach(inclFoods => {
    fetch(
      `https://api.edamam.com/search?q=${inclFoods}&app_id=466f05fe&app_key=df1f7c8e047ca64161163780b3db0941&from=${page *
        count}&to=${count * (page + 1)}${connectedLabels}${excludesFoods}`
    )
      .then(recipes => recipes.json())
      .then(recipes => {
        recipe.push(recipes);
        dispatch(recipesFetchingSuccess(recipe, favs));
      })
      .catch(error => {
        console.log(error);
        dispatch(recipesFetchingFailure());
      });
  });
};

export const updateRecipes = (
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

  let count = 20;
  let excludesFoods = '',
    connectedLabels = '';
  if (labels.length) connectedLabels = joiner(labels, labelsType);
  if (excludes.length) excludesFoods = joiner(excludes, 'excluded');
  let include = [];
  switch (type) {
    case 'random':
      include.push(
        randomRecipes[Math.floor(Math.random() * randomRecipes.length)],
        randomRecipes[Math.floor(Math.random() * randomRecipes.length)]
      );
      break;
    case 'daily':
      if (includes.length) {
        if (includes.length > 2) {
          include.push(
            includes[Math.floor(Math.random() * includes.length)],
            includes[Math.floor(Math.random() * includes.length)]
          );
        } else {
          include = includes;
        }
      } else {
        include.push(
          randomRecipes[Math.floor(Math.random() * randomRecipes.length)],
          randomRecipes[Math.floor(Math.random() * randomRecipes.length)]
        );
      }
      break;
    case 'search':
      include.push(q);
      break;
    default:
      break;
  }
  include.forEach(inclFoods => {
    fetch(
      `https://api.edamam.com/search?q=${inclFoods}&app_id=8d30ad7e&app_key=2e15423acdc14ff0c010ea43cd8c94e8&from=${page *
        count}&to=${count * (page + 1)}${connectedLabels}${excludesFoods}`
    )
      .then(recipes => recipes.json())
      .then(recipes => {
        return dispatch(recipesUpdateSuccess(recipes, favs));
      })
      .catch(error => {
        console.log(error);
        dispatch(recipesUpdateFailure());
      });
  });
};
