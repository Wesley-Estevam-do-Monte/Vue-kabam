<template>
<div>
  <div class="container-fluid mt-3">
    <div class="row">
      <div class="col form-inline">
        
      <div class="container">
        <!-- Button to Open the Modal -->
        
        
        <!-- The Modal -->
        <div class="modal" id="myModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <!-- Modal Header -->
              <div class="modal-header">
                <h1 class="modal-title">Adicionar Tarefa</h1>
                <button type="button" class="close" data-dismiss="modal">×</button>
              </div>        
                <!-- Modal body -->
                <br>
                <b-form-input class="col form-inline ml-2 mr-2" v-model="newTask" placeholder="Adicionar tarefa" @keyup.enter="add"></b-form-input>
                <br>
                <select class="ml-2 mr-2" v-model="newName" placeholder="Descrição" @keyup.enter="newName" style="border-radius: 4px">
                  <option>Segunda-Feira</option>
                  <option>Terça-Feira</option>
                  <option>Quarta-Feira</option>
                  <option>Quinta-Feira</option>
                  <option>Sexta-Feira</option>
                </select>
            <div class="modal-body"></div>
        <!-- Modal footer -->
        <div class="modal-footer">
        <b-button class="ml-1" variant="primary" @click="add" data-dismiss="modal">
        Adicionar
        </b-button>
        </div>
        
            </div>
          </div>
        </div>
  
        </div>
        </div>
      </div>

