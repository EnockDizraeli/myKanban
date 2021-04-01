define(['DAO/Base'],
(BaseDAO) => {
    class BoardDAO extends BaseDAO{
        constructor(){
            super();
            this.tableName = 'boards';
        }
    }

    return BoardDAO;
});