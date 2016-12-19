export class Tickets {
    id: number;
    date: Date;
    amount: number = 0;
    client: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
