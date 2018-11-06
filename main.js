//doing a fetch call to my colors api
fetch("http://localhost:3000/colors")
  .then(colors => colors.json())
  .then(colors => {
//function to create our select box
    const createColorSelectBox = (colors) => {
      //create select elemnet and then give it and id 
      const colorSelectBox = document.createElement("select")
      colorSelectBox.setAttribute("id", "lego__color")
      // loop through every color in our Colors API
      for (let i = 0; i < colors.length; i++) {
          //create an option element
          const colorSelectOption = document.createElement("option")
          //give it a value set to be the same as the color id in our API
          colorSelectOption.setAttribute("value", colors[i].id)
          //display the name in the drop down
          colorSelectOption.textContent = `${colors[i].name}`
          //append it to the selector 
          colorSelectBox.appendChild(colorSelectOption)
        } 
        //return it so it updates 
        return colorSelectBox
      }
      //selects our fieldset in our HTML and appends our select box with all its options
      document.getElementById("color_select").appendChild(createColorSelectBox(colors))
    })

//this is a click event that runs a function once clicked
document.querySelector(".lego__save").addEventListener("click", event => {
  const creator = document.querySelector("#lego__creator").value
  const color = document.querySelector("#lego__color").value
  const shape = document.querySelector("#lego__shape").value
  const creation = document.querySelector("#lego__creation").value

  //builds an object to be put into our databases
  const legoToSave = {
    creator: creator,
    color: color,
    shape: shape,
    creation: creation
  }

  //This will post to my JSON database
  fetch("  http://localhost:3000/legoCreation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(legoToSave)
  })
})