const result=document.querySelector('.result')
const resultBtn=document.querySelector('.kcal-result-box')
const clearBtnAge=document.querySelector('.clear-age')
const clearBtnHeight=document.querySelector('.clear-height')
const clearBtnWeight=document.querySelector('.clear-weight')

let kcal;
let activityIndex;

const clearAgeBtnFunction=()=>{
    const age=document.querySelector('.age-input')
    age.value='';
}
const clearHeightBtnFunction=()=>{
    const height=document.querySelector('.height-input')
    height.value='';
}
const clearWeightBtnFunction=()=>{
    const weight=document.querySelector('.weight-input')
    weight.value='';
}
const calculationOfCaloricNeeds=()=>{
    const gender=document.querySelector('#select-gender option:checked')
    const height=document.querySelector('.height-input')
    const weight=document.querySelector('.weight-input')
    const age=document.querySelector('.age-input')
    const activity=document.querySelector('#select-activity-level option:checked')
    
    const physicalActivityIndex=()=>{
        if(activity.value==='none or low'){
            activityIndex=1.2;
        }
        else if(activity.value==='medium'){
            activityIndex=1.55;
        }
        else if(activity.value==='high'){
            activityIndex=1.725;
        }
    };
    physicalActivityIndex()
    
       if (gender.value==='Female'){
        kcal = (447.593+9.247*weight.value+3.098*height.value-4.330*age.value)*activityIndex;
    } else if (gender.value==='Male'){
        kcal = (88.362 + 13.397 * weight.value + 4.799 * height.value - 5.677 * age.value) * activityIndex;
    }
  
    const allDataCheckFunction=()=>{
        if (gender.value==='-choose sex-' || height.value===''||weight.value===''||age.value===''||activity.value==='-choose physical activity level-'){
            result.textContent=`complete all data fields and click here again`;
            result.style.fontSize='16px';
        } else if(height.value<=0||height.value>250){
            result.textContent=`The height must be in the range of 0-250[cm]`;
            result.style.fontSize='16px';
            result.style.lineHeight='30px';
        } else if(age.value<=0 || age.value>120){
            result.textContent=`Age must be in the range of 0-120`;
            result.style.fontSize='16px';
        } else if(weight.value<=0){
            result.textContent=`Weight must be greater than 0`;
            result.style.fontSize='16px';
        } else if(weight.value>200){
            result.textContent=`Please consult your caloric requirements with family doctor`;
            result.style.fontSize='16px';
            result.style.lineHeight='30px';
        } 
            else {
            result.textContent=`${kcal.toFixed(0)} KCAL`;
            result.style.fontSize='50px';
            result.style.lineHeight='65px';
        }
        }
        
        allDataCheckFunction()
    console.log(kcal);
};

resultBtn.addEventListener('click',calculationOfCaloricNeeds)
clearBtnAge.addEventListener('click',clearAgeBtnFunction)
clearBtnHeight.addEventListener('click',clearHeightBtnFunction)
clearBtnWeight.addEventListener('click',clearWeightBtnFunction)