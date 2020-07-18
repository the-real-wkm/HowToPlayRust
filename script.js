
//#region Data

let data = {
    menu_cont: [
        {
           step: 0,
           link: '!/'
        },
        {
            step: 1,
            link: '!step1' 
        },
        {
            step: 2,
            link: '!step2'
        },
        {
            step: 3,
            link: '!step3'
        },
        {
            step: 4,
            link: '!step4'
        },
        {
            step: 5,
            link: '!step5'
        },
        {
            step: 6,
            link: '!step6'
        },
        {
            step: 7,
            link: '!step7'
        },
        {
            step: 8,
            link: '!step8'
        },
        {
            step: 9,
            link: '!step9'
        } 
    ],
}
//#endregion

//#region Steps
var step0 = {
    sect_title1: `
    What is Rust?
    `,
    sect_cont1: `
    Rust is an open world, multiplayer, survival game where the player is shoved into a harsh open environment on a large island.
    The games official description reads "The only aim in Rust is to survive - Overcome struggles such as hunger, thirst and cold. 
    Build a fire. Build a shelter. Kill animals. Protect yourself from other players." The majority of gameplay in Rust is divided between collecting materials to build, upgrade and defend your base, attack other players in raids, or collecting and looting materials and supplies to prepare for combat.
    `,
    sect_title2: `
    What is in this How to?
    `,
    sect_cont2: `
    This How To site goes over the basics of joining a Rust server and setting up a base. There is some detail, but it's mostly just intended to be a helpful guide, not particularly specific.
    `,
    sect_title3: `
    Where can I buy Rust?
    `,
    sect_cont3: `
    If you would like to purchase Rust you can do so on Steam.
    `,
}

var step1 = {
    subtitle: `
    Population and Wipe Cycles
    `,
    content: `
    In Rust, when choosing what server you want to play on, the 2 most important things to look at are the server population (how many people are on the server) and how often the server wipes. In Rust, because you can obtain a maximum number of recipes and essentially do all the things, after a certain number of days a server will remove all the buildings, items, and sometimes even things players have learned, in order to keep the game challenging, doing this is called a wipe. The reason these are important is because the wipe cycle will tell you the pace you can expect to have on the server (i.e. If they wipe once a month, it will probably have slower progression in comparison to a server that wipes Weekly.) and then the number of players on a server is important because that can determine how likely you are to encounter someone, and the more likely you are to encounter another player, the more likely there is to be combat.
    `,
}

var step2 = {
    subtitle: `
    Sometimes free stuff, Sometimes not
    `,
    content: `
    After you have found a server with a population and wipe cycle that you like, the next step is of course, to connect to the server! Something to note is that it's quite common for it to still take a minute or 2 to load into Rust even on nicer computers as the map sizes can be very large. Once you have loaded into the server, there is the possibility that they may have kits that you can redeem in order to help you get started. If this is the case, follow the instructions your server provides to redeem your kits and proceed as desired!
    `,
}

var step3 = {
    subtitle: `
    Friend or Foe?
    `,
    content: `
    A very big and fun aspect of Rust is the social aspect. There are loads of interesting and fun people to meet and play with, however, playing in groups is not for everyone. If you are playing with a group of friends you already know, that's always a good fun way to enjoy the game, and if you're playing by yourself and have a specific goal in mind that can be enjoyable as well, however, trying to play with strangers can be dangerous. Rust is notorious for having robbers and people with loot traps that pretend to be your friend in order to get your supplies. Every person you meet has a chance of being an Ally or an Enemy.
    `,
}

var step4 = {
    subtitle: `
    Cold, Hot, or Full of Lead?
    `,
    content: `
    When deciding where to put a base, there are plenty of things you want to keep in mind. First, you want to be close enough to Monuments (named items on the map) so that you can easily get loot and other supplies from them, however, you don't want to be so close that other people going to loot those monuments will see your location. Additionally, you have to decide if you want to face living in the desert, at the cost of lots of food in exchange for ores and the likelihood that others will leave you alone, or if you want to live in the cold and have a pretty high guarantee most people won't bother you but struggle to stay alive at night early on, or if you want to compete with others for a nice green patch of land to build your fort on.
    `,
}

