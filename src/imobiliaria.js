const imoveis = [
    {
        url:"https://cdn.vistahost.com.br/jardinsc/vista.imobi/fotos/23000/i3ZedL34l6R47_23000651dba239ce3e.jpg",
        local:"Apartamento - Pinheiros",
        arean:"232.5 m",
        area:"Área útil",
        quartosn:"3",
        quartos:"Dorms",
        banheirosn:"3",
        banheiros:"Suítes",
        garagem:"3",
        garagem:"Vagas",
        valor:"9.000.000,00",
        codigo:"19968",
    },
    {
        url:"https://cdn.vistahost.com.br/jardinsc/vista.imobi/fotos/23044/i18tU1fm1OB21_230446536e64b7a169.jpg",
        local:"Apartamento - Ibirapuera",
        arean:"632 m",
        area:"Área útil",
        quartosn:"4",
        quartos:"Dorms",
        banheirosn:"4",
        banheiros:"Suítes",
        garagem:"6",
        garagem:"Vagas",
        valor:"29.950.000,00",
        codigo:"20012",
    },
    {
        url:"https://cdn.vistahost.com.br/jardinsc/vista.imobi/fotos/16136/iv8JihoJo2671uDJ8863W_1613664d3d8de3791e.jpg",
        local:"Casa - Alto de Pinheiros",
        arean:"963 m",
        area:"Área útil",
        quartosn:"5",
        quartos:"Dorms",
        banheirosn:"5",
        banheiros:"Suítes",
        garagem:"6",
        garagem:"Vagas",
        valor:"32.000.000,00",
        codigo:"13114",
    },
    {
        url:"https://cdn.vistahost.com.br/jardinsc/vista.imobi/fotos/24151/iy3S96zJmX39uD6z_241516557c67fa2aea.jpg",
        local:"Casa em Condomínio - Alto de Pinheiros",
        arean:"1000 m",
        area:"Área útil",
        quartosn:"4",
        quartos:"Dorms",
        banheirosn:"4",
        banheiros:"Suítes",
        garagem:"6",
        garagem:"Vagas",
        valor:"65.000.000,00",
        codigo:"21119",
    },
    {
        url:"https://cdn.vistahost.com.br/jardinsc/vista.imobi/fotos/23090/iYhki6002M_23090650c956c193ed.jpg",
        local:"Casa em Condomínio - Cidade Jardim",
        arean:"1155.61 m",
        area:"Área útil",
        quartosn:"4",
        quartos:"Dorms",
        banheirosn:"4",
        banheiros:"Suítes",
        garagem:"4",
        garagem:"Vagas",
        valor:"18.490.000,00",
        codigo:"20058",
    },
    {
        url:"https://cdn.vistahost.com.br/jardinsc/vista.imobi/fotos/24034/i0lU20x33a26146_24034654bf3388c5a0.jpg",
        local:"Casa em Condomínio - Trancoso",
        arean:"450 m",
        area:"Área útil",
        quartosn:"3",
        quartos:"Dorms",
        banheirosn:"3",
        banheiros:"Suítes",
        garagem:"0",
        garagem:"Vagas",
        valor:"15.000.000,00",
        codigo:"21002",
    },
    {
        url:"https://cdn.vistahost.com.br/jardinsc/vista.imobi/fotos/17933/iN9420T24_17933632cc8cc64276.jpg",
        local:"Casa em Condomínio - Fazenda Boa Vista",
        arean:"600 m",
        area:"Área útil",
        quartosn:"5",
        quartos:"Dorms",
        banheirosn:"5",
        banheiros:"Suítes",
        garagem:"0",
        garagem:"Vagas",
        valor:"18.000.000,00",
        codigo:"14911",
    },
    {
        url:"https://cdn.vistahost.com.br/jardinsc/vista.imobi/fotos/21826/iOiXF6Q65d8168ql3a_21826649de8ca331b5.jpg",
        local:"Casa em Condomínio - Morumbi",
        arean:"640 m",
        area:"Área útil",
        quartosn:"6",
        quartos:"Dorms",
        banheirosn:"6",
        banheiros:"Suítes",
        garagem:"6",
        garagem:"Vagas",
        valor:"6.500.000,00",
        codigo:"18804",
    },
    {
        url:"https://cdn.vistahost.com.br/jardinsc/vista.imobi/fotos/18623/i2CGVx90L371t0RC964_18623637d28bae80d6.jpg",
        local:"Apartamento - Jardim Europa",
        arean:"188 m",
        area:"Área útil",
        quartosn:"1",
        quartos:"Dorms",
        banheirosn:"1",
        banheiros:"Suítes",
        garagemn:"2",
        garagem:"Vagas",
        valor:"4.150.000,00",
        codigo:"15601",
    },
    

];



const divResultados = document.getElementById("resultados")
for (const casas of imoveis) {
    divResultados.innerHTML += `
    <div class="col-12 col-md-4 p-2">
        <p class="text-white">${casas.local}</p>
        <div class="conteudo">
            <img class="imagem" src="${casas.url}">
            <p class="text-white">${casas.arean}</p>
            <p class="text-white">${casas.area}</p>
            <p class="text-white">${casas.quartosn}</p>
            <p class="text-white">${casas.quartos}</p>
            <p class="text-white">${casas.banheirosn}</p>
            <p class="text-white">${casas.banheiros}</p>
            <p class="text-white">${casas.garagemn}</p>
            <p class="text-white">${casas.garagem}</p>
            <p class="text-white">${casas.valor}</p>
            <p class="text-white">${casas.codigo}</p>
        </div>
    </div>
`
}