


async function loadTemperature(){
    selectElement = document.getElementById("search")
    searchText = selectElement.value;
    console.log("searchText", searchText)
    updatedname=searchText.toLowerCase();
    let res1 = await fetch(`https://api.domainsdb.info/v1/domains/search?domain=${updatedname}`)
    let data1 = await res1.json()
    console.log(data1)
  //  console.log(`Fun fact about ${animalName} is ${data1.text}`)
   // document.getElementById("animalfactdisplay").innerHTML=`<b>Fun fact about ${animalName} is ${data1.text}<b/>`
}