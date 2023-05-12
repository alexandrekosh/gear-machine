function eng_dentesRetos(n1, d1, m, angAlfa) {
    const formulas = [
        (m * (Number(n1) + 2)), //Diametro externo
        (m * n1), // Diametro PrimitivoCoroa
        // (diametroExternoCoroa - (2 * (2.16 * m))), // Diametro interno
        // (diametroPrimitivoCoroa * Math.cos(angAlfa * (Math.PI / 180))), // Diametro de Base
        (2 * d1), // Comprimento Diametro Cubo
        (0.16 * m), // Folda do dente
        (m * Math.PI), // Passo
        // (passo / 2), // reforço
        (8 * m), // compimento do dente
        // (comprimentoDente * 0.6), // Corpo da Roda
        (2.16 * m), // Altura do dente
        (5 + (d1 / 5)), // altura da chaveta
        // (alturachavetaCoroa / 2), // largura da chaveta
    ];

    let resultados = [];

    formulas.forEach(element => {
       resultados.push(Number(element.toFixed(2)));
    });

    return resultados;
}
const dentesRetos = eng_dentesRetos(1, 2, 3, 4);

console.log(dentesRetos)