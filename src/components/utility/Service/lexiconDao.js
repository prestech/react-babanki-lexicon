
let SQLite = require('react-native-sqlite-storage');

const database = SQLite.openDatabase({
                            name: 'lexicon.db',
                            createFromLocation: 1
                        },
                        ()=>{console.log('db has opened')},
                        (erro)=>{alert('db failed to open')}
                        );

export default executeSql = (sqlStatement="SELECT * FROM category")=>{

    database.transaction(tx =>{

        tx.executeSql(sqlStatement, [], (tx, result)=>{
            
            let dataLength = result.rows.length;
            console.log("dataLength "+ dataLength);

            if(dataLength > 0 ){
                let output = []
                for(let i = 0; i < dataLength; i++){
                    output.push(result.rows.item(i));
                }
            }
        }, (error)=>{
            console.log("Errro occurred while executing sql statement \n", error)
        });
    });
}