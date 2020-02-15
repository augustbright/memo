import React from 'react';
import { File, getPathnameFromFileLocation, getFileLocation } from '../lib/files';
import { Link } from 'react-router-dom';

type DirectoryBrowserProps = {
    files: File[];
};

class DirectoryBrowser extends React.Component<DirectoryBrowserProps> {
    render() {
        return (
            <div>
                {this.props.files.map(file => (
                    <div>
                        <Link key={file.id} to={getPathnameFromFileLocation(getFileLocation(file.id))}>
                            {file.name}
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default DirectoryBrowser;