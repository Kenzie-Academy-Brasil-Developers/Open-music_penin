const darkMode = () => {
    const buttonDark = document.querySelector(".dark__mode")
    buttonDark.innerHTML = ""
    const htmlTag = document.querySelector("html")
    const sunButton = document.createElement("img")
    sunButton.src = "./src/assets/img/sun.svg"
   sunButton.alt = "sun"
   const moonBotton = document.createElement("img")
   moonBotton.src = "./src/assets/img/moon.svg"
   moonBotton.alt = "moon"
   
   



    const preference = localStorage.getItem("@openMusic:darkMode")
if(preference === "true") {
    buttonDark.append(sunButton)
htmlTag.classList.add("dark-mode")
}else if (preference === "false") {
    buttonDark.append(moonBotton)
   
htmlTag.classList.remove("dark-mode")
}

    buttonDark.addEventListener("click", () => {
        htmlTag.classList.toggle("dark-mode")

      if(htmlTag.classList.contains("dark-mode")) {
          buttonDark.innerHTML = ""
        buttonDark.append(sunButton)
        
        localStorage.setItem("@openMusic:darkMode", true)
    }else{
        buttonDark.innerHTML = ""
        
        buttonDark.append(moonBotton)
        localStorage.setItem("@openMusic:darkMode", false)
    }

    })
}
darkMode()