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

    // console.log(budgets);
    return budgets;
}

export function getCurrentQuarterUnix() {
    const date = new Date();
    const currentMonthIndex = date.getUTCMonth();
    const quarterMonthIndex = Math.floor(currentMonthIndex / 3) * 3;
    date.setUTCDate(quarterMonthIndex);

    const month1 = Date.parse(`${date.getUTCFullYear()}-${(date.getUTCMonth() + 1).toString().padStart(2, 0)}`);
    const month2 = Date.parse(`${date.getUTCFullYear()}-${(date.getUTCMonth() + 2).toString().padStart(2, 0)}`);
    const month3 = Date.parse(`${date.getUTCFullYear()}-${(date.getUTCMonth() + 3).toString().padStart(2, 0)}`);

    return [month1, month2, month3];
}