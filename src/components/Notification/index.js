import { Component } from 'react';
import { withRouter } from 'react-router-dom';

let interval;
class MyNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ignore: true
    };
  }
  componentDidMount() {
    interval = setInterval(() => {
      switch (new Date().toLocaleTimeString({}, { hour12: false })) {
        case '17:39:00':
          this.props.getRecipesForNotification('breakfast');
          break;
        case '0:39:00':
          this.props.getRecipesForNotification('dinner');
          break;
        case '0:43:00':
          this.props.getRecipesForNotification('supper');
          break;
        default:
          break;
      }
    }, 1000);
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.notification !== this.props.notification &&
      !this.props.isNotificationFetching
    ) {
      this.initNotifications();
    }
  }

  initNotifications = () => {
    if (window.Notification) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          this.setState({
            ignore: false
          });
          this.showNotification();
        } else {
          alert('You denied Notification ,it is a sad:(');
        }
      });
    } else {
      alert('Your browser does not support Notification API');
      this.setState({
        ignore: true
      });
    }
  };

  showNotification = () => {
    let { ignore } = this.state;
    const { history, notification } = this.props;
    let createdNotification;
    if (!ignore && notification.uri) {
      createdNotification = new Notification(notification.label, {
        body: 'You clicked on the button!',
        icon: notification.image
      });
      createdNotification.onclick = () => {
        history.push(`/detail/${notification.uri.slice(44)}`);
      };
    } else {
      alert('Notification are disabled');
    }
  };
  componentWillUnmount() {
    clearInterval(interval);
  }
  render() {
    return null;
  }
}
export default withRouter(MyNotification);
