import React from 'react';
import { ArrayOfMaterial } from '../../lib/files';
import MaterialLine from './MaterialLine';

type MaterialViewerProps = {
    material: ArrayOfMaterial;
};

type MaterialViewerState = {
    position: number;
};

class MaterialViewer extends React.Component<MaterialViewerProps, MaterialViewerState> {
    constructor(props: MaterialViewerProps) {
        super(props);
        this.state = {
            position: 0
        };
    }

    hasMore(): boolean {
        return (this.state.position + 1) < this.props.material.length;
    }

    renderMaterial(material: ArrayOfMaterial, level: number = 0): React.ReactNode {
        return material.slice(0, this.state.position + 1).map((materialItem, index) => {
            if (typeof materialItem === 'string') {
                return (
                    <div onClick={() => this.setState({ position: index })}>
                        <MaterialLine key={index} title={materialItem} />
                    </div>
                );
            }

            if (materialItem instanceof Array) {
                return (
                    <div onClick={() => this.setState({ position: index })}>
                        <MaterialLine key={index} title={materialItem[0]}
                            submaterial={materialItem.slice(1)} />
                    </div>
                );
            }
        });
    }

    renderNextButton(): React.ReactNode {
        return (
            <div>
                <button onClick={() => this.setState(state => ({ position: state.position + 1 }))}>
                    Next
                </button>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderMaterial(this.props.material)}
                {this.hasMore() ? this.renderNextButton() : null}
            </div>
        );
    }
};

export default MaterialViewer;
