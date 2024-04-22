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
    hours.textContent = "Hours:";
    const monday = document.createElement("li");
    monday.textContent = "Mon: 10am - 8pm";
    hours.appendChild(monday);


    content.appendChild(pageContent);
}

export default createAboutUsPage;