define(['DAO/Base'],
(BaseDAO) => {
    class ChecklistDAO extends BaseDAO{
        constructor(){
            super();
            this.tableName = 'checklists';
        }
    }

    return ChecklistDAO;
});