import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { selectLocationType, selectCurrentLocationFiles, selectCurrentLocationFile } from '../redux/selectors';
import { AppState } from '../redux/configure';
import DirectoryBrowser from './DirectoryBrowser';
import FileViewer from './FileViewer';

const mapStateToProps = (state: AppState) => ({
    locationType: selectLocationType(state),
    files: selectCurrentLocationFiles(state),
    file: selectCurrentLocationFile(state)
});
const mapDispatchToProps = {};
const withRedux = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof withRedux>;

type ContentAreaProps = PropsFromRedux & {};

class ContentArea extends React.Component<ContentAreaProps> {
    render() {
        switch (this.props.locationType) {
            case 'file':
                if (this.props.file) {
                    return <FileViewer file={this.props.file}/>
                } else {
                    return null;
                }
            default:
            case 'dir':
                return <DirectoryBrowser files={this.props.files} />
        }
    }
}

export default withRedux(ContentArea);