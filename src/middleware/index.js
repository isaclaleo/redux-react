export const logger = (store ) => (next) => (action) => {
    console.log(action);
    next(action);
};

export const featuring = (store) => (next) => (actionInf) => {
    const featured = [{name: 'puchamon'}, ...actionInf.action.payload];
    const updateActionInf = {
        ...actionInf,
        action: {...actionInf.action, payload: featured}, 
    };
    next(updateActionInf);
}


// export const fakeNumeber = (store) => (next) => (actionsNumber) => {
//     const fake = [...action.action.payload];
//     for (i = 0; i < fake.length; i++){
//         fake[i].name = `${[i]} ${fake[i].name}`
//     }
//     const fakeNa =  ., action:{...action.action , payload: fake }
// }
