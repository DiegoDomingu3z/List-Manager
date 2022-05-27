import { generateId } from "../Utils/generateId.js";
// import { ProxyState } from "../AppState.js";





export class List{
    constructor(data){
    this.id = data.id || generateId()
    this.name = data.name

    }

    get Template(){
        return `
        <div class="col-4">
        <form action="">

          <div class="card bg-white shadow text-center" style="height: 30rem;">
            <h4 class="d-flex justify-content-between text-center bg-warning p-3">${this.name}<span></span><i
              class="mdi mdi-close selectable" onclick="app.listsController.deleteList('${this.id}')"></i></h4>
            <div>
              
            </div>
          </div>
          <div>
            <label for="" class="form-label"></label>
            <input name="" id="" class="form-control" aria-describedby="helpId"
            placeholder="List Name"><button class="btn btn-success "  >+</button></input>
          </div>
        </form>
        </div>
        `
    }
}


