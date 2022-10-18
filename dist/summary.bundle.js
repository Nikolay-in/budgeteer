/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/budget.utils.js":
/*!*****************************!*\
  !*** ./src/budget.utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addBudget\": () => (/* binding */ addBudget),\n/* harmony export */   \"delBudget\": () => (/* binding */ delBudget),\n/* harmony export */   \"getBudget\": () => (/* binding */ getBudget),\n/* harmony export */   \"getBudgets\": () => (/* binding */ getBudgets)\n/* harmony export */ });\n/**\n * \n * @param {object} entry \n */\nfunction addBudget(entry, editId) {\n    let data = JSON.parse(localStorage.getItem('budgets'));\n\n    //Is there an entry for this month already?\n    if (data) {\n        const entryExisting = data.hasOwnProperty(entry.id);\n\n        if (editId == null && entryExisting && confirm('A budget for this month already exists, do you want to replace it?') == false) {\n            return false;\n        }\n    }\n\n    data = { ...data, [entry.id]: entry };\n\n    localStorage.setItem('budgets', JSON.stringify(data));\n\n    return true;\n}\n\n/**\n * \n * @param {string} id \n */\nfunction delBudget(id) {\n    let data = JSON.parse(localStorage.getItem('budgets'));\n    delete data[id];\n    localStorage.setItem('budgets', JSON.stringify(data));\n}\n\n/**\n * \n * @param {string} id \n * @returns {object|null}\n */\nfunction getBudget(id) {\n    const data = JSON.parse(localStorage.getItem('budgets'));\n\n    return data ? data[id] : null;\n}\n\nfunction getBudgets() {\n    return JSON.parse(localStorage.getItem('budgets'));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYnVkZ2V0LnV0aWxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ087QUFDUDs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2J1ZGdldGVlci8uL3NyYy9idWRnZXQudXRpbHMuanM/NzVlYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IGVudHJ5IFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQnVkZ2V0KGVudHJ5LCBlZGl0SWQpIHtcbiAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2J1ZGdldHMnKSk7XG5cbiAgICAvL0lzIHRoZXJlIGFuIGVudHJ5IGZvciB0aGlzIG1vbnRoIGFscmVhZHk/XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgICAgY29uc3QgZW50cnlFeGlzdGluZyA9IGRhdGEuaGFzT3duUHJvcGVydHkoZW50cnkuaWQpO1xuXG4gICAgICAgIGlmIChlZGl0SWQgPT0gbnVsbCAmJiBlbnRyeUV4aXN0aW5nICYmIGNvbmZpcm0oJ0EgYnVkZ2V0IGZvciB0aGlzIG1vbnRoIGFscmVhZHkgZXhpc3RzLCBkbyB5b3Ugd2FudCB0byByZXBsYWNlIGl0PycpID09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0geyAuLi5kYXRhLCBbZW50cnkuaWRdOiBlbnRyeSB9O1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2J1ZGdldHMnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbEJ1ZGdldChpZCkge1xuICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYnVkZ2V0cycpKTtcbiAgICBkZWxldGUgZGF0YVtpZF07XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2J1ZGdldHMnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCdWRnZXQoaWQpIHtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYnVkZ2V0cycpKTtcblxuICAgIHJldHVybiBkYXRhID8gZGF0YVtpZF0gOiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVkZ2V0cygpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYnVkZ2V0cycpKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/budget.utils.js\n");

/***/ }),

