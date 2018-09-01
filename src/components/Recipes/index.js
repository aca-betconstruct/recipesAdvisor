import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animation, Row, Col, Container } from 'mdbreact';
import InfiniteScroll from 'react-infinite-scroll-component';

import { BigCard, MediumCard } from '../Cards/index';

const jwt = localStorage.getItem('jwt');
let curPage = 0;

class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curIndex: 0,
      zoomOut: false,
      zoomIn: false
    };

    this.fetchMoreData = this.fetchMoreData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const {
      getPreferences,
      getFetchFavourites,
      getRecipes,
      nextPage,
      curPage,
      labelsType,
      labels,
      q,
      type
    } = this.props;
    const pref = new Promise(resolve => resolve(getPreferences(jwt)));
    pref.then(() => getFetchFavourites(jwt)).then(() => {
      const { preferences, favourites } = this.props;
      getRecipes(curPage, labels, q, labelsType, preferences, favourites, type);
    });
    nextPage(curPage + 1);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) {
      const {
        firstPage,
        getRecipes,
        labelsType,
        labels,
        q,
        preferences,
        favourites,
        type
      } = this.props;
      if (labels !== prevProps.labels || q !== prevProps.q) {
        curPage = 0;
        firstPage();
        getRecipes(
          curPage,
          labels,
          q,
          labelsType,
          preferences,
          favourites,
          type
        );
      }
    }
  }

  handleClick(index) {
    const { curIndex } = this.state;
    if (curIndex !== index) {
      const animationStart = new Promise(resolve =>
        resolve(this.setState({ zoomOut: true, zoomIn: false }))
      );
      animationStart.then(() => {
        const a = '';
        setTimeout(
          () =>
            this.setState({ curIndex: index, zoomOut: false, zoomIn: true }),
          550
        );
      });
    }
  }

  fetchMoreData() {
    let time = 15000;
    const {
      getRecipes,
      nextPage,
      curPage,
      labelsType,
      labels,
      q,
      preferences,
      favourites,
      type
    } = this.props;
    setTimeout(
      () =>
        getRecipes(
          curPage,
          labels,
          q,
          labelsType,
          preferences,
          favourites,
          type
        ),
      time
    );
    nextPage(curPage + 1);
  }

  static propTypes = {
    curPage: PropTypes.number,
    nextPage: PropTypes.func,
    preferences: PropTypes.array,
    getRecipes: PropTypes.func,
    isRecipesFetching: PropTypes.bool,
    recipes: PropTypes.array,
    classes: PropTypes.object
  };
  static defaultProps = {
    isRecipesFetching: false,
    recipes: []
  };

  render() {
    const { curIndex, zoomOut, zoomIn } = this.state;
    const { recipes } = this.props;
    return (
      <Container style={{ width: '800px' }} className="mt-5">
        <Row style={{ marginTop: '25px' }}>
          {recipes.length ? (
            zoomOut ? (
              <Animation
                type={'zoomOutDown'}
                duration={'700ms'}
                className={`col-md-12 col-lg-6`}
              >
                <BigCard recipe={recipes[curIndex]} />
              </Animation>
            ) : zoomIn ? (
              <Animation
                type={'zoomInUp'}
                duration={'700ms'}
                className={'col-md-12 col-lg-6'}
              >
                <BigCard recipe={recipes[curIndex]} />
              </Animation>
            ) : (
              <Col md="12" lg="6">
                <BigCard recipe={recipes[curIndex]} />
              </Col>
            )
          ) : (
            ''
          )}
          <Col md="12" lg="6">
            <InfiniteScroll
              style={{ overflowX: 'hidden' }}
              height={420}
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
              {recipes.map(recipe =>
                recipe.hits.map((item, index) => (
                  <MediumCard
                    recipe={item}
                    image={item.image}
                    key={index}
                    onClick={() => this.handleClick(index)}
                  />
                ))
              )}
            </InfiniteScroll>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Recipes;
