document.addEventListener("DOMContentLoaded", ()=> {
fetch('./xml/stuff.xml')
  .then(response => response.text())
  .then(xmlString => {
    let kur = [];
    if(JSON.parse(localStorage.getItem("kur"))){
      kur = JSON.parse(localStorage.getItem("kur"));
    }
    let bes = [];
    if(JSON.parse(localStorage.getItem("bes"))){
      bes = JSON.parse(localStorage.getItem("bes"));
    }
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const discounts = xmlDoc.getElementsByTagName('discount');
    const adreses = xmlDoc.getElementsByTagName('adress');
    const prices = xmlDoc.getElementsByTagName('price');
    const ids = xmlDoc.getElementsByTagName('id');
    const ops = xmlDoc.getElementsByTagName('op');
    const names = xmlDoc.getElementsByTagName('name');
    a = localStorage.getItem("search")      
      if(typeof(a) == "string")
      a = a.toLowerCase();
     delete localStorage.search;
     function func2(){
      let i = this.className;
      kur.push(this.className);
      localStorage.setItem("kur", JSON.stringify(kur));
   }
   function best(){
    let i = this.className;
    bes.push(this.className);
    localStorage.setItem("bes", JSON.stringify(bes));
    console.log(localStorage.bes);
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
      var textNode4 = document.createTextNode("В избранное");
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
     for (let i = 0; i < discounts.length; i++) {
        const discount = discounts[i].textContent;
        const number = parseInt(discount);
        const ides = ids[i].textContent;
        const id = parseInt(ides);
        const adres = adreses[i].textContent;
        const price = parseFloat(prices[i].textContent)
        const name = names[i].textContent.toLowerCase();
        console.log(name);
        console.log(a);
        console.log(name.indexOf(a));
        if (name.indexOf(a) != -1) {
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
          myDiv.appendChild(myImg);
          myDiv2.appendChild(myText);
          if(discount >0){
            var myText2 =document.createElement('a');
            myText2.id = "discount";
            myText2.textContent = "-"+discount+"%";
          myDiv.appendChild(myText2)}
          myDiv.appendChild(myDiv2);
          document.getElementById('assor').appendChild(myDiv);
        }
      }
      const form = document.getElementById('form');
      function search(){
        let a = document.getElementById("search").value;
        localStorage.setItem("search", a);
        location = './second.html';
      }
          form.addEventListener('submit', function(event) {
            event.preventDefault();
            search();
       });
          document.getElementById("seach").addEventListener('click', search);
    document.getElementById("inf").addEventListener("click", ()=>{
        var parent = document.getElementById("body");
        var child = document.createElement("div");
        child.id="newwin1";
        var button3 = document.createElement("img");
        button3.id="exit";
        button3.src='./img/exit.png';
        button3.addEventListener("click", () =>{
          parent.removeChild(child);
        })
        var textnode = document.createTextNode(" Добро пожаловать в интернет-магазин Miga - вашего надежного партнера в области чистоты и гигиены! Мы стремимся обеспечить нашим клиентам самые эффективные и инновационные средства для уборки и поддержания безупречной чистоты в доме, офисе или любом другом пространстве.Miga - это команда профессионалов, которая сосредоточена на вашем комфорте и удовлетворении. Мы с гордостью предлагаем широкий ассортимент продуктов, разработанных с использованием передовых технологий и ингредиентов высочайшего качества. Наша цель - предложить вам не только эффективные решения для уборки, но и продукты, которые безопасны для вас, вашей семьи и окружающей среды.");
        var a =document.createElement("a");
        a.append(textnode);
        child.append(a);
        child.append(button3);
        parent.append(child);
      })
      document.getElementById("partn").addEventListener("click", ()=>{
        var parent = document.getElementById("body");
        var child = document.createElement("div");
        child.id="newwin1";
        var button3 = document.createElement("img");
        button3.id="exit";
        button3.src='./img/exit.png';
        button3.addEventListener("click", () =>{
          parent.removeChild(child);
        })
        var textnode = document.createTextNode("Мы гордимся нашими партнерскими отношениями и сотрудничеством с ведущими производителями и поставщиками чистящих средств. Наша цель - предложить нашим клиентам только лучшие продукты на рынке и обеспечить им высокий уровень качества и удовлетворенности. В Miga мы тщательно выбираем наших партнеров, основываясь на их репутации, инновационных разработках и стремлении к экологической ответственности. Мы работаем с компаниями, которые разделяют наши ценности в области чистоты, безопасности и устойчивости.")
        var a =document.createElement("a");
        a.append(textnode);
        child.append(a);
        child.append(textnode);
        child.append(button3);
        parent.append(child);
      })
      document.getElementById("adresses").addEventListener("click", ()=>{
        var parent = document.getElementById("body");
        var child = document.createElement("div");
        child.id="newwin1";
        var button3 = document.createElement("img");
        button3.id="exit";
        button3.src='./img/exit.png';
        button3.addEventListener("click", () =>{
          parent.removeChild(child);
        })
        var a =document.createElement("iframe");
        a.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1175.6782122333007!2d27.556611555325926!3d53.88986860600663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfdbb8f1c667%3A0x1c7f1fe9839a18c5!2z0YPQuy4g0JHQvtCx0YDRg9C50YHQutCw0Y8gMjUsINCc0LjQvdGB0Lo!5e0!3m2!1sru!2sby!4v1683624212007!5m2!1sru!2sby";
        a.width ="100%";
        a.height="450";
        a.style="border:0;"
        a.allowfullscreen ="";
        a.loading="lazy";
        a.referrerPolicy="no-referrer-when-downgrade";
        child.append(a);
        child.append(button3);
        parent.append(child);
      })
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