/***/ "./src/common.utils.js":
/*!*****************************!*\
  !*** ./src/common.utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"categories\": () => (/* binding */ categories),\n/* harmony export */   \"categoriesSum\": () => (/* binding */ categoriesSum),\n/* harmony export */   \"clearSelected\": () => (/* binding */ clearSelected),\n/* harmony export */   \"createTag\": () => (/* binding */ createTag),\n/* harmony export */   \"getMonthInUnix\": () => (/* binding */ getMonthInUnix),\n/* harmony export */   \"getTotalSpent\": () => (/* binding */ getTotalSpent),\n/* harmony export */   \"td\": () => (/* binding */ td),\n/* harmony export */   \"th\": () => (/* binding */ th),\n/* harmony export */   \"tr\": () => (/* binding */ tr)\n/* harmony export */ });\nconst categories = {\n    '0': 'Other',\n    '1': 'Utilities',\n    '2': 'Groceries',\n    '3': 'Entertainment',\n    '4': 'Transport'\n};\n\n/**\n * \n * @param {string} tagName \n * @param {object} attributes \n * @param  {...(string|Node)} content \n * @returns {HTMLElement}\n */\n\nfunction createTag(tagName, attributes, ...content) {\n    const el = document.createElement(tagName);\n\n    for (let [attr, value] of Object.entries(attributes)) {\n        el[attr] = value;\n    }\n\n    for (let item of content) {\n        el.append(item);\n    }\n\n    return el;\n}\n\nconst th = createTag.bind(null, 'th', {});\nconst tr = createTag.bind(null, 'tr', {});\nconst td = createTag.bind(null, 'td', {});\n\nfunction clearSelected() {\n    //Clear previous selected if any\n    const selected = document.querySelector('table.editor tr.selected');\n    if (selected) {\n        selected.classList.remove('selected');\n    }\n}\n\n\n//Get the total sum of each category\nfunction categoriesSum(expenses) {\n    const categoriesTotal = {};\n\n    for (let entry of Object.values(expenses)) {\n        if (categoriesTotal.hasOwnProperty(entry.category)) {\n            categoriesTotal[entry.category] += Number(entry.amount);\n        } else {\n            categoriesTotal[entry.category] = Number(entry.amount);\n        }\n    }\n\n    return categoriesTotal;\n}\n\n//Get total spent\nfunction getTotalSpent(expenses) {\n    const categoriesTotal = categoriesSum(expenses);\n    return Object.values(categoriesTotal).reduce((acc, b) => acc + b, 0);\n}\n\n//Leading zero in month makes 2 hours difference ?!\nfunction getMonthInUnix(date) {\n    return Date.parse(`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, 0)}`);\n}\n\nwindow.getMonthInUnix = getMonthInUnix;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uLnV0aWxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksa0JBQWtCO0FBQzlCLGFBQWE7QUFDYjs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTyx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDLHdDQUF3Qzs7QUFFeEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1AseUJBQXlCLG1CQUFtQixHQUFHLGdEQUFnRDtBQUMvRjs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2J1ZGdldGVlci8uL3NyYy9jb21tb24udXRpbHMuanM/NDllZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY2F0ZWdvcmllcyA9IHtcbiAgICAnMCc6ICdPdGhlcicsXG4gICAgJzEnOiAnVXRpbGl0aWVzJyxcbiAgICAnMic6ICdHcm9jZXJpZXMnLFxuICAgICczJzogJ0VudGVydGFpbm1lbnQnLFxuICAgICc0JzogJ1RyYW5zcG9ydCdcbn07XG5cbi8qKlxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZSBcbiAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVzIFxuICogQHBhcmFtICB7Li4uKHN0cmluZ3xOb2RlKX0gY29udGVudCBcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFnKHRhZ05hbWUsIGF0dHJpYnV0ZXMsIC4uLmNvbnRlbnQpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBmb3IgKGxldCBbYXR0ciwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XG4gICAgICAgIGVsW2F0dHJdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaXRlbSBvZiBjb250ZW50KSB7XG4gICAgICAgIGVsLmFwcGVuZChpdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWw7XG59XG5cbmV4cG9ydCBjb25zdCB0aCA9IGNyZWF0ZVRhZy5iaW5kKG51bGwsICd0aCcsIHt9KTtcbmV4cG9ydCBjb25zdCB0ciA9IGNyZWF0ZVRhZy5iaW5kKG51bGwsICd0cicsIHt9KTtcbmV4cG9ydCBjb25zdCB0ZCA9IGNyZWF0ZVRhZy5iaW5kKG51bGwsICd0ZCcsIHt9KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyU2VsZWN0ZWQoKSB7XG4gICAgLy9DbGVhciBwcmV2aW91cyBzZWxlY3RlZCBpZiBhbnlcbiAgICBjb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlLmVkaXRvciB0ci5zZWxlY3RlZCcpO1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICBzZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIH1cbn1cblxuXG4vL0dldCB0aGUgdG90YWwgc3VtIG9mIGVhY2ggY2F0ZWdvcnlcbmV4cG9ydCBmdW5jdGlvbiBjYXRlZ29yaWVzU3VtKGV4cGVuc2VzKSB7XG4gICAgY29uc3QgY2F0ZWdvcmllc1RvdGFsID0ge307XG5cbiAgICBmb3IgKGxldCBlbnRyeSBvZiBPYmplY3QudmFsdWVzKGV4cGVuc2VzKSkge1xuICAgICAgICBpZiAoY2F0ZWdvcmllc1RvdGFsLmhhc093blByb3BlcnR5KGVudHJ5LmNhdGVnb3J5KSkge1xuICAgICAgICAgICAgY2F0ZWdvcmllc1RvdGFsW2VudHJ5LmNhdGVnb3J5XSArPSBOdW1iZXIoZW50cnkuYW1vdW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXNUb3RhbFtlbnRyeS5jYXRlZ29yeV0gPSBOdW1iZXIoZW50cnkuYW1vdW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjYXRlZ29yaWVzVG90YWw7XG59XG5cbi8vR2V0IHRvdGFsIHNwZW50XG5leHBvcnQgZnVuY3Rpb24gZ2V0VG90YWxTcGVudChleHBlbnNlcykge1xuICAgIGNvbnN0IGNhdGVnb3JpZXNUb3RhbCA9IGNhdGVnb3JpZXNTdW0oZXhwZW5zZXMpO1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKGNhdGVnb3JpZXNUb3RhbCkucmVkdWNlKChhY2MsIGIpID0+IGFjYyArIGIsIDApO1xufVxuXG4vL0xlYWRpbmcgemVybyBpbiBtb250aCBtYWtlcyAyIGhvdXJzIGRpZmZlcmVuY2UgPyFcbmV4cG9ydCBmdW5jdGlvbiBnZXRNb250aEluVW5peChkYXRlKSB7XG4gICAgcmV0dXJuIERhdGUucGFyc2UoYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0keyhkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIDApfWApO1xufVxuXG53aW5kb3cuZ2V0TW9udGhJblVuaXggPSBnZXRNb250aEluVW5peDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common.utils.js\n");

