const createMenuPage = () => {
	const content = document.querySelector('#content');
	const pageContent = document.createElement('div');
	pageContent.classList.add('page-content');

	//Create menu div
	const menuDiv = document.createElement('div');
	menuDiv.id = 'menu';

	//Create and append headline
	const menuHeadline = document.createElement('h1');
	menuHeadline.textContent = 'Menu';
	menuDiv.appendChild(menuHeadline);

	//Create and append drinks
	const drinksDiv = document.createElement('div');
	const drinksHeadline = document.createElement('h3');
	drinksHeadline.textContent = 'Drinks';
	//Drink 1
	const drink1Div = document.createElement('div');
	const drink1Name = document.createElement('h5');
	drink1Name.textContent = 'Whisker Whirl Coffee';
	const drink1Desc = document.createElement('p');
	drink1Desc.textContent =
		'A smooth blend of Arabica beans with hints of caramel and chocolate, topped with frothy milk and a sprinkle of cinnamon.';
	const drink1Price = document.createElement('p');
	drink1Price.textContent = 'Price: $4.50';
	drink1Div.append(drinksHeadline, drink1Name, drink1Desc, drink1Price);
	//Drink 2
	const drink2Div = document.createElement('div');
	const drink2Name = document.createElement('h5');
	drink2Name.textContent = 'Purrfect Latte';
	const drink2Desc = document.createElement('p');
	drink2Desc.textContent =
		'Our signature espresso mixed with velvety steamed milk, flavored with vanilla and a touch of honey.';
	const drink2Price = document.createElement('p');
	drink2Price.textContent = 'Price: $5.00';
	drink2Div.append(drink2Name, drink2Desc, drink2Price);
	//Drink 3
	const drink3Div = document.createElement('div');
	const drink3Name = document.createElement('h5');
	drink3Name.textContent = 'Meowchaccino';
	const drink3Desc = document.createElement('p');
	drink3Desc.textContent =
		'Rich and creamy hot chocolate paired with a shot of espresso, topped with whipped cream and chocolate shavings.';
	const drink3Price = document.createElement('p');
	drink3Price.textContent = 'Price: $5.50';
	drink3Div.append(drink3Name, drink3Desc, drink3Price);
	//Drink 4
	const drink4Div = document.createElement('div');
	const drink4Name = document.createElement('h5');
	drink4Name.textContent = 'Kitty Kooler';
	const drink4Desc = document.createElement('p');
	drink4Desc.textContent =
		'Refreshing iced green tea infused with fresh mint and a splash of lemonade, served over ice.';
	const drink4Price = document.createElement('p');
	drink4Price.textContent = 'Price: $4.00';
	drink4Div.append(drink4Name, drink4Desc, drink4Price);
	//Drink 5
	const drink5Div = document.createElement('div');
	const drink5Name = document.createElement('h5');
	drink5Name.textContent = 'Tail-Twitching Tea';
	const drink5Desc = document.createElement('p');
	drink5Desc.textContent =
		'A soothing blend of chamomile and lavender tea, perfect for winding down.';
	const drink5Price = document.createElement('p');
	drink5Price.textContent = 'Price: $3.50';
	drink5Div.append(drink5Name, drink5Desc, drink5Price);

	drinksDiv.append(
		drinksHeadline,
		drink1Div,
		drink2Div,
		drink3Div,
		drink4Div,
		drink5Div
	);

	//Create and append sandwiches
	const sandwichDiv = document.createElement('div');
	const sandwichHeadline = document.createElement('h3');
	sandwichHeadline.textContent = 'Sandwiches';
	//Sandwich 1
	const sandwich1Div = document.createElement('div');
	const sandwich1Name = document.createElement('h5');
	sandwich1Name.textContent = 'Tuna Tabbies Sandwich';
	const sandwich1Desc = document.createElement('p');
	sandwich1Desc.textContent =
		'Flaky tuna salad with crunchy celery and red onions, served on freshly baked whole grain bread.';
	const sandwich1Price = document.createElement('p');
	sandwich1Price.textContent = 'Price: $8.50';
	sandwich1Div.append(
		sandwichHeadline,
		sandwich1Name,
		sandwich1Desc,
		sandwich1Price
	);
	//sandwich 2
	const sandwich2Div = document.createElement('div');
	const sandwich2Name = document.createElement('h5');
	sandwich2Name.textContent = 'Meatball Meow';
	const sandwich2Desc = document.createElement('p');
	sandwich2Desc.textContent =
		'Juicy homemade meatballs smothered in marinara sauce, topped with melted mozzarella cheese, served on a toasted ciabatta roll.';
	const sandwich2Price = document.createElement('p');
	sandwich2Price.textContent = 'Price: $9.00';
	sandwich2Div.append(sandwich2Name, sandwich2Desc, sandwich2Price);
	//sandwich 3
	const sandwich3Div = document.createElement('div');
	const sandwich3Name = document.createElement('h5');
	sandwich3Name.textContent = 'Purrfect Veggie Wrap';
	const sandwich3Desc = document.createElement('p');
	sandwich3Desc.textContent =
		'A delightful combination of roasted vegetables, hummus, and mixed greens wrapped in a spinach tortilla.';
	const sandwich3Price = document.createElement('p');
	sandwich3Price.textContent = 'Price: $8.00';
	sandwich3Div.append(sandwich3Name, sandwich3Desc, sandwich3Price);
	//sandwich 4
	const sandwich4Div = document.createElement('div');
	const sandwich4Name = document.createElement('h5');
	sandwich4Name.textContent = 'Chicken & Cheddar Chirpwich';
	const sandwich4Desc = document.createElement('p');
	sandwich4Desc.textContent =
		'Grilled chicken breast, sharp cheddar cheese, crisp lettuce, and juicy tomato, drizzled with creamy ranch dressing, served on a toasted sourdough bread.';
	const sandwich4Price = document.createElement('p');
	sandwich4Price.textContent = 'Price: $9.50';
	sandwich4Div.append(sandwich4Name, sandwich4Desc, sandwich4Price);
	//sandwich 5
	const sandwich5Div = document.createElement('div');
	const sandwich5Name = document.createElement('h5');
	sandwich5Name.textContent = 'Smoked Salmon Siamese';
	const sandwich5Desc = document.createElement('p');
	sandwich5Desc.textContent =
		'Smoked salmon, cream cheese, red onion, and capers on a toasted everything bagel.';
	const sandwich5Price = document.createElement('p');
	sandwich5Price.textContent = 'Price: $10.00';
	sandwich5Div.append(sandwich5Name, sandwich5Desc, sandwich5Price);

	sandwichDiv.append(
		sandwichHeadline,
		sandwich1Div,
		sandwich2Div,
		sandwich3Div,
		sandwich4Div,
		sandwich5Div
	);

	//Create and append desserts
	const dessertDiv = document.createElement('div');
	const dessertHeadline = document.createElement('h3');
	dessertHeadline.textContent = 'Desserts';
	//dessert 1
	const dessert1Div = document.createElement('div');
	const dessert1Name = document.createElement('h5');
	dessert1Name.textContent = 'Mew-sical Cheesecake';
	const dessert1Desc = document.createElement('p');
	dessert1Desc.textContent =
		'Creamy New York-style cheesecake with a graham cracker crust, topped with mixed berry compote.';
	const dessert1Price = document.createElement('p');
	dessert1Price.textContent = 'Price: $6.00';
	dessert1Div.append(
		dessertHeadline,
		dessert1Name,
		dessert1Desc,
		dessert1Price
	);
	//dessert 2
	const dessert2Div = document.createElement('div');
	const dessert2Name = document.createElement('h5');
	dessert2Name.textContent = 'Chocolate Chip Cookie Cat';
	const dessert2Desc = document.createElement('p');
	dessert2Desc.textContent =
		'Freshly baked chocolate chip cookie in the shape of a cat, served warm and gooey.';
	const dessert2Price = document.createElement('p');
	dessert2Price.textContent = 'Price: $3.50';
	dessert2Div.append(dessert2Name, dessert2Desc, dessert2Price);
    dessertDiv.append(dessert1Div, dessert2Div);

	//Create page divs
	const topDiv = document.createElement('div');
	topDiv.id = 'top-div';
	topDiv.append(drinksDiv, sandwichDiv);
	const bottomDiv = document.createElement('div');
	bottomDiv.append(dessertDiv);

	menuDiv.append(topDiv, bottomDiv);
	pageContent.appendChild(menuDiv);
	content.appendChild(pageContent);
};

export default createMenuPage;