var step5 = {
    subtitle: `
    Forward, unto Dawn!
    `,
    content: `
    Once you have looked over the map and decided where you want to build, the next step is to travel there, depending on the size of the map this can take a nice bit of time. Larger maps can take upwards of 10 minutes to walk all the way across, if not longer. Some challenges you may face along the way include managing your hunger and thirst, managing inventory space, deciding when to loot and when not to loot, aggressive animals, aggressive NPCs, players, both friendly and not, etc. 
    `,
}

var step6 = {
    subtitle: `
    Goodnight :)
    `,
    content: `
    Once you have gotten to the location at which you wish to build, the next important step is to craft and place a sleeping bag, this just takes some cloth which is a common material in the game. By placing the sleeping bag down either on the ground near where you wish to build or on the foundations to the start of a building, you are ensuring that you have a way to quickly get back home in the event of a death.
    `,
}

var step7 = {
    subtitle: `
    House Design: Stick Edition
    `,
    content: `
    Once you have your sleeping bag placed and some building supplies collected, the best way to start off your base is by building a basic that building to plan out where you want all of your walls and such to be. Thatch is the first step to placing down building pieces and is the easiest to destroy by far, if you were to upgrade it to wood, stone, metal, or high quality metal, it would take much longer to break and would be a larger waste of resources, this is why it's always advisable to simply pre-plan your base in thatch, and once you have a finalized idea, begin upgrading it to a more solid material.
    `,
}

var step8 = {
    subtitle: `
    Bees?
    `,
    content: `
    After you have a general concept planned out in thatch, 2 final steps you need to do to make sure your base is set up with good defense are honeycomb and upgrade. Upgrading was mentioned in the last page, and is simply the act of using material to change a wall, foundation or other building component from thatch, to the material being used. Honeycombing is the act of adding additional layers of foundation and walls outside the area in which you actually live and operate in your base. These extra hollow walls, referred too as honeycombs, are used to make sure bases are extra defensible and take longer to break into when being raided.
    `,
}

var step9 = {
    subtitle: `
    Hey look, a fancy base!
    `,
    content: `
    Hopefully if the steps have been written well and you understood them then you have a nice little set up going on Rust right about now. How nice! Just make sure you defend it well.
    `,
}
//#endregion

console.log(data);

//#region vars
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var myNav = document.getElementById('myNav');
//#endregion

//#region ngRoutes/routeProvider
let app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

app.config($routeProvider => {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        .when('/step1', {
            templateUrl: 'pages/template.html',
            controller: 'step1Controller'
        })

        .when('/step2', {
            templateUrl: 'pages/template.html',
            controller: 'step2Controller'
        })

        .when('/step3', {
            templateUrl: 'pages/template.html',
            controller: 'step3Controller'
        })

        .when('/step4', {
            templateUrl: 'pages/template.html',
            controller: 'step4Controller'
        })

        .when('/step5', {
            templateUrl: 'pages/template.html',
            controller: 'step5Controller'
        })

        .when('/step6', {
            templateUrl: 'pages/template.html',
            controller: 'step6Controller'
        })

        .when('/step7', {
            templateUrl: 'pages/template.html',
            controller: 'step7Controller'
        })

        .when('/step8', {
            templateUrl: 'pages/template.html',
            controller: 'step8Controller'
        })

        .when('/step9', {
            templateUrl: 'pages/template.html',
            controller: 'step9Controller'
        });

});
//#endregion

//#region Controllers
app.controller('mainController', function ($scope) {
    $scope.rule_number = '0';
    $scope.title = 'Home';
    $scope.menuCont = data.menu_cont;
    $scope.sect_title1 = step0.sect_title1;
    $scope.sect_title2 = step0.sect_title2;
    $scope.sect_title3 = step0.sect_title3;
    $scope.sect_cont1 = step0.sect_cont1;
    $scope.sect_cont2 = step0.sect_cont2;
    $scope.sect_cont3 = step0.sect_cont3;
})

app.controller('step1Controller', function ($scope) {
    $scope.rule_number = '1';
    $scope.title = 'Finding A Server'
    $scope.menuCont = data.menu_cont;
    $scope.subtitle = step1.subtitle;
    $scope.content = step1.content;
});

