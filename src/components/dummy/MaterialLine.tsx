import React, { ReactNode } from 'react';
import { ArrayOfMaterial } from '../../lib/files';
import MaterialViewer from './MaterialViewer';

type MaterialLineProps = {
    title: string;
    submaterial?: ArrayOfMaterial;
};

type MaterialLineState = {
    showSubmaterial: boolean;
};

class MaterialLine extends React.Component<MaterialLineProps, MaterialLineState> {
    constructor(props: MaterialLineProps) {
        super(props);
        this.state = {
            showSubmaterial: false
        };
    }

    showSubmaterial() {
        this.setState({
            showSubmaterial: true
        });
    }

    renderExpandButton(): React.ReactNode {
        return (
            <button onClick={() => this.showSubmaterial()}>
                {`(${this.props.submaterial?.length})`}
            </button>
        );
    }

    renderSubmaterial(): ReactNode {
        if (!this.props.submaterial) return null;

        return (
            <div style={{paddingLeft: '10px'}}>
                <MaterialViewer material={this.props.submaterial}/>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.props.title}
                {this.props.submaterial && !this.state.showSubmaterial ? this.renderExpandButton() : null}
                {this.state.showSubmaterial ? this.renderSubmaterial() : null}
            </div>
        );
    };
};

export default MaterialLine;