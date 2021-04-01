define(['text!pages/templates/card.html','mixins/openAndClose','components/cardPageTitle',
'components/cardPageLabels','components/cardDescription','components/checklistGroup','components/cardPageControls','store/index'],
(template, openAndClose, cardPageTitle, cardPageLabels, cardDescription, checklistGroup, cardPageControls, store) => {

    return Vue.extend({
        template,
        mixins: [openAndClose],
        data() {
            return {
                cardID: ''
            }
        },
        computed: {
            card(){
                return store.getters['cards/getAll'].find(c => c.id === this.cardID);
            }
        },
        components : {
            cardPageTitle,
            cardPageLabels,
            cardDescription,
            checklistGroup,
            cardPageControls
        },
        watch: {
            opened(val){
                if (!val){
                    this.$router.back();
                }
            }
        },
        beforeRouteEnter (to, from, next) {
            next(self => {
                self.cardID = to.params.cardID;
                self.open();
            });
        },
        beforeRouteUpdate(to, from, next){
            this.cardID = to.params.cardID;
            next();
        }
    });
});