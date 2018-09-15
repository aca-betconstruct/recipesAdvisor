import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

let interval;
class MyNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ignore: true
    };
  }
  componentDidMount() {
    const { getRecipesForNotification } = this.props;
    interval = setInterval(() => {
      console.log(new Date().toLocaleTimeString({}, { hour12: false }));
      switch (new Date().toLocaleTimeString({}, { hour12: false })) {
        case '9:00:00':
          getRecipesForNotification('breakfast');
          break;
        case '13:30:00':
          getRecipesForNotification('lunch');
          break;
        case '17:00:00':
          getRecipesForNotification('dinner');
          break;
        default:
          break;
      }
    }, 1000);
  }
  componentDidUpdate(prevProps) {
    const { notification, isNotificationFetching } = this.props;
    if (prevProps.notification !== notification && !isNotificationFetching) {
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
      createdNotification = new Notification('We offer you the recipe.', {
        body: notification.label,
        icon: notification.image
      });

      createdNotification.onclick = () => {
        history.push(`/detail/${notification.uri.slice(44)}`);
        createdNotification.close();
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
  static propTypes = {
    notification: PropTypes.object,
    isNotificationFetching: PropTypes.bool,
    getRecipesForNotification: PropTypes.func
  };
}
export default withRouter(MyNotification);
