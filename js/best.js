document.addEventListener("DOMContentLoaded", ()=> {
fetch('./xml/stuff.xml')
  .then(response => response.text())
  .then(xmlString => { 
    let kur = [];
    if(JSON.parse(localStorage.getItem("kur"))){
      kur = JSON.parse(localStorage.getItem("kur"));
    }
    let ids1 = JSON.parse(localStorage.getItem("bes"));
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const discounts = xmlDoc.getElementsByTagName('discount');
    const adreses = xmlDoc.getElementsByTagName('adress');
    const prices = xmlDoc.getElementsByTagName('price');
    const ids = xmlDoc.getElementsByTagName('id');
    const ops = xmlDoc.getElementsByTagName('op');
    const names = xmlDoc.getElementsByTagName('name');
    const form = document.getElementById('form');
    function func2(){
        let i = this.className;
        kur.push(this.className);
        localStorage.setItem("kur", JSON.stringify(kur));
     }
     function best(){
        let i = this.className;
      for(let a = 0; a < ids1.length; a++){
        if(ids1[a] == i){
          ids1.splice(a,1);
          delete localStorage.kur;
          localStorage.setItem("bes", JSON.stringify(ids1));  
          location.reload();
          break;
        }
      }
     }
    function func(){
        let i = this.className;
        var parent = document.getElementById("body");
        var child = document.createElement("div");
        child.id="newwin";
        var img= document.createElement("img");
        img.src='./img/'+adreses[i].textContent;
        img.id = "newinimg";
        var div = document.createElement("div");
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        div2.id ="ob";
        var a1 = document.createElement("a");
        var textNode1 = document.createTextNode(names[i].textContent);
        a1.append(textNode1);
        a1.id = "name"
        var a2 = document.createElement("a");
        a2.id = "ops"
        var textNode2 = document.createTextNode(ops[i].textContent);
        a2.append(textNode2);
        var button1 = document.createElement("button");
        var textNode3 = document.createTextNode("В корзину");
        button1.appendChild(textNode3);
        button1.id="butt1";
        button1.className = ids[i].textContent;
        button1.addEventListener('click', func2);
        var button2 = document.createElement("button");
        var textNode4 = document.createTextNode("Удалить из избранного");
        button2.appendChild(textNode4);
        button2.className = ids[i].textContent;
        button2.addEventListener("click", best)
        button2.id="butt2";
        var button3 = document.createElement("img");
        button3.id="exit";
        button3.src='./img/exit.png';
        button3.addEventListener("click", () =>{
          parent.removeChild(child);
        })
        div.appendChild(a1);
        div.appendChild(a2);
        div1.appendChild(button1);
        div1.appendChild(button2);
        div2.appendChild(img);
        div2.appendChild(div);
        child.appendChild(div2);
        child.appendChild(div1);
        child.appendChild(button3);
        parent.appendChild(child);
       }
    for (let a = 0; a < ids1.length; a++){
        let i = ids1[a];
        const discount = discounts[i].textContent;
        const number = parseInt(discount);
        const ides = ids[i].textContent;
        const id = parseInt(ides);
        const adres = adreses[i].textContent;
        const price = parseFloat(prices[i].textContent)
          var myDiv = document.createElement('div');
          var myDiv2 = document.createElement('div');
          myDiv.id="add_div";
          myDiv.className = id;
          myDiv.addEventListener("click",func)
          var myImg = document.createElement('img');
          myImg.src = './img/'+adres;
          myImg.id = 'Img_add'
          var myText = document.createElement('a');
          myText.textContent = (price*(100-discount)/100+"BYN");
          var myText2 =document.createElement('a');
          myText2.id = "discount";
          myText2.textContent = "-"+discount+"%";
          myDiv.appendChild(myImg);
          myDiv2.appendChild(myText);
          myDiv.appendChild(myText2);
          myDiv.appendChild(myDiv2);
          document.getElementById('best').appendChild(myDiv);
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
  });})
