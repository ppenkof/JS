function cone(radius, height) {
    let volume = 0;
    let totalArea = 0;
    let radiusSQ = radius * radius;

    volume = (Math.PI * height * radiusSQ) / 3;
    console.log(`volume = ${volume.toFixed(4)}`);

    let length = Math.sqrt((radius * radius) + (height * height));
    totalArea = Math.PI * radius * (radius + length);
    console.log(`area = ${totalArea.toFixed(4)}`);
}
cone(3.3, 7.8)