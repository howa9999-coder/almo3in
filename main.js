       let arr = [];
       const checked= JSON.parse(localStorage.getItem("checked")) 
      let uniqueArr = checked || [];
      const checkBoxes = document.querySelectorAll(".circle-checkbox");
      //get the stored color
      const savedColor = JSON.parse(localStorage.getItem("color")) 
      document.querySelector('.btn-container').style.backgroundColor = `${savedColor}`;
//keep the checked boxes checked


// Function to check checkboxes by index
function checkBoxesByIndexes(array, checkBoxes) {
    checkBoxes.forEach((checkBox, index) => {
        checkBox.querySelector("input").checked = array.includes(index);
    });
}

// Call the function

checkBoxesByIndexes(uniqueArr, checkBoxes);


      function handleCheckBoxChange(checkBox, index) {
          const input = checkBox.querySelector("input");
      
          if (input.checked) {
              if (!uniqueArr.includes(index)) {
                  uniqueArr.push(index); 
                  console.log(uniqueArr)
              }
          } else {
              uniqueArr = uniqueArr.filter(item => item !== index);
          }
      
          document.querySelector("#counter").innerHTML = uniqueArr.length;
          localStorage.setItem("checked", JSON.stringify(uniqueArr));
      }
      
 // count checked boxes
      checkBoxes.forEach((checkBox, index) => {
          checkBox.addEventListener("change", () => handleCheckBoxChange(checkBox, index));
         
      });
      


//refresh the checkboxes
      document.querySelector(".new").addEventListener("click", function(){
        uncheckAllCheckboxes()
      })
function uncheckAllCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
    arr = [];
    uniqueArr = [];
    localStorage.setItem("checked", JSON.stringify(uniqueArr));
    document.querySelector('#counter').innerHTML = uniqueArr.length;

}
//color 
document.querySelector("#change").addEventListener("click", function(){
    const color = document.querySelector('#color1')
  localStorage.setItem("color", JSON.stringify(color.value));
    document.querySelector('.btn-container').style.backgroundColor = `${color.value}`;
    })
//default
document.querySelector("#default").addEventListener("click", function(){
    document.querySelector('.btn-container').style.backgroundColor = `pink`;
    localStorage.setItem("color", JSON.stringify("pink"));
})
