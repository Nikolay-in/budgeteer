import { categories, getMonthInUnix } from "./common.utils";


//Add categories monthly sum to each month
/**
 * 
 * @param {object} budgets 
 * @param {object} expenses 
 * @returns {object}
 */
export function categoriesMonthlySum(budgets, expenses) {

    //Create categories object in each month with 0 spent
    for (let month in budgets) {
        const catIds = Object.keys(categories).map(el => [el, 0]);
        budgets[month].categories = Object.fromEntries(catIds);
        budgets[month].spent = 0;
        budgets[month].overrun = 0;
        budgets[month].savings = 0;
    }

    if (expenses != null) {
        //Calculate the monthly sum of each category
        for (let entry of Object.values(expenses)) {
            const month = getMonthInUnix(entry.date);

            if (budgets.hasOwnProperty(month)) {
                budgets[month].categories[entry.category] += Number(entry.amount);
            }
        }

    }

    //Calculate monthly spent, overrun, savings
    for (let month in budgets) {
        budgets[month].spent = Object.values(budgets[month].categories).reduce((acc, b) => acc + b, 0);
        budgets[month].overrun = budgets[month].spent - budgets[month].budget;
        budgets[month].savings = budgets[month].income - budgets[month].spent;
    }

    return budgets;
}

/**
 * 
 * @param {number} dateUnix 
 * @returns {number[]}
 */
export function getQuarterUnix(dateUnix) {
    const date = new Date(dateUnix);
    const currentMonthIndex = date.getUTCMonth();
    const quarterMonthIndex = Math.floor(currentMonthIndex / 3) * 3;
    date.setUTCMonth(quarterMonthIndex);

    const output = [];

    for (let i = 0; i < 3; i++) {
        output.push(Date.parse(`${date.getUTCFullYear()}-${(date.getUTCMonth() + 1).toString().padStart(2, 0)}`));
        date.setUTCMonth(date.getUTCMonth() + 1);
    }

    return output;
}