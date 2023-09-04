console.log(process.argv);

Argu()

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

// function Argu() {
//     arguments[0] === "tata";
//     arguments[1] === "gg";
//     arguments[2] === "help";
//     console.log(arguments[1]);
//     console.log(process.argv.length);
// }