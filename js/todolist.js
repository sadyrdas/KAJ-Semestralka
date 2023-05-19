//This js code represents TODOlist and LocalStorgae and HistoryAPI(based on the logic of LocalStorage)
class TodoList {
  constructor() {
    this.list = document.querySelector('ul');
    this.input = document.getElementById('input');
    this.closeButtons = document.getElementsByClassName('close');
    this.addCloseListeners();
    window.addEventListener('popstate', () => {
      this.loadLastOneFromStorage();
    });
  }

  addCloseListeners() {
    for (let i = 0; i < this.closeButtons.length; i++) {
      this.closeButtons[i].addEventListener('click', () => {
        let div = this.closeButtons[i].parentElement;
        div.style.display = 'none';
        this.saveListToStorage();
        history.pushState(null, '', window.location.pathname + window.location.search);
      });
    }
  }

  addListItem() {
    let li = document.createElement('li');
    let inputValue = this.input.value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert('You must write something!');
    } else {
      document.getElementById('exercise').appendChild(li);
      this.addCloseListeners();
      this.saveListToStorage();
    }
    this.input.value = '';

    let span = document.createElement('SPAN');
    let txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    this.addCloseListeners();
  }

  saveListToStorage() {
    let items = [];
    for (let i = 0; i < this.list.children.length; i++) {
      items.push(this.list.children[i].textContent);
    }
    localStorage.setItem('todoListItems', JSON.stringify(items));
  }

  loadListFromStorage() {
    let items = localStorage.getItem('todoListItems');
    if (items) {
      items = JSON.parse(items);
      
      this.list.innerHTML = ''; 

      for (let i = 0; i < items.length; i++) {
        let li = document.createElement('li');
        let t = document.createTextNode(items[i]);
        li.appendChild(t);
  
        let span = document.createElement('SPAN');
        let txt = document.createTextNode('\u00D7');
        span.className = 'close';
        span.appendChild(txt);
        li.appendChild(span);
  
        this.list.appendChild(li);
      }


      this.addCloseListeners();
    }
  }
  

  loadLastOneFromStorage(){
    let items = localStorage.getItem('todoListItems');
    if (items) {
      items = JSON.parse(items);
      if (items.length > 0) {
        const lastItem = items[items.length - 1];
        
        let li = document.createElement('li');
        let t = document.createTextNode(lastItem);
        li.appendChild(t);

        let span = document.createElement('SPAN');
        let txt = document.createTextNode('\u00D7');
        span.className = 'close';
        span.appendChild(txt);
        li.appendChild(span);

        this.list.appendChild(li);
        this.addCloseListeners();
      }
    }
  }
}

let todoList = new TodoList();

document.getElementById('addBtn').addEventListener('click', () => {
  todoList.addListItem();
});
document.getElementById('storageBtn').addEventListener('click', () =>{
  todoList.loadListFromStorage();
})
