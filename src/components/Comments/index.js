import React, { Component, Fragment } from 'react';
import { Row, Col} from 'mdbreact';
import './style.css';
import CommentList from '../../containers/CommentsList';

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
    const { postComment,jwt } = this.props;
    const { text,  receptId } = this.state;
    postComment({ text: text,  receptId }, jwt);
    this.setState({ text: ' ', receptId: ' ' });

  }
  render() {
    const { url } = this.props;
    return (
      <Fragment>
        <Row>
          <Col md="4" lg="3">
            <form method="post" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-75">
                  <textarea
                    name="subject"
                    placeholder="Comments .."
                    className="iteminput"
                    style={{ height: '200px' }}
                    value={this.state.text}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <button color="green" className="green-text">
                  Success
                </button>
              </div>
            </form>
          </Col>
        </Row>
        <CommentList
          url={url}
        />
      </Fragment>
    );
  }
}

export default Comments;
