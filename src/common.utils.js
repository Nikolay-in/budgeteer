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

export const tr = createTag.bind(null, 'tr', {});
export const td = createTag.bind(null, 'td', {});

export function clearSelected() {
    //Clear previous selected if any
    const selected = document.querySelector('table.editor tr.selected');
    if (selected) {
        selected.classList.remove('selected');
    }
}