
function imprimir(frase) {
    document.write(frase);
    
}
  


function soloMinusculas(words) {
   
        words = String(words).trim(); //String manipula una cadena de texto, trim() quita los espacios a ambos lados del texto
        const regxs = {
          "lower": /^[a-z0-9 ]+$/, //array regex minusculas, mayusculas, ambas
          "upper": /^[A-Z0-9 ]+$/,
          "upperLower": /^[A-Za-z0-9 ]+$/
        }
       
        if (regxs.lower.test(words)) return '0';//test() retorna true o false si encuentra una coincidencia
        if (regxs.upper.test(words)) return '1';
        if (regxs.upperLower.test(words)) return '2';
        return -1;
      
    
    
  }



 function encriptartexto(){
    var inputTextarea1 = document.getElementById('textarea1');
        if(soloMinusculas(inputTextarea1.value)!= '0'){
            alert('Ingresa solo letras minusculas y sin acentos');
            location.reload();
        }else{

       
    
                var keys = {
                    'e' : 'enter',
                    'i' : 'imes',
                    'a'  : 'ai',
                    'o'  : 'ober',
                    'u'  : 'ufat'
                };

                var inputTextarea1 = document.getElementById('textarea1').value;
                    inputTextarea1 = inputTextarea1.replaceAll(/[eiaou]/g, v => keys[v]);//replaceAll reemplaza el primer parametro con el segundo parametro dado
                    //Cuando se utiliza un valor de búsqueda de expresiones regulares, debe ser global / /g
            
                //return inputTextarea1;

                // if(texto)[
                //     textarea1.value = 'new value'
                // ]
                //return imprimir(input);
                document.getElementById('textarea2').value = inputTextarea1 ;//muestra el resultado en textarea2
                clearInput();
            }
 }

//--------------------------------------------------------------------------------------------------------------------

function desencriptartexto(){
      
    var keys = {
        'enter' : 'e',
        'imes'  : 'i',
        'ai'    : 'a',
        'ober'  : 'o',
        'ufat'  : 'u'
    };
    //Cuando se utiliza un valor de búsqueda de expresiones regulares, debe ser global / /g
    var inputTextarea1 = document.getElementById('textarea1').value;
        inputTextarea1 = inputTextarea1.replaceAll('enter', v => keys[v])//replaceAll reemplaza el primer parametro con el segundo parametro dado
                                       .replaceAll('imes',  v => keys[v])
                                       .replaceAll('ai',    v => keys[v])
                                       .replaceAll('ober',  v => keys[v])
                                       .replaceAll('ufat',  v => keys[v]);
        
   
    document.getElementById('textarea2').value = inputTextarea1 ;//muestra el resultado en textarea2
    clearInput();
}


 
//-------------------------------------------------------------------------------------------------------------------------------------

function copiarTexto(){
    var copiarTexto = document.getElementById('textarea2');
        copiarTexto.select();
        navigator.clipboard.writeText(copiarTexto.value);

}
   

function clearInput() {
    document.getElementById('textarea1').value = '';
    
}    