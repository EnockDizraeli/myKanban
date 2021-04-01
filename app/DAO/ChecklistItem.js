define(['DAO/Base'],
(BaseDAO) => {
    class ChecklistItemDAO extends BaseDAO{
        constructor(){
            super();
            this.tableName = 'checklistItems';
        }
    }

    return ChecklistItemDAO;
});