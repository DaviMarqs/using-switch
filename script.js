/*  1 l.y. = 0,306601pc
    1 l.y. = 63241,1 AU
    1 l.y. = 9,5 * 10¹² usar Math.pow(10,12)
*/

let distanceLightYear = prompt("Digite a distância em anos luz");

let chosenOption = prompt("Escolha uma das opções de unidade para conversão:\n\n1- Parsec(pc)" + 
                            "\n2- Unidade astronômica(AU)" + "\n3- Quilômetros(km)\n\n(Digite o número da opção desejada)");

let chosenConversion;
let convertedValue;

switch(chosenOption){
    case "1":
        chosenConversion = "Parsec (pc)";
        convertedValue = distanceLightYear * 0.306601;
        alert("Distância em anos luz: " + distanceLightYear + "\n" + chosenConversion + ": " + convertedValue + " pc");
        break

    case "2":
        chosenConversion = "Unidade Astronômica (UA)";
        convertedValue = distanceLightYear * 63241.1;
        alert("Distância em anos luz: " + distanceLightYear +  "\n" + chosenConversion + ": " + convertedValue + " UA");
        break

    case "3":
        chosenConversion = "Quilômetros (km)"
        convertedValue = distanceLightYear *  (9.5 * Math.pow(10,12));
        alert("Distância em anos luz: " + distanceLightYear +  "\n" + chosenConversion + ": " + convertedValue + " km");
        break

    default:
        chosenOption = "Unidade não identificada: "
        convertedValue = "Conversão fora do escopo"
        alert("Distância em anos luz: " + distanceLightYear + "\n" + chosenOption + convertedValue);
}


