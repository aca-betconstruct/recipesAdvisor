import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import CommentListPage from '../CommentsList';

class CommentPage extends Component {
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
    const jwt = JSON.parse(localStorage.getItem('store')).jwt;
    const { fetchpComment } = this.props;
    const { text, receptId } = this.state;

    fetchpComment({ text: text, receptId: receptId }, jwt);
    this.setState({ text: ' ', receptId: ' ' });
  }
  render() {
    const { fetchComment, comments, url, auth } = this.props;
    return (
      <Fragment>
        <Row>
          <Col md="4" lg="3" className="responsive">
            <form method="post" onSubmit={this.handleSubmit}>
              <div className="row">
                <div class="form-group">
                  <hr
                    color="green"
                    style={{ width: '1200px', marginTop: '150px' }}
                  />
                  <textarea
                    name="subject"
                    placeholder="Add comments .."
                    class="form-control rounded-0 z-depth-1"
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
                >
                  Success
                </button>
              </div>
            </form>
          </Col>
        </Row>
        <CommentListPage
          fetchComment={fetchComment}
          comments={comments}
          url={url}
          auth={auth}
        />
      </Fragment>
    );
  }
}

export default CommentPage;
