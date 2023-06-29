async function userDetails(page = 0, size = 10){
    let myUrl = `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${size}`;
    let resposeData =await fetch(myUrl);
    try{
        const responseData = await resposeData.json();
        sessionStorage.setItem("data",JSON.stringify(responseData.data));
        let tableConatiner = document.getElementById("apiData");
        tableConatiner.innerHTML = '';
        tableConatiner.innerHTML += `<table class="table-container">
        <thead>
            <tr>
                <th class="th-details">UserID</th>
                <th class="th-details">Name</th>
                <th class="th-details">Trips</th>
                <th class="th-details">Airline Names</th>
        </tr>
        </thead>
        <tbody id="tableBody"></tbody>
        </table>`

        const tableBodyOne = document.getElementById("tableBody");
        tableBodyOne.innerHTML = '';
        responseData.data.forEach((data) => {
            tableBodyOne.innerHTML += `<tr class="td-details">
            <td class="td-details">${data._id}</td>
            <td class="td-details">${data.name}</td>
            <td class="td-details">${data.trips}</td>
            <td class="td-details">${data.airline.map((al) => al.name).join(', ')}</td>
            </tr>`
        })
   }
   catch(error){
    console.log(error);
   }
   
}
userDetails();




let total = document.querySelector("pagination-container");
let  paginationNumber = document.querySelector("page-number").clientWidth;
let leftArrow = document.querySelector("left-arrow");
let rightArrow =  document.querySelector("right-arrow");

leftArrow.addEventListener("click", ()=>{
    total.scrollLeft -= paginationNumber *2;
});
rightArrow.addEventListener("click", ()=>{
    total.scrollLeft += paginationNumber *2;
});


