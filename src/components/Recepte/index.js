import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ViewPage from '../ViewPage';
let recepte = [
  {
    day: 1,
    uri:
      'http://www.edamam.com/ontologies/edamam.owl#recipe_3f0ce55d11f4a075bb39c2091e59e261',
    recepte: [
      {
        uri:
          'http://www.edamam.com/ontologies/edamam.owl#recipe_3f0ce55d11f4a075bb39c2091e59e261',
        label: 'Deep Fried Fish Bones',
        image:
          'https://www.edamam.com/web-img/c8c/c8ccf12e2aa2c78b94817f18cd4eaff2.jpg',
        dietLabels: ['Low-Carb'],
        healthLabels: [
          'Sugar-Conscious',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Alcohol-Free'
        ],
        ingredientLines: [
          '8 small whiting fish or smelt',
          '4 cups vegetable oil'
        ]
      },
      {
        uri:
          'http://www.edamam.com/ontologies/edamam.owl#recipe_ffb72e7b53285253a66b46255ce261c8',
        label: 'Fish Veracruz',
        image:
          'https://www.edamam.com/web-img/3b8/3b8e16423e91011abe89322659ecf908.jpg',
        dietLabels: ['High-Protein', 'Low-Carb'],
        healthLabels: [
          'Sugar-Conscious',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Alcohol-Free'
        ],
        ingredientLines: [
          '4 pieces of fish (snapper, salmon, halibut or swordfish all work great)',
          '1 small onion diced',
          '4 large cloves of garlic minced',
          '3 medium tomatoes diced',
          '1 serrano chili minced',
          '1/2 c pitted green olives sliced in half',
          '1/3 c capers in brine drained',
          '1/2 tsp mexican oregano',
          '1/4 tsp marjoram',
          '1 california bay leaf',
          '1/2 tsp kosher salt (halve if using table salt)',
          '2 tbs cilantro minced',
          'Lime wedges'
        ]
      },
      {
        uri:
          'http://www.edamam.com/ontologies/edamam.owl#recipe_672c9e7e3fbc6240477d99152ba8f6b3',
        label: 'Burnt-Scallion Fish',
        image:
          'https://www.edamam.com/web-img/a96/a967fbe797803dbe8418a668cf304b53.jpg',
        dietLabels: ['Low-Carb'],
        healthLabels: [
          'Sugar-Conscious',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Alcohol-Free'
        ],
        ingredientLines: [
          '2 bunches scallions',
          '8 tbsp. butter',
          '2 8-oz. fish filets'
        ]
      }
    ]
  },
  {
    day: 2,
    uri:
      'http://www.edamam.com/ontologies/edamam.owl#recipe_3f0ce55d11f4a075bb39c2091e59e261barev',
    recepte: [
      {
        uri:
          'http://www.edamam.com/ontologies/edamam.owl#recipe_3f0ce55d11f4a075bb39c2091e59e261',
        label: 'Deep Fried Fish Bones',
        image:
          'https://www.edamam.com/web-img/c8c/c8ccf12e2aa2c78b94817f18cd4eaff2.jpg',
        dietLabels: ['Low-Carb'],
        healthLabels: [
          'Sugar-Conscious',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Alcohol-Free'
        ],
        ingredientLines: [
          '8 small whiting fish or smelt',
          '4 cups vegetable oil'
        ]
      },
      {
        uri:
          'http://www.edamam.com/ontologies/edamam.owl#recipe_ffb72e7b53285253a66b46255ce261c8',
        label: 'Fish Veracruz',
        image:
          'https://www.edamam.com/web-img/3b8/3b8e16423e91011abe89322659ecf908.jpg',
        dietLabels: ['High-Protein', 'Low-Carb'],
        healthLabels: [
          'Sugar-Conscious',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Alcohol-Free'
        ],
        ingredientLines: [
          '4 pieces of fish (snapper, salmon, halibut or swordfish all work great)',
          '1 small onion diced',
          '4 large cloves of garlic minced',
          '3 medium tomatoes diced',
          '1 serrano chili minced',
          '1/2 c pitted green olives sliced in half',
          '1/3 c capers in brine drained',
          '1/2 tsp mexican oregano',
          '1/4 tsp marjoram',
          '1 california bay leaf',
          '1/2 tsp kosher salt (halve if using table salt)',
          '2 tbs cilantro minced',
          'Lime wedges'
        ]
      },
      {
        uri:
          'http://www.edamam.com/ontologies/edamam.owl#recipe_672c9e7e3fbc6240477d99152ba8f6b3',
        label: 'Burnt-Scallion Fish',
        image:
          'https://www.edamam.com/web-img/a96/a967fbe797803dbe8418a668cf304b53.jpg',
        dietLabels: ['Low-Carb'],
        healthLabels: [
          'Sugar-Conscious',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Alcohol-Free'
        ],
        ingredientLines: [
          '2 bunches scallions',
          '8 tbsp. butter',
          '2 8-oz. fish filets'
        ]
      }
    ]
  }
];

class ReceptePage extends Component {


  back = event => {
    event.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    const { match, recipes } = this.props;
    return (
      <div>
        {recipes.map((recipe, i) => {
          console.log('a',recipe)
          return recipe.hits.map((item, index) => {
            console.log('b',item.uri)
            return (<ViewPage match={match}  recipe={item.recipe}/>)
          });
        })}
      </div>
    );
  }
}

export default ReceptePage;
