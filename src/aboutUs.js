const createAboutUsPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

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

    content.appendChild(pageContent);
}

export default createAboutUsPage;