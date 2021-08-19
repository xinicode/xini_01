import { Route } from "vue-router";
import { Dictionary } from "vue-router/types/router";

export interface CmpVueCurrentRoute extends Route {
    "meta": {
        cmptickFrom: number,
        cmptickTo: number,
        cmptickBack: boolean,
        [key: string]: any
    };
    query: Dictionary<string>;
    /** 当前路径 */
    curPath?: string;
    /** 当前层级 */
    curLevel?: number;
}