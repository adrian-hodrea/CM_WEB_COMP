import { getChooseList } from '../controllers/requests/getChooseList.js';

export async function appendDbSelectValues(fieldsData) {
    /* get unic the join tables from form metadata*/
    let joinTableList = await createJoinTableList(fieldsData);

    async function createJoinTableList(formData) {
        const tableAlreadyIncluded = (arr, tablename) => {
            return arr.some(item => item.joinedTable === tablename)
        }
        let joinTableList = [];
        formData.forEach((element) => {
            if (element.joinedTable) {
                let joinTableObj = {
                    joinedTable: element.joinedTable,
                }
                if (!tableAlreadyIncluded(joinTableList, element.joinedTable)) {
                    joinTableList.push(joinTableObj)
                }
            }
        })

        async function asyncForEach(array, callback) {
            for (let index = 0; index < array.length; index++) {
                await callback(array[index], index, array);
            }
        }

        await asyncForEach(joinTableList, async (element) => {
            let persoaneChooseList = await getChooseList(element.joinedTable);
            element.selectValues = persoaneChooseList;
            console.log('element:', element);
        })

        // joinTableList.forEach(async element => {
        //     let persoaneChooseList = await getChooseList(element.joinedTable);
        //     element.selectValues = persoaneChooseList;
        //     console.log('element:', element);
        // })

        console.log('joinTableList:', joinTableList)
        return joinTableList;
    }

    fieldsData.forEach(item => {
        if (item.joinedTable) {
            joinTableList.forEach(i => {
                if (i.joinedTable == item.joinedTable) {
                    item.selectValues = i.selectValues;
                    console.log(item);
                }
            })
        }
    })
}

