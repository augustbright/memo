import React from 'react';
import { File, ArrayOfMaterial } from '../lib/files';
import YAML from 'yaml';
import MaterialViewer from './dummy/MaterialViewer';

type FileViewerProps = {
    file: File;
};

type FileViewerState = {
    material: ArrayOfMaterial | null;
}

class FileViewer extends React.Component<FileViewerProps, FileViewerState> {
    constructor(props: FileViewerProps) {
        super(props);
        this.state = {
            material: null
        };
    }

    componentDidMount(): void {
        this.prepareMaterial();
    }

    componentDidUpdate(prevProps: FileViewerProps): void {
        if (prevProps.file !== this.props.file) {
            this.prepareMaterial();
        }
    }

    prepareMaterial(): void {
        if (!this.props.file.content) {
            this.setState({
                material: null
            });
            return;
        }
        const yamlContent = atob(this.props.file.content);
        const material = YAML.parse(yamlContent) as ArrayOfMaterial;

        this.setState({ material });
    }

    render() {
        if (this.state.material) {
            return <MaterialViewer material={this.state.material} />
        }
        return null;
    }
}

export default FileViewer;