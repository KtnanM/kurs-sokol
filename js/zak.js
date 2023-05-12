document.addEventListener("DOMContentLoaded", ()=> {
    fetch('./xml/stuff.xml')
    .then(response => response.text())
    .then(xmlString => {
        let zaka = [];
        if(JSON.parse(localStorage.getItem("zaka"))){
          zaka = JSON.parse(localStorage.getItem("zaka"));
        }
        function func(){
            let i = this.className;
                  zaka.splice(i,1);
                  delete localStorage.zaka;
                  localStorage.setItem("zaka", JSON.stringify(zaka));  
                  location.reload();
        }
        for(let i = 0; i < zaka.length;i++){
            let child = document.createElement("div");
            child.id = "child"
            let parent = document.getElementById("zak");
            let img = document.createElement("img");
            img.id = "zakim"
            img.src = "./img/zak.png"
            let tex = document.createTextNode("Заказ на "+ zaka[i]+ " можно забрать на пункте выдачи по номеру "+ i);
            let a = document.createElement("a");
            a.id="text5"
            a.appendChild(tex);
            let button = document.createElement("button");
            button.id="buton"
            button.className=i;
            button.addEventListener("click",func)
            let text = document.createTextNode("Удалить заказ");
            button.appendChild(text);
            child.append(img);
            child.append(a);
            child.append(button);
            parent.append(child);
        }
        function search(){
            let a = document.getElementById("search").value;
            localStorage.setItem("search", a);
            location = './second.html';
          }
          function search1(){
            let a = " ";
            localStorage.setItem("search", a);
            location = './second.html';
          }
          
              form.addEventListener('submit', function(event) {
                event.preventDefault();
                search();
           });
              document.getElementById("seach").addEventListener('click', search);
            
    })
    .catch(error => {
      console.error('Ошибка загрузки XML-файла:', error);
    });});
  