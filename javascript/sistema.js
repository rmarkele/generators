
let sys = function(p) {
  let x = 100;
  let y = 100;
  let genInf;
  let genAux;
  let angA=0;
  let angB=0; 
  let val=80;

  let Lines={};

  p.setup = function() {
    let cv = p.createCanvas(840, 230);
    cv.parent("sys");
    
    genInf = new Generator(p, 180, 50, 35, "Ger. 1");
    genInf.val=val;
    
    Lines.L11 = new TL_NORMAL(p, genInf.x+genInf.r, genInf.y, 150, 30);
    Lines.D11 = new CircuitBreaker(p, Lines.L11.x+Lines.L11.w+30, Lines.L11.y, 60, 70, 30,disj1);
    Lines.L12 = new TL_NORMAL(p, Lines.D11.x+Lines.D11.w/2, Lines.D11.y, 150, 30);
    Lines.T11=  new TL_T(p, Lines.L12.x+Lines.L12.w, Lines.L12.y, 30, 30);
    
    genAux = new Generator(p, 180, 160, 35,  "Ger. 2");
    genAux.val=val-30;


    Lines.L21 = new TL_NORMAL(p, genAux.x+genAux.r, genAux.y, 150, 30);
    Lines.D21 = new CircuitBreaker(p, Lines.L21.x+Lines.L21.w+30, Lines.L21.y, 60, 70, 30,disj2);
    Lines.L22 = new TL_NORMAL(p, Lines.D21.x+Lines.D21.w/2, Lines.D21.y, 150, 30);
    Lines.C21=  new TL_Corner(p, Lines.L22.x+Lines.L22.w, Lines.L22.y, 30, 30);

    Lines.L31 = new TL_NORMAL(p, Lines.C21.x, Lines.C21.y, genAux.y - genInf.y - 30, 30, -90);

    Lines.L41 = new TL_NORMAL(p, Lines.L12.x+Lines.L12.w, Lines.L12.y, 100, 30);

    // p.noLoop();
  };

  p.draw = function() {
    p.background(0);
   
    Lines.D11.status = disj1;
    Lines.D21.status = disj2;
    
    genInf.ang=theta1;
    genInf.val=p.map(volt1, 0, 575, 0, 100);

    genInf.draw();
    if(n1>0&&volt1>0){
      genInf.graph();
    }

    genAux.ang=theta2;
    genAux.val=p.map(volt2, 0, 575, 0, 100);
    genAux.draw();
    if(n2>0&&volt2>0){
      genAux.graph();
    }

    theta1 += n1/1800*4 % 360;
    theta2 += n2/1800*4 % 360;

    Lines.L11.draw();
    Lines.D11.draw();
    Lines.L12.draw();
    Lines.T11.draw();

    Lines.L21.draw();
    Lines.D21.draw();
    Lines.L22.draw();
    Lines.C21.draw();

    Lines.L31.draw();
    
    Lines.L41.draw();

    p.push()
      // p.noFill();
      p.strokeWeight(4)
      p.rectMode(p.CENTER);

      let xc = Lines.L41.x+Lines.L41.w+40;
      let yc = Lines.L41.y;
      p.push()
      if((gen1==1 && disj1==1)||(gen2==1 && disj2==1)){
        p.drawingContext.shadowBlur = 80;
        p.drawingContext.shadowColor = p.color(255 *  Sc,255 * Sc,0);
        p.fill(255 *  Sc,255 *  Sc,0);
        p.stroke(255*(1 - Sc)*(1 - Sc));
        p.rect(xc, yc,80,80);
        p.fill(255*(1 - Sc)*(1 - Sc));
      } else{
        // p.drawingContext.shadowBlur = 20;
        // p.drawingContext.shadowColor = p.color(255,255,0);
        p.stroke(255);
        p.fill(0,0,0);
        p.rect(xc, yc,80,80);
        p.fill(255);
      }

      p.noStroke();
      p.textSize(28)
      p.textAlign(p.CENTER, p.CENTER);
      p.text("Carga",xc, yc);
      p.pop()
    p.pop() 
  };
  
  
};

let sysp5 = new p5(sys);