let seed = "1";
const BASE_API = 'https://randomuser.me/api/';

// NAVBAR JAVASCRIPT TOGGLE-BUTTON----------------------------------

function toggleMenu(){
    const navbarList = document.getElementsByClassName('nav-list')[0]
    console.log(navbarList);
    
    navbarList.classList.toggle('active')
}

//MAIN PAGE CONFIGURATION-----------------------------------------------------------------------------

// FUNCTION GENERATE PEOPLE--------------------------------------------

function generatePeople(){
    seed++;
    getItems();
}

// FUNCTION GET ITEMS FOR MAIN PAGE---------------------------------------------------

function getItems(){
    const itemsContainer = document.getElementById("itemsContainer");
    if (!itemsContainer) return

    const nameFilter = document.getElementById("nameFilter").value;
    fetch(BASE_API + '?results=50&seed=' + seed)
        .then(response => response.json())
        .then(data => { console.log(data);
            
            itemsContainer.innerHTML = ""; 

            data.results.forEach(item => {
                
                const fullName = item.name.first + item.name.last;
                if(!fullName.toLowerCase().includes(nameFilter.toLowerCase())) return
                
                const itemCard = document.createElement("div");
                // ONCLICK FUNCTION NAVIGATETODETAILS
                // MEMOREZ IN LOCAL STORAGE ITEM
                itemCard.className = "item-card";
                itemCard.addEventListener("click", () =>{navigateToDetails(item)});


                const itemImage = document.createElement("img");
                itemImage.className = "item-image";
                itemImage.src = item.picture.thumbnail;

                const itemName = document.createElement("h2");
                itemName.className = "item-name";
                itemName.textContent = `${item.name.first} ${item.name.last}`;

                const itemEmail = document.createElement("p");
                itemEmail.className = "item-email";
                itemEmail.textContent = item.email;



                itemCard.appendChild(itemImage);
                itemCard.appendChild(itemName);
                itemCard.appendChild(itemEmail);
                
                itemsContainer.appendChild(itemCard);
            });

        }).catch(err =>console.log(err));
}

getItems();

function navigateToDetails(item){
    window.location.href = "userDetails.html?user="+JSON.stringify(item); 
}




// USER PHOTOS CONFIGURATIONS---------------------------------------


function getPhotos(){
    const middleContainerUserphotos = document.getElementById("middle-container-userphotos");
    if(!middleContainerUserphotos) return;

    const male = document.getElementById("male");
    const female = document.getElementById("female");
    console.log(male);

    fetch(BASE_API + "?results=104&gender=male")
    .then(response =>response.json())
    .then(data => { 


        data.results.forEach(item => {
                const photosContainer1 = document.createElement("img");
                photosContainer1.className = "photosContainer1";
                photosContainer1.src = item.picture.thumbnail;
                male.appendChild(photosContainer1);
        });
    }).catch(err => console.log(err));

    fetch(BASE_API + "?gender=female&results=104&")
    .then(response =>response.json())
    .then(data => { 


        data.results.forEach(item => {
                const photosContainer2 = document.createElement("img");
                photosContainer2.className = "photosContainer2";
                photosContainer2.src = item.picture.thumbnail;
                female.appendChild(photosContainer2);


        });
    }).catch(err => console.log(err));
}

getPhotos();