/***/ }),

/***/ "./src/expenses.utils.js":
/*!*******************************!*\
  !*** ./src/expenses.utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addExpense\": () => (/* binding */ addExpense),\n/* harmony export */   \"delExpense\": () => (/* binding */ delExpense),\n/* harmony export */   \"getExpense\": () => (/* binding */ getExpense),\n/* harmony export */   \"getExpenses\": () => (/* binding */ getExpenses),\n/* harmony export */   \"getMonthlyExpenses\": () => (/* binding */ getMonthlyExpenses)\n/* harmony export */ });\n/**\n * \n * @param {object} entry \n */\nfunction addExpense(entry) {\n    let data = JSON.parse(localStorage.getItem('expenses'));\n    data = { ...data, [entry.id]: entry };\n\n    localStorage.setItem('expenses', JSON.stringify(data));\n}\n\n/**\n * \n * @param {string} id \n */\nfunction delExpense(id) {\n    let data = JSON.parse(localStorage.getItem('expenses'));\n    delete data[id];\n    localStorage.setItem('expenses', JSON.stringify(data));\n}\n\n/**\n * \n * @param {string} id \n * @returns {object|null}\n */\nfunction getExpense(id) {\n    const data = JSON.parse(localStorage.getItem('expenses'));\n\n    return data ? data[id] : null;\n}\n\nfunction getExpenses() {\n    return JSON.parse(localStorage.getItem('expenses'));\n}\n\nfunction getMonthlyExpenses(monthInUnix) {\n    //Next month in unix\n    const month = new Date(monthInUnix);\n    month.setMonth(month.getMonth() + 1);\n    const nextMonthInUnix = Date.parse(month);\n\n    //Get expenses for current month\n    const expenses = Object.values(getExpenses()).filter(el => el.date >= monthInUnix && el.date < nextMonthInUnix);\n    console.log(new Date(monthInUnix));\n    console.log(new Date(nextMonthInUnix));\n    console.log(expenses);\n    return expenses.reduce((acc, b) => acc + Number(b.amount), 0);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZXhwZW5zZXMudXRpbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ087QUFDUDtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2J1ZGdldGVlci8uL3NyYy9leHBlbnNlcy51dGlscy5qcz8xMWFlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gZW50cnkgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRFeHBlbnNlKGVudHJ5KSB7XG4gICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdleHBlbnNlcycpKTtcbiAgICBkYXRhID0geyAuLi5kYXRhLCBbZW50cnkuaWRdOiBlbnRyeSB9O1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2V4cGVuc2VzJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsRXhwZW5zZShpZCkge1xuICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXhwZW5zZXMnKSk7XG4gICAgZGVsZXRlIGRhdGFbaWRdO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdleHBlbnNlcycsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEV4cGVuc2UoaWQpIHtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXhwZW5zZXMnKSk7XG5cbiAgICByZXR1cm4gZGF0YSA/IGRhdGFbaWRdIDogbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV4cGVuc2VzKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdleHBlbnNlcycpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vbnRobHlFeHBlbnNlcyhtb250aEluVW5peCkge1xuICAgIC8vTmV4dCBtb250aCBpbiB1bml4XG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZShtb250aEluVW5peCk7XG4gICAgbW9udGguc2V0TW9udGgobW9udGguZ2V0TW9udGgoKSArIDEpO1xuICAgIGNvbnN0IG5leHRNb250aEluVW5peCA9IERhdGUucGFyc2UobW9udGgpO1xuXG4gICAgLy9HZXQgZXhwZW5zZXMgZm9yIGN1cnJlbnQgbW9udGhcbiAgICBjb25zdCBleHBlbnNlcyA9IE9iamVjdC52YWx1ZXMoZ2V0RXhwZW5zZXMoKSkuZmlsdGVyKGVsID0+IGVsLmRhdGUgPj0gbW9udGhJblVuaXggJiYgZWwuZGF0ZSA8IG5leHRNb250aEluVW5peCk7XG4gICAgY29uc29sZS5sb2cobmV3IERhdGUobW9udGhJblVuaXgpKTtcbiAgICBjb25zb2xlLmxvZyhuZXcgRGF0ZShuZXh0TW9udGhJblVuaXgpKTtcbiAgICBjb25zb2xlLmxvZyhleHBlbnNlcyk7XG4gICAgcmV0dXJuIGV4cGVuc2VzLnJlZHVjZSgoYWNjLCBiKSA9PiBhY2MgKyBOdW1iZXIoYi5hbW91bnQpLCAwKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/expenses.utils.js\n");

