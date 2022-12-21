import { RouteLocationRaw } from 'vue-router';

export interface IIconLabelLink {
    icon?: string;
    label?: string;
    link?: RouteLocationRaw;
}


export * from './payment'
export * from './product'
export * from './qrcode'
export * from './user'
