define(['text!components/templates/moveList.html','mixins/openAndClose','store/index'],
(template, openAndClose, store) => {

    return Vue.extend({
        template,
        props: ['list'],
        mixins: [openAndClose],
        watch: {
            list(){
                this.initData();
            }
        },
        data() {
            return {
                boardID: null,
                index: 0
            }
        },
        computed: {
            boards(){
                return store.getters['boards/getAll'];
            },
            positions(){
                let positions = [];
                let lists = store.getters['lists/getAll'].filter(l => l.boardID === this.boardID);
                lists.forEach((list, index) => {
                    positions.push({
                        count: index+1,
                        index
                    });
                });

                /*--We only allow a list to be appended to another board i.e Other than the current one--*/
                if (this.list.boardID !== this.boardID){
                    positions.push({
                        count: lists.length + 1,
                        index: lists.length
                    });
                };
                return positions;
            }
        },
        methods: {
            moveList(){
                this.dispatchToStore();
                this.$emit('close');
            },
            dispatchToStore(){
                let list = Object.assign({}, this.list);
                list.boardID = this.boardID;
                list.index = this.index;
                store.dispatch('lists/move', list);
            },
            updatePosition(){
                /*--
                    Select the first position 
                    when switching from board 
                    where the last selected position was higher
                    than this one has
                --*/
                if (this.index > this.positions.length - 1)
                this.index = this.positions[0].index;
            },
            initData(){
                this.boardID = this.list.boardID;
                this.index = this.list.index || 0;
            }
        },
        created() {
            this.initData();
        },
    });
});