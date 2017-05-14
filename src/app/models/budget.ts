import { Injectable } from '@angular/core';

@Injectable()
export class Budget {
    id: number;
    expenses: Array<Object>;
    incomes: Array<Object>;
    balance: number;
    plannedAmount: number;
    dateFrom: Date;
    dateTo: Date;

    constructor(id: number, expenses: Array<Object>, incomes: Array<Object>, balance: number,
        plannedAmount: number, dateFrom: Date, dateTo: Date) {
        this.id = id;
        this.expenses = expenses;
        this.incomes = incomes;
        this.balance = balance;
        this.plannedAmount = plannedAmount;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
    }
}