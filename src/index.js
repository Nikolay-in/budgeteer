import { getExpenses } from "./expenses.utils";
import { categories, createTag } from "./common.utils";
import { getBudgets } from "./budget.utils";

const expenses = getExpenses();
const categoriesTotal = {};

//Get the total sum of each category
for (let entry of Object.values(expenses)) {
    if (categoriesTotal.hasOwnProperty(entry)) {
        categoriesTotal[entry.category] += Number(entry.amount);
    } else {
        categoriesTotal[entry.category] = Number(entry.amount);
    }
}

const totalSpent = Object.values(categoriesTotal).reduce((acc, b) => acc + b, 0);

setBreakdown();
setOverView();



function setBreakdown() {

    const maxAmount = Math.max(...Object.values(categoriesTotal));
    const categoriesTotalSorted = Object.entries(categoriesTotal).sort((a, b) => b[1] - a[1]);

    //Append result
    document.getElementById('breakdown').append(...categoriesTotalSorted.map(createCategory));

    function createCategory([catId, amount]) {

        //Create bar element and set width
        const bar = createTag('span', { className: 'bar' });
        bar.style.width = (amount / maxAmount * 500) + 'px';

        const output = createTag('div', { className: 'cat-row' },
            createTag('span', { className: 'row label' }, categories[catId]),
            createTag('span', { className: 'row value' }, amount),
            createTag('div', { className: 'bar-area' }, bar));

        return output;
    }
}

function setOverView() {

    const budgets = Object.values(getBudgets());
    const totalIncome = budgets.reduce((acc, b) => acc + Number(b.income), 0);
    const totalBudget = budgets.reduce((acc, b) => acc + Number(b.budget), 0);

    const [spent, remaining, savings] = document.querySelectorAll('article.clear div.cat-row span.value');
    spent.textContent = totalSpent;
    remaining.textContent = totalBudget - totalSpent;
    savings.textContent = totalIncome - totalBudget;


    //Set overview bars
    const spentBar = createTag('div', { className: 'ov spent' });
    const remainBar = createTag('div', { className: 'ov remain' });
    const saveBar = createTag('div', { className: 'ov save' });
    spentBar.style.height = totalSpent / totalIncome * 300 + 'px';
    remainBar.style.height = (totalBudget - totalSpent) / totalIncome * 300 + 'px';
    saveBar.style.height = (totalIncome - totalBudget) / totalIncome * 300 + 'px';

    //Append result
    document.querySelector('article.clear div.right-col').append(spentBar, remainBar, saveBar);
}
