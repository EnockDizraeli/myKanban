define(['offline/storage'],
(Storage) => {

    class BaseDAO{
        constructor(){

        }

        getTable(){
            return Storage.table( this.tableName );
        }

        getSingle(){
            let self = this;
            return new Promise((resolve, reject) => {
                self.getAll()
                .then(arr => {
                    var item = (arr.length > 0) ? arr[0] : false;
                    resolve( item );
                }).catch(reject);
            });
        }

        setSingle(item){
            let table = this.getTable();
            return new Promise((resolve, reject) => {
                //We clear the object store so we have only one record
                table.clear()
                .then(() => {
                    item.id = item.id ? item.id : 'single_identifier';
                    table.add(item)
                    .then(() => {
                        resolve(item);
                    }).catch(reject);
                });
            });
        }

        getAll(){
            return this.getTable().toArray();
        }

        create(item){
            let table = this.getTable();
            return new Promise((resolve, reject) => {
                table.add(item)
                .then(() => { resolve(item) })
                .catch(reject);
            })
        }

        delete(id){
            return this.getTable().delete( id );
        }

        update(id, item){
            let table = this.getTable();
            return new Promise((resolve, reject) => {
                table.update(id, item)
                .then(() => {
                    resolve( item )
                }).catch(reject);
            });
        }

        clear(){
            return this.getTable().clear();
        }
    };

    return BaseDAO;
});