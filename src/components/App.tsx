import React, { MouseEvent } from "react";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { loadFiles } from '../redux/browser';
import { AppState } from "../redux/configure";
import { getFileLocationFromPathname } from '../lib/files'
import { compose } from 'redux';

const mapState = (state: AppState) => ({});
const mapDispatch = { loadFiles };
const withRedux = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof withRedux>

type AppProps = RouteComponentProps & PropsFromRedux & {}

class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  componentDidMount() {
    this.updateLocation();
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (prevProps.location !== this.props.location) {
      this.updateLocation();
    }
  }

  updateLocation(): void {
    this.props.loadFiles(
      getFileLocationFromPathname(this.props.location.pathname)
    );
  }

  onButtonClick(event: MouseEvent): void {
    event.preventDefault();
    this.props.history.push('/hola1');
  }

  render() {
    return (
      <div>
        <h1>This is a react app</h1>
        <p>Lorem, ipsum dolor</p>
        <button onClick={this.onButtonClick}>to hola</button>
      </div>
    );
  }
}

export default compose(withRedux, withRouter)(App);