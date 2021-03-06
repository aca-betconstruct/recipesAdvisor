import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Container, Row, Col, CardImage, View, Fa } from 'mdbreact';
import PropTypes from 'prop-types';
import Comments from '../../containers/Comments';
import styles from './styles';

class Detail extends Component {
  back = event => {
    event.stopPropagation();
    this.props.history.goBack();
  };
  render() {
    const { classes, match, recipe, history } = this.props;
    const url = match.url.slice(8);

    return (
      <Container>
        <Row>
          <Col>
            <button onClick={this.back} className={classes.detailBack}>
              <i
                className="fa fa-arrow-left green-text fa-2x"
                aria-hidden="true"
              />
            </button>
          </Col>
          <Col md="5">
            <View zoom>
              <CardImage
                cascade
                src={recipe.image}
                alt="sample photo"
                top
                hover
                overlay="white-slight"
              />
            </View>
          </Col>
          <Col lg="5" md="5">
            <Row className="mb-5">
              <Col xl="10" md="11" size="10">
                <a className="green-text">
                  <h2 className="font-weight-bold mb-3">
                    <Fa icon="cutlery" className="pr-2" />
                    {recipe.label}
                  </h2>
                </a>
                <Row>
                  <div className={classes.tableDetail}>
                    <Col>
                      <h3 className="font-weight-bold black-text">
                        Ingredients
                      </h3>
                      {recipe.ingredientLines.map((elem, i) => {
                        return (
                          <h5 key={i}>
                            <strong>{elem}</strong>
                          </h5>
                        );
                      })}
                    </Col>
                  </div>
                </Row>
                <div className={classes.tableDetail}>
                  <div>
                    <h3 className="font-weight-bold black-text">Calories</h3>
                    <strong>{Math.ceil(recipe.calories)} kcal.</strong>
                  </div>
                  <div style={{ marginLeft: '20px' }}>
                    <h3 className="font-weight-bold black-text">
                      Total weight
                    </h3>
                    <strong>{Math.ceil(recipe.totalWeight)} g.</strong>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Comments url={url} history={history}/>
      </Container>
    );
  }
  static propTypes = {
    recipe: PropTypes.object,
    classes: PropTypes.object
  };
}

export default injectSheet(styles)(Detail);
