console.log(`cesar navas `);

let lista = {};
function quitar(lista){
    let data = {};
    for(let id in Object.values(lista)){
        if(lista[id]!=undefined){
            data[Object.keys(lista[id])[0]] = Object.values(lista[id])[0];
        }
    }
    return data;
}
for (let i = 0; i < 10 ; i++) {
    if(i<=10){
        lista[i] = Math.trunc(Math.random()*100);
    }else{
        lista[`Identificador ${i}`] = Math.trunc(Math.random()*50);
    }  
}

let res = Object.entries(lista).map((valor,indice,array)=>{
    let obj = {};
    if(valor[1]%2==0){
        obj[valor[0]] = `El dato es: ${valor[1]} Respuesta ${valor[1]} * ${2} = ${valor[1] * 2}`;
        return obj;
    }
});

console.log(lista);
console.log(quitar(res));






// let array = [];
// array["Nombres"] = "Cesar Mauricio";
// array["Apellidos"] = "Navas calderon";
// array["Edad"] = 15;
// array["Dirrecion"] = "cra 7 #9 F-10";









// Object.values(array).forEach(filtro)


// function filtro(valor,indice,array){
//     console.log(valor);
//     console.log(indice);
//     console.log(array);
// }


// for(let [id,valor] of Object.entries(array)){
//     if(id!="Dirrecion" && id!="Edad"){
//         console.log(`${id} : ${valor}`);
//     }
// }

////////////////////////////////////////////////////////////////////////////////

// let keys = Object.entries(array);
// for (let i = 0; i < keys.length; i++) {
//     console.log(keys[i][1]);  
// }


// for(let valor of Object.values(array)){
//     console.log(valor);
// }



// Object.keys(array).forEach(filtro);

// let Animal = [];
// Animal["Felino"] = "gato";
// Animal["Canino"] = "perro";
// filtro(Animal);

// function filtro(valor,indice,lista){
//     if(typeof(valor)=="object"){
//         console.table(valor); 
//     }else if(valor!="Dirrecion" && valor!="Edad"){
//         console.log(`${valor} : ${array[valor]}`);
//         // console.log(valor);
//         // console.log(indice);
//         // console.log(array);
//     }
// }












