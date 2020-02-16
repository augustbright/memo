import React from 'react';
import { File, getPathnameFromFileLocation, getFileLocation } from '../lib/files';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';

type DirectoryBrowserProps = {
    files: File[];
};

class DirectoryBrowser extends React.Component<DirectoryBrowserProps> {
    render() {
        return (
            <List>
                {this.props.files.map(file => (
                    <List.Item key={file.id}>
                        <List.Icon name={file.type === 'dir' ? 'folder' : 'file'} />
                        <List.Content>
                            <List.Header>
                                <Link to={getPathnameFromFileLocation(getFileLocation(file.id))}>
                                    {file.name}
                                </Link>
                            </List.Header>
                        </List.Content>
                    </List.Item>
                ))}
            </List>
        );
    }
}

export default DirectoryBrowser;