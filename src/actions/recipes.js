import {
  RECIPES_FETCHING,
  RECIPES_FETCHING_FAILURE,
  RECIPES_FETCHING_SUCCESS,
  RECIPES_UPDATE_SUCCESS,
  RECIPES_UPDATE_FAILURE,
  RANDOM_FOODS,
  EDAMAM_KEYS
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
  type = 'daily',
  calories = { min: 0, max: 5000 }
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
  if (labels.filter(item => item).length)
    connectedLabels = joiner(labels, labelsType);
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
    let api = EDAMAM_KEYS[Math.floor(Math.random() * EDAMAM_KEYS.length)];
    fetch(
      `https://api.edamam.com/search?q=${inclFoods}&app_id=${
        api.appId
      }&app_key=${api.appKey}&from=${page * count}&to=${count *
        (page + 1)}${connectedLabels}${excludesFoods}`
    )
      .then(recipes => recipes.json())
      .then(recipes => {
        return {
          ...recipes,
          hits: recipes.hits.filter(
            item =>
              item.recipe.calories >= calories.min &&
              item.recipe.calories <= calories.max
          )
        };
      })
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
    let api = EDAMAM_KEYS[Math.floor(Math.random() * EDAMAM_KEYS.length)];
    fetch(
      `https://api.edamam.com/search?q=${inclFoods}&app_id=${
        api.appId
      }&app_key=${api.appKey}&from=${page * count}&to=${count *
        (page + 1)}${connectedLabels}${excludesFoods}`
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
