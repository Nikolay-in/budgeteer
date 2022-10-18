/**
 * 
 * @param {object} entry 
 */
export function addExpense(entry) {
    let data = JSON.parse(localStorage.getItem('expenses'));
    data = { ...data, [entry.id]: entry };

    localStorage.setItem('expenses', JSON.stringify(data));
}

/**
 * 
 * @param {string} id 
 */
export function delExpense(id) {
    let data = JSON.parse(localStorage.getItem('expenses'));
    delete data[id];
    localStorage.setItem('expenses', JSON.stringify(data));
}

/**
 * 
 * @param {string} id 
 * @returns {object|null}
 */
export function getExpense(id) {
    const data = JSON.parse(localStorage.getItem('expenses'));

    return data ? data[id] : null;
}

export function getExpenses() {
    return JSON.parse(localStorage.getItem('expenses'));
}

export function getMonthlyExpenses(monthInUnix, editId) {
    //Next month in unix
    const month = new Date(monthInUnix);
    month.setMonth(month.getMonth() + 1);
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