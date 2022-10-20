import { getExpenses } from "./expenses.utils";

/**
 * 
 * @param {object} entry 
 */
export function addBudget(entry, editId) {
    let data = JSON.parse(localStorage.getItem('budgets'));

    //Is there an entry for this month already?
    if (data) {
        const entryExisting = data.hasOwnProperty(entry.id);

        if (editId == null && entryExisting && confirm('A budget for this month already exists, do you want to replace it?') == false) {
            return false;
        }
    }

    data = { ...data, [entry.id]: entry };

    localStorage.setItem('budgets', JSON.stringify(data));

    return true;
}

/**
 * 
 * @param {string} id 
 */
export function delBudget(id) {
    let data = JSON.parse(localStorage.getItem('budgets'));
    delete data[id];
    localStorage.setItem('budgets', JSON.stringify(data));
}

export function checkBudgetExpenses(monthInUnix) {
    const date = new Date(Number(monthInUnix));
    date.setUTCMonth(date.getUTCMonth() + 1);
    const nextMonthInUnix = date.getTime();
    let expenses = getExpenses();

    if (expenses) {
        expenses = Object.values(expenses).filter(el => el.date >= monthInUnix && el.date < nextMonthInUnix);
        return expenses.length;
    } else {
        return 0;
    }
}

window.checkBudgetExpenses = checkBudgetExpenses;

/**
 * 
 * @param {string} id 
 * @returns {object|null}
 */
export function getBudget(id) {
    const data = JSON.parse(localStorage.getItem('budgets'));

    return data ? data[id] : null;
}

export function getBudgets() {
    return JSON.parse(localStorage.getItem('budgets')) || {};
}