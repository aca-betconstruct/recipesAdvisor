import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss';
import { Row, Col } from 'mdbreact';
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
      <Fragment>
        <Row>
          <Col md="4" lg="3" className="responsive">
            <form method="post" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="form-group">
                  <hr className={classes.hr} />
                  <textarea
                    name="subject"
                    placeholder="Add comments .."
                    className={`form-control rounded-0 z-depth-1 + ${
                      classes.textarea
                    }`}
                    id="exampleFormControlTextarea6"
                    rows="3"
                    value={this.state.text}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className={classes.row}>
                <button className={classes.button}>Success</button>
              </div>
            </form>
          </Col>
        </Row>
        <CommentList url={url} />
      </Fragment>
    );
  }
}

export default injectSheet(styles)(Comments);