/***/ }),

/***/ "./src/summary.js":
/*!************************!*\
  !*** ./src/summary.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _budget_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budget.utils */ \"./src/budget.utils.js\");\n/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.utils */ \"./src/common.utils.js\");\n/* harmony import */ var _expenses_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expenses.utils */ \"./src/expenses.utils.js\");\n/* harmony import */ var _summary_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./summary.utils */ \"./src/summary.utils.js\");\n\n\n\n\n\nconst theadRow = document.querySelector('table.editor thead tr');\nconst tbody = document.querySelector('table.editor tbody');\nconst [totalRow, overrunRow, savingsRow] = document.querySelectorAll('table.editor tfoot tr');\n\nconst budgets = (0,_budget_utils__WEBPACK_IMPORTED_MODULE_0__.getBudgets)();\nconst expenses = (0,_expenses_utils__WEBPACK_IMPORTED_MODULE_2__.getExpenses)();\nconst categoriesTotal = (0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.categoriesSum)(expenses);\nconst totalSpent = (0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.getTotalSpent)(expenses);\nconst months = Object.keys(budgets).sort((a, b) => a - b); //Months sorted ascending\n\n//Get monthly budgets with categories monthly sum\nconst summary = (0,_summary_utils__WEBPACK_IMPORTED_MODULE_3__.categoriesMonthlySum)(budgets, expenses);\n\nhydrateTable();\n\nfunction hydrateTable() {\n    //Add headers\n    for (let month of months) {\n        const date = new Date(Number(month));\n        const dateString = date.toLocaleString('en-US', { month: 'short' });\n\n        theadRow.appendChild((0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.th)(dateString));\n    }\n    theadRow.appendChild((0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.th)('Total'));\n\n    //Add a row for each category\n    for (let [catId, catTotal] of Object.entries(categoriesTotal)) {\n        //Create a row for the category\n        const catName = _common_utils__WEBPACK_IMPORTED_MODULE_1__.categories[catId];\n        const row = (0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.tr)((0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.th)(catName));\n\n        //Go through months\n        for (let month of months) {\n            const categoryMonthlySum = summary[month].categories[catId];\n            row.appendChild((0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.td)((0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.createTag)('span', { className: 'currency' }, categoryMonthlySum)));\n        }\n\n        //Append category total\n        row.appendChild((0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.th)((0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.createTag)('span', { className: 'currency' }, catTotal)));\n        tbody.appendChild(row);\n    }\n\n    //Table footer\n    let totalOverrun = 0;\n    let totalSavings = 0;\n\n    for (let month of months) {\n        //Spent\n        const spentSum = Object.values(summary[month].categories).reduce((acc, b) => acc + b, 0);\n        totalRow.appendChild((0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.td)((0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.createTag)('span', { className: 'currency' }, spentSum)));\n\n        //Overruns\n        let overrun = spentSum - Number(summary[month].budget);\n        overrun = overrun < 0 ? 0 : overrun;\n        overrunRow.appendChild((0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.td)((0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.createTag)('span', { className: 'currency' }, overrun)));\n        totalOverrun += overrun;\n\n        //Savings\n        const saving = Number(summary[month].income) - spentSum;\n        savingsRow.appendChild((0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.td)((0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.createTag)('span', { className: 'currency' }, saving)));\n        totalSavings += saving;\n    }\n\n    totalRow.appendChild((0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.th)((0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.createTag)('span', { className: 'currency' }, totalSpent)));\n    overrunRow.appendChild((0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.th)((0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.createTag)('span', { className: 'currency' }, totalOverrun)));\n    savingsRow.appendChild((0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.th)((0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.createTag)('span', { className: 'currency' }, totalSavings)));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3VtbWFyeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0QztBQUNxRDtBQUNsRDtBQUNROztBQUV2RDtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLHlEQUFVO0FBQzFCLGlCQUFpQiw0REFBVztBQUM1Qix3QkFBd0IsNERBQWE7QUFDckMsbUJBQW1CLDREQUFhO0FBQ2hDLDJEQUEyRDs7QUFFM0Q7QUFDQSxnQkFBZ0Isb0VBQW9COztBQUVwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxnQkFBZ0I7O0FBRTFFLDZCQUE2QixpREFBRTtBQUMvQjtBQUNBLHlCQUF5QixpREFBRTs7QUFFM0I7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFEQUFVO0FBQ2xDLG9CQUFvQixpREFBRSxDQUFDLGlEQUFFOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaURBQUUsQ0FBQyx3REFBUyxXQUFXLHVCQUF1QjtBQUMxRTs7QUFFQTtBQUNBLHdCQUF3QixpREFBRSxDQUFDLHdEQUFTLFdBQVcsdUJBQXVCO0FBQ3RFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpREFBRSxDQUFDLHdEQUFTLFdBQVcsdUJBQXVCOztBQUUzRTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaURBQUUsQ0FBQyx3REFBUyxXQUFXLHVCQUF1QjtBQUM3RTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLGlEQUFFLENBQUMsd0RBQVMsV0FBVyx1QkFBdUI7QUFDN0U7QUFDQTs7QUFFQSx5QkFBeUIsaURBQUUsQ0FBQyx3REFBUyxXQUFXLHVCQUF1QjtBQUN2RSwyQkFBMkIsaURBQUUsQ0FBQyx3REFBUyxXQUFXLHVCQUF1QjtBQUN6RSwyQkFBMkIsaURBQUUsQ0FBQyx3REFBUyxXQUFXLHVCQUF1QjtBQUN6RSIsInNvdXJjZXMiOlsid2VicGFjazovL2J1ZGdldGVlci8uL3NyYy9zdW1tYXJ5LmpzPzAxNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QnVkZ2V0cyB9IGZyb20gXCIuL2J1ZGdldC51dGlsc1wiO1xuaW1wb3J0IHsgY2F0ZWdvcmllcywgY3JlYXRlVGFnLCB0aCwgdGQsIHRyLCBjYXRlZ29yaWVzU3VtLCBnZXRUb3RhbFNwZW50IH0gZnJvbSBcIi4vY29tbW9uLnV0aWxzXCI7XG5pbXBvcnQgeyBnZXRFeHBlbnNlcyB9IGZyb20gXCIuL2V4cGVuc2VzLnV0aWxzXCI7XG5pbXBvcnQgeyBjYXRlZ29yaWVzTW9udGhseVN1bSB9IGZyb20gXCIuL3N1bW1hcnkudXRpbHNcIjtcblxuY29uc3QgdGhlYWRSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZS5lZGl0b3IgdGhlYWQgdHInKTtcbmNvbnN0IHRib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUuZWRpdG9yIHRib2R5Jyk7XG5jb25zdCBbdG90YWxSb3csIG92ZXJydW5Sb3csIHNhdmluZ3NSb3ddID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGFibGUuZWRpdG9yIHRmb290IHRyJyk7XG5cbmNvbnN0IGJ1ZGdldHMgPSBnZXRCdWRnZXRzKCk7XG5jb25zdCBleHBlbnNlcyA9IGdldEV4cGVuc2VzKCk7XG5jb25zdCBjYXRlZ29yaWVzVG90YWwgPSBjYXRlZ29yaWVzU3VtKGV4cGVuc2VzKTtcbmNvbnN0IHRvdGFsU3BlbnQgPSBnZXRUb3RhbFNwZW50KGV4cGVuc2VzKTtcbmNvbnN0IG1vbnRocyA9IE9iamVjdC5rZXlzKGJ1ZGdldHMpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTsgLy9Nb250aHMgc29ydGVkIGFzY2VuZGluZ1xuXG4vL0dldCBtb250aGx5IGJ1ZGdldHMgd2l0aCBjYXRlZ29yaWVzIG1vbnRobHkgc3VtXG5jb25zdCBzdW1tYXJ5ID0gY2F0ZWdvcmllc01vbnRobHlTdW0oYnVkZ2V0cywgZXhwZW5zZXMpO1xuXG5oeWRyYXRlVGFibGUoKTtcblxuZnVuY3Rpb24gaHlkcmF0ZVRhYmxlKCkge1xuICAgIC8vQWRkIGhlYWRlcnNcbiAgICBmb3IgKGxldCBtb250aCBvZiBtb250aHMpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKE51bWJlcihtb250aCkpO1xuICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7IG1vbnRoOiAnc2hvcnQnIH0pO1xuXG4gICAgICAgIHRoZWFkUm93LmFwcGVuZENoaWxkKHRoKGRhdGVTdHJpbmcpKTtcbiAgICB9XG4gICAgdGhlYWRSb3cuYXBwZW5kQ2hpbGQodGgoJ1RvdGFsJykpO1xuXG4gICAgLy9BZGQgYSByb3cgZm9yIGVhY2ggY2F0ZWdvcnlcbiAgICBmb3IgKGxldCBbY2F0SWQsIGNhdFRvdGFsXSBvZiBPYmplY3QuZW50cmllcyhjYXRlZ29yaWVzVG90YWwpKSB7XG4gICAgICAgIC8vQ3JlYXRlIGEgcm93IGZvciB0aGUgY2F0ZWdvcnlcbiAgICAgICAgY29uc3QgY2F0TmFtZSA9IGNhdGVnb3JpZXNbY2F0SWRdO1xuICAgICAgICBjb25zdCByb3cgPSB0cih0aChjYXROYW1lKSk7XG5cbiAgICAgICAgLy9HbyB0aHJvdWdoIG1vbnRoc1xuICAgICAgICBmb3IgKGxldCBtb250aCBvZiBtb250aHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5TW9udGhseVN1bSA9IHN1bW1hcnlbbW9udGhdLmNhdGVnb3JpZXNbY2F0SWRdO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRkKGNyZWF0ZVRhZygnc3BhbicsIHsgY2xhc3NOYW1lOiAnY3VycmVuY3knIH0sIGNhdGVnb3J5TW9udGhseVN1bSkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vQXBwZW5kIGNhdGVnb3J5IHRvdGFsXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0aChjcmVhdGVUYWcoJ3NwYW4nLCB7IGNsYXNzTmFtZTogJ2N1cnJlbmN5JyB9LCBjYXRUb3RhbCkpKTtcbiAgICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG5cbiAgICAvL1RhYmxlIGZvb3RlclxuICAgIGxldCB0b3RhbE92ZXJydW4gPSAwO1xuICAgIGxldCB0b3RhbFNhdmluZ3MgPSAwO1xuXG4gICAgZm9yIChsZXQgbW9udGggb2YgbW9udGhzKSB7XG4gICAgICAgIC8vU3BlbnRcbiAgICAgICAgY29uc3Qgc3BlbnRTdW0gPSBPYmplY3QudmFsdWVzKHN1bW1hcnlbbW9udGhdLmNhdGVnb3JpZXMpLnJlZHVjZSgoYWNjLCBiKSA9PiBhY2MgKyBiLCAwKTtcbiAgICAgICAgdG90YWxSb3cuYXBwZW5kQ2hpbGQodGQoY3JlYXRlVGFnKCdzcGFuJywgeyBjbGFzc05hbWU6ICdjdXJyZW5jeScgfSwgc3BlbnRTdW0pKSk7XG5cbiAgICAgICAgLy9PdmVycnVuc1xuICAgICAgICBsZXQgb3ZlcnJ1biA9IHNwZW50U3VtIC0gTnVtYmVyKHN1bW1hcnlbbW9udGhdLmJ1ZGdldCk7XG4gICAgICAgIG92ZXJydW4gPSBvdmVycnVuIDwgMCA/IDAgOiBvdmVycnVuO1xuICAgICAgICBvdmVycnVuUm93LmFwcGVuZENoaWxkKHRkKGNyZWF0ZVRhZygnc3BhbicsIHsgY2xhc3NOYW1lOiAnY3VycmVuY3knIH0sIG92ZXJydW4pKSk7XG4gICAgICAgIHRvdGFsT3ZlcnJ1biArPSBvdmVycnVuO1xuXG4gICAgICAgIC8vU2F2aW5nc1xuICAgICAgICBjb25zdCBzYXZpbmcgPSBOdW1iZXIoc3VtbWFyeVttb250aF0uaW5jb21lKSAtIHNwZW50U3VtO1xuICAgICAgICBzYXZpbmdzUm93LmFwcGVuZENoaWxkKHRkKGNyZWF0ZVRhZygnc3BhbicsIHsgY2xhc3NOYW1lOiAnY3VycmVuY3knIH0sIHNhdmluZykpKTtcbiAgICAgICAgdG90YWxTYXZpbmdzICs9IHNhdmluZztcbiAgICB9XG5cbiAgICB0b3RhbFJvdy5hcHBlbmRDaGlsZCh0aChjcmVhdGVUYWcoJ3NwYW4nLCB7IGNsYXNzTmFtZTogJ2N1cnJlbmN5JyB9LCB0b3RhbFNwZW50KSkpO1xuICAgIG92ZXJydW5Sb3cuYXBwZW5kQ2hpbGQodGgoY3JlYXRlVGFnKCdzcGFuJywgeyBjbGFzc05hbWU6ICdjdXJyZW5jeScgfSwgdG90YWxPdmVycnVuKSkpO1xuICAgIHNhdmluZ3NSb3cuYXBwZW5kQ2hpbGQodGgoY3JlYXRlVGFnKCdzcGFuJywgeyBjbGFzc05hbWU6ICdjdXJyZW5jeScgfSwgdG90YWxTYXZpbmdzKSkpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/summary.js\n");

