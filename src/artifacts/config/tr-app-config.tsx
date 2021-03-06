import TRHTTPManager from "../processor/http/tr-http-manager";
import AxiosHTTPManager from "../processor/axios/axios-http-manager";
import React, { lazy } from "react";
import TRComponentState from "../component/tr-component-state";
import TRHTTResponse from "../processor/http/tr-http-response";
import TRHTTAuthCallback from "../processor/http/tr-http-auth-callback";
import TRSuspenseView from "../view/tr-suspense-view";
import {TRHTTPCall} from "../model/tr-model";
import TRNotFoundView from "../view/tr-not-found-view";

const TRBeforeRenderUIView = lazy(() => import('../view/tr-before-render-ui-view'));


export default class TRAppConfig {

    public getBeforeRenderUIView(componentState: TRComponentState, component: any) {
        return (<TRBeforeRenderUIView componentState={componentState} component={component} />)
    }

    public getNotFoundView() {
        return (<TRNotFoundView />)
    }

    public getSuspenseLoader() {
        return (<TRSuspenseView/>)
    }

    public getHTTPManager(): TRHTTPManager {
        return new AxiosHTTPManager();
    }

    public authCallback(): TRHTTAuthCallback | undefined{
        return undefined;
    }

    public getBaseURL(): string {
        return "";
    }

    public isAuthorized (response?: TRHTTResponse): boolean {
        return true;
    }

    public renewAuthorization (trHttpCall: TRHTTPCall): void {
        trHttpCall.resume();
    }

}