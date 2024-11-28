function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);

    if (min > max) {
        document.getElementById("result").innerText = "O valor mínimo deve ser menor que o máximo.";
        return;
    }

    const result = Math.floor(Math.random() * (max - min + 1) + min);

    // Exibe o resultado na tela
    document.getElementById("result").innerText = `Número gerado: ${result}`;
}