/***/ }),

/***/ "./src/summary.utils.js":
/*!******************************!*\
  !*** ./src/summary.utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"categoriesMonthlySum\": () => (/* binding */ categoriesMonthlySum)\n/* harmony export */ });\n/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.utils */ \"./src/common.utils.js\");\n\n\n\n//Add categories monthly sum to each month\nfunction categoriesMonthlySum(budgets, expenses) {\n\n    //Create categories object in each month with 0 spent\n    for (let month in budgets) {\n        const catIds = Object.keys(_common_utils__WEBPACK_IMPORTED_MODULE_0__.categories).map(el => [el, 0]);\n        budgets[month].categories = Object.fromEntries(catIds);\n    }\n    _common_utils__WEBPACK_IMPORTED_MODULE_0__.categories;\n    //Calculate the monthly sum of each category\n    for (let entry of Object.values(expenses)) {\n        const date = new Date(entry.date);\n        const month = (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.getMonthInUnix)(date);\n\n        if (budgets.hasOwnProperty(month)) {\n            budgets[month].categories[entry.category] += Number(entry.amount);\n        }\n    }\n\n    return budgets;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3VtbWFyeS51dGlscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0RDs7O0FBRzVEO0FBQ087O0FBRVA7QUFDQTtBQUNBLG1DQUFtQyxxREFBVTtBQUM3QztBQUNBO0FBQ0EsSUFBSSxxREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2REFBYzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2J1ZGdldGVlci8uL3NyYy9zdW1tYXJ5LnV0aWxzLmpzPzcyMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2F0ZWdvcmllcywgZ2V0TW9udGhJblVuaXggfSBmcm9tIFwiLi9jb21tb24udXRpbHNcIjtcblxuXG4vL0FkZCBjYXRlZ29yaWVzIG1vbnRobHkgc3VtIHRvIGVhY2ggbW9udGhcbmV4cG9ydCBmdW5jdGlvbiBjYXRlZ29yaWVzTW9udGhseVN1bShidWRnZXRzLCBleHBlbnNlcykge1xuXG4gICAgLy9DcmVhdGUgY2F0ZWdvcmllcyBvYmplY3QgaW4gZWFjaCBtb250aCB3aXRoIDAgc3BlbnRcbiAgICBmb3IgKGxldCBtb250aCBpbiBidWRnZXRzKSB7XG4gICAgICAgIGNvbnN0IGNhdElkcyA9IE9iamVjdC5rZXlzKGNhdGVnb3JpZXMpLm1hcChlbCA9PiBbZWwsIDBdKTtcbiAgICAgICAgYnVkZ2V0c1ttb250aF0uY2F0ZWdvcmllcyA9IE9iamVjdC5mcm9tRW50cmllcyhjYXRJZHMpO1xuICAgIH1cbiAgICBjYXRlZ29yaWVzO1xuICAgIC8vQ2FsY3VsYXRlIHRoZSBtb250aGx5IHN1bSBvZiBlYWNoIGNhdGVnb3J5XG4gICAgZm9yIChsZXQgZW50cnkgb2YgT2JqZWN0LnZhbHVlcyhleHBlbnNlcykpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGVudHJ5LmRhdGUpO1xuICAgICAgICBjb25zdCBtb250aCA9IGdldE1vbnRoSW5Vbml4KGRhdGUpO1xuXG4gICAgICAgIGlmIChidWRnZXRzLmhhc093blByb3BlcnR5KG1vbnRoKSkge1xuICAgICAgICAgICAgYnVkZ2V0c1ttb250aF0uY2F0ZWdvcmllc1tlbnRyeS5jYXRlZ29yeV0gKz0gTnVtYmVyKGVudHJ5LmFtb3VudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYnVkZ2V0cztcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/summary.utils.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/summary.js");
/******/ 	
/******/ })()
;