import React from 'react';
import TRComponent from './../../component/tr-component';

export default class TRPublicLayout extends TRComponent {

    renderUI() {
        const Component = this.props.component;
        const route = this.props.route;
        return (
            <React.Fragment>
                <h1>Public layout</h1>
                <Component route={route}/>
            </React.Fragment>
        );
    }

}