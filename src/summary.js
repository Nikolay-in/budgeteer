import { getBudgets } from "./budget.utils";
import { categories, createTag, th, td, tr, getCategoriesQarterlySum } from "./common.utils";
import { getExpenses } from "./expenses.utils";
import { categoriesMonthlySum, getCurrentQuarterUnix } from "./summary.utils";

const theadRow = document.querySelector('table.editor thead tr');
const tbody = document.querySelector('table.editor tbody');
const [totalRow, overrunRow, savingsRow] = document.querySelectorAll('table.editor tfoot tr');
const [prevBtn, presentBtn, nextBtn] = document.querySelectorAll('section#summary button');

prevBtn.addEventListener('click', () => movePage('prev'));
presentBtn.addEventListener('click', () => movePage('present'));
nextBtn.addEventListener('click', () => movePage('next'));

const budgets = getBudgets();
const expenses = getExpenses();
const summary = categoriesMonthlySum(budgets, expenses); //Get monthly budgets with categories monthly sum

//Start the page from the current quarter - array of 3 months in unix
const currentPageQuarterUnix = getCurrentQuarterUnix();
const pageOfPresentMonthQuarter = getCurrentQuarterUnix();


hydrateTable(currentPageQuarterUnix);

function hydrateTable(page) {
    checkButtons();

    //Clear old entries
    theadRow.innerHTML = '';
    totalRow.innerHTML = '';
    overrunRow.innerHTML = '';
    savingsRow.innerHTML = '';
    theadRow.appendChild(th('Category'));
    totalRow.appendChild(th('Total Spent'));
    overrunRow.appendChild(th('Budget Overruns'));
    savingsRow.appendChild(th('Savings'));

    //Add headers
    for (let month of page) {
        const date = new Date(Number(month));
        const dateString = date.toLocaleString('en-US', { month: 'short' });

        theadRow.appendChild(th(dateString));
    }
    theadRow.appendChild(th('Total'));

    //Remove old entries if present
    tbody.innerHTML = '';

    //Get each category quarterly total
    const categoriesTotal = getCategoriesQarterlySum(page, expenses);

    //Add a row for each category
    for (let [catId, catTotal] of Object.entries(categoriesTotal)) {
        //Create a row for the category
        const catName = categories[catId];
        const row = tr(th(catName));

        let categoryTotal = 0;
        //Go through months

        for (let month of page) {
            const categoryMonthlySum = summary[month].categories[catId];
            row.appendChild(td(createTag('span', { className: 'currency' }, categoryMonthlySum)));
            categoryTotal += categoryMonthlySum;
        }

        row.appendChild(th(createTag('span', { className: 'currency' }, categoryTotal)));
        tbody.appendChild(row);
    }

    //Table footer
    let totalSpent = 0;
    let totalOverrun = 0;
    let totalSavings = 0;

    for (let month of page) {
        //Spent
        const spentSum = Object.values(summary[month].categories).reduce((acc, b) => acc + b, 0);
        totalRow.appendChild(td(createTag('span', { className: 'currency' }, spentSum)));
        totalSpent += spentSum;

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

    checkEmptyTable();
}

function movePage(to) {
    // //Set new page
    if (to == 'prev') {

    } else if (to == 'next') {

    }

    checkButtons();

    // hydrateTable(currentPage);
}

function checkButtons() {
    if (currentPageQuarterUnix[0] == pageOfPresentMonthQuarter[0]) {
        presentBtn.disabled = true;
    } else if (presentBtn.disabled == false) {
        presentBtn.disabled = false;
    }
}

function checkEmptyTable() {
    if (tbody.children.length == 0) {
        const row = tr(createTag('td', { colSpan: '5' }, 'No entries yet.'));
        tbody.replaceChildren(row);
    }
}