//? ############################# Nav Bar #######################################
const App = document.getElementById("App");
let Home = document.getElementById("Home");
let Gallery = document.getElementById("Gallery");
let Monsters = document.getElementById("Gallery-Monsters");
let Classes = document.getElementById("Gallery-Classes");
let Rules = document.getElementById("Rules");
let Dice = document.getElementById("Dices");
let DropDownMenu = document.getElementById("DDM");
//! rewrite Gallery, Gallery-monsters, Gallery-Classes in all HTML files

function Reassign_Values_NavBar() {
  Home = document.getElementById("Home");
  Gallery = document.getElementById("Gallery");
  Monsters = document.getElementById("Gallery-Monsters");
  Classes = document.getElementById("Gallery-Classes");
  Rules = document.getElementById("Rules");
  Dice = document.getElementById("Dices");
  Home.addEventListener("click", function () {
    console.log("aaaa");
    state = 0;
    switchScreans();
    Reassign_Values_NavBar();
    Reassign_Values_Home();
  });

  Rules.addEventListener("click", function () {
    console.log("bbbbb");
    state = 1;
    switchScreans();
    Reassign_Values_NavBar();
  });
}

//? ############################ Home Declarations ###############################
let targetElement = document.getElementById("ScrollTarget");
let clickableDiv = document.getElementById("GoDown");

function Reassign_Values_Home() {
  targetElement = document.getElementById("ScrollTarget");
  clickableDiv = document.getElementById("GoDown");
}

//? ############################ Gallery declaration #############################
let Dots = document.getElementById("Dots");
let img = document.getElementById("img");
let text = document.getElementById("text");

let MonstersArray = [
  ["orc.jpg", "Orc", "https://www.dndbeyond.com/monsters/16972-orc"],
  ["Goblin.jpg", "Goblin", "https://www.dndbeyond.com/monsters/16907-goblin"],
  ["Dragon.jpg", "Dragons", "https://forgottenrealms.fandom.com/wiki/Dragon"],
  [
    "Skeleton.jpg",
    "Skeleton",
    "https://www.dndbeyond.com/monsters/17015-skeleton",
  ],
  ["zombie.jpg", "Zombie", "https://www.dndbeyond.com/monsters/17077-zombie"],
];
let ClassArray = [];
let state = 0;
let index = 0;
let max = 0;
let UsedArray = null;

function Reassign_Values_Gallery() {
  Dots = document.getElementById("Dots");
  img = document.getElementById("img");
  text = document.getElementById("text");
}

//? ############################# Dice declaration ################################

