const imoveis = [
    {
        url:"https://cdn.vistahost.com.br/jardinsc/vista.imobi/fotos/23000/i3ZedL34l6R47_23000651dba239ce3e.jpg",
        local:"Apartamento - Pinheiros",
        area:"232m²",
        quartos:"3",
        banheiros:"3",
        garagem:"3",
        valor:"9.000.000,00",
        codigo:"19968",
    },
    {
        url:"https://cdn.vistahost.com.br/jardinsc/vista.imobi/fotos/23044/i18tU1fm1OB21_230446536e64b7a169.jpg",
        local:"Apartamento - Ibirapuera",
        area:"632m²",
        quartos:"4",
        banheiros:"4",
        garagem:"6",
        valor:"29.950.000,00",
        codigo:"20012",
    },
    {
        url:"https://cdn.vistahost.com.br/jardinsc/vista.imobi/fotos/16136/iv8JihoJo2671uDJ8863W_1613664d3d8de3791e.jpg",
        local:"Casa - Alto de Pinheiros",
        area:"963m²",
        quartos:"5",
        banheiros:"5",
        garagem:"6",
        valor:"32.000.000,00",
        codigo:"13114",
    },
    {
        url:"https://cdn.vistahost.com.br/jardinsc/vista.imobi/fotos/24151/iy3S96zJmX39uD6z_241516557c67fa2aea.jpg",
        local:"Casa em Condomínio - Alto de Pinheiros",
        area:"950m²",
        quartos:"4",
        banheiros:"4",
        garagem:"6",
        valor:"65.000.000,00",
        codigo:"21119",
    },
    {
        url:"https://cdn.vistahost.com.br/jardinsc/vista.imobi/fotos/23090/iYhki6002M_23090650c956c193ed.jpg",
        local:"Casa em Condomínio - Cidade Jardim",
        area:"980m²",
        quartos:"4",
        banheiros:"4",
        garagem:"4",
        valor:"18.490.000,00",
        codigo:"20058",
    },
    {
        url:"https://cdn.vistahost.com.br/jardinsc/vista.imobi/fotos/24034/i0lU20x33a26146_24034654bf3388c5a0.jpg",
        local:"Casa em Condomínio - Trancoso",
        area:"450m²",
        quartos:"3",
        banheiros:"3",
        garagem:"0",
        valor:"15.000.000,00",
        codigo:"21002",
    },
    {
        url:"https://cdn.vistahost.com.br/jardinsc/vista.imobi/fotos/17933/iN9420T24_17933632cc8cc64276.jpg",
        local:"Casa em Condomínio - Fazenda Boa Vista",
        area:"600m²",
        quartos:"5",
        banheiros:"5",
        garagem:"0",
        valor:"18.000.000,00",
        codigo:"14911",
    },
    {
        url:"https://cdn.vistahost.com.br/jardinsc/vista.imobi/fotos/21826/iOiXF6Q65d8168ql3a_21826649de8ca331b5.jpg",
        local:"Casa em Condomínio - Morumbi",
        area:"640m²",
        quartos:"6",
        banheiros:"6",
        garagem:"6",
        valor:"6.500.000,00",
        codigo:"18804",
    },
    {
        url:"https://cdn.vistahost.com.br/jardinsc/vista.imobi/fotos/18623/i2CGVx90L371t0RC964_18623637d28bae80d6.jpg",
        local:"Apartamento - Jardim Europa",
        area:"188m²",
        quartos:"1",
        banheiros:"1",
        garagem:"2",
        valor:"4.150.000,00",
        codigo:"15601",
    },
    

];



const divResultados = document.getElementById("resultados")
for (const casas of imoveis) {
    divResultados.innerHTML += `
    <div class="local col-12 col-md-4 p-2 mx-auto text-center border border-white">
        <p class="text-black">${casas.local}</p>
        <div class="conteudo  text-center">
            <img class="imagem" src="${casas.url}">
        <div class="borda border border-black">
            <div class="conteudo2 col-12 p-2 d-flex justify-content-center mx-auto">
                <div class="border border-black p-2 text-center">
                    <p class="text-black"><strong>${casas.area}</strong> Área útil</p>
                </div>
                <div class="border border-black p-2 text-center">
                    <p class="text-black"><strong>${casas.quartos}</strong>Dorms</p>
                </div>
                <div class="border border-black p-2 text-center">
                    <p class="text-black"><strong>${casas.banheiros}</strong>Suítes</p>
                </div>
                <div class="border border-black p-2 text-center">
                    <p class="text-black"><strong>${casas.garagem}</strong>Vagas</p>
                </div>
            </div>
        <div class="valorecodigo col-12">
            <p class="text-black">Valor para Comprar: <strong>R$${casas.valor}</strong></p>
            <p class="text-black">Código de Venda:<strong> ${casas.codigo}</strong></p>
            <div class="btn1 nav nav-underline">
                <a class="nav-link text-black " href="imobiliaria.js">Saiba Mais</a>
            </div>
        </div>
        </div>
        </div>
    </div>
`
}