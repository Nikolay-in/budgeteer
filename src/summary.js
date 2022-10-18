import { getBudgets } from "./budget.utils";
import { categories, createTag, th, td, tr, categoriesSum, getTotalSpent } from "./common.utils";
import { getExpenses } from "./expenses.utils";
import { categoriesMonthlySum } from "./summary.utils";

const theadRow = document.querySelector('table.editor thead tr');
const tbody = document.querySelector('table.editor tbody');
const [totalRow, overrunRow, savingsRow] = document.querySelectorAll('table.editor tfoot tr');
const [prevBtn, nextBtn] = document.querySelectorAll('section#summary button');

prevBtn.addEventListener('click', () => movePage('prev'));
nextBtn.addEventListener('click', () => movePage('next'));

const budgets = getBudgets();
const expenses = getExpenses();
const categoriesTotal = categoriesSum(expenses);
const months = Object.keys(budgets).sort((a, b) => a - b); //Months sorted ascending
const summary = categoriesMonthlySum(budgets, expenses); //Get monthly budgets with categories monthly sum

const perPage = 3;
const lastPageIndex = Math.ceil(months.length / perPage) - 1;
let currentPage = lastPageIndex;

hydrateTable(currentPage);


function hydrateTable(page) {
    checkButtons();

    const indexFrom = page * perPage;
    const indexTo = indexFrom + perPage;

    //Clear old entries
    theadRow.innerHTML = '';
    theadRow.appendChild(th('Category'));
    totalRow.innerHTML = '';
    overrunRow.innerHTML = '';
    savingsRow.innerHTML = '';
    totalRow.appendChild(th('Total Spent'));
    overrunRow.appendChild(th('Budget Overruns'));
    savingsRow.appendChild(th('Savings'));

    //Add headers
    for (let month of months.slice(indexFrom, indexTo)) {
        const date = new Date(Number(month));
        const dateString = date.toLocaleString('en-US', { month: 'short' });

        theadRow.appendChild(th(dateString));
    }

    //If last page append category total
    if (page == lastPageIndex) {
        theadRow.appendChild(th('Total'));
    }

    //Remove old entries if present
    tbody.innerHTML = '';

    //Add a row for each category
    for (let [catId, catTotal] of Object.entries(categoriesTotal)) {
        //Create a row for the category
        const catName = categories[catId];
        const row = tr(th(catName));
        //Go through months
        for (let month of months.slice(indexFrom, indexTo)) {
            const categoryMonthlySum = summary[month].categories[catId];
            row.appendChild(td(createTag('span', { className: 'currency' }, categoryMonthlySum)));
        }

        //On last page append category total
        if (page == lastPageIndex) {
            row.appendChild(th(createTag('span', { className: 'currency' }, catTotal)));
        }
        tbody.appendChild(row);
    }

    //Table footer
    let totalOverrun = 0;
    let totalSavings = 0;

    for (let month of months.slice(indexFrom, indexTo)) {
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

    //On last page show totals
    if (page == lastPageIndex) {
        const totalSpent = getTotalSpent(expenses);
        //get totalOverrun
        //get totalSavings

        totalRow.appendChild(th(createTag('span', { className: 'currency' }, totalSpent)));
        overrunRow.appendChild(th(createTag('span', { className: 'currency' }, totalOverrun)));
        savingsRow.appendChild(th(createTag('span', { className: 'currency' }, totalSavings)));
    }
}

function movePage(to) {
    //Set new page
    if (to == 'prev') {
        currentPage--;
    } else if (to == 'next') {
        currentPage++;
    }

    hydrateTable(currentPage);
}

function checkButtons() {
    //Clear if disabled
    [prevBtn, nextBtn].forEach(el => el.disabled = false);

    //Disable button if necessary
    if (currentPage == 0) {
        prevBtn.disabled = true;
    }

    if (currentPage == lastPageIndex) {
        nextBtn.disabled = true;
    }
}