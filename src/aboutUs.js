const createAboutUsPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    pageContent.id = 'about-us';

    //Create and append heading
    const heading = document.createElement("h1");
    heading.textContent = "About The Cat's Meow Cafe"
    pageContent.appendChild(heading);

    //Create and append hours
    const hours = document.createElement('ul');
    hours.textContent = "Hours";
    hours.id = "hours-list";
    const sunday = document.createElement('li');
	sunday.textContent = 'Sun: 10am - 6pm';
	hours.appendChild(sunday);
    const monday = document.createElement('li');
	monday.textContent = 'Mon: 10am - 8pm';
	hours.appendChild(monday);
    const tuesday = document.createElement("li");
    tuesday.textContent = "Tues: 10am - 8pm";
    hours.appendChild(tuesday);
    const wednesday = document.createElement('li');
	wednesday.textContent = 'Wed: 10am - 8pm';
	hours.appendChild(wednesday);
    const thursday = document.createElement('li');
	thursday.textContent = 'Thurs: 10am - 8pm';
	hours.appendChild(thursday);
    const friday = document.createElement('li');
	friday.textContent = 'Fri: 10am - 10pm';
	hours.appendChild(friday);
    const saturday = document.createElement('li');
	saturday.textContent = 'Sat: 10am - 10pm';
	hours.appendChild(saturday);
    pageContent.appendChild(hours);

    //Create and append address
    const addressDiv = document.createElement('div');
    const addressHeader = document.createElement('h3');
    addressHeader.textContent = "Address";
    const address = document.createElement('p');
    address.textContent = 'Located at: 123 Rainey St., Arlen, TX 73104';
    addressDiv.append(addressHeader, address);
    pageContent.appendChild(addressDiv);

    //Create and append about us
    const aboutUsDiv = document.createElement('div');
    const aboutUsHeading = document.createElement('h3');
    aboutUsHeading.textContent = "About Us";
    const aboutUs = document.createElement('p');
    aboutUs.textContent =
		"Welcome to The Cat's Meow Cafe, where coffee meets cuddles! Nestled in the heart of the city, we offer a unique and cozy environment where cat lovers can enjoy a delicious cup of coffee and mouthwatering sandwiches while mingling with our resident feline friends. Our mission is to provide a purrfect sanctuary for both humans and cats alike, creating memorable moments and endless purrs. So, whether you're looking for a peaceful place to unwind or some playful paws to keep you company, The Cat's Meow Cafe is the ultimate destination for all your caffeinated and cat-loving needs. Come join the purrty!";
    aboutUsDiv.append(aboutUsHeading, aboutUs);
    pageContent.appendChild(aboutUsDiv);

    content.appendChild(pageContent);
}

export default createAboutUsPage;
