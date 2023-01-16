window.onload = function(){
      
      var canvas = document.querySelector("canvas");
      var ctx = canvas.getContext("2d");
      var canvas_width = canvas.width;
      var canvas_height = canvas.height;
      
      var velocidade = 1;
      
      var posX = posY = 5;
      
      var velX = velY = 0;
      
      var macaX = macaY = 10;
      
      var tamanhoDaPeca = 10;
      
      var quantidadeDePeca = 35;
      
      var gameOver = document.getElementById('game-over');
      gameOver.style.display = "none";
      
      var rastro = []; 
      tail = 5;
      
      var meuGame = () => {
        
        canvas.width = window.innerWidth = 350;
       
        canvas.height = window.innerHeight = 350;
        canvas.style.background = "black";
        
        canvas.style.border = "1px solid white";
        
        posX += velX;
        posY += velY;
        
        if(posX < 0){
          posX = quantidadeDePeca-1
        }
        if(posX > quantidadeDePeca-1){
          posX = 0
        }
        if(posY < 0){
          posY = quantidadeDePeca-1
        }
        if(posY > quantidadeDePeca-1){
          posY = 0
        }
        
        ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.fillStyle = "red";
        ctx.fillRect(macaX*tamanhoDaPeca,macaY*tamanhoDaPeca,tamanhoDaPeca,tamanhoDaPeca)
        
        ctx.fillStyle = "aqua";
        for(var i = 0; i < rastro.length; i++){
          ctx.fillRect(rastro[i].x*tamanhoDaPeca,rastro[i].y*tamanhoDaPeca,tamanhoDaPeca -1,tamanhoDaPeca -1)
          if(rastro[i].x == posX && rastro[i].y == posY){
            velX = velY = 0
            tail = 5;
          }
        }
        rastro.push({
          x: posX,
          y: posY
        })
        while(rastro.length > tail){
          rastro.shift()
        }
        if(macaX == posX && macaY == posY){
          tail++;
          macaX = Math.floor(Math.random()*quantidadeDePeca)
          macaY = Math.floor(Math.random()*quantidadeDePeca)
        }
      }
      document.querySelector("#cima").addEventListener('click', () => {
        
        velY = -velocidade
        velX = 0
      })
      
      document.querySelector("#baixo").addEventListener('click', () => {
        
        velY = velocidade
        velX = 0
      })

      document.querySelector("#esquerda").addEventListener('click', () => {
        
        velX = -velocidade
        velY = 0
      })
      
      document.querySelector("#direita").addEventListener('click', () => {
        
        velX = velocidade
        velY = 0
      })

      setInterval(meuGame, 90)
    }
