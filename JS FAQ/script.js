let box = document.getElementsByClassName("faq-box");
for(let i=0;i<box.length;i++){
  box[i].addEventListener("click",function(){
    this.classList.toggle("active")
  })
}