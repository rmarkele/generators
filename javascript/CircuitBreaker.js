class CircuitBreaker {
    constructor(p, x, y, w, h, lh, status=0, text="Disj."){
        this.p = p;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.lh= lh;
        this.status=status;
        this.text = text;
    }

    draw(){
        let p = this.p;
        let theta = 15;
        p.push()
            p.noFill()
            p.strokeWeight(4)
            p.stroke(255)
            p.translate(this.x,this.y);
            p.rectMode(p.CENTER)
            p.rect(0,0,this.w,this.h)

            p.fill(255)
            p.noStroke()
            p.textSize(14)
            p.textAlign(p.CENTER, p.CENTER);
            p.text(this.text,0, 4*this.h/6);
        p.pop()

        p.push()
            p.translate(this.x-this.w/2,this.y-this.lh/2);

            p.stroke(255,0,0);
            p.line(0,0, this.w/4, 0);
            p.line(this.w * 3/4,0, this.w, 0);
            p.push()
                p.strokeWeight(6);
                p.point(this.w/4, 0);
                p.point(this.w * 3/4,0);
            p.pop()

            p.stroke(0,255,0)
            p.line(0,this.lh/2, this.w/4, this.lh/2);
            p.line(this.w * 3/4,this.lh/2, this.w, this.lh/2);
            p.push()
                p.strokeWeight(6);
                p.point(this.w/4, this.lh/2);
                p.point(this.w * 3/4,this.lh/2);
            p.pop()

            p.stroke(0,0,255)
            p.line(0,this.lh, this.w/4, this.lh);
            p.line(this.w * 3/4 ,this.lh, this.w, this.lh);
            p.push()
                p.strokeWeight(6);
                p.point(this.w/4, this.lh);
                p.point(this.w * 3/4,this.lh);
            p.pop()
           
        p.pop()

        p.push()
        
        p.angleMode(p.DEGREES);
        
            p.push()
            p.translate(this.x-this.w/4,this.y-this.lh/2); 
            if(this.status == 0){
            p.rotate(-theta);   
            }       
            p.stroke(255,0,0);
            p.line(0, 0,this.w/2, 0);  
            p.pop()

            
            p.push()
            p.translate(this.x-this.w/4,this.y); 
            if(this.status == 0){
            p.rotate(-theta);   
            }       
            p.stroke(0, 255,0);
            p.line(0, 0,this.w/2, 0);  
            p.pop()

            p.push()
            p.translate(this.x-this.w/4,this.y+this.lh/2); 
            if(this.status == 0){
            p.rotate(-theta);   
            }       
            p.stroke(0,0,255);
            p.line(0, 0,this.w/2, 0);  
            p.pop()
                
        
        p.pop()


    }
}