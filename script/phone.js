const loadPhone =async (searchText,isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data= await res.json()
    const phones = data.data;
    // console.log(data.data);
    displayPhones(phones,isShowAll);
}


const displayPhones = (phones,isShowAll) =>{
    // console.log(phones)

    const phoneContainer = document.getElementById('phone-container');
    // clear phone container cards before adding new cards
    phoneContainer.textContent = '';


    // display show all button  if there are more then 10 button
    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length > 12 && !isShowAll){
        showAllContainer.classList.remove('hidden')
    }
    else{
        showAllContainer.classList.add('hidden')
    }

    // console.log('is show all',isShowAll)
    if(!isShowAll){
        phones = phones.slice(0,12);

    }



    // display only first 10 phones
    

    phones.forEach(phone => {
        // console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card  bg-gray-100 `;
        phoneCard.innerHTML = `
        
        <figure><img src="${phone.image}" /></figure>
        <div class="card-body ">
            <h2 class="card-title">${phone.
                phone_name
                }</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
            <button onclick = 'handleShowDetail("${phone.slug}")' class="btn btn-primary">Show details</button>
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard)
        
    });
    // hide loading spinner
    toggleLoadingSpinner(false);
}



// show details modal
const handleShowDetail = async (id) =>{
    // console.log('clicked here', id)
    // load single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json();
    
    const phone = data.data;
    showPhoneDetails(phone) 
}



const showPhoneDetails = (phone) =>{
   console.log(phone);
    const phoneName = document.getElementById('show-detail-phone-name');
    // phoneName.innerText = phone.name;

    const showDetailContainer = document.getElementById('show-detail-container');
    showDetailContainer.classList.add('space-y-5')
    showDetailContainer.innerHTML =`
        <img class='m-auto' src="${phone.image}" alt="" />
        
        <h1 class='text-2xl font-bold'>${phone.name}</h2>
        <p><span class='font-extrabold'>Storage: </span>${phone?.mainFeatures?.storage}</p> 
        <p><span class='font-extrabold'>GPS: </span>${phone?.others?.GPS || 'No GPS available'}</p> 
        <p ><span class='font-semibold'>Display Size: </span> ${phone.mainFeatures.displaySize}</p>
        <p ><span class='font-extrabold'>chipSet: </span> ${phone.mainFeatures.chipSet}</p>
        <p ><span class='font-extrabold'>memory: </span> ${phone.mainFeatures.memory}</p>
        <p ><span class='font-extrabold'>slug: </span> ${phone.slug}</p>
        <p ><span class='font-extrabold'>ReleaseDate: </span> ${phone.releaseDate}</p>
        <p ><span class='font-extrabold'>Brand: </span> ${phone.brand}</p>
        
    `
   


    // show the modal
    show_details_modal.showModal()
}





// handle search button
// const handleSearch = () =>{
//     toggleLoadingSpinner(true)
//     const searchField = document.getElementById('search-field').value
//     console.log(searchField);
//     loadPhone(searchField);
// }



// another search button2
const handleSearch2 = (isShowAll) =>{
    toggleLoadingSpinner(true);
    const searchField2 = document.getElementById('search-field2').value;
    loadPhone(searchField2,isShowAll );
    console.log(searchField2)
}



// set spinner
const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden')
    }
    else{
        loadingSpinner.classList.add('hidden');
        
    }
}



// handle show all button
const handleShowAll = () =>{
    handleSearch2(true)
}

// loadPhone();



