import React, { ChangeEvent, FormEvent, MouseEvent } from 'react';
import { getPathnameFromFileLocation } from '../../lib/files';
import { Link } from 'react-router-dom';

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

export type NavigatorState = MaterialDomain & {};

class Navigator extends React.Component<NavigatorProps, NavigatorState> {
    constructor(props: NavigatorProps) {
        super(props);
        this.state = {};

        this.onChangeOwner = this.onChangeOwner.bind(this);
        this.onChangeRepository = this.onChangeRepository.bind(this);
        this.onChangeBranch = this.onChangeBranch.bind(this);
        this.onClickCancel = this.onClickCancel.bind(this);
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

    onClickCancel(event: MouseEvent): void {
        this.clearDomain();
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
            owner: undefined,
            repository: undefined,
            branch: undefined
        });
    }

    getHref(path=''): string {
        return getPathnameFromFileLocation({
            owner: this.state.owner || this.props.initialDomain.owner,
            repository: this.state.repository || this.props.initialDomain.repository,
            branch: this.state.branch || this.props.initialDomain.branch,
            path
        });
    }

    getPathArray(): {title: string, href: string}[] {
        return [
            {
                title: 'home', 
                href: this.getHref()
            }, 
            ...(this.props.path || '').split('/').map((title, index, titles) => ({
                title,
                href: this.getHref(titles.slice(0, index + 1).join('/'))
            }))
        ];
    }

    render() {
        return (
            <nav>
                {/* Inputs */}
                <form>
                    <div>
                        <label htmlFor="owner">Owner</label>
                        <input id="owner" type='text'
                            placeholder={this.props.initialDomain.owner} onChange={this.onChangeOwner} value={this.state.owner} />
                    </div>
                    <div>
                        <label htmlFor="repository">Repository</label>
                        <input id="repository" type='text'
                            placeholder={this.props.initialDomain.repository} onChange={this.onChangeRepository} value={this.state.repository} />
                    </div>
                    <div>
                        <label htmlFor="branch">Branch</label>
                        <input id="branch" type='text'
                            placeholder={this.props.initialDomain.branch} onChange={this.onChangeBranch} value={this.state.branch} />
                    </div>
                </form>

                {/* Buttons */}
                <div>
                    <Link to={this.getHref()}>Go</Link>
                    <button onClick={this.onClickCancel}>Cancel</button>
                </div>

                {/* Path */}
                <div>
                    {this.getPathArray().map(pathItem => (
                        <span>
                            &gt;&nbsp;
                            <Link to={pathItem.href}>{pathItem.title}</Link>
                        </span>
                    ))}
                </div>
            </nav>
        );
    }
};

export default Navigator;