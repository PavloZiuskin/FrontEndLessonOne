const photoLinkArr=["image/0001.jpg","image/0002.jpg","image/0003.jpg","image/0004.jpg","image/0005.jpg","image/0006.jpg","image/0007.jpg","image/0008.jpg","image/0009.jpg"];
const prevBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn");
const sliderPhoto  = document.querySelector(".slider-photo");
const slider = document.querySelector(".container");
const dotSliderBtn=document.querySelector(".dot-slider");

let counter = 0;
const photoLinkLength = photoLinkArr.length;
sliderPhoto.src =photoLinkArr[0];
for (let i = 0; i < photoLinkLength; i++) {
    dotSliderBtn.innerHTML =`${dotSliderBtn.innerHTML} <button class='dot-btn'>${i}</button>`;
}

slider.addEventListener("click",(event)=>{
changePhotoBtn(event);
});
dotSliderBtn.addEventListener("click",(event)=>{
    if (event.target.classList.contains("dot-btn")){
    counter = +event.target.innerText;
        if(counter!==0 || counter !== photoLinkLength-1){
                removeAttr(nextBtn);
                removeAttr(prevBtn);
                removeAttr(event.currentTarget.children[0]);
                removeAttr(event.currentTarget.lastChild);}
        if(counter !== photoLinkLength-1){
                removeAttr(nextBtn);
                removeAttr(event.currentTarget.lastChild);}
        if(counter === 0) {
                addAttr(prevBtn);
                addAttr(event.currentTarget.children[0]);
        }
        if (counter ===1) {
                removeAttr(prevBtn);
                removeAttr(event.currentTarget.children[0]);}
        if(counter+1 === photoLinkLength) {
                addAttr(nextBtn);
                addAttr(event.currentTarget.lastChild);}
    setLink();
    }
})

const removeAttr = (targetBtn)=>{targetBtn.removeAttribute("disabled");}
const addAttr = (targetBtn)=>{targetBtn.setAttribute("disabled", true);}
const setLink=()=>{sliderPhoto.src=photoLinkArr[counter];}
const changePhotoBtn=(e)=>{
    if(e.target === nextBtn){
        counter++;
        if (counter===1) {
            removeAttr(prevBtn);
            removeAttr(dotSliderBtn.children[0]);
            }
        if(counter+1 === photoLinkLength) {
            addAttr(nextBtn);
            addAttr(dotSliderBtn.lastChild);}
        setLink();
    }
    if(e.target === prevBtn){
        counter--;
        if(counter !== photoLinkLength){
            removeAttr(nextBtn);
            removeAttr(dotSliderBtn.lastChild);
        }
        if(counter === 0) {
            addAttr(prevBtn);
            addAttr(dotSliderBtn.children[0]);
        }
        setLink();
    }
}
addAttr(dotSliderBtn.children[0])