function switchScreans() {
  switch (state) {
    case 0:
      App.innerHTML =
        '     <div class="MainImage"style="background: url(./public/BackGraund.jpg);background-size: cover;background-repeat: no-repeat;"><div class="TextMainPage"><p class="MainContentText">D&D is a tabletop role playing game</p></div><div class="NavBar"><div class="DiceWraper"><imgsrc="public/Dice.png"alt="dice"style="width: 5rem; height: 5rem"/></div><div class="Nav"><p id="Home" style="text-decoration: underline">Home</p><div class="RulesDropdownWrapper"><p id="Fotos">Gallery ▾</p><div class="DropDownBar notvisible" id="DDM"><p id="Rules-Rules">Monsters</p><p id="Rules-Player">Classes</p></div></div><p id="Rules">Rules</p><p id="Dices">Dice</p></div><div class="empty"></div></div><div class="GoDown"><?xml version="1.0" encoding="UTF-8" standalone="no"?><!-- Created with Inkscape (http://www.inkscape.org/) --><svgheight="100%"viewBox="0 0 52.916665 52.916666"version="1.1"id="GoDown"style="cursor: pointer"xmlns="http://www.w3.org/2000/svg"xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs1" /><g id="layer1"><rectstyle="fill: #f9f9f9; stroke-width: 0.101084"id="rect1"width="3.1630697"height="19.713154"x="-43.32935"y="-5.2882476"transform="matrix(-0.69208992,-0.72181129,0.68775639,-0.72594156,0,0)"/><rectstyle="fill: #f9f9f9; stroke-width: 0.101084"id="rect1-5"width="3.1650381"height="19.700886"x="2.4069741"y="-43.180077"transform="matrix(-0.68268808,0.73070992,-0.69710231,-0.71697167,0,0)"/><circlestyle="fill: #f9f9f9;fill-opacity: 0;stroke: #ffffff;stroke-width: 1.53281;stroke-dasharray: none;stroke-opacity: 1;"id="path1"cx="26.282484"cy="26.200407"r="20.437435"/></g></svg></div><div class="BrightnessRegul"></div></div><div class="content" id="ScrollTarget"><div class="ContentSpace" style="background: #0a0a0a" id="ScrollTarget"><div class="ContentSpaceMainContent"><img src="./public/Home-1.jpg" alt="img" class="ContentImage" /><div class="ContentTextWrapper"><p class="ContentTextHedder">What is D&D?</p><p class="ContentText">Dungeons & Dragons (D&D) is a popular tabletop role-playing gamewhere players create characters and go on adventures led by aDungeon Master, using dice and imagination to navigate fantasyworlds.</p></div></div></div><div class="ContentSpace" style="background: #0e0e0e"><div class="ContentSpaceMainContent"><div class="ContentTextWrapper"><p class="ContentTextHedder">What is a Role-play?</p><p class="ContentText">Role-play is interactive storytelling where participants act outcharacters in fictional scenarios, fostering creativity andempathy through immersive experiences.</p></div><img src="./public/Home-2.jpg" alt="img" class="ContentImage" /></div></div><div class="ContentSpace" style="background: #0a0a0a"><div class="ContentSpaceMainContent"><img src="./public/Home-3.jpg" alt="img" class="ContentImage" /><div class="ContentTextWrapper"><p class="ContentTextHedder">How to start?</p><p class="ContentText">It\'s very easy to start you just need a group of friends andsome papers, or you can find a group to play with online (<ahref="https://discord.com/invite/dnd"target="_blank">Discord</a>,<a href="https://app.roll20.net/lfg/search/" target="_blank">Roll20</a>, ...).</p></div></div></div><div class="Informations" style="background: #0e0e0e"><p class="InformationText">© 2024 Martin Perout. All rights reserved. Contact:<a href="martin.perout123@post.com">martin.perout123@post.com</a></p></div></div>';
      break;
    case 1:
      App.innerHTML =
        '      <div         class="MainImage"         style="           background: url(./public/Rules-Main.jpg);           background-size: cover;           background-repeat: no-repeat;         "       >         <div class="NavBar">           <div class="DiceWraper">             <img               src="public/Dice.png"               alt="dice"               style="width: 5rem; height: 5rem"             />           </div>           <div class="Nav">             <p id="Home">Home</p>             <div class="RulesDropdownWrapper">               <p id="Fotos">Gallery ▾</p>               <div class="DropDownBar notvisible" id="DDM">                 <p id="Rules-Rules">Monsters</p>                 <p id="Rules-Player">Classes</p>               </div>             </div>             <p id="Rules" style="text-decoration: underline">Rules</p>             <p id="Dices">Dices</p>           </div>           <div class="empty"></div>         </div>         <div class="PlayerDMShowWraper">           <div class="PlayerDMWraper">             <div class="Placer">               <div                 style="                   display: flex;                   flex-direction: column;                   align-items: center;                 "               >                 <p class="RulesMainName">Dungeon Master</p>               </div>               <p class="RulesMainText">                 The DM creates an adventure that players participate in.               </p>             </div>             <div class="Placer">               <div>                 <p class="RulesMainName">Player</p>               </div>               <p class="RulesMainText">                 Players create a character and move through the story that the                 Dungeon Master (DM) creates.               </p>             </div>           </div>         </div>         <div class="BrightnessRegul"></div>       </div>       <div class="content">         <div           class="ContentSpace"           style="background: #0e0e0e"           id="Rules-Rules-Scroll"         >           <div class="ContentSpaceMainContent">             <img src="./public/Rules-1.jpg" alt="img" class="ContentImage" />             <div class="ContentTextWrapper">               <p class="ContentTextHedder">Rule Books</p>               <p class="ContentText">                 Dungeons & Dragons has plenty of rulebooks, ranging from rules                 and stat blocks to fully completed adventures.                 <a                   href="https://media.wizards.com/2018/dnd/downloads/DnD_BasicRules_2018.pdf"                   target="_blank"                   >Basic rules</a                 >                 are available on the Dungeons & Dragons owner\'s website.               </p>             </div>           </div>         </div>         <div class="ContentSpace" style="background: #0a0a0a">           <div class="ContentSpaceMainContent">             <div class="ContentTextWrapper">               <p class="ContentTextHedder">Rules for free?</p>               <p class="ContentText">                 The rulebooks for D&D can be found for free on unofficial                 websites, so that means it is fairly easy to start playing D&D.                 For example                 <a                   href="https://dnd-5e.fandom.com/wiki/D%26D_5e_Wiki"                   target="_blank"                   >Fandom</a                 >                 or <a href="https://5e.tools/" target="_blank">5e tools</a>               </p>             </div>             <img src="./public/Rules-2.jpg" alt="img" class="ContentImage" />           </div>         </div>         <div           class="ContentSpace"           style="background: #0e0e0e"           id="Rules-Player-Scroll"         >           <div class="ContentSpaceMainContent">             <img src="./public/Rules-3.jpg" alt="img" class="ContentImage" />             <div class="ContentTextWrapper">               <p class="ContentTextHedder">Character creation</p>               <p class="ContentText">                 All players have their characters. Each character has the                 standard six stats: Strength, Dexterity, Constitution,                 Intelligence, Wisdom, and Charisma. Additionally, every                 character has one of the twelve classes and one of the hundreds                 of races.               </p>             </div>           </div>         </div>         <div           class="ContentSpace"           style="background: #0a0a0a"           id="Rules-DM-Scroll"         >           <div class="ContentSpaceMainContent">             <div class="ContentTextWrapper">               <p class="ContentTextHedder">Creating a story</p>               <p class="ContentText">                 Dungeon masters create adventures for players to embark on, each                 one brimming with excitement and challenges to overcome. These                 quests immerse players in rich narratives, allowing them to                 explore fantastical worlds and test their skills. Additionally,                 a plethora of pre-made adventures are readily available online.               </p>             </div>             <img src="./public/Rules-4.jpg" alt="img" class="ContentImage" />           </div>         </div>         <div           class="ContentSpace"           style="background: #0e0e0e"           id="Rules-DM-Scroll"         >           <div class="ContentSpaceMainContent VidoeSpace">             <p>Summary of rules</p>             <iframe               width="60%"               style="aspect-ratio: 16/9"               src="https://www.youtube.com/embed/hD-LWHhiseE?si=ck8OCCgWs-UK6k3G"               title="YouTube video player"               frameborder="0"               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"               allowfullscreen             ></iframe>           </div>         </div>         <div class="Informations" style="background: #0a0a0a">           <p class="InformationText">             © 2024 Martin Perout. All rights reserved. Contact:             <a href="martin.perout123@post.com">martin.perout123@post.com</a>           </p>         </div>       </div>     </div>';
  }
}

