import {
  RECIPES_FETCHING,
  RECIPES_FETCHING_FAILURE,
  RECIPES_FETCHING_SUCCESS,
  RECIPES_UPDATE_SUCCESS,
  RECIPES_UPDATE_FAILURE,
  RANDOM_FOODS
} from '../constants';

const randomRecipes = RANDOM_FOODS.map(food => food.name);
const edamamKeys = [
  { appId: '3767af3b', appKey: '69ee56473afc34c85e1710efe3de4b8d' },
  { appId: 'a37bb1eb', appKey: '3f704a5ce747891ed2b8978661054585' },
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
    let api = edamamKeys[Math.floor(Math.random() * edamamKeys.length)];
    fetch(
      `https://api.edamam.com/search?q=${inclFoods}&app_id=${
        api.appId
      }&app_key=${api.appKey}&from=${page * count}&to=${count *
        (page + 1)}${connectedLabels}${excludesFoods}`
    )
      .then(recipes => recipes.json())
      .then(recipes => {
        console.log(recipes);
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
        console.log('1', recipes);
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
    let api = edamamKeys[Math.floor(Math.random() * edamamKeys.length)];
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
