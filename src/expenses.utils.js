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