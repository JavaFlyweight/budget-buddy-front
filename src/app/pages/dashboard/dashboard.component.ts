import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, state, animate, transition, keyframes } from '@angular/animations';
import { MDL } from '../../mdl/mdl.component';
import { Budget } from '../../models/budget';

@Component({
    selector: 'budget-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    animations: [
        trigger('slideDown', [
            state('void', style({
                opacity: '0'
            })),
            transition('void => *', [
                animate(400, keyframes([
                    style({ opacity: 0, transform: 'translateY(-200px)', offset: 0 }),
                    style({ opacity: 1, transform: 'translateY(25px)', offset: .75 }),
                    style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                ]))
            ])
        ])]
})
export class DashboardComponent implements OnInit {

    selectedBudget: Budget;
    @Input() isSelected: boolean;

    ngOnInit() {
        console.log('Hello Dashboard');
    }

    selectBudget(budget: Budget) {
        this.selectedBudget = budget;
        this.isSelected = true;
        console.log(this.isSelected);
    }

    closeBudget() {
        this.isSelected = false;
    }

    budgets = [
        new Budget(1, [{ id: 1, name: 'Car', amount: 50 }], [{ id: 1, name: 'Salary', amount: 500 }], 100000, 100000, new Date(2018, 1, 31), new Date(2018, 1, 31)),
        new Budget(2, [{ id: 2, name: 'Home', amount: 100 }], [{ id: 2, name: 'Present', amount: 1500 }], 200000, 200000, new Date(2018, 2, 31), new Date(2018, 2, 31)),
        new Budget(3, [{ id: 3, name: 'Food', amount: 150 }], [{ id: 3, name: 'Prize', amount: 2500 }], 300000, 300000, new Date(2018, 3, 31), new Date(2018, 3, 31)),
        new Budget(4, [{ id: 4, name: 'Children', amount: 200 }], [{ id: 4, name: 'Bonus', amount: 3500 }], 400000, 400000, new Date(2018, 4, 31), new Date(2018, 4, 31))
    ];
}
