import { Action } from './action.model';

export interface Alert {
    description: string;
    actions?: Action[];
}
