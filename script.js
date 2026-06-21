let downloadLink = "";

function openModal(link){

    downloadLink = link;

    document.getElementById("modal").style.display = "block";
    document.getElementById("modal").style.display = "flex";
    
}

function checkPassword(){

    let password =
        document.getElementById("password").value;

    if(password === "5101"){

        window.location.href = downloadLink;

    }else{

        alert("ভুল Password!");
    }
}

function searchTable(){

    let input =
        document.getElementById("searchInput");

    let filter =
        input.value.toUpperCase();

    let table =
        document.getElementById("softwareTable");

    let tr =
        table.getElementsByTagName("tr");

    for(let i=1; i<tr.length; i++){

        let td =
            tr[i].getElementsByTagName("td")[1];

        if(td){

            let txtValue =
                td.textContent || td.innerText;

            if(txtValue.toUpperCase().indexOf(filter) > -1){

                tr[i].style.display = "";

            }else{

                tr[i].style.display = "none";
            }
        }
    }
}

window.onclick = function(event){

    let modal =
        document.getElementById("modal");

    if(event.target == modal){

        modal.style.display = "none";
    }
}

/* menu bar */
function toggleMenu(){
    document.getElementById("mobileMenu")?.classList.toggle("active");
}
