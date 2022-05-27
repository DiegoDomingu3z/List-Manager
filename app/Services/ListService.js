import { ProxyState } from "../AppState.js";
import { List } from "../Models/ListModel.js";





class ListsService{
    createList(listData){
        console.log('lists', listData);
        ProxyState.lists = [...ProxyState.lists, new List(listData)]
    }

    deleteList(id){
        console.log('that bitch is deleted');
        ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
    }




}


export const listsService = new ListsService()