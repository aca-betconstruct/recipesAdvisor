import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Row, Col } from 'mdbreact';
import PropTypes from 'prop-types';
import CommentList from '../../containers/CommentsList';
import styles from './styles';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      receptId: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { url } = this.props;
    this.setState({ text: event.target.value, receptId: url });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { postComment, jwt } = this.props;
    const { text, receptId } = this.state;
    postComment({ text: text, receptId }, jwt);
    this.setState({ text: ' ', receptId: ' ' });
  }
  render() {
    const { classes, url } = this.props;
    return (
      <div className={classes.commentsWrapper}>
        <Row>
          <Col className="responsive">
            <form method="post" onSubmit={this.handleSubmit}>
              <Row>
                <div className={`form-group ${classes.formGroup}`}>
                  <h5 className={classes.title}>Comments</h5>
                  <textarea
                    name="subject"
                    placeholder="Add comments .."
                    className={`form-control z-depth-1 ${classes.textArea}`}
                    id="exampleFormControlTextarea6"
                    rows="3"
                    value={this.state.text}
                    onChange={this.handleChange}
                  />
                </div>
              </Row>
              <div className={classes.row}>
                <button className={classes.button}>Success</button>
              </div>
            </form>
          </Col>
        </Row>
        <CommentList url={url} />
      </div>
    );
  }
  static propTypes = {
    url: PropTypes.string,
    jwt: PropTypes.string,
    postComment: PropTypes.func
  };
}

export default injectSheet(styles)(Comments);
