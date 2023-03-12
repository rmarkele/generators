class Generator {
    constructor(p, x, y, radius, text="Ger."){
        this.p=p;
        this.x = x;
        this.y = y;
        this.r = radius;
        this.val =0;
        this.angle=0;
        this.text = text;
        this.hist= {
            A:[],
            B:[],
            C:[]
        };
    }

    draw(){
        let p= this.p;
        let val = this.val;
        let ang = this.ang;

        p.push();
            p.strokeWeight(4);
            p.stroke(255);
            p.translate(this.x,this.y);
            p.noFill();
            p.ellipseMode(p.RADIUS)
            p.circle(0, 0, this.r);

           
            
            p.push();
                p.angleMode(p.DEGREES);
                p.stroke(150);

                p.rotate(ang);
                p.line(0,0,0,this.r)
                p.rotate(120);
                p.line(0,0,0,this.r)
                p.rotate(120);
                p.line(0,0,0,this.r)

                p.stroke(255,0,0);
                p.rotate(120);
                p.line(0,0,0,this.r * val/100);

                p.stroke(0,255,0);
                p.rotate(120);
                p.line(0,0,0,this.r * val/100);

                p.stroke(0,0,255);
                p.rotate(120);
                p.line(0,0,0,this.r * val/100);

            p.pop();


            p.push();
                p.strokeWeight(8);
                p.point(0,0);
            p.pop();

            p.translate(0,this.r);
            p.beginShape();
                p.vertex(this.r/2,0);
                p.vertex(this.r, 2 *this.r/3);
                p.vertex(-this.r, 2 * this.r/3)
                p.vertex(-this.r/2,0);
            p.endShape(p.CLOSE);

            p.fill(255)
            p.noStroke(0)
            p.textSize(14)
            p.textAlign(p.CENTER, p.CENTER);
            p.text(this.text,0, this.r/3);
        p.pop();

        

    }

    graph() {
        let p = this.p;
        p.push();
            p.noFill();
            p.translate(this.x - 2 * this.r, this.y);
            p.angleMode(p.DEGREES);
            
            let newValA = this.val/100 * this.r * p.sin(this.ang + 90);
            let newValB = this.val/100 * this.r * p.sin(this.ang+120 + 90);
            let newValC = this.val/100 * this.r * p.sin(this.ang-120 + 90);

            this.hist.A.unshift(newValA);
            this.hist.B.unshift(newValB);
            this.hist.C.unshift(newValC);
            if(this.hist.A.length>100){
                this.hist.A.pop();
                this.hist.B.pop();
                this.hist.C.pop();
            }

            p.stroke(255,0,0)
            p.beginShape()
                for(let i= 0; i < this.hist.A.length; i++){
                    p.vertex(-i, this.hist.A[i]);
                }
            p.endShape()

            p.stroke(0,255,0)
            p.beginShape()
                for(let i= 0; i < this.hist.B.length; i++){
                    p.vertex(-i, this.hist.B[i]);
                }
            p.endShape()

            p.stroke(0,0,255)
            p.beginShape()
                for(let i= 0; i < this.hist.C.length; i++){
                    p.vertex(-i, this.hist.C[i]);
                }
            p.endShape()



        p.pop();

    }
}