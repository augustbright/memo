import React, { ReactNode, MouseEvent } from 'react';
import { ArrayOfMaterial } from '../../lib/files';
import MaterialViewer from './MaterialViewer';
import { Message } from 'semantic-ui-react';

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

        this.onClickMessage = this.onClickMessage.bind(this);
    }

    showSubmaterial() {
        this.setState({
            showSubmaterial: true
        });
    }

    onClickMessage(event: MouseEvent): void {
        if (this.props.submaterial) {
            event.stopPropagation();
            this.showSubmaterial();
        }
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
                <Message positive={!!this.props.submaterial} onClick={this.onClickMessage}>
                    <Message.Header>
                        {this.props.title}
                        {this.props.submaterial ? `(${this.props.submaterial?.length})`: null}
                    </Message.Header>
                </Message>
                {this.state.showSubmaterial ? this.renderSubmaterial() : null}
            </div>
        );
    };
};

export default MaterialLine;