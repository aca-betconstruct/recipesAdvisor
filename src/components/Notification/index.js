import React from 'react';
import { withRouter } from 'react-router-dom';

let timeout;
class MyNotification extends React.Component {
  constructor() {
    super();
    this.state = {
      ignore: true
    };
  }
  componentDidMount() {
    timeout = setInterval(() => {
      switch (new Date().toLocaleTimeString()) {
        case '17:50:50':
          this.props.getRecipesForNotification('breakfast');
          break;
        case '13:30:00':
          this.props.getRecipesForNotification('lunch');
          break;
        case '17:00:00':
          this.props.getRecipesForNotification('dinner');
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
          alert('You denited Notification ,it is a sad:(');
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
      createdNotification = new Notification('We offer you the recipe.', {
        body: notification.label,
        icon: notification.image
      });

      createdNotification.onclick = () => {
        history.push(`/detail/${notification.uri.slice(44)}`);
      };

      timeout = setTimeout(() => createdNotification.close(), 5000);
    } else {
      alert('Notification are disabled');
    }
  };
  componentWillUnmount() {
    clearInterval(timeout);
  }
  render() {
    return '';
  }
}
export default withRouter(MyNotification);
