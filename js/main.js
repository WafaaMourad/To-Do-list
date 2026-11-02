document.querySelector("#myForm").addEventListener("submit", function(event) {

    var works = document.querySelector("#works");
    var result = document.querySelector("#result");
    var template = document.querySelector("#taskTemplate");

    event.preventDefault();

    if (works.value.trim() == "") {

        alert("Enter Value");

    } else {

        var myLi = template.content.cloneNode(true);

        myLi.querySelector("span").textContent = works.value;

        var doneBtn = myLi.querySelector("button")

        doneBtn.addEventListener("click", function() {
            
            this.closest("li").remove();
        
        });
        
        result.append(myLi);
        works.value = "";
    }

});