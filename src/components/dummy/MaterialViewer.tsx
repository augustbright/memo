import React, { MouseEvent } from 'react';
import { ArrayOfMaterial } from '../../lib/files';
import MaterialLine from './MaterialLine';
import { List, Message } from 'semantic-ui-react';

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

        this.onClickNext = this.onClickNext.bind(this);
    }

    hasMore(): boolean {
        return (this.state.position + 1) < this.props.material.length;
    }

    onClickItem(event: MouseEvent, index: number) {
        event.stopPropagation();
        this.setState({ position: index });
    }

    renderMaterial(material: ArrayOfMaterial, level: number = 0): React.ReactNode {
        return material.slice(0, this.state.position + 1).map((materialItem, index) => {
            let itemContent: React.ReactNode;

            if (typeof materialItem === 'string') {
                itemContent = <MaterialLine key={index} title={materialItem} />;
            }

            if (materialItem instanceof Array) {
                itemContent = (
                    <MaterialLine key={index} title={materialItem[0]}
                        submaterial={materialItem.slice(1)} />
                );
            }

            return (
                <List.Item onClick={(event) => this.onClickItem(event, index)}>
                    <List.Content>
                        {itemContent}
                    </List.Content>
                </List.Item>
            );
        });
    }

    onClickNext(event: MouseEvent) {
        event.stopPropagation();
        this.setState(state => ({ position: state.position + 1 }));
    }

    renderNextButton(): React.ReactNode {
        return (
            <List.Item onClick={this.onClickNext}>
                <List.Content>
                    <Message warning onClick={this.onClickNext}>
                        <Message.Header>
                            {this.props.material.length - this.state.position}
                        </Message.Header>
                    </Message>
                </List.Content>
            </List.Item>
        );
    }

    render() {
        return (
            <List>
                {this.renderMaterial(this.props.material)}
                {this.hasMore() ? this.renderNextButton() : null}
            </List>
        );
    }
};

export default MaterialViewer;
