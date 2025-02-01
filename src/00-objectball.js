
function gameObject(){
    return {
        home: {
                teamName: "Brooklyn Nets",
                colors: ["Black", "White"],
                players: {
                    "Alan Anderson": {
                        number: "0",
                        shoe: "16",
                        points: "22",
                        rebounds: "12",
                        assists: "12",
                        steals: "3",
                        blocks: "1",
                        slamDunks: "1"
                    },
                    "Reggie Evans": {
                        number: "30", 
                        shoe: "14",
                        points: "12",
                        rebounds: "12",
                        assists: "12",
                        steals: "12",
                        blocks: "12",
                        slamDunks: "7"
                    },
                    "Brook Lopez": {
                        number: "11",
                        shoe: "17",
                        points: "17",
                        rebounds: "19",
                        assists: "10",
                        steals: "3",
                        blocks: "1",
                        slamDunks: "15"
                    },
                    "Mason Plumlee": {
                        number: "1",
                        shoe: "19",
                        points: "26",
                        rebounds: "12",
                        assists: "6",
                        steals: "3",
                        blocks: "8",
                        slamDunks: "5"
                    },
                    "Jason Terry": {
                        number: "31",  
                        shoe: "15",
                        points: "19",
                        rebounds: "2",
                        assists: "2",
                        steals: "4",
                        blocks: "11",
                        slamDunks: "1'"
                    }

                }
        },
    
    
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: "4",
                    shoe: "18",
                    points: "10",
                    rebounds: "1",
                    assists: "1",
                    steals: "2",
                    blocks: "7",
                    slamDunks: "2"
                },
                "Bismak Biyombo": {
                    number: "0", 
                    shoe: "16",
                    points: "12",
                    rebounds: "4",
                    assists: "7",
                    steals: "7",
                    blocks: "15",
                    slamDunks: "10"
                },
                "DeSagna Diop": {
                    number: "2",
                    shoe: "14",
                    points: "24",
                    rebounds: "12",
                    assists: "12",
                    steals: "4",
                    blocks: "5",
                    slamDunks: "5"
                },
                "Ben Gordon": {
                    number: "8", 
                    shoe: "15",
                    points: "33",
                    rebounds: "3",
                    assists: "2",
                    steals: "1",
                    blocks: "1",
                    slamDunks: "0"
                },
                "Brendan Haywood": {
                    number: "33",  
                    shoe: "15",
                    points: "6",
                    rebounds: "12",
                    assists: "12",
                    steals: "22",
                    blocks: "5",
                    slamDunks: "12"
                }

            }
        },

    }
};

console.log(gameObject());

function homeTeamName(){
    //let object = gameObject();
    //return object["home"]["teamName"];
    return gameObject()["home"]["teamName"];
}
//console.log(homeTeamName());
console.log(gameObject()["home"]["players"]["Alan Anderson"]["number"]);
console.log(gameObject()["home"]["colors"][0]);

function homeObject(){
    return gameObject()["home"]
}
function awayObject(){
    return gameObject()["away"]
}

function mainOrnot(playername){
    let newArray = gameObject()["home"]["players"]
    if (newArray.hasOwnProperty(playername)){
        return  homeObject()
        
    } else{
        return  awayObject()
    }

    return
}

function numPointsScored(playername){
        let shorterObject = mainOrnot(playername)
        
        return shorterObject["players"][playername]["points"]

}

console.log(numPointsScored("Jason Terry"));

function shoeSize(playername){
    let shorterObject = mainOrnot(playername)
    return shorterObject["players"][playername]["shoe"]
}

console.log(shoeSize("Jason Terry"));

function OthermainOrnot(teamname){
    let newArray = gameObject()["home"]
    if (newArray.hasOwnProperty(teamname)){
        return  homeObject()
        
    } else{
        return  awayObject()
    }

    return
}

function teamColors(teamname){
    let shorterObject = OthermainOrnot(teamname)
    return shorterObject["colors"]
}

console.log(teamColors("Jason Terry"));

function teamNames(){
    for (let key in homeObject())
        if (key === "teamName"){
            console.log(gameObject()["home"]["teamName"])
        } 
    
    for (let key in awayObject())
        if (key === "teamName"){
                console.log(gameObject()["away"]["teamName"])
         }  
}

console.log(teamNames())

function playerNumbers(teamname){
    let shorterObject = OthermainOrnot(teamname)
     for (let key in shorterObject["players"]){
        console.log(shorterObject["players"][key]["number"])
     }
}

console.log(playerNumbers("Charlotte Hornets"))

function playerStats(playername){
    let shorterObject = mainOrnot(playername)
    return shorterObject["players"][playername]

}
console.log(playerStats("Jason Terry"))

function prebigShoeRebounds(){
    let object = {}
    //object has name:shoe 
    let x = 0
    let y =''
    let a = 0
    let b = ''
    for (let key in gameObject()["home"]["players"]){
        object.key =  gameObject()["home"]["players"][key]["shoe"]
    }
    for (let key in object){
        if (object.key>x){
            x=object.key
            y=key
        }
    }
    let lastobject={}
    lastobject.y = x

    for (let key in gameObject()["away"]["players"]){
        object.key =  gameObject()["away"]["players"][key]["shoe"]
    }
    for (let key in object){
        if (object.key>a){
            a=object.key
            b=key
        }
        return 
    }
    lastobject.b = a
    //lastobject has name:shoe, name:shoe
    if (lastobject.b>lastobject.y){
        return b
    } else{
        return y
    }             
}

function bigShoeRebounds(){
    let playername = prebigShoeRebounds()
    let shorterObject = mainOrnot(playername)
    return shorterObject["players"][playername]["rebounds"]

}

console.log(a)