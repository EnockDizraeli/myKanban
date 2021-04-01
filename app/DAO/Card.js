define(['DAO/Base'],
(BaseDAO) => {
    class CardDAO extends BaseDAO{
        constructor(){
            super();
            this.tableName = 'cards';
        }
    }

    return CardDAO;
});