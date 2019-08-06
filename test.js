(function(){
var myAppJavaScript = function(){
  var newDiv = document.createElement("Datalist"); 
  newDiv.setAttribute('id','greeting')
  var option = document.createElement("option");
  option.setAttribute('value','test success')
  
  newDiv.appendChild(option); 
  var currentDiv = document.querySelector("form[role='search']");
  var inputSearch = document.querySelector("form input[type='search']")
  inputSearch.setAttribute('list','greeting')
  if(currentDiv){
    currentDiv.appendChild(newDiv);
    console.log(currentDiv)
  }
};

myAppJavaScript()
})();