function displayUsers() {
    document.querySelector("#myUsers").innerHTML = ""

    for (index = 0; index < users.length; index++) {
        var myData = document.createElement("tr");

        myData.innerHTML = `
                <td> ${users[index].id} </td>
                <td> ${users[index].name} </td>
                <td> ${users[index].age} </td>
                <td> ${users[index].city} </td>
                <td> ${users[index].profession} </td>
                <td> ${users[index].salary} </td>
                <td> ${users[index].isActive} </td>
                <td><button >Edit</button></td>
                <td><button onclick="deleteUser()">Delete</button></td>`
        document.querySelector("#myUsers").appendChild(myData);
    }
}
displayUsers();

function clearFormData() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    document.getElementById("profession").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("isActive").value = "";
}