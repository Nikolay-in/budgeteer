import { getExpenses } from "./expenses.utils";
import { categories, categoriesSum, createTag, getTotalSpent } from "./common.utils";
import { getBudgets } from "./budget.utils";

const expenses = getExpenses();
const categoriesTotal = categoriesSum(expenses);
const totalSpent = getTotalSpent(expenses);

setOverView();
setBreakdown();

function setOverView() {

    const budgets = Object.values(getBudgets());
    const totalIncome = budgets.reduce((acc, b) => acc + Number(b.income), 0);
    const totalBudget = budgets.reduce((acc, b) => acc + Number(b.budget), 0);
    let remaining = totalBudget - totalSpent;
    remaining = remaining < 0 ? 0 : remaining;
    const saving = totalIncome - totalSpent;

    const [spentElement, remainigElement, savingsElement] = document.querySelectorAll('article.clear div.cat-row span.value');
    spentElement.textContent = totalSpent;
    remainigElement.textContent = remaining;
    savingsElement.textContent = saving;

    //Set overview bars
    const spentBar = createTag('div', { className: 'ov spent' });
    const remainBar = createTag('div', { className: 'ov remain' });
    const saveBar = createTag('div', { className: 'ov save' });

    const divisor = saving + remaining + totalSpent;

    spentBar.style.height = totalSpent / divisor * 300 + 'px';
    remainBar.style.height = remaining / divisor * 300 + 'px';
    saveBar.style.height = saving / divisor * 300 + 'px';

    //Append result
    document.querySelector('article.clear div.right-col').append(spentBar, remainBar, saveBar);
}

function setBreakdown() {
    //If no data
    if (categoriesTotal.length == 0) {
        document.getElementById('breakdown').append(createTag('div', { className: 'cat-row' }, 'No Data Yet.'));
    } else {
        //Append result
        const categoriesTotalSorted = Object.entries(categoriesTotal).sort((a, b) => b[1] - a[1]);
        const maxAmount = Math.max(...Object.values(categoriesTotal));
        document.getElementById('breakdown').append(...categoriesTotalSorted.map(([catId, amount]) => createCategory(catId, amount, maxAmount)));
    }
}

function createCategory(catId, amount, maxAmount) {
    //Create bar element and set width
    const bar = createTag('span', { className: 'bar' });
    bar.style.width = (amount / maxAmount * 500) + 'px';

    const output = createTag('div', { className: 'cat-row' },
        createTag('span', { className: 'row label' }, categories[catId]),
        createTag('span', { className: 'row value' }, amount),
        createTag('div', { className: 'bar-area' }, bar));

    return output;
}