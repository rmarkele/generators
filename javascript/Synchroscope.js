// let sync = function(p) {
//     let x = 100;
//     let y = 100;
//     let genAux;
//     let phi = 0
  
//     p.setup = function() {
//       let cv = p.createCanvas(200, 200);
//       cv.parent("control")
  
//       synchroscope = new Synchroscope(p, 100, 100, 100);
//     };
  
//     p.draw = function() {
//       p.background('rgba(255,255,255)');
//        synchroscope.draw(phi);
//        phi+=0.5;
//        phi = phi%360;
//     };
//   };
  
//   let syncp5 = new p5(sync);


  class Synchroscope{
    constructor(p, x, y, r, text="SINCRONOSCÓPIO"){
        this.p = p;
        this.x = x;
        this.y = y;
        this.r = r;
        this.text=text;
    }

    draw(phi, is_on){
        let p = this.p;
        let N=32;

        p.push()
            p.translate(this.x,this.y);
            p.angleMode(p.DEGREES);
            p.push()
                p.fill(240);
                p.strokeWeight(10);
                p.rectMode(p.CENTER);
                p.rect(0,0, 2 * this.r, 2 * this.r);
            p.pop()
            
           
            p.push()
                p.stroke(4)
                p.fill(0)
                p.textSize(16)
                p.textAlign(p.CENTER, p.CENTER);
                p.text(this.text,0,-this.r+15)
                p.textSize(12)
                p.stroke(1);
                p.text('Sinc.',0,-this.r*0.45+15)

            p.pop()

            p.push()
                p.strokeWeight(3);
                p.noFill()
                p.arc(0, 0, 2 * this.r*.75, 2 * this.r*.75, -90-50, -90+50);
                p.push()
                    p.rotate(-50)
                    p.translate(0, -this.r*.75)

                    p.push()
                        p.rotate(50)
                        p.strokeWeight(1);
                        p.stroke(0)
                        p.fill(0)
                        p.textSize(11)
                        p.textAlign(p.CENTER, p.CENTER);
                        p.text('Ger. \n Lento',-18,10)
                    p.pop()

                    p.rotate(-90)
                    p.beginShape()
                        p.vertex(-2,0);
                        p.vertex(0,-5);
                        p.vertex(2,0);
                    p.endShape(p.CLOSE)
                p.pop()

                p.push()
                    p.rotate(50)
                    p.translate(0, -this.r*.75)

                    p.push()
                        p.rotate(-50)
                        p.strokeWeight(1);
                        p.stroke(0)
                        p.fill(0)
                        p.textSize(11)
                        p.textAlign(p.CENTER, p.CENTER);
                        p.text('Ger. \n Rápido',18,10)
                    p.pop()

                    p.rotate(90)
                    p.beginShape()
                        p.vertex(-2,0);
                        p.vertex(0,-5);
                        p.vertex(2,0);
                    p.endShape(p.CLOSE)
                p.pop()


            p.pop()
            // p.noFill();
            
            p.push()
                p.rotate(-180);
                
                p.strokeWeight(10);
                p.push()
                    p.stroke(0,55,0);
                    p.point(0,this.r*.6);
                    p.point(0,this.r*.45)
                    p.stroke(55,0,0);
                    let ang=360/N;

                    for(let i = 1; i<N;  i++){              
                        p.rotate(ang)
                        p.point(0,this.r*.6);
                    }
                p.pop()
                p.push()
                
                // console.log(p.drawing Context.shadowBlur)
                
                if(is_on==1){
                    let n_phi = p.round(p.map(phi, 0, 360, 0, N))%N;
                        // n_phi=31
                        p.rotate(n_phi*ang);
                        p.drawingContext.shadowBlur = 5;
                    if(n_phi==0){
                        p.stroke(0,255,0);
                        p.drawingContext.shadowColor = p.color(0,255,0);
                        p.point(0,this.r*.45)
                        p.point(0,this.r*.6)
                    } else {
                        p.stroke(255,0,0);      
                        p.drawingContext.shadowColor = p.color(255,0,0);
                        p.point(0,this.r*.6)
                    }
                } 
                
                
                
                p.pop()
            p.pop()
        p.pop()

    }
  }
  