import { RouteLocationRaw } from 'vue-router';

export interface IIconLabelLink {
    icon?: string;
    label?: string;
    link?: RouteLocationRaw;
}


export * from './qrcode'
export * from './user'
