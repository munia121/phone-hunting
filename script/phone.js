const loadPhone =async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data= await res.json()
    const phones = data.data;
    // console.log(data.data);
    displayPhones(phones);
}


const displayPhones = phones =>{
    console.log(phones)

    const phoneContainer = document.getElementById('phone-container');
    // clear phone container cards before adding new cards
    phoneContainer.textContent = '';


    // display show all button  if there are more then 10 button
    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length > 10){
        showAllContainer.classList.remove('hidden')
    }
    else{
        showAllContainer.classList.add('hidden')
    }



    // display only first 10 phones
    phones = phones.slice(0,12);


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
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard)
        
    });
    // hide loading spinner
    toggleLoadingSpinner(false);
}


// handle search button
// const handleSearch = () =>{
//     toggleLoadingSpinner(true)
//     const searchField = document.getElementById('search-field').value
//     console.log(searchField);
//     loadPhone(searchField);
// }



// another search button2
const handleSearch2 = () =>{
    toggleLoadingSpinner(true);
    const searchField2 = document.getElementById('search-field2').value;
    loadPhone(searchField2);
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

// loadPhone();