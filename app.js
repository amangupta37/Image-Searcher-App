const btn = document.getElementById("clk");
const input = document.getElementById("inpt-box");
const output = document.getElementById("box");

const url = "https://api.unsplash.com/search/photos?query=";




function recivedata(datain){
    return url + datain + "&client_id=1M2Bjw3fQ9ZcA8inqDboIgXzHhHL2CqsELWniCElfbQ";
}

 btn.addEventListener("click", function(){
    console.log("one click");
   console.log(input.value);
   const inputdata = input.value;
    // output.innerText=input.value;
 
     fetch(recivedata(inputdata))
     .then(response => response.json())
     .then(json => {
      json.results.forEach(photo => {
        
        output.innerHTML = `<img src=${photo.urls.regular} alt="cat" />`

      });
   })
 })

