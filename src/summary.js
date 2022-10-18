import { getBudgets } from "./budget.utils";
import { categories, createTag, th, td, tr, categoriesSum, getTotalSpent } from "./common.utils";
import { getExpenses } from "./expenses.utils";
import { categoriesMonthlySum } from "./summary.utils";

const theadRow = document.querySelector('table.editor thead tr');
const tbody = document.querySelector('table.editor tbody');
const [totalRow, overrunRow, savingsRow] = document.querySelectorAll('table.editor tfoot tr');

const budgets = getBudgets();
const expenses = getExpenses();
const categoriesTotal = categoriesSum(expenses);
const totalSpent = getTotalSpent(expenses);
const months = Object.keys(summary).sort((a, b) => a - b); //Months sorted ascending

//Get monthly budgets with categories monthly sum
const summary = categoriesMonthlySum(budgets, expenses);

hydrateTable();

function hydrateTable() {
    //Add headers
    for (let month of months) {
        const date = new Date(Number(month));
        const dateString = date.toLocaleString('en-US', { month: 'short' });

        theadRow.appendChild(th(dateString));
    }
    theadRow.appendChild(th('Total'));

    //Add a row for each category
    for (let [catId, catTotal] of Object.entries(categoriesTotal)) {
        //Create a row for the category
        const catName = categories[catId];
        const row = tr(th(catName));

        //Go through months
        for (let month of months) {
            const categoryMonthlySum = summary[month].categories[catId];
            row.appendChild(td(createTag('span', { className: 'currency' }, categoryMonthlySum)));
        }

        //Append category total
        row.appendChild(th(createTag('span', { className: 'currency' }, catTotal)));
        tbody.appendChild(row);
    }

    //Table footer
    let totalOverrun = 0;
    let totalSavings = 0;

    for (let month of months) {
        //Spent
        const spentSum = Object.values(summary[month].categories).reduce((acc, b) => acc + b, 0);
        totalRow.appendChild(td(createTag('span', { className: 'currency' }, spentSum)));

        //Overruns
        let overrun = spentSum - Number(summary[month].budget);
        overrun = overrun < 0 ? 0 : overrun;
        overrunRow.appendChild(td(createTag('span', { className: 'currency' }, overrun)));
        totalOverrun += overrun;

        //Savings
        const saving = Number(summary[month].income) - spentSum;
        savingsRow.appendChild(td(createTag('span', { className: 'currency' }, saving)));
        totalSavings += saving;
    }

    totalRow.appendChild(th(createTag('span', { className: 'currency' }, totalSpent)));
    overrunRow.appendChild(th(createTag('span', { className: 'currency' }, totalOverrun)));
    savingsRow.appendChild(th(createTag('span', { className: 'currency' }, totalSavings)));
}