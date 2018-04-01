function quadraticEquation(a,b,c) {
    discriminant = Math.pow(b,2)-4*a*c
    if (discriminant > 0 )
    {
        x1 = (-b+Math.sqrt(discriminant))/(2*a)
        x2 = (-b-Math.sqrt(discriminant))/(2*a)
        console.log(x1)
        console.log(x2)
    }else if( discriminant === 0 ){
        x1= -b/(2*a)
        console.log(x1);
    }else {
        console.log('No')
    }
}
quadraticEquation(1,-12,36)