let TestArray = [
  ["BackGraund.jpg", "abcd", "#"],
  ["BackGraund.jpg", "bot", "#"],
];

function SetUpImageSelector(ImageArray) {
  index = 0;
  max = ImageArray.length - 1;
  UsedArray = ImageArray;
  img.innerHTML =
    '<img class="img" src="./public/' + UsedArray[index][0] + '" alt="img" />';
  text.innerHTML =
    '<p><a href="' +
    UsedArray[index][2] +
    '">' +
    UsedArray[index][1] +
    "</a></p>";
  dotsSting = "";
  dotsSting = "";
  for (let i = 0; i <= max; i++) {
    if (i == index) {
      dotsSting =
        dotsSting +
        '<div class="dot" style="background: #ffffff !important"></div>';
    } else {
      dotsSting = dotsSting + '<div class="dot"></div>';
    }
  }
  Dots.innerHTML = dotsSting;
}

//SetUpImageSelector(TestArray);

function ChangeImageSelecor(dir) {
  index = index + dir;
  if (index < 0) {
    index = 0;
  } else if (index > max) {
    index = max;
  }
  img.innerHTML =
    '<img class="img" src="./public/' + UsedArray[index][0] + '" alt="img" />';
  text.innerHTML =
    '<p><a href="' +
    UsedArray[index][2] +
    '">' +
    UsedArray[index][1] +
    "</a></p>";
  dotsSting = "";
  for (let i = 0; i <= max; i++) {
    if (i == index) {
      dotsSting =
        dotsSting +
        '<div class="dot" style="background: #ffffff !important"></div>';
    } else {
      dotsSting = dotsSting + '<div class="dot"></div>';
    }
  }
  Dots.innerHTML = dotsSting;
}

