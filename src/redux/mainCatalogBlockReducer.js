// import catalog1 from './../images/catalog-1.png';
// import catalog2 from './../images/catalog-2.png';
// import catalog3 from './../images/catalog-3.png';
// import catalog4 from './../images/catalog-4.png';
// import catalog5 from './../images/catalog-5.png';
// import catalog6 from './../images/catalog-6.png';

// const initialState = {
//     blocks: [
//         [
//             { id: 1, name: 'Кольца', imgSrc: catalog1 },
//             { id: 2, name: 'Серьги', imgSrc: catalog2 },
//             { id: 3, name: 'Подвески', imgSrc: catalog3 },
//             { id: 4, name: 'Запонки', imgSrc: catalog4 },
//             { id: 5, name: 'Браслеты', imgSrc: catalog5 },
//             { id: 6, name: 'Часы', imgSrc: catalog6 }
//         ],
//         [
//             { id: 7, name: 'Кольца 2', imgSrc: catalog1 },
//             { id: 8, name: 'Серьги 2', imgSrc: catalog2 },
//             { id: 9, name: 'Подвески 2', imgSrc: catalog3 },
//             { id: 10, name: 'Запонки 2', imgSrc: catalog4 },
//             { id: 11, name: 'Браслеты 2', imgSrc: catalog5 },
//             { id: 12, name: 'Часы 2', imgSrc: catalog6 }
//         ],
//         [
//             { id: 13, name: 'Кольца 3', imgSrc: catalog1 },
//             { id: 14, name: 'Серьги 3', imgSrc: catalog2 },
//             { id: 15, name: 'Подвески 3', imgSrc: catalog3 },
//             { id: 16, name: 'Запонки 3', imgSrc: catalog4 },
//             { id: 17, name: 'Браслеты 3', imgSrc: catalog5 },
//             { id: 18, name: 'Часы 3', imgSrc: catalog6 }
//         ],
//         [
//             { id: 19, name: 'Кольца 4', imgSrc: catalog1 },
//             { id: 20, name: 'Серьги 4', imgSrc: catalog2 },
//             { id: 21, name: 'Подвески 4', imgSrc: catalog3 },
//             { id: 22, name: 'Запонки 4', imgSrc: catalog4 },
//             { id: 23, name: 'Браслеты 4', imgSrc: catalog5 },
//             { id: 24, name: 'Часы 4', imgSrc: catalog6 }
//         ],
//         [
//             { id: 25, name: 'Кольца 5', imgSrc: catalog1 },
//             { id: 26, name: 'Серьги 5', imgSrc: catalog2 },
//             { id: 27, name: 'Подвески 5', imgSrc: catalog3 },
//             { id: 28, name: 'Запонки 5', imgSrc: catalog4 },
//             { id: 29, name: 'Браслеты 5', imgSrc: catalog5 },
//             { id: 30, name: 'Часы 5', imgSrc: catalog6 }
//         ],
//         [
//             { id: 31, name: 'Кольца 6', imgSrc: catalog1 },
//             { id: 32, name: 'Серьги 6', imgSrc: catalog2 },
//             { id: 33, name: 'Подвески 6', imgSrc: catalog3 },
//             { id: 34, name: 'Запонки 6', imgSrc: catalog4 },
//             { id: 35, name: 'Браслеты 6', imgSrc: catalog5 },
//             { id: 36, name: 'Часы 6', imgSrc: catalog6 }
//         ]
//     ]
// }

// const SELECT_CATALOG = 'SELECT-CATALOG';

// const mainCatalogBlockReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SELECT_CATALOG:
//             return { ...state, ...state.blocks[action.id] }
//         default:
//             return state;
//     }
// }

// export const selectCatalog = (id) => ({ type: SELECT_CATALOG, id });

// export default mainCatalogBlockReducer;
