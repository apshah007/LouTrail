
var restaurants = [
    {
        name: 'Mayan Cafe',
        flavor: 'Hispanic'
    },
    {
        name: 'North End Cafe',
        flavor: 'American'
    },
    {
        name: 'Vincenzos',
        flavor: 'Italian'
    },
    {
        name: 'Hiko-A-mon',
        flavor: 'Asian'
    },
    {
        name: 'Super Chefs',
        flavor: 'American'
    },
    {
        name: 'FEAST',
        flavor: 'American'
    },
    {
        name: 'Oishii Sushi',
        flavor: 'Asian'
    },
    {
        name: 'Cliftons Pizza',
        flavor: 'Pizza'
    },
    {
        name: 'Bearnos',
        flavor: 'Pizza'
    }
];


function getRandomQuote() {
    var output = '';

    var quotes = [
        '"I hope to have God on my side, but I must have Kentucky." - Abraham Lincoln',
        '"I have never in my life seen a Kentuckian who didnt have a gun, a pack of cards, and a jug of whiskey." - Andrew Jackson',
        '"I was brought up to believe that Scotch whisky would need a tax preference to survive in competition with Kentucky bourbon." - Hugo Black',
        '"My friend, youre in trouble. This town is flat full. Always is, for the Derby." - Hunter S. Thompson',
        '"I am more than just a serious basketball fan. I am a life-long addict. I was addicted from birth, in fact, because I was born in Kentucky and I learned, early on, that Habitual Domination was a natural way of life." - Hunter S. Thompson',
        '"Tough girls come from New York. Sweet girls, there from Georgia. But us Kentucky girls, we have fire and ice in our blood. We can ride horses, be a debutante, throw left hooks, and drink with the boys, all the while making sweet tea, darlin. And if we have an opinion, you know youre gonna hear it." - Ashley Judd'
    ];

    // Get percentile for range matching
    var percentile = [0];
    var i;
    for(i=0;i<quotes.length;i++){
        percentile[i]=((i+1)/quotes.length);
    }

    var random = Math.random();
    i = 0;
    var found = false;
    while (!found && i<quotes.length){
        if (random <= percentile[i]){
            found = true;
            output = quotes[i];
        }
        i++;
    }

    document.getElementById('quote').innerHTML = output;
};

function getRandomRestaurants() {

    var r1 = null;
    var r2 = null;
    var r3 = null;

    r1 = findRandomRestaurant(restaurants);
    r2 = findRandomRestaurant(restaurants);
    r3 = findRandomRestaurant(restaurants);

    
    while (r1 === r2){
        r2 = findRandomRestaurant();
    }
    while (r1 === r3 && r2 === r3){
        r3 = findRandomRestaurant();
    }

    
    var listitem1 = document.createElement("LI");
    var listitem2 = document.createElement("LI");
    var listitem3 = document.createElement("LI");
    var entry1 = document.createTextNode(r1.name);
    var entry2 = document.createTextNode(r2.name);
    var entry3 = document.createTextNode(r3.name);

    listitem1.appendChild(entry1);
    document.getElementById('restaurant-list').appendChild(listitem1);
    listitem2.appendChild(entry2);
    document.getElementById('restaurant-list').appendChild(listitem2);
    listitem3.appendChild(entry3);
    document.getElementById('restaurant-list').appendChild(listitem3);    
    document.close();

};



function findRandomRestaurant(resto) {
    var output = null;

    var percentile = [0];
    var i;
    for(i=0;i<restaurants.length;i++){
        percentile[i]=((i+1)/restaurants.length);
    }    

    var random = Math.random();
    j = 0;
    var found = false;
    while (!found){
        if (random <= percentile[j]){
            found = true;
            output = restaurants[j];
        }
        j++;
    }

    return output;
};
/*
function getFilteredRestaurants() {
    var flavors = document.getElementById('flavor-list').value;

    var filteredRestaurants = [];
    for (var i = 0; i<9; i++){
                    alert(i);
        if(restaurants[i].flavor == flavors){
            filteredRestaurants[i] = restaurants[i];
            alert(filteredRestaurants[i]);
        }
    }
        
    var listitem1 = document.createElement("LI");
    var listitem2 = document.createElement("LI");
    var listitem3 = document.createElement("LI");
    var entry1 = document.createTextNode(filteredRestaurants[0].flavor);
    var entry2 = document.createTextNode(filteredRestaurants[1].flavor);
    var entry3 = document.createTextNode(filteredRestaurants[2].flavor);

    listitem1.appendChild(entry1);
    document.getElementById('restaurant-list').appendChild(listitem1);
    listitem2.appendChild(entry2);
    document.getElementById('restaurant-list').appendChild(listitem2);
    listitem3.appendChild(entry3);
    document.getElementById('restaurant-list').appendChild(listitem3);    
    document.close();

    }
};
*/