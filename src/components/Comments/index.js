import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';
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
    const { postComment, jwt } = this.props;
    const { text, receptId } = this.state;
    postComment({ text: text, receptId }, jwt);
    this.setState({ text: ' ', receptId: ' ' });
  }
  render() {
    const { url } = this.props;
    const { text } = this.state;
    return (
      <Fragment>
        <Row>
          <Col md="4" lg="3" className="responsive">
            <form method="post" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="form-group">
                  <hr
                    color="green"
                    style={{ width: '1200px', marginTop: '150px' }}
                  />
                  <textarea
                    name="subject"
                    placeholder="Add comments .."
                    className="form-control rounded-0 z-depth-1"
                    id="exampleFormControlTextarea6"
                    rows="3"
                    style={{
                      marginTop: '60px',
                      width: '500px',
                      marginLeft: '30px'
                    }}
                    value={this.state.text}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="row" style={{ marginLeft: '420px' }}>
                <button
                  style={{
                    backgroundColor: 'green',
                    border: 0,
                    color: 'white',
                    padding: '8px'
                  }}
                  disabled={text.trim() === ''}
                >
                  Success
                </button>
              </div>
            </form>
          </Col>
        </Row>
        <CommentList url={url} />
      </Fragment>
    );
  }
}

export default Comments;
