
let arrL = document.getElementById('arrowLeft');
let arrR = document.getElementById('arrowRight');

let sliderArrows = document.querySelector('.smth_buttonish');

let prjPic = document.querySelector('.projectPhotoPic');

let prjTitle = document.querySelector('.projectPicHdr');

let prjCityInfo = document.querySelector('.projectCITY');
let prjAppareaInfo = document.querySelector('.projectAPPAREA');
let prjReptimeInfo = document.querySelector('.projectREPTIME');
let prjCostInfo = document.querySelector('.projectREPCOST');

let prjDots = document.querySelector('.dotsplace');

let projects = [{
    url: "img/image 1.png",
    title: "rostov on don admiral",
    city: "Rostov-on-Don LCD admiral",
    apparea: "81 m2",
    reptime: "3.5 months",
    cost: "Upon request",
    dot: true
  }, {
    url: "img/image 2.png",
    title: "Sochi Thieves",
    city: "Sochi Thieves",
    apparea: "105 m2",
    reptime: "4 months",
    cost: "Upon request",
    dot: true
 }, {
    url: "img/image 3.png",
    title: "rostov-on-don admiral",
    city: "Rostov-on-Don Patriotic",
    apparea: "93 m2",
    reptime: "3 months",
    cost: "Upon request",
    dot: true
}
]; 


function InitSlider () {
    if (!projects || !projects.length) return; 
    InitPrj();
    InitArrows();    
    InitHdrLnk();
    InitHdrDots();
    
};

function InitArrows() {
    sliderArrows.querySelectorAll(".arrow").forEach(arrow => {
        arrow.addEventListener("click", function() {
         checkCurNumberGetNextNumber (arrow,-1)}
        );
    });
    };

function InitHdrLnk() {
            prjTitle.querySelectorAll(".projectHdrLnk").forEach(lnk => {
            lnk.addEventListener("click", function() {
            lnkTo = this.dataset.index
            //console.log(this.dataset.index)
            checkCurNumberGetNextNumber (lnk,lnkTo)
            });
        });
        };
    
    function InitHdrDots() {
            prjDots.querySelectorAll(".dots").forEach(lnk => {
            lnk.addEventListener("click", function() {
            lnkTo = this.dataset.index
            //console.log(this.dataset.index)
            checkCurNumberGetNextNumber (lnk,lnkTo)
            });
        });
        };
   
    function checkCurNumberGetNextNumber(arrow,lnkTo){
        let curNumber = +prjCityInfo.querySelector(".yesDisplay").dataset.index;
       
        let nextNumber;
       if(lnkTo >= 0 ){
        nextNumber = lnkTo;
       } else{
         if (arrow.classList.contains("Left")) {
              nextNumber = curNumber === 0? projects.length - 1 : curNumber - 1;
          } else {
              nextNumber = curNumber === projects.length - 1? 0 : curNumber + 1;
          }
        }
          moveData(curNumber,nextNumber);
    
    }


function moveData(curNumber,nextNumber) {
    //let elementsToMove = ['prjcity_',]
    if (projects.length == 0) {return}
    //let prjElements = Object.getOwnPropertyNames(projects[0])
    let prjElements = ["url","title","city","apparea","reptime","cost","dot"]
    prjElements.forEach ((element,index)=> {
        
        document.getElementById("prj"+element+"_"+curNumber).classList.add("noDisplay");
        document.getElementById("prj"+element+"_"+curNumber).classList.remove("yesDisplay");

        document.getElementById("prj"+element+"_"+nextNumber).classList.remove("noDisplay");
        document.getElementById("prj"+element+"_"+nextNumber).classList.add("yesDisplay");
    })
};

function CreateElementExt(type,id,cl, txt, dataIndex){
    //+ проверку на существование элемента
    if (type != "" && id != "" && cl !=""){
    let res = document.createElement (type);
    res.setAttribute ("id",id);
    res.setAttribute ("data-index",dataIndex);
    res.classList.add(cl);
    res.innerText = txt;
    return res;
    } else {
        return null;
    }
};

function InitPrj() {
    //let elemnames =  Object.getOwnPropertyNames(projects[0])
     //here is ao order is important.  
    projects.forEach((prj, index) => {
       
      let prjCity= CreateElementExt ("span",`prjcity_${index}`,`${index ===0 ? "yesDisplay" : "noDisplay"}` ,`${projects[index].city}`,index); 
      prjCity.classList.add('pprojectDescrTxt');
      prjCityInfo.appendChild(prjCity);
  
      let prjArea = CreateElementExt ("span",`prjapparea_${index}`,`${index ===0 ? "yesDisplay" : "noDisplay"}` ,`${projects[index].apparea}`,index); 
      prjArea.classList.add('pprojectDescrTxt');
      prjAppareaInfo.appendChild(prjArea);
  
      let prjTime = CreateElementExt ("span",`prjreptime_${index}`,`${index ===0 ? "yesDisplay" : "noDisplay"}` ,`${projects[index].reptime}`,index); 
      prjTime.classList.add('pprojectDescrTxt');
      prjReptimeInfo.appendChild(prjTime);
  
      let prjCost = CreateElementExt ("span",`prjcost_${index}`,`${index ===0 ? "yesDisplay" : "noDisplay"}` ,`${projects[index].cost}`,index); 
      prjCost.classList.add('pprojectDescrTxt');
      prjCostInfo.appendChild(prjCost);

      let prjImg = CreateElementExt ("img",`prjurl_${index}`,`${index ===0 ? "yesDisplay" : "noDisplay"}` ,"",index); 
      prjImg.setAttribute ("src",projects[index].url);
      prjImg.classList.add('projectPhotoPic');
      prjPic.appendChild(prjImg);

      let prjTtl = CreateElementExt ("a",`prjtitle_${index}`,`${index ===0 ? "yesDisplay" : "noDisplay"}` ,`${projects[index].title}`,index); 
      prjTtl.classList.add('projectHdrLnk');
      prjTitle.appendChild(prjTtl)

      let prjdot = CreateElementExt ("img",`prjdot_${index}`,`${index ===0 ? "yesDisplay" : "noDisplay"}` ,"",index); 
      prjdot.setAttribute ("src","img/dot_white.svg");
      prjdot.classList.add('dots');
      prjDots.appendChild(prjdot)
    });
  }

document.addEventListener("DOMContentLoaded",function (){
    InitSlider();
});