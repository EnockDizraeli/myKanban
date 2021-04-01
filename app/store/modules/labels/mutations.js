define(['store/modules/labels/mutationTypes'],
(types) => {
    return {
        [types.SET_LABELS](state, labels){
            state.labels = [];
            labels.forEach(label => {
                state.labels.push( label );
            });
        },
        [types.CREATE_LABEL](state, label){
            state.labels.push( label );
        },
        [types.UPDATE_LABEL](state, label){
            let labelIndex = state.labels.indexOf( state.labels.find(b => String(b.id) === String(label.id)) );
            for(let prop in label){
                state.labels[labelIndex][prop] = label[prop];
            }
        },
        [types.DELETE_LABEL](state, id){
            let index = state.labels.indexOf( state.labels.find(c => String(c.id) === String(id)) );
            state.labels.splice(index, 1);
        }
    };
});