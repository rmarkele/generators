class TL_NORMAL {
    constructor(p,x,y, w, h, theta=0) {
        this.p = p;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.theta=theta;
    }

    draw(){
        let p = this.p;
        p.push()
            p.translate(this.x, this.y - this.h/2);
            p.angleMode(p.DEGREES);
            p.rotate(this.theta);
            p.stroke(255,0,0);
            p.line(0,0, this.w, 0);

            p.stroke(0,255,0)
            p.line(0,this.h/2, this.w, this.h/2);

            p.stroke(0,0,255)
            p.line(0,this.h, this.w, this.h);
        p.pop()
    }

}

class TL_T {
    constructor(p,x,y, w, h, theta=0) {
        this.p = p;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.theta=theta;
    }

    draw(){
        let p = this.p;
        p.push()
            p.translate(this.x, this.y - this.h/2);
            p.angleMode(p.DEGREES);
            p.rotate(this.theta);

            p.stroke(255,0,0);
            p.line(0,0, this.w, 0);
            p.line(0,0, 0, this.h);

            p.stroke(0,255,0)
            p.line(0,this.h/2, this.w, this.h/2);
            p.line(this.w/2,this.h/2, this.w/2, this.h);

            p.stroke(0,0,255)
            p.line(0,this.h, this.w, this.h);
        p.pop()
        p.push()
            p.translate(this.x, this.y - this.h/2);
            p.angleMode(p.DEGREES);
            p.rotate(this.theta);
            p.strokeWeight(8);
            
            p.stroke(255,0,0);
            p.point(0,0);

            p.stroke(0,255,0)
            p.point(this.w/2,this.h/2);

            p.stroke(0,0,255)
            p.point(this.w,this.h);
        p.pop()
    }

}


class TL_Corner {
    constructor(p,x,y, w, h, theta=0) {
        this.p = p;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.theta=theta;
    }

    draw(){
        let p = this.p;
        p.push()
            p.translate(this.x, this.y - this.h/2);
            p.angleMode(p.DEGREES);
            p.rotate(this.theta);

            p.stroke(0,255,0)
            p.line(0,this.h/2, this.w/2, this.h/2);
            p.line(this.w/2,this.h/2, this.w/2, 0);

            p.stroke(0,0,255)
            p.line(0,this.h, this.w, this.h);
            p.line(this.w,this.h, this.w, 0);
        p.pop()
        
    }

}