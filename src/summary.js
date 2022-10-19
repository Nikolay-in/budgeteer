import { getBudgets } from "./budget.utils";
import { categories, createTag, th, td, tr } from "./common.utils";
import { getExpenses } from "./expenses.utils";
import { categoriesMonthlySum, getQuarterUnix } from "./summary.utils";

const thead = document.querySelector('table.editor thead');
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
let currentPageQuarter = getQuarterUnix(Date.now());
const pageOfPresentTimeQuarter = getQuarterUnix(Date.now());


hydrateTable(currentPageQuarter);

function hydrateTable(page) {
    checkButtons();

    //Clear old entries
    thead.innerHTML = '';
    totalRow.innerHTML = '';
    overrunRow.innerHTML = '';
    savingsRow.innerHTML = '';
    totalRow.appendChild(th('Total Spent'));
    overrunRow.appendChild(th('Budget Overruns'));
    savingsRow.appendChild(th('Savings'));

    //Add headers
    const tableTitle = getTableTitle(page);
    thead.appendChild(tr(createTag('th', { colSpan: '5' }, tableTitle)));
    const theadRow = tr(th('Category'));
    for (let month of page) {
        const date = new Date(Number(month));
        const dateString = date.toLocaleString('en-US', { month: 'short' });

        theadRow.appendChild(th(dateString));
    }
    theadRow.appendChild(th('Total'));
    thead.appendChild(theadRow);

    //Remove old entries if present
    tbody.innerHTML = '';

    //Add a row for each category
    for (let [catId, catName] of Object.entries(categories)) {
        //Create a row for the category
        const row = tr(th(catName));

        let categoryTotal = 0;
        //Go through months

        for (let month of page) {
            let categoryMonthlySum = 0;

            if (summary.hasOwnProperty(month)) {
                categoryMonthlySum = summary[month].categories[catId];
            }

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

        let spentSum = 0;
        let overrun = 0;
        let saving = 0;

        if (summary.hasOwnProperty(month)) {
            //Spent
            spentSum = Object.values(summary[month].categories).reduce((acc, b) => acc + b, 0);
            totalSpent += spentSum;

            //Overruns
            overrun = spentSum - Number(summary[month].budget);
            overrun = overrun < 0 ? 0 : overrun;
            totalOverrun += overrun;

            //Savings
            saving = Number(summary[month].income) - spentSum;
            totalSavings += saving;
        }

        totalRow.appendChild(td(createTag('span', { className: 'currency' }, spentSum)));
        overrunRow.appendChild(td(createTag('span', { className: 'currency' }, overrun)));
        savingsRow.appendChild(td(createTag('span', { className: 'currency' }, saving)));
    }

    totalRow.appendChild(th(createTag('span', { className: 'currency' }, totalSpent)));
    overrunRow.appendChild(th(createTag('span', { className: 'currency' }, totalOverrun)));
    savingsRow.appendChild(th(createTag('span', { className: 'currency' }, totalSavings)));

    checkEmptyTable();
}

function movePage(to) {
    //Set new page
    let targetPage;
    const date = new Date(currentPageQuarter[0]);

    if (to == 'prev') {
        //Calculate previous quarter start
        date.setUTCMonth(date.getUTCMonth() - 3);
        const prevQuarterStartUnix = date.getTime();
        targetPage = getQuarterUnix(prevQuarterStartUnix);
    } else if (to == 'next') {
        //Calculate next quarter start
        date.setUTCMonth(date.getUTCMonth() + 3);
        const nextQuarterStartUnix = date.getTime();
        targetPage = getQuarterUnix(nextQuarterStartUnix);
    } else if (to == 'present') {
        targetPage = pageOfPresentTimeQuarter;
    }
    currentPageQuarter = targetPage;

    hydrateTable(currentPageQuarter);
}

function checkButtons() {
    if (currentPageQuarter[0] == pageOfPresentTimeQuarter[0]) {
        presentBtn.disabled = true;
    } else if (presentBtn.disabled == true) {
        presentBtn.disabled = false;
    }
}

function checkEmptyTable() {
    if (tbody.children.length == 0) {
        const row = tr(createTag('td', { colSpan: '5' }, 'No entries yet.'));
        tbody.replaceChildren(row);
    }
}

function getTableTitle(page) {
    const date = new Date(page[0]);
    const currentMonthIndex = date.getUTCMonth();
    const quarterMonthIndex = Math.floor(currentMonthIndex / 3) + 1;

    return `Q${quarterMonthIndex} - ${date.getUTCFullYear()}`;
}