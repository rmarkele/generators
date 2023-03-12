function mapRange (value, a, b, c, d) {
    value = (value - a) / (b - a);
    return c + value * (d - c);
}

function myConstrain(value, min, max){
    value = Math.max(value, min);
    value= Math.min(value, max);
    return value;
}