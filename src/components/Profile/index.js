import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

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

class ProfilePage extends Component {
  render() {
    return (
      <div className="table-item">
        {/*<div className="table">*/}
          {/*<div className="table-header">*/}
            {/*<PageHeader>*/}
              {/*Example page header <small>Subtext for header</small>*/}
            {/*</PageHeader>*/}
          {/*</div>*/}
          {/*<Table hover responsive className="container">*/}
            {/*<thead>*/}
              {/*<tr>*/}
                {/*<th style={{ color: 'rgb(0, 190, 0)' }}>day</th>*/}
                {/*<th>Breakfast</th>*/}
                {/*<th>Lunch</th>*/}
                {/*<th>Dinner</th>*/}
              {/*</tr>*/}
            {/*</thead>*/}
            {/*<tbody>*/}
              {/*{recepte.map((el, i) => {*/}
                {/*return (*/}
                  {/*<tr key={i}>*/}
                    {/*<td>*/}
                      {/*<Link*/}
                        {/*key={el.uri}*/}
                        {/*to={{*/}
                          {/*pathname: `/recepte/${el.uri.slice(51)}`,*/}
                          {/*state: { modal: true }*/}
                        {/*}}*/}
                      {/*>*/}
                        {/*{el.day}*/}
                      {/*</Link>*/}
                    {/*</td>*/}
                    {/*{el.recepte.map((e, id) => {*/}
                      {/*return <td>{e.label}</td>;*/}
                    {/*})}*/}
                  {/*</tr>*/}
                {/*);*/}
              {/*})}*/}
            {/*</tbody>*/}
          {/*</Table>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default ProfilePage;
