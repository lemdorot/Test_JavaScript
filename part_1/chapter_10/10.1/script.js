'use strict'

// Finally или просто код?

// Первый использует finally для выполнения кода после try..catch:

// try {
//   начать работу
//   работать
// } catch (e) {
//   обработать ошибку
// } finally {
//   очистить рабочее пространство
// }
// Второй фрагмент просто ставит очистку после try..catch:

// try {
//   начать работу
//   работать
// } catch (e) {
//   обработать ошибку
// }

// очистить рабочее пространство

// finally гарантирует очистку. Если мы просто поместим код в конце f, то он может не выполнится.