import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  View,
  Mask,
  Fa
} from 'mdbreact';
import { Link } from 'react-router-dom';

class BigCard extends Component {
  render() {
    const { image, label, ingredients } = this.props.recipe.recipe;
    return (
      <div className="mb-4">
        <View hover rounded className="z-depth-1-half mb-4">
          <img className="img-fluid" src={image} alt="Sample image" />
          <a>
            <Mask overlay="white-slight" className="waves-light" />
          </a>
        </View>
        <div className="d-flex justify-content-between">
          <a className="deep-orange-text">
            <h6 className="font-weight-bold">
              <Fa icon="cutlery" className="pr-2" />
              Culinary
            </h6>
          </a>
          <p className="font-weight-bold dark-grey-text">
            <Fa icon="clock-o" className="pr-2" />
            27/02/2018
          </p>
        </div>
        <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
          <Link to={'somewhere'} style={{ color: 'black' }}>
            {label}
          </Link>
        </h3>
        <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
          Sed ut perspiciatis unde voluptatem omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          explicabo. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat.
          {
            //   ingredients.map(v => (
            //   <div>{v.text}</div>
            // ))
          }
        </p>
      </div>
    );
  }
}
export default BigCard;
