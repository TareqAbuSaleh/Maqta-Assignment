export class RequestVM {
    id: string;
    request: string;
    quantity: number;
    notes: string;
    constructor(id: string, request: string, quantity: number, notes: string) {
        this.id = id;
        this.request = request;
        this.quantity = quantity;
        this.notes = notes;
    }

}