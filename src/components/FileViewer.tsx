import React from 'react';
import { File, Material } from '../lib/files';
import YAML from 'yaml';

type FileViewerProps = {
    file: File;
};

type FileViewerState = {
    material: Material | null;
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
        const material = YAML.parse(yamlContent) as Material;

        this.setState({ material });
    }

    renderMaterial(material: Material, level: number = 0): React.ReactNode {
        if (material instanceof Array) {
            return material.map((submaterial) => {
                return this.renderMaterial(submaterial, level + 1);
            });
        }
        return (
            <div key={material}>
                {'- '.repeat(level)}
                {material}
            </div>
        );
    }

    render() {
        if (this.state.material) {
            return this.renderMaterial(this.state.material);
        }
        return null;
    }
}

export default FileViewer;