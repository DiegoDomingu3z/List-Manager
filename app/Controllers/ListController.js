import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListService.js"




function _drawList(){
    let lists = ProxyState.lists
    let template = ''
    lists.forEach(l => template += l.Template)
    document.getElementById('lists').innerHTML = template

}


export class ListController{
    constructor(){
        console.log('this is working');
        ProxyState.on('lists', _drawList)
_drawList()


    }


    createList(){
        window.event.preventDefault()
        console.log('this bitch is working');
        let form = window.event.target
        let  listData = {

            name: form.name.value
        }
        console.log('list data', listData);
        listsService.createList(listData)

    }



    deleteList(id){
        console.log('this bitch is working', id);
        listsService.deleteList(id)
    }
}