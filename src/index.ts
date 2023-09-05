console.log(process.argv);

// Argu()

function Argu() {
    if (process.argv.indexOf('--help') != -1) {
        console.log('je vais vous aider');     
    }
    else if (process.argv.indexOf('--name') != -1) {
        console.log('Bonjour ' + process.argv[process.argv.indexOf('--name') + 1] );
    }
    else {
        console.log("hello le monde");
    }
}



FuncPersonne()

function FuncPersonne() {

    interface IPersonne {
        nom : string
        prenom : string
        age : number
        sex : string
    }
    
    if (process.argv.indexOf('--name-A') != -1) {
        const p:IPersonne={nom:"rambaud",prenom:"aymeric",age:21,sex:"homme"}
        console.log("hello",p.nom,p.prenom,p.age,"ans",p.sex);
        // console.log('je vais vous aider');   
    }
    else if (process.argv.indexOf('--name-E') != -1) {
        const p_2:IPersonne={nom:"Lophriéno",prenom:"Ethane",age:18,sex:"homme"}
        console.log("hello",p_2.nom,p_2.prenom,p_2.age,"ans",p_2.sex);
        // console.log('Bonjour ' + process.argv[process.argv.indexOf('--name') + 1] );
    }
    else if (process.argv.indexOf('--name-L') != -1){
        const p_3:IPersonne={nom:"wasteur",prenom:"Logane",age:24,sex:"homme"}
        console.log("hello",p_3.nom,p_3.prenom,p_3.age,"ans",p_3.sex);
    }
    else{
        console.log('entrer un nom');
    }
}




// function Argu() {
//     arguments[0] === "tata";
//     arguments[1] === "gg";
//     arguments[2] === "help";
//     console.log(arguments[1]);
//     console.log(process.argv.length);
// }