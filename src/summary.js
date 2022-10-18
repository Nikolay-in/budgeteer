import { getBudgets } from "./budget.utils";
import { categories, createTag, th, td, tr, categoriesSum, getTotalSpent } from "./common.utils";
import { getExpenses } from "./expenses.utils";

const theadRow = document.querySelector('table.editor thead tr');
const tbody = document.querySelector('table.editor tbody');
const [total, overrun, savings] = document.querySelectorAll('table.editor tfoot tr');

const summary = getBudgets();
const expenses = getExpenses();
const categoriesTotal = categoriesSum(expenses);
const totalSpent = getTotalSpent(expenses);
const months = Object.keys(summary).sort((a, b) => a - b); //Months sorted ascending

//Create categories object in each month with 0 spent
for (let month in summary) {
    const catIds = Object.keys(categories).map(el => [el, 0]);
    summary[month].categories = Object.fromEntries(catIds);
}

//Calculate the monthly sum of each category
for (let entry of Object.values(expenses)) {
    const date = new Date(entry.date);
    //Leading zero in month makes 2 hours difference ?!
    const month = Date.parse(`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, 0)}`).toString();

    if (summary.hasOwnProperty(month)) {
        summary[month].categories[entry.category] += Number(entry.amount);
    }
}



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
console.log(summary);

//Table footer
for (let month of months) {
    const sum = Object.values(summary[month].categories).reduce((acc, b) => acc + b, 0);
    total.appendChild(td(createTag('span', { className: 'currency' }, sum)));
}
total.appendChild(th(createTag('span', { className: 'currency' }, totalSpent)));
