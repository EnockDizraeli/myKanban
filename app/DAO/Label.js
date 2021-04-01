define(['DAO/Base'],
(BaseDAO) => {
    class LabelDAO extends BaseDAO{
        constructor(){
            super();
            this.tableName = 'labels';
        }
    }

    return LabelDAO;
});