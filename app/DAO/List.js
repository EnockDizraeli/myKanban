define(['DAO/Base'],
(BaseDAO) => {
    class ListDAO extends BaseDAO{
        constructor(){
            super();
            this.tableName = 'lists';
        }
    }

    return ListDAO;
});