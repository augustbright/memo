import React, { ChangeEvent } from 'react';
import { getPathnameFromFileLocation } from '../../lib/files';
import { Link } from 'react-router-dom';
import { Form, FormField, Button, Breadcrumb, Step, Icon } from 'semantic-ui-react';

export type MaterialDomain = {
    owner?: string;
    repository?: string;
    branch?: string;
};

export type NavigatorProps = {
    onApply: (domain: MaterialDomain) => void;
    initialDomain: MaterialDomain;
    path?: string;
};

export type NavigatorState = MaterialDomain & {
    collapsed: boolean;
};

class Navigator extends React.Component<NavigatorProps, NavigatorState> {
    constructor(props: NavigatorProps) {
        super(props);
        this.state = {
            collapsed: true
        };

        this.onChangeOwner = this.onChangeOwner.bind(this);
        this.onChangeRepository = this.onChangeRepository.bind(this);
        this.onChangeBranch = this.onChangeBranch.bind(this);
        this.onClickCancel = this.onClickCancel.bind(this);
        this.onClickApply = this.onClickApply.bind(this);
    }

    onChangeOwner(event: ChangeEvent<HTMLInputElement>): void {
        this.setState({
            owner: event.target.value
        });
    }

    onChangeRepository(event: ChangeEvent<HTMLInputElement>): void {
        this.setState({
            repository: event.target.value
        });
    }

    onChangeBranch(event: ChangeEvent<HTMLInputElement>): void {
        this.setState({
            branch: event.target.value
        });
    }

    onClickCancel(): void {
        this.clearDomain();
        this.setState({ collapsed: true });
    }

    onClickApply(): void {
        this.clearDomain();
        this.setState({ collapsed: true });
    }

    getDomain(): MaterialDomain {
        return {
            owner: this.state.owner,
            repository: this.state.repository,
            branch: this.state.branch
        };
    }

    clearDomain(): void {
        this.setState({
            owner: '',
            repository: '',
            branch: ''
        });
    }

    getHref(path = ''): string {
        return getPathnameFromFileLocation({
            owner: this.state.owner || this.props.initialDomain.owner,
            repository: this.state.repository || this.props.initialDomain.repository,
            branch: this.state.branch || this.props.initialDomain.branch,
            path
        });
    }

    getPathArray(): { content: React.ReactNode }[] {
        return [
            {
                content: <Link to={this.getHref()}>Home</Link>
            },
            ...(this.props.path || '').split('/').map((title, index, titles) => ({
                content: <Link to={this.getHref(titles.slice(0, index + 1).join('/'))}>{title}</Link>
            }))
        ];
    }

    renderForm(): React.ReactNode {
        return (
            <nav>
                {/* Inputs */}
                <Form>
                    <FormField>
                        <label htmlFor="owner">Owner</label>
                        <input id="owner" type='text'
                            placeholder={this.props.initialDomain.owner} onChange={this.onChangeOwner} value={this.state.owner} />
                    </FormField>
                    <FormField>
                        <label htmlFor="repository">Repository</label>
                        <input id="repository" type='text'
                            placeholder={this.props.initialDomain.repository} onChange={this.onChangeRepository} value={this.state.repository} />
                    </FormField>
                    <FormField>
                        <label htmlFor="branch">Branch</label>
                        <input id="branch" type='text'
                            placeholder={this.props.initialDomain.branch} onChange={this.onChangeBranch} value={this.state.branch} />
                    </FormField>
                </Form>

                {/* Buttons */}
                <Button.Group>
                    <Button onClick={this.onClickCancel}>Cancel</Button>
                    <Button.Or />
                    <Button onClick={this.onClickApply} to={this.getHref()} as={Link} positive>Apply</Button>
                </Button.Group>
            </nav>
        );
    }

    renderCollapsed(): React.ReactNode {
        return (
            <nav>
                <Step.Group onClick={() => this.setState({ collapsed: false })}>
                    <Step active>
                        <Icon name='user' />
                        <Step.Content>
                            <Step.Title>{this.props.initialDomain.owner}</Step.Title>
                        </Step.Content>
                    </Step>

                    <Step active>
                        <Icon name='folder' />
                        <Step.Content>
                            <Step.Title>{this.props.initialDomain.repository}</Step.Title>
                        </Step.Content>
                    </Step>

                    <Step active>
                        <Icon name='code branch' />
                        <Step.Content>
                            <Step.Title>{this.props.initialDomain.branch}</Step.Title>
                        </Step.Content>
                    </Step>
                </Step.Group>

                {/* Path */}
                <div>
                    <Breadcrumb divider=">" sections={this.getPathArray()} />
                </div>

            </nav>
        );
    }

    render() {
        if (this.state.collapsed) {
            return this.renderCollapsed();
        } else {
            return this.renderForm();
        }
    }
}

export default Navigator;