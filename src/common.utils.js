export const categories = {
    '0': 'Other',
    '1': 'Utilities',
    '2': 'Groceries',
    '3': 'Entertainment',
    '4': 'Transport'
};

/**
 * 
 * @param {string} tagName 
 * @param {object} attributes 
 * @param  {...(string|Node)} content 
 * @returns {HTMLElement}
 */

export function createTag(tagName, attributes, ...content) {
    const el = document.createElement(tagName);

    for (let [attr, value] of Object.entries(attributes)) {
        el[attr] = value;
    }

    for (let item of content) {
        el.append(item);
    }

    return el;
}

export const th = createTag.bind(null, 'th', {});
export const tr = createTag.bind(null, 'tr', {});
export const td = createTag.bind(null, 'td', {});

export function clearSelected() {
    //Clear previous selected if any
    const selected = document.querySelector('table.editor tr.selected');
    if (selected) {
        selected.classList.remove('selected');
    }
}


//Get the total sum of each category
export function categoriesSum(expenses) {
    const categoriesTotal = {};

    for (let entry of Object.values(expenses)) {
        if (categoriesTotal.hasOwnProperty(entry.category)) {
            categoriesTotal[entry.category] += Number(entry.amount);
        } else {
            categoriesTotal[entry.category] = Number(entry.amount);
        }
    }

    return categoriesTotal;
}

//Get total spent
export function getTotalSpent(expenses) {
    const categoriesTotal = categoriesSum(expenses);
    return Object.values(categoriesTotal).reduce((acc, b) => acc + b, 0);
}

//Leading zero in month makes 2 hours difference ?!
export function getMonthInUnix(date) {
    return Date.parse(`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, 0)}`);
}

window.getMonthInUnix = getMonthInUnix;