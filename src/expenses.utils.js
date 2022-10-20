/**
 * 
 * @param {object} entry 
 */
export function addExpense(entry) {
    let data = getExpenses();
    data = { ...data, [entry.id]: entry };

    localStorage.setItem('expenses', JSON.stringify(data));
}

/**
 * 
 * @param {string} id 
 */
export function delExpense(id) {
    let data = getExpenses();
    delete data[id];
    localStorage.setItem('expenses', JSON.stringify(data));
}

export function delMonthlyExpenses(monthInUnix) {
    const date = new Date(Number(monthInUnix));
    date.setUTCMonth(date.getUTCMonth() + 1);
    const nextMonthInUnix = date.getTime();
    let expenses = getExpenses();

    for (let [key, value] of Object.entries(expenses)) {
        if (value.date >= monthInUnix && value.date < nextMonthInUnix) {
            delete expenses[key];
        }
    }

    localStorage.setItem('expenses', JSON.stringify(expenses));
}

/**
 * 
 * @param {string} id 
 * @returns {object|null}
 */
export function getExpense(id) {
    const data = getExpenses();

    return data ? data[id] : null;
}

export function getExpenses() {
    return JSON.parse(localStorage.getItem('expenses'));
}

/**
 * 
 * @param {number} monthInUnix 
 * @param {number|null} editId 
 * @returns {number}
 */
export function getMonthlyExpenses(monthInUnix, editId) {
    //Next month in unix
    const month = new Date(monthInUnix);
    month.setMonth(month.getUTCMonth() + 1);
    const nextMonthInUnix = Date.parse(month);

    let expenses = getExpenses();
    if (expenses) {
        //Get expenses for current month
        expenses = Object.values(expenses).filter(el => el.date >= monthInUnix && el.date < nextMonthInUnix);

        //If editing exclude current entry amount
        if (editId != null) {
            expenses = expenses.filter(el => el.id != editId);
        }

        return expenses.reduce((acc, b) => acc + Number(b.amount), 0);
    } else {
        return 0;
    }
}