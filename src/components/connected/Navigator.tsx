import DummyNavigator, { MaterialDomain, NavigatorProps } from '../dummy/Navigator';
import { connect } from 'react-redux';
import { AppState } from '../../redux/configure';
import { AnyAction, Dispatch } from 'redux';
import { setLocation } from '../../redux/browser';
import { selectBrowser } from '../../redux/selectors';

const mapState = (state: AppState) => ({
    initialDomain: {
        owner: selectBrowser(state).owner,
        repository: selectBrowser(state).repository,
        branch: selectBrowser(state).branch
    },
    path: selectBrowser(state).path
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
    onApply: ({ owner, repository, branch }: MaterialDomain) => dispatch(setLocation({
        owner, repository, branch, path: ''
    }))
});

const withRedux = connect(mapState, mapDispatch);

export default withRedux(DummyNavigator);
