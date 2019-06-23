import React, { Suspense } from 'react';
import ReactComponent from "../framework/tr-react-component";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import URLMapping from "../../app/config/url-mapping";




export default class TRPageManager extends ReactComponent<any, any> {

    render() {
        let urlMapping = new URLMapping();
        return ( 
            <BrowserRouter>
                <Suspense fallback={urlMapping.getSuspenseLoader}>
                    <Switch>
                        <Route component={urlMapping.getNotFoundView} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        );
    }



}