<div class="container1">
          
    <!-- inicio quadrados -->
    <div class="row mt-2">

 <div class="btn-holder" >
            <b-button v-b-modal.modal-1 class="btn btn-info" data-toggle="modal" data-target="#myModal">
              <img src="https://img.icons8.com/ios/452/add-file.png" width="35" height="35"/>
            </b-button>
          </div>
        </div>

      <!-- inicio segunda -->
    <div class="row ml-2">
      <div class="col-md-0 ml-0" >
        <div class="p-2 alert-primary" style="border-radius: 20px; width: 250px;">
          <h3 style="text-align: center;">Segunda-Feira</h3>
          <draggable class="list-group kanban-column classSegunda" :list="arrSegunda" :move="checkMove" group="tasks" style="overflow-y: scroll;">
            <div class="list-group-item" v-for="(elements) in arrSegunda" :key="elements.name" style="border-radius: 10px;">
              {{elements.name}}
              <b-button class="btn btn-primary btn-sm ml-1" variant="primary" @click="edit(elements.id, elements.name, elements.dia)">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Nou
                n_Project_30184%29.svg.png" width="20" height="20"/>
              </b-button>
              

              <b-button class="btn btn-primary btn-sm ml-1" variant="primary" @click="del(elements.id)">
                <img src="https://image.flaticon.com/icons/png/512/61/61848.png" width="20" height="20"/>
              </b-button>
            </div>
          </draggable>
        </div>
      </div>
    
      <!-- inicio terça -->   
      <div class="col-md-0 ml-2">
        <div class="p-2 alert-primary" style="border-radius: 20px; width: 250px; ">
          <h3 style="text-align: center;">Terça-Feira</h3>
          <draggable class="list-group kanban-column classTerca" :list="arrTerca" :move="checkMove" group="tasks" style="overflow-y: scroll;">
            <div class="list-group-item" v-for="(elements) in arrTerca" :key="elements.name" style="border-radius: 10px;">
              {{elements.name}}
              <b-button class="btn btn-primary btn-sm ml-1" variant="primary" @click="edit(elements.id, elements.name, elements.dia)">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Nou
                n_Project_30184%29.svg.png" width="20" height="20"/>
              </b-button>
              <b-button class="btn btn-primary btn-sm ml-1" variant="primary" @click="del(elements.id)">
                <img src="https://image.flaticon.com/icons/png/512/61/61848.png" width="20" height="20"/>
              </b-button>
            </div>
          </draggable>
        </div>
      </div>
    

      <!-- inicio quarta -->
      <div class="col-md-0 ml-2">
        <div class="p-2 alert-primary" style="border-radius: 20px; width: 250px; ">
          <h3 style="text-align: center;">Quarta-Feira</h3>
          <draggable class="list-group kanban-column classQuarta" :list="arrQuarta" :move="checkMove" group="tasks" style="overflow-y: scroll;">
            <div class="list-group-item" v-for="(elements) in arrQuarta" :key="elements.name" style="border-radius: 10px;">
              {{elements.name}}
              <b-button class="btn btn-primary btn-sm ml-1" variant="primary" @click="edit(elements.id, elements.name, elements.dia)">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Nou
                n_Project_30184%29.svg.png" width="20" height="20"/>
              </b-button>
              <b-button class="btn btn-primary btn-sm ml-1" variant="primary" @click="del(elements.id)">
                <img src="https://image.flaticon.com/icons/png/512/61/61848.png" width="20" height="20"/>
              </b-button>
            </div>
          </draggable>
        </div>
      </div>
    

      <!-- inicio quinta -->    
      <div class="col-md-0 ml-2">
        <div class="p-2 alert-primary" style="border-radius: 20px; width: 250px;">
          <h3 style="text-align: center;" >Quinta-Feira</h3>
          <draggable class="list-group kanban-column classQuinta" :list="arrQuinta" :move="checkMove" group="tasks" style="overflow-y: scroll;">
            
              <div class="list-group-item" v-for="(elements) in arrQuinta" :key="elements.name" style="border-radius: 10px;">
                {{elements.name}}
              
                <!-- editar -->
                <b-button class="btn btn-primary btn-sm ml-1" variant="primary" @click="edit(elements.id, elements.name, elements.dia)">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Nou
                n_Project_30184%29.svg.png" width="20" height="20"/>
                </b-button>
             
                <!-- The modal -->
                <b-modal id="my-modal">
                  <b-form-input class="col form-inline" v-model="novoNome" placeholder="Editar tarefa" @keyup.enter="edit"></b-form-input>
                </b-modal>
                
                <!-- deletar -->
                <b-button class="btn btn-primary btn-sm ml-1" variant="primary" @click="del(elements.id)">
                <img src="https://image.flaticon.com/icons/png/512/61/61848.png" width="20" height="20"/>
                </b-button>
              </div>
            
          </draggable>
        </div>
      </div>

      <!-- inicio sexta -->   
    <div id="up">
      <div class="col-md-0 ml-2">
        <div class="p-2 alert-primary" style="border-radius: 20px; width: 250px; ">
          <h3 style="text-align: center;">Sexta-Feira</h3>
          <draggable class="list-group kanban-column classSexta" :list="arrSexta" :move="checkMove" group="tasks" style="overflow-y: scroll;">
            
              <div class="list-group-item" v-for="(elements) in arrSexta" :key="elements.name" style="border-radius: 10px;">
                {{elements.name}}
              
                <!-- editar -->
                <b-button v-b-modal.my-modal variant="btn btn-primary btn-sm ml-1" @click="edit(elements.id, elements.name, elements.dia)">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Nou
                  n_Project_30184%29.svg.png" width="20" height="20"/></b-button>
                <!-- The modal -->
                <b-modal id="my-modal">
                  <b-form-input class="col form-inline" v-model="novoNome" placeholder="Editar tarefa" @keyup.enter="edit"></b-form-input>
                </b-modal>
                
                <!-- deletar -->
                <b-button class="btn btn-primary btn-sm ml-1" variant="primary" @click="del(elements.id)">
                <img src="https://image.flaticon.com/icons/png/512/61/61848.png" width="20" height="20"/>
                </b-button>
              </div>
            
          </draggable>
        </div>
      </div> 
    </div>
   </div> 
  </div>
</div>
  </div>
</template>

<script>
import axios from 'axios';
import draggable from 'vuedraggable';

