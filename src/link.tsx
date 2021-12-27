import React, {PureComponent} from "react";
export class Link extends PureComponent {
    render() {
        const { hide, address } = this.props
        return hide ? null : <a href={address}>Click</a>
    }
}