app.controller('step2Controller', function ($scope) {
    $scope.rule_number = '2';
    $scope.title = 'Joining A Server'
    $scope.menuCont = data.menu_cont;
    $scope.subtitle = step2.subtitle;
    $scope.content = step2.content;
});

app.controller('step3Controller', function ($scope) {
    $scope.rule_number = '3';
    $scope.title = 'Finding A Group (Optional)'
    $scope.menuCont = data.menu_cont;
    $scope.subtitle = step3.subtitle;
    $scope.content = step3.content;
});

app.controller('step4Controller', function ($scope) {
    $scope.rule_number = '4';
    $scope.title = 'Examining The Map'
    $scope.menuCont = data.menu_cont;
    $scope.subtitle = step4.subtitle;
    $scope.content = step4.content;
});

app.controller('step5Controller', function ($scope) {
    $scope.rule_number = '5';
    $scope.title = 'Travel'
    $scope.menuCont = data.menu_cont;
    $scope.subtitle = step5.subtitle;
    $scope.content = step5.content;
});

app.controller('step6Controller', function ($scope) {
    $scope.rule_number = '6';
    $scope.title = 'Setting Spawn'
    $scope.menuCont = data.menu_cont;
    $scope.subtitle = step6.subtitle;
    $scope.content = step6.content;
});

app.controller('step7Controller', function ($scope) {
    $scope.rule_number = '7';
    $scope.title = 'Base Planning'
    $scope.menuCont = data.menu_cont;
    $scope.subtitle = step7.subtitle;
    $scope.content = step7.content;
});

app.controller('step8Controller', function ($scope) {
    $scope.rule_number = '8';
    $scope.title = 'Base Protection'
    $scope.menuCont = data.menu_cont;
    $scope.subtitle = step8.subtitle;
    $scope.content = step8.content;
});

app.controller('step9Controller', function ($scope) {
    $scope.rule_number = '9';
    $scope.title = 'You Finished!'
    $scope.menuCont = data.menu_cont;
    $scope.subtitle = step9.subtitle;
    $scope.content = step9.content;
});
//#endregion

const nav_directions = () => {
    var stepNum = document.getElementById('stepNum');

    stepNum = parseInt(stepNum.innerHTML.replace('/\.$/', ""));

    //console.log('test', stepNum);

    if (stepNum == 0) {
        //console.log('stepNum = 0', stepNum);
        prev.style.display = "none";
        next.style.display = 'block';
    }
    else if (stepNum == 9) {
        //console.log('stepNum = 9', stepNum);
        next.style.display = "none";
        prev.style.display = 'block';
    }
    else {
        //console.log('1 - 8', stepNum);
        next.style.display = "block";
        prev.style.display = "block";

    }

    if (stepNum == 1 || stepNum == 0) {
        //console.log('stepNum = 1 or 0');
        next.innerHTML = `<a href="#!step${stepNum + 1}">></a>`;
        prev.innerHTML = `<a href="#!/"><</a>`;
    }
    else if (stepNum == 9) {
        //console.log('stepNum = 9');
        next.innerHTML = `<a href="#!/}">></a>`;
        prev.innerHTML = `<a href="#!step${stepNum - 1}"><</a>`;
    }
    else {
        //console.log('stepNum = 2-8');
        next.innerHTML = `<a href="#!step${stepNum + 1}">></a>`;
        prev.innerHTML = `<a href="#!step${stepNum - 1}"><</a>`;
    }

}

const np = () => {
    var stepNum = document.getElementById('stepNum');
    
    if(stepNum != null) {
        stepNum = parseInt(stepNum.innerHTML.replace('/\.$/', ""));
    }

    if(stepNum == 0) {
        //console.log('window load 0');
        prev.style.display = "none";
    }
    else if (stepNum == 9) {
        //console.log('window load 9');
        next.style.display = "none";
    } 
    else {
        //console.log('window load 2-8');
        next.style.display = "block";
        prev.style.display = "block";
    }
}

window.addEventListener('mousemove', np);
window.addEventListener('load', np);

myNav.addEventListener('mousemove', nav_directions);