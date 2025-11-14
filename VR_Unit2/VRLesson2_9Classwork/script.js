let maze = [
  "---TTTTTTTTTTT-------------------",
  "---xxxxxxxxxxxxxxxx----T---------------",
  "---x----------T---x------",
  "---x--xxxxxxx-----x---T---------",
  "---x--x-----x---T-x--------",
  "---xxxx-----x----Tx---------",
  "--------xxxxx-----xxxxxx-T---------",
  "----------oo---Tx------x---",
  "-----xxxxxx-----x-x-x-T-x--------",
  "-------------T--x-x-----x-",
  "-------------T----x-----x--------",
  "---TTTTTTTTTTT----xxxxxx-----x----------",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "T"){
        new Tree(c,1,r);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }

})