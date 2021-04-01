define(['DAO/Base'],
(BaseDAO) => {
    class CardLabelDAO extends BaseDAO{
        constructor(){
            super();
            this.tableName = 'cardLabels';
        }
    }

    return CardLabelDAO;
});