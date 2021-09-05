const items=document.querySelectorAll(".item")
console.log(items);
function handleclick(){
    
    this.classList.add("show")
    this.classList.add("open")
    this.classList.add("itemplus")
}
function clickevent(){
    this.classList.add("show")
    this.classList.add("open")
    this.classList.add("itemplus")
    items.forEach((item)=>{
        item.classList.remove("show open itemplus")
    })
}
function handleremove(){
    this.classList.remove("show")
    this.classList.remove("open")
    this.classList.remove("itemplus")
}
items.forEach((item,index)=>{
    item.tabIndex=0
    item.addEventListener("click",clickevent)
    item.addEventListener("focus",handleclick)
    item.addEventListener("mouseenter",handleclick)
    item.addEventListener("mouseleave",handleremove)
    item.addEventListener("blur",handleremove)
})
