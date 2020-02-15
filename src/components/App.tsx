import React from "react";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { setLocation as browserSetLocation } from '../redux/browser';
import { AppState } from "../redux/configure";
import { getFileLocationFromPathname } from '../lib/files'
import { compose } from 'redux';
import ContentArea from './ContentArea';

const mapState = (state: AppState) => ({});
const mapDispatch = { browserSetLocation };
const withRedux = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof withRedux>

type AppOwnProps = {}
type AppProps = RouteComponentProps & PropsFromRedux & AppOwnProps

class App extends React.Component<AppProps> {
  componentDidMount() {
    this.updateLocation();
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (prevProps.location !== this.props.location) {
      this.updateLocation();
    }
  }

  updateLocation(): void {
    this.props.browserSetLocation(
      getFileLocationFromPathname(this.props.location.pathname + this.props.location.search)
    );
  }

  render() {
    return (
      <div>
        <ContentArea />
      </div>
    );
  }
}

export default compose(withRedux, withRouter)(App) as React.ComponentClass<AppOwnProps>;