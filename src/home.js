import CatCafe from './catCafe.jpg';

const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //Create and append headline
    const headline = document.createElement('h1');
    headline.textContent = "Welcome to The Cat's Meow Cafe";
    pageContent.appendChild(headline);

    //Create and append image figure and caption
    const figure = document.createElement('figure');
    const image = document.createElement('img');
    const imgCaption = document.createElement('figcaption');
    image.src = CatCafe;
    image.height = '300';
    imgCaption.innerHTML = 
        'Photo by <a href="https://unsplash.com/@rebaspike?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Reba Spike</a> on <a href="https://unsplash.com/photos/black-cat-on-brown-wooden-table-xxIyFBpcDuk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';
    figure.appendChild(image);
    figure.appendChild(imgCaption);
    pageContent.appendChild(figure);  

    //Create and append text content
    const text = document.createElement('p');
    text.textContent =
		"Indulge in the purrfect blend of coffee and comfort at The Cat's Meow Cafe! Enjoy delicious sandwiches while making feline friends. Where every sip and bite is the cat's whiskers!";
    text.id = "home-text";

    pageContent.appendChild(text);

    content.appendChild(pageContent);
}

export default createRestaurantHomePage;