let InputRoll = document.getElementById("roll");
let outputWindow = document.getElementById("values");

function random(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GenerateRandom(generationString) {
  generationString.replace(" ", "");
  generationString = generationString.toLowerCase();
  splitedGenerationString = generationString.split("d");
  if (splitedGenerationString.length == 2) {
    if (parseInt(splitedGenerationString[0]) <= 100) {
      splitedGenerationString[1] = splitedGenerationString[1].split("+");
      if (splitedGenerationString[1].length == 2) {
        let x = 0;
        for (let i = 0; i < parseInt(splitedGenerationString[0]); i++) {
          x = x + random(parseInt(splitedGenerationString[1][0]), 1);
        }
        return [generationString, x + parseInt(splitedGenerationString[1][1])];
      } else {
        splitedGenerationString[1] = splitedGenerationString[1][0].split("-");
        if (splitedGenerationString[1].length == 2) {
          let x = 0;
          for (let i = 0; i < parseInt(splitedGenerationString[0]); i++) {
            x = x + random(parseInt(splitedGenerationString[1][0]), 1);
          }
          return [
            generationString,
            x - parseInt(splitedGenerationString[1][1]),
          ];
        } else {
          let x = 0;
          for (let i = 0; i < parseInt(splitedGenerationString[0]); i++) {
            x = x + random(parseInt(splitedGenerationString[1][0]), 1);
          }
          return [generationString, x];
        }
      }
    } else {
      return [generationString, "Maximum is 100 dices"];
    }
  } else {
    return [generationString, "Error"];
  }
}

function visual(GeneratedData) {
  outputWindow.innerHTML =
    '<div class="DiceRollMainPart"><p>' +
    GeneratedData[0] +
    "</p><p>" +
    GeneratedData[1] +
    "</p></div>" +
    outputWindow.innerHTML;
}

try {
  InputRoll.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
      visual(GenerateRandom(InputRoll.value));
      InputRoll.value = "";
    }
  });
} catch {}

document.addEventListener("DOMContentLoaded", function () {
  //? ##################### Main Nav Buttons ##############################
  var HomeButton = document.getElementById("Home");

  //? ##################### Nav Rules Buttons #############################
  var RulesRules = document.getElementById("Rules-Rules");
  var RulesPlayer = document.getElementById("Rules-Player");
  var RulesDM = document.getElementById("Rules-DM");

  let targetElement = document.getElementById("ScrollTarget");
  var DropDown = document.getElementById("Fotos");
  DropDownMenu = document.getElementById("DDM");

  console.log(Home);
  console.log(Rules);

  Home.addEventListener("click", function () {
    console.log("aaaa");
    state = 0;
    switchScreans();
    Reassign_Values_NavBar();
    Reassign_Values_Home();
  });

  Rules.addEventListener("click", function () {
    console.log("bbbbb");
    state = 1;
    switchScreans();
    Reassign_Values_NavBar();
  });

  try {
    clickableDiv.addEventListener("click", function () {
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  } catch {}

  //? ###################### Dropdown menu ###################################
  DropDown.addEventListener("mouseenter", function () {
    DropDownMenu.classList.add("visible");
    DropDownMenu.classList.remove("notvisible");
  });
  DropDown.addEventListener("mouseleave", function () {
    DropDownMenu.classList.add("notvisible");
    DropDownMenu.classList.remove("visible");
  });
  DropDownMenu.addEventListener("mouseenter", function () {
    DropDownMenu.classList.add("visible");
    DropDownMenu.classList.remove("notvisible");
  });
  DropDownMenu.addEventListener("mouseleave", function () {
    DropDownMenu.classList.add("notvisible");
    DropDownMenu.classList.remove("visible");
  });
});
