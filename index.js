const App = document.getElementById("App")
//App.innerHTML = "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link rel=\"stylesheet\" href=\"public/style.css\"><title>DND</title></head><body><div class=\"App\" id=\"App\"><div class=\"MainImage\" style=\"background: url(./public/BackGraund.jpg); background-size: cover; background-repeat: no-repeat;\"><div class=\"NavBar\"><div class=\"DiceWraper\"><img src=\"public/Dice.png\" alt=\"dice\" style=\"width: 5rem; height: 5rem;\"></div><div class=\"Nav\"><p style=\"text-decoration: underline;\"> Home </p><p>Fotos</p><p> Rules</p><p>Dices</p></div><div class=\"empty\"></div></div><div class=\"TextMainPage\"><p class=\"MainContentText\">D&D is a tabletop role playing game</p></div><div class=\"GoDown\" id=\"GoDown\"><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"5rem\" height=\"5rem\" viewBox=\"0 0 1080 1080\" xml:space=\"preserve\"><desc>Created with Fabric.js 5.2.4</desc><defs></defs><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"transparent\"></rect><g transform=\"matrix(1 0 0 1 540 540)\" id=\"05e63693-9256-41b4-809c-6f284e40cd4e\" ><rect style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1; visibility: hidden;\" vector-effect=\"non-scaling-stroke\" x=\"-540\" y=\"-540\" rx=\"0\" ry=\"0\" width=\"1080\" height=\"1080\" /></g><g transform=\"matrix(1 0 0 1 540 540)\" id=\"4339cbf4-3ab3-46e4-a0f1-b8bcecad382a\" ></g><g transform=\"matrix(12.42 0 0 12.42 542.75 542.75)\" id=\"5dad62a7-45b2-497c-9516-95f0d82b292b\" ><path style=\"stroke: rgb(255,255,255); stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\" vector-effect=\"non-scaling-stroke\" transform=\" translate(-50, -50)\" d=\"M 50 92.875 C 26.358 92.875 7.125 73.642 7.125 50 C 7.125 26.358000000000004 26.358 7.125 50 7.125 C 73.642 7.125 92.875 26.358 92.875 50 C 92.875 73.642 73.642 92.875 50 92.875 z M 50 9.125 C 27.461 9.125 9.125 27.461 9.125 50 C 9.125 72.538 27.461 90.875 50 90.875 C 72.538 90.875 90.875 72.538 90.875 50 C 90.875 27.461 72.538 9.125 50 9.125 z\" stroke-linecap=\"round\" /></g><g transform=\"matrix(-7.68 0 0 -7.68 540 540)\" id=\"c829adeb-2503-4f28-9ba6-d3782bd77346\" ><path style=\"stroke: rgb(0,0,0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\" vector-effect=\"non-scaling-stroke\" transform=\" translate(-50.5, -50)\" d=\"M 82.614 52.531 C 85.44500000000001 49.751 85.44500000000001 45.164 82.614 42.334 L 55.582 15.3 C 52.799 12.519 48.212 12.519 45.381 15.3 L 18.348 42.334 C 15.566999999999998 45.164 15.566999999999998 49.751000000000005 18.348 52.531000000000006 C 22.250999999999998 56.19200000000001 33.036 48.18900000000001 42.65 44.431000000000004 L 42.65 82.00300000000001 C 42.65 84.63900000000001 44.796 86.78400000000002 47.431 86.78400000000002 L 54.655 86.78400000000002 C 57.291000000000004 86.78400000000002 59.436 84.63800000000002 59.436 82.00300000000001 L 59.436 44.871 C 68.561 48.775 78.32 55.9 82.614 52.531 z\" stroke-linecap=\"round\" /></g></svg></div><div class=\"BrightnessRegul\"></div></div><div class=\"content\"><div class=\"ContentSpace\" style=\"background: #0a0a0a;\" id=\"ScrollTarget\"><div class=\"ContentSpaceMainContent\"><img src=\"./public/BackGraund.jpg\" alt=\"img\" class=\"ContentImage\"><div class=\"ContentTextWrapper\"><p class=\"ContentTextHedder\">What is D&D?</p><p class=\"ContentText\">Dungeons & Dragons (D&D) is a popular tabletop role-playing game where players create characters and go on adventures led by a Dungeon Master, using dice and imagination to navigate fantasy worlds.</p></div></div></div><div class=\"ContentSpace\" style=\"background: #0e0e0e;\"><div class=\"ContentSpaceMainContent\"><div class=\"ContentTextWrapper\"><p class=\"ContentTextHedder\">What is a Role-play?</p><p class=\"ContentText\"> Role-play is interactive storytelling where participants act out characters in fictional scenarios, fostering creativity and empathy through immersive experiences.</p></div><img src=\"./public/BackGraund.jpg\" alt=\"img\" class=\"ContentImage\"></div></div><div class=\"ContentSpace\" style=\"background: #0a0a0a;\"><div class=\"ContentSpaceMainContent\"><img src=\"./public/BackGraund.jpg\" alt=\"img\" class=\"ContentImage\"><div class=\"ContentTextWrapper\"><p class=\"ContentTextHedder\">How to start?</p><p class=\"ContentText\">It's very easy to start you just need a group of friends and some papers, or you can find a group to play with online (<a href=\"https://discord.com/invite/dnd\">Discord</a>, <a href=\"https://app.roll20.net/lfg/search/\">Roll20</a>, ...).</p></div></div></div><div class=\"Informations\" style=\"background: #0e0e0e;\"><p class=\"InformationText\">Created by Name. Contact at <a href=\"mailto:example@example.com\">example@example.com</a></p><script src=\"index.js\"></script></script></body></html>"

document.addEventListener('DOMContentLoaded', function() {
    var clickableDiv = document.getElementById('GoDown');
    var targetElement = document.getElementById('ScrollTarget');
  
    clickableDiv.addEventListener('click', function() {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