export default {
   data() {
    return{
      newTask: "", 
      arrSegunda: [],
      arrTerca: [],
      arrQuarta: [],
      arrQuinta: [],
      arrSexta: []
    }
  },
  name: 'App',
        created: function (){ this.list(); },
  components: {  
    draggable
  },
 
  methods:{
    checkMove: function(e) {
      let dia = 0;
    if (e.to.classList[2] === 'classSegunda'){
       dia = 1;
    }else if (e.to.classList[2] === 'classTerca') {
       dia = 2;
    }else if (e.to.classList[2] === 'classQuarta') {
       dia = 3;
    }else if (e.to.classList[2] === 'classQuinta') {
       dia = 4;
    }else if (e.to.classList[2] === 'classSexta') {
       dia = 5;
    }
       
    axios.put(`http://localhost:3000/editar/${e.draggedContext.element.id}`, {
      nome: e.draggedContext.element.name,
      dia_semana: dia,
    })
     
    },
   list() {
      this.arrSegunda = [];
      this.arrTerca = [];
      this.arrQuarta = [];
      this.arrQuinta = [];
      this.arrSexta = [];

      axios.get('http://localhost:3000/listar').then(res => {
            res.data.map((tarefa) => {
          
            if (tarefa.dia_tarefa == 1) {
              this.arrSegunda.push({id: tarefa.id, name: tarefa.nome, dia: tarefa.dia_tarefa});
            }else if (tarefa.dia_tarefa == 2) {
              this.arrTerca.push({id:tarefa.id , name: tarefa.nome,dia: tarefa.dia_tarefa});
            }else if (tarefa.dia_tarefa == 3) {
              this.arrQuarta.push({id: tarefa.id, name: tarefa.nome,dia: tarefa.dia_tarefa});
            }else if (tarefa.dia_tarefa == 4) {
              this.arrQuinta.push({id: tarefa.id, name: tarefa.nome,dia: tarefa.dia_tarefa});
            }else if (tarefa.dia_tarefa == 5) {
              this.arrSexta.push({id: tarefa.id, name: tarefa.nome,dia: tarefa.dia_tarefa});
            }
        })
      })

    },

    add(){
      if(this.newTask && this.newName == "Segunda-Feira") {

          axios.post('http://localhost:3000/cadastrar', {
            nome: this.newTask,
            dia_semana: 1,         
          })
          this.newTask = ""
          this.list();
      } else if(this.newTask && this.newName == "Terça-Feira") {
          axios.post('http://localhost:3000/cadastrar', {
            nome: this.newTask,
            dia_semana: 2
          })
         this.newTask= "";
         this.list();
      } else if(this.newTask && this.newName == "Quarta-Feira") {
        axios.post('http://localhost:3000/cadastrar', {
            nome: this.newTask,
            dia_semana: 3
          })
        this.newTask= "";
        this.list();
      } else if(this.newTask && this.newName == "Quinta-Feira") {
        
        axios.post('http://localhost:3000/cadastrar', {
            nome: this.newTask,
            dia_semana: 4
          })
        this.newTask= "";
        this.list();
      } else if(this.newTask && this.newName == "Sexta-Feira") {

        axios.post('http://localhost:3000/cadastrar', {
            nome: this.newTask,
            dia_semana: 5
          })
        this.newTask= "";
        this.list();
      }
    },
    del(id){
      var c = confirm("Quer apagar este registro?");
      if (c == true) {
        axios.delete(`http://localhost:3000/deletar/${id}`)
       this.list();
     }
      
    },
    edit(id, name, dia){

      let novoNome = prompt("Digite o novo texto da tarefa!", name);
      axios.put(`http://localhost:3000/editar/${id}`, {
        nome: novoNome,
        dia_semana: dia, 

      });
     this.list()
    },
  },  
}
</script>-

<style>
.row {
    position: absolute;
    top: 70px;
    left: 10px;
}
.kanban-column {
    max-height: 350px;
  }
.container1 {
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  display: flex;
}
.container1 .btn-holder {
  position: fixed;
  justify-content: flex-end;
  display: flex;
  top: 10px;
  
}
.col-md-3 {
  min-width: 360px;
}
</style>
