let list = document.querySelector(".list");
let form =   document.querySelector("form");
let input = document.querySelector("input");
let button = document.querySelector("button");







form.addEventListener('submit'  , (evt)=>{
    evt.preventDefault();
    
    let value = input.value;

    fetch(`https://quranenc.com/api/translation/sura/uzbek_mansour/${value}`).then(
    (respone) => {
        if (respone.status === 200) {
            return respone.json()
        }
    }
).then(
    (data) => {
        list.innerHTML =  null
        data.result.forEach(dataItem => {
            console.log(dataItem);
            let item = document.createElement("li");
            item.className = "item";
            let headerWrapper = document.createElement("div");
            headerWrapper.className = "header_info";
            let headerText = document.createElement("p");
            headerText.className = "header_text"
            let bodyWrapper = document.createElement("div");
            bodyWrapper.className = "body_info";
            let bodyText = document.createElement("p");

            headerText.textContent = dataItem.arabic_text;
            bodyText.textContent = dataItem.translation
    
            headerWrapper.append(headerText);
            item.append(headerWrapper);
            list.append(item)

            bodyWrapper.append(bodyText);
            item.append(bodyWrapper);
            list.append(item)

        });
    }
)

    
   

})










