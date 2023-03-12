let hmi = function (p) {
  let phi = 0;
  let v1 = 0, v2 = 0, i1 = 0, i2 = 0, p1 = 0, p2 = 0;


  p.setup = function () {
    let cv = p.createCanvas(840, 290);
    cv.parent("hmi");

    Amp1 = new Multimeter(p, 75, 90, 120, 120, [0, 3], "kA");
    Watt1 = new Multimeter(p, 235, 90, 120, 120, [0, 1.25], "kW");

    Volt1 = new Multimeter(p, 75, 220, 120, 120, [0, 575], "V");
    Freq1 = new Multimeter(p, 235, 220, 120, 120, [0, 75], "Hz");

    synchroscope = new Synchroscope(p, 420, 155, 100);

    Watt2 = new Multimeter(p, 605, 90, 120, 120, [0, 1.25], "kW");
    Amp2 = new Multimeter(p, 765, 90, 120, 120, [0, 3], "kA");
    
    Freq2 = new Multimeter(p, 605, 220, 120, 120, [0, 75], "Hz");
    Volt2 = new Multimeter(p, 765, 220, 120, 120, [0, 575], "V");
    
  };

  p.draw = function () {
    p.background("rgb(173,162,144)");

    p.push();
    p.strokeWeight(3);
    p.line(420, 0, 420, 290);
    p.pop();

    p.push();
    p.textSize(20);
    p.textStyle(p.BOLD);
    p.textAlign(p.CENTER, p.CENTER);
    p.text("Gerador 1", 160, 15);
    p.text("Gerador 2", 680, 15);
    p.pop();

    phi = (theta2 - theta1)%360;
    synchroscope.draw(phi, gen1*gen2);

    Volt1.draw(v1, 0);
    Amp1.draw(i1, 2);
    Watt1.draw(p1, 2);
    Freq1.draw(n1/1800*60,1);

    Volt2.draw(v2, 0);
    Amp2.draw(i2, 2);
    Watt2.draw(p2, 2);
    Freq2.draw(n2/1800*60, 1);

    
    v1 = animatePointer(v1, volt1, 30);
    v2 = animatePointer(v2, volt2, 30);

    i1 = animatePointer(i1, I1, 30);
    i2 = animatePointer(i2, I2, 30);

    p1 = animatePointer(p1, P1, 30);
    p2 = animatePointer(p2, P2, 30);

    // v1 = volt1;
    // v2 = volt2;

    // i1 = I1;
    // i2 = I2;

    // p1 = P1;
    // p2 = P2;
    

    
  };

  function animatePointer(n1, n2, step){
    n1 += step * (n2-n1) * 0.01;
    return n1;
    
  }
};

let hmip5 = new p5(hmi);


