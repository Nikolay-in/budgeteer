import { getExpenses, getMonthlyExpenses } from "./expenses.utils";
import { categories, categoriesSum, createTag, getMonthInUnix, getTotalSpent } from "./common.utils";
import { getBudget, getBudgets } from "./budget.utils";

const expenses = getExpenses();
const categoriesTotal = categoriesSum(expenses);
const totalSpent = getTotalSpent(expenses);

setOverView();
setMonthlyOverView();
setBreakdown();

function setOverView() {

    const budgets = Object.values(getBudgets());
    const totalIncome = budgets.reduce((acc, b) => acc + Number(b.income), 0);
    const totalBudget = budgets.reduce((acc, b) => acc + Number(b.budget), 0);
    let remaining = totalBudget - totalSpent;
    remaining = remaining < 0 ? 0 : remaining;
    const saving = totalIncome - totalSpent;

    const [spentElement, remainigElement, savingsElement] = document.querySelectorAll('article.clear div.all-time div.cat-row span.value');
    spentElement.textContent = totalSpent;
    remainigElement.textContent = remaining;
    savingsElement.textContent = saving;

    //Append result
    document.querySelector('article.clear div.all-time div.right-col').append(...createBars(totalSpent, remaining, saving));
}

function setMonthlyOverView() {
    const monthInUnix = getMonthInUnix(Date.now());
    const date = new Date(monthInUnix);
    const monthlyBudget = getBudget(monthInUnix);
    const spent = getMonthlyExpenses(monthInUnix);

    let income = 0;
    let budget = 0;

    if (monthlyBudget) {
        income = monthlyBudget.income;
        budget = monthlyBudget.budget;
    }

    //Set title
    document.querySelector('div.monthly div.overview-title').textContent = 'Present - ' + date.toLocaleString('en-US', { year: 'numeric', month: 'short' });

    //Set calculations and bars
    let remaining = budget - spent;
    remaining = remaining < 0 ? 0 : remaining;
    const saving = income - spent;

    const [spentElement, remainigElement, savingsElement] = document.querySelectorAll('article.clear div.monthly div.cat-row span.value');
    spentElement.textContent = spent;
    remainigElement.textContent = remaining;
    savingsElement.textContent = saving;


    //Append result
    document.querySelector('article.clear div.monthly div.right-col').append(...createBars(spent, remaining, saving));
}

function createBars(spent, remaining, saving) {
    const spentBar = createTag('div', { className: 'ov spent' });
    const remainBar = createTag('div', { className: 'ov remain' });
    const saveBar = createTag('div', { className: 'ov save' });

    const divisor = saving + remaining + spent;

    spentBar.style.height = spent / divisor * 300 + 'px';
    remainBar.style.height = remaining / divisor * 300 + 'px';
    saveBar.style.height = saving / divisor * 300 + 'px';

    return [spentBar, remainBar, saveBar];
}

function setBreakdown() {
    //If no data
    if (Object.keys(categoriesTotal).length == 0) {
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