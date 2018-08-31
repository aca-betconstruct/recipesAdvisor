import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
// import Pagination from '../../containers/Pagination';
import Recipe from '../../containers/Recipe';
import Loader from '../Loader';
import injectSheet from 'react-jss';
import styles from './styles';
import { Container, Row } from 'mdbreact';

let curPage = 0;

class Recipes extends Component {
  constructor(props) {
    super(props);

    this.qJoiner = this.qJoiner.bind(this);
    this.fetchMoreData = this.fetchMoreData.bind(this);
  }

  componentDidMount() {
    const { getRecipes, nextPage, curPage, type, labels, q } = this.props;
    getRecipes(curPage, labels, q, type);
    nextPage(curPage + 1);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) {
      const { labels, firstPage, getRecipes, q, type } = this.props;
      if (labels !== prevProps.labels || q !== prevProps.q) {
        curPage = 0;
        firstPage();
        getRecipes(curPage, labels, q, type);
      }
    }
  }

  static propTypes = {
    curPage: PropTypes.number,
    includes: PropTypes.array,
    excludes: PropTypes.array,
    getRecipes: PropTypes.func,
    isRecipesFetching: PropTypes.bool,
    recipes: PropTypes.array,
    classes: PropTypes.object
  };
  static defaultProps = {
    isRecipesFetching: false,
    recipes: []
  };

  qJoiner() {
    const { recipes } = this.props;
    let labels = '';
    recipes.map(elem => (labels = labels + elem.q + ', '));
    return labels.substring(0, labels.length - 2);
  }

  fetchMoreData() {
    let time = 15000;
    const { getRecipes, type, labels, q, curPage, nextPage } = this.props;
    //   curPage ? (time = 15000) : (time = 500);
    setTimeout(() => getRecipes(curPage, labels, q, type), time);
    nextPage(curPage + 1);
  }

  render() {
    const { isRecipesFetching, recipes, classes } = this.props;
    // if (isRecipesFetching === false) {
    return (
      <div>
        <InfiniteScroll
          style={{ overflow: 'hidden' }}
          dataLength={recipes.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Container>
            <Row className={classes.recipes}>
              {recipes.map(item =>
                item.hits.map((recipe, index) => {
                  return (
                    <Recipe
                      recipe={recipe.recipe}
                      key={recipe.recipe.url}
                      index={index}
                      q={item.q}
                      type={'profile'}
                    />
                  );
                })
              )}
            </Row>
          </Container>
        </InfiniteScroll>
        {recipes.length ? (
          recipes.some(item => item.count > 0) ? (
            ''
          ) : (
            <h1>
              Sorry! There are not '{this.qJoiner()}'{' '}
              {recipes.length === 1 ? 'recipe' : 'recipes'}
            </h1>
          )
        ) : (
          <Loader />
        )}
      </div>
    );
    // } else {
    // return <Loader />;
    // }
  }
}

export default injectSheet(styles)(Recipes);
