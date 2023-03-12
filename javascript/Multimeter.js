class Multimeter{
    constructor(p, x, y, w, h, range, text="V"){
        this.p = p;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.range = range;
        this.text=text;
    }

    draw(val,fix){
        let p = this.p;
        let N=5;
        let bc=240;
        let ang=90/N;
        let angVal = p.map(val,this.range[0], this.range[1], 90, 180);
        angVal = p.constrain(angVal,90,180);

        p.push()
            p.translate(this.x,this.y);
            p.angleMode(p.DEGREES);
            p.push()
                p.fill(bc);
                p.strokeWeight(5);
                p.rectMode(p.CENTER);
                p.rect(0,0, this.w, this.h);
            p.pop()

            p.push()
                p.translate(-this.w/2 * .7,-this.h/2 * .7)
                p.fill(0);
                p.noStroke();
                p.textSize(16)
                p.textAlign(p.CENTER, p.CENTER);
                p.text(this.text,0,0)
            p.pop()
            
            p.push()
                p.stroke(255);
                p.strokeWeight(20)
                p.translate(this.w/2-20,this.h/2-20);

                p.fill(255)
                p.arc(0, 0, 1.7*(this.w-20), 1.7*(this.h-20), 180, -90,p.PIE);
                
                p.push()
                    p.stroke(0);
                    p.rotate(90);
                    p.strokeWeight(2)
                    for(let i=0; i <= N; i++){
                        p.line(0, 1.7/2 *(this.w-20), 0, 1.9/2*(this.w-20))
                        p.push()
                            p.translate(0,1.45/2 *(this.w-20))
                            p.rotate(-i*ang-90);
                            p.fill(0);
                            p.noStroke();
                            p.textSize(12)
                            p.textAlign(p.CENTER, p.CENTER);
                            p.text(p.round((this.range[1] - this.range[0])/5*i*1000)/1000,0,0)
                        p.pop()
                        p.push()
                            p.strokeWeight(1)
                            if(i<N){
                                for(let j=1; j < 5; j++){
                                    p.rotate(ang/5);
                                    p.line(0, 1.8/2 *(this.w-20), 0, 1.9/2*(this.w-20))
                                } 
                            }
                        p.pop()

                        p.rotate(ang);
                    }
                p.pop();

                p.push()
                    p.stroke(0);
                    p.fill(0)
                    p.strokeWeight(2);
                    p.rotate(angVal);
                    p.line(0,0, 0, 1.55/2*(this.w-20));
                    p.translate(0, 1.55/2*(this.w-20));
                    p.beginShape()
                        p.vertex(-2,0);
                        p.vertex(0,5);
                        p.vertex(2,0);
                    p.endShape(p.CLOSE)
                p.pop()

                p.fill(bc);
                p.stroke(bc);
                p.arc(0, 0, 0.7*(this.w-20), 0.7*(this.h-20), 180, -90,p.PIE);
    
                p.stroke(0);
                // p.strokeWeight(8)
                // p.point(0,0)

                p.strokeWeight(1)
                p.fill(255)
                p.rectMode(p.CENTER)
                p.rect(-10,0,40,20)
                
                p.fill(0);
                p.noStroke();
                p.textSize(12)
                p.textAlign(p.CENTER, p.CENTER);
                p.text(val.toFixed(fix),-10, 0)
            p.pop()

           
          
        p.pop()

    }
  }
  