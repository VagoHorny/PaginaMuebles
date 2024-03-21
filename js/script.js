const flower = document.getElementById('flower');

for (let i = 0; i < 5; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.transform = `rotate(${i * 45}deg)`;
    flower.appendChild(petal);
}
