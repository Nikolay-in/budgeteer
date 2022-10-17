/**
 * 
 * @param {object} entry 
 */
export function addBudget(entry) {
    let data = JSON.parse(localStorage.getItem('budgets'));

    //Is there an entry for this month already?
    if (data) {
        const entryExisting = data.hasOwnProperty(entry.id);

        if (entryExisting && confirm('A budget for this month already exists, do you want to replace it?') == false) {
            return;
        }
    }

    data = { ...data, [entry.id]: entry };

    localStorage.setItem('budgets', JSON.stringify(data));
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
    return JSON.parse(localStorage.getItem('budgets'));
}