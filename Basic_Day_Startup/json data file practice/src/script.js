const main = document.getElementById("main")

fetch('./data.json')
.then(response => response.json())
.then(data => {
    // console.log(data);
    // console.log(data);
    // console.log("student details are : ", data.studentDetails);
    // console.log("student 2 name is" , giveName(data));
    // console.log("student 1 class is" , data.studentDetails[0].class);
    // isCompleted(data)
    giveAllDetails(data.studentDetails)

});

// const obj = JSON.parse('./data.json')

function giveName(dt) {
    
    var name = dt.studentDetails[1].name;
    return name;
}


function isCompleted(dt) {
    if(dt.completed) {
        console.log("yes completeed!!!");
    }

}

function giveAllDetails(dts) {
    main.innerHTML = ''

    const detailsTable = document.createElement('div')
    detailsTable.classList.add('detailTable')
    detailsTable.innerText = "students names are: "

    dts.forEach((dt) => {
        detailsTable.innerHTML +=  `<br>` + dt.name +" " + dt.age + " " + dt.class ;
    })
    main.appendChild(detailsTable)
}
