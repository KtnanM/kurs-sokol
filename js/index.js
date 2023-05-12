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
    let count = 0;
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
      const adres = adreses[i].textContent;
      const number = parseInt(discount);
      const price = parseFloat(prices[i].textContent);
      const id = parseInt(ids[i].textContent);
      if (number >= 50) {
    var parentDiv = document.createElement("div");
    parentDiv.id = "c_element";
    parentDiv.className=id;
    parentDiv.addEventListener("click",func);
    var textNode1 = document.createTextNode(price+"BYN");
    var textNode2 = document.createTextNode("-"+discount+"%");
    var textNode3 = document.createTextNode(price*(100-discount)/100+"BYN");
    var a1 =document.createElement('a');
    var a2 =document.createElement('a');
    var a3 =document.createElement('a');
    a1.appendChild(textNode1);
    a2.appendChild(textNode2);
    a3.appendChild(textNode3);
    a1.id="c_a1";
    a2.id="c_a2";
    a3.id="c_a3";
    var newDiv = document.createElement("div");
    newDiv.id="c_img";
    var newDiv1 = document.createElement("div");
    newDiv1.id="c_text";
    var img = document.createElement("img");
    img.src = './img/'+adres;
    img.id="img_item";
    newDiv.appendChild(img);
    newDiv1.appendChild(a1);
    newDiv1.appendChild(a2);
    newDiv1.appendChild(a3);
    parentDiv.appendChild(newDiv);
    parentDiv.appendChild(newDiv1);
    document.getElementById('cont').appendChild(parentDiv);
        count++;
        if (count === 3) {
          break;
        }
      }
    }
    for (let i = 0; i < discounts.length; i++) {
      const discount = discounts[i].textContent;
      const number = parseInt(discount);
      const ides = ids[i].textContent;
      const id = parseInt(ides);
      const adres = adreses[i].textContent;
      const price = parseFloat(prices[i].textContent)
      if (number > 0) {
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
        document.getElementById('moreadv').appendChild(myDiv);
      }
    }
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
      a.className = "TIXT";
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
    const form = document.getElementById('form');
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
document.getElementById("ad3").addEventListener("click", search1);
document.getElementById("left").addEventListener("click", search1);

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      search();
 });
    document.getElementById("seach").addEventListener('click', search);



 var mql = window.matchMedia("(orientation: portrait)");
let menu = document.getElementById("logo1");
if(menu){
menu.addEventListener("click",()=> {
    if(mql.matches) {
            let child = document.createElement("div");
            child.id = "menu";
            let img = document.createElement("img");
            img.src = "./img/exit.png";
            let a = document.createElement("a");
            let t = document.createTextNode("Главная")
            a.href = "index.html";
            a.appendChild(t);
            let a1 = document.createElement("a");
            let t1 = document.createTextNode("Корзина")
            a1.href = "kor.html";
            a1.appendChild(t1);
            let a2 = document.createElement("a");
            let t2 = document.createTextNode("Избранное")
            a2.href = "bes.html";
            a2.appendChild(t2);
            let a3 = document.createElement("a");
            let t3 = document.createTextNode("Заказы")
            a3.href = "zak.html";
            a3.appendChild(t3);
            child.appendChild(a);
            child.appendChild(a1);
            child.appendChild(a2);
            child.appendChild(a3);
            child.appendChild(img);
            img.id = "ex"
            img.addEventListener("click", () =>{
              parent.removeChild(child);
            })
            let parent = document.getElementById("body");
            parent.appendChild(child);
    }
    else {
       menu.addEventListener("click", ()=>{
        location = './index.html';
        })
    }
});}
  })

  .catch(error => {
    console.error('Ошибка загрузки XML-файла:', error);
  });});
