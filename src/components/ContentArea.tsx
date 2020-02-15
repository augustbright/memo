import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { selectLocationType, selectCurrentLocationFiles } from '../redux/selectors';
import { AppState } from '../redux/configure';
import DirectoryBrowser from './DirectoryBrowser';

const mapStateToProps = (state: AppState) => ({
    locationType: selectLocationType(state),
    files: selectCurrentLocationFiles(state)
});
const mapDispatchToProps = {};
const withRedux = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof withRedux>;

type ContentAreaProps = PropsFromRedux & {};

class ContentArea extends React.Component<ContentAreaProps> {
    render() {
        switch (this.props.locationType) {
            case 'file':
                return 'This is file';

            default:
            case 'dir':
                return <DirectoryBrowser files={this.props.files} />
        }
    }
}

export default withRedux(ContentArea);