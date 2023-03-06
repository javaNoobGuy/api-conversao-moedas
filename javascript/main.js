var body;

const atualizarBaseDeDados = (moeda1, moeda2) =>{
    console.log(moeda1);
    //http://economia.awesomeapi.com.br/json/last/USD-BRL
    fetch(`https://economia.awesomeapi.com.br/json/last/${moeda1}-${moeda2}`).then(response => {
        return response.json()
    }).then(corpo => {

        console.log("api carregada");
        console.log(corpo);
        body = corpo;
        mudarInpu(moeda1,moeda2);
    })
}

const mudarInpu = async(moeda1,moeda2) =>{

    const input1 = document.getElementById("campo1");
    const input2 = document.getElementById("campo2");
    let val1 = moeda1;
    let val2 = moeda2;
    console.log(body);
    console.log(`${val1}${val2}`);
    input2.value = input1.value * body[`${val1}${val2}`].high;
    
}

const converter = () => {

    let moeda1 = document.getElementById('moedas1');
    let moeda2 = document.getElementById('moedas2');
    atualizarBaseDeDados(moeda1.options[moeda1.selectedIndex].value, moeda2.options[moeda2.selectedIndex].value);

}


