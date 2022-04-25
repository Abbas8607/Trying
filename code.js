var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1e30525e-47cd-43b4-8c33-d3fe2d75dc30","f0b1a4dd-01ea-4577-b244-1df8ecea91e2","2f9b5e40-a57e-418e-87bd-0a387005795e","ab87ffb2-f694-4471-ad14-076932eafc29","6d8ec81f-ba72-47f9-9684-4690d7f4c46f","3c795c49-f515-4a26-8572-d3fa4b9e0e1f","ecf367f5-924e-45e3-8ade-2d8f0e3797e7","89da8123-bc7a-4e07-a70f-afe191618333","0cc2562f-f25a-4218-bbea-cf3b6c12355b","03907a55-30f6-4be1-993c-a51d309767bc"],"propsByKey":{"1e30525e-47cd-43b4-8c33-d3fe2d75dc30":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":385,"y":180},"frameCount":1,"looping":true,"frameDelay":12,"version":"FDOZYhWOeng1HDTOM63PrSzcbqljnQGf","loadedFromSource":true,"saved":true,"sourceSize":{"x":385,"y":180},"rootRelativePath":"assets/1e30525e-47cd-43b4-8c33-d3fe2d75dc30.png"},"f0b1a4dd-01ea-4577-b244-1df8ecea91e2":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":400,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"PHgBjP5c93kWay.2.Rezutr.rSQmPkdr","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":200},"rootRelativePath":"assets/f0b1a4dd-01ea-4577-b244-1df8ecea91e2.png"},"2f9b5e40-a57e-418e-87bd-0a387005795e":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":400,"y":180},"frameCount":1,"looping":true,"frameDelay":12,"version":"5Q1gOt45YRODtK4d5XjxDtO82BhmWwbF","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":180},"rootRelativePath":"assets/2f9b5e40-a57e-418e-87bd-0a387005795e.png"},"ab87ffb2-f694-4471-ad14-076932eafc29":{"name":"spike_bot_1","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":2,"looping":true,"frameDelay":12,"version":"rUTEdKiyciUjSVsiZn8bXiAQqLTo4MPm","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":80},"rootRelativePath":"assets/ab87ffb2-f694-4471-ad14-076932eafc29.png"},"6d8ec81f-ba72-47f9-9684-4690d7f4c46f":{"name":"alien_04_1","sourceUrl":null,"frameSize":{"x":50,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"0FT3S9MKU9XxPTPoP9ch5U6NX2_pWN_s","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":25},"rootRelativePath":"assets/6d8ec81f-ba72-47f9-9684-4690d7f4c46f.png"},"3c795c49-f515-4a26-8572-d3fa4b9e0e1f":{"name":"gameplayadventure_03_1","sourceUrl":null,"frameSize":{"x":50,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"Sgemht.kI5jeR3GdaS9u7Z06EhT_rEeZ","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":80},"rootRelativePath":"assets/3c795c49-f515-4a26-8572-d3fa4b9e0e1f.png"},"ecf367f5-924e-45e3-8ade-2d8f0e3797e7":{"name":"gameplayadventure_06_1","sourceUrl":null,"frameSize":{"x":26,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"SpM9OF6WGI4Ls8XY7nVGGTrZMM8BRwoW","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":26,"y":50},"rootRelativePath":"assets/ecf367f5-924e-45e3-8ade-2d8f0e3797e7.png"},"89da8123-bc7a-4e07-a70f-afe191618333":{"name":"kid_15_walking_1","sourceUrl":null,"frameSize":{"x":25,"y":40},"frameCount":2,"looping":true,"frameDelay":12,"version":"BXatK3oXh.YSguorgASerbRj.I7GDs_m","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":40},"rootRelativePath":"assets/89da8123-bc7a-4e07-a70f-afe191618333.png"},"0cc2562f-f25a-4218-bbea-cf3b6c12355b":{"name":"kid_15_walking_1_copy_1","sourceUrl":null,"frameSize":{"x":25,"y":40},"frameCount":2,"looping":true,"frameDelay":12,"version":"dWFX8a3HqXqgrMmqSSnzu_JBMh7UquUc","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":40},"rootRelativePath":"assets/0cc2562f-f25a-4218-bbea-cf3b6c12355b.png"},"03907a55-30f6-4be1-993c-a51d309767bc":{"name":"kid_15_2","sourceUrl":null,"frameSize":{"x":25,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"i7qLkPaOM1rqQeJ4SsEjkDWjaUmCX.rS","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":40},"rootRelativePath":"assets/03907a55-30f6-4be1-993c-a51d309767bc.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


//walls & path

var wall1 = createSprite(260,33,375, 7);
wall1.shapeColor = "red";

var wall2 = createSprite(140, 120, 375, 7);
wall2.shapeColor="red";
var wall3 = createSprite(260, 225, 375, 7);
wall3.shapeColor="red";
var wall4 = createSprite(40, 340, 120, 7)
wall4.shapeColor="red";
var wall5 =createSprite(185, 340, 60, 7);
wall5.shapeColor="red";
var wall6 =createSprite(295, 340, 60, 7);
wall6.shapeColor="red";

var invi = createSprite(360, 120, 30, 7);
invi.visible = false
var invi1 = createSprite(37, 223, 30, 7);
invi1.visible=false
var invi2 = createSprite(124, 345, 30, 7);
invi2.visible=false
var invi3 = createSprite(245, 345, 30, 7);
invi3.visible=false
var invi4 =createSprite(360, 345, 30, 7);
invi4.visible=false
var invi5 = createSprite(32, 33, 30, 7);
invi5.visible=false

//Aliens, Character:Romio & Princes

var romio = createSprite(66, 10, 25, 25);
romio.setAnimation("kid_15_2")

var princess = createSprite(30, 375, 50, 50);
princess.setAnimation("gameplayadventure_06_1")

var alien1 = createSprite(360, 60, 50, 50);
alien1.setAnimation("alien_04_1");

var alien2 = createSprite(50, 150, 50, 50);
alien2.setAnimation("alien_04_1")

var alien3 = createSprite(360, 300, 50, 50);
alien3.setAnimation("alien_04_1")

var alien4 = createSprite(50, 250, 50, 50);
alien4.setAnimation("alien_04_1");

var door = createSprite(380, 375, 40, 60);
door.shapeColor = "yellow";

var gameState ="serve"
var lifeleft = 5


function draw() {
  background("#CD7F32")
  drawSprites()
  createEdgeSprites();
  textSize(20);
  fill("green");
  text("Life:" + lifeleft,341,19)
  
  // Sprites Bounce 
  
  romio.bounceOff(edges);
  romio.bounceOff(wall1);
  romio.bounceOff(wall2);
  romio.bounceOff(wall3);
  romio.bounceOff(wall4);
  romio.bounceOff(wall5);
  romio.bounceOff(wall6);
  
  alien1.bounceOff(wall1);
  alien1.bounceOff(wall2);
  alien1.bounceOff(invi);
  alien1.bounceOff(invi5);
  alien1.bounceOff(edges);
  
  alien2.bounceOff(wall2);
  alien2.bounceOff(wall3);
  alien2.bounceOff(invi);
  alien2.bounceOff(invi1);
  alien2.bounceOff(edges);
  
  alien3.bounceOff(wall3);
  alien3.bounceOff(wall4);
  alien3.bounceOff(wall5);
  alien3.bounceOff(wall6);
  alien3.bounceOff(invi1);
  alien3.bounceOff(invi2);
  alien3.bounceOff(invi3);
  alien3.bounceOff(edges);

  alien4.bounceOff(wall3);  
  alien4.bounceOff(wall4);
  alien4.bounceOff(wall5);
  alien4.bounceOff(wall6);
  alien4.bounceOff(invi1);
  alien4.bounceOff(invi2);
  alien4.bounceOff(invi3);
  alien4.bounceOff(edges);
  
  //Games States

if (gameState == "serve"){
  textSize(30);
  fill("blue");
  text("Press Enter To Start", 70, 179);
  textSize(25);
  text ("(Save The Princess)",70, 220);
  text("Exit-------->", 230, 365);

  if (keyDown("enter")){
    gameState = "play";
    alien1.velocityX =  -6
    alien2.velocityY = 6
    alien2.velocityX = -6
    alien3.velocityX = -7
    alien4.velocityX = 7
  }
}

if (gameState == "play"){
  
  //Romio controls & Animation
  
  if (keyDown("right")){
  romio.x = romio.x +5;
  
  }
  if (keyDown("left")){
    romio.x = romio.x -5;
  }
  if (keyDown("up")){
    romio.y = romio.y -5;
  
  }
  if (keyDown("down")){
    romio.y = romio.y +5;
  }
  
  if (keyWentDown("right")){
    romio.setAnimation("kid_15_walking_1_copy_1");
  }
  
  if (keyWentDown("left")){
    romio.setAnimation("kid_15_walking_1");
  }
  
  if (keyWentUp("right")){
    romio.setAnimation("kid_15_2");
  }
  
    if (keyWentUp("left")){
    romio.setAnimation("kid_15_2");
  }
  
  if (romio.isTouching(alien1) || romio.isTouching(alien2) || romio.isTouching(alien3) || romio.isTouching(alien4)){
    lifeleft = lifeleft -1;
    romio.x = 66;
    romio.y = 10;
  playSound("assets/category_explosion/retro_game_take_damage_chirp_3.mp3",false)
  }
  if (romio.isTouching(princess)){
    princess.x = romio.x;
    princess.y = romio.y;
  }
  if (romio.isTouching(door)){
    playSound("assets/category_achievements/melodic_win_4.mp3",false)
  }
  
  
  
  if (romio.isTouching(door) || lifeleft == 0){
    gameState = "end";
  }
}
  
  if (gameState == "end"){
    
    alien1.velocityX = 0
    alien2.velocityY = 0
    alien2.velocityX = 0
    alien3.velocityX = 0
    alien4.velocityX = 0
    
    
    if (lifeleft == 0){
    textSize(35);
      fill("red");
      text("Game Over!!", 80, 219);
      
    }
    if (romio.isTouching(door) || romio.bounce(door)){
      romio.visible =false;
      princess.visible = false;
      
      textSize(35);
      fill("Green");
      text("You Won",80, 175);
    }
  
  
  
}
  
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
