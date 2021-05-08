// npms
const fs = require('fs-extra');
const chalk = require("chalk");
const readline = require("readline-sync");
const clear = require('clear');
const { read } = require('fs-extra/lib/fs');

//graphic presentation
clear();
console.log(chalk.blue('Email Sorter by Kenoor - V1'));
console.log();
console.log(chalk.blue('# GITHUB --> @bxsic_fr'));
console.log(chalk.blue('# BIO --> dsc.bio/kenoor'));
console.log();

//Choices
console.log(chalk.magenta('1 - Auto sorter'));
console.log(chalk.magenta('2 - Self sorter (you choose the domain)'));
console.log(chalk.magenta('3 - Clear mailist (anti-duplicata)'));
const choice = readline.question('> ');
if(choice == '1' || choice == '2' || choice == '3'){
//create mail list
console.log(chalk.yellow("Type here your file path (relative path)"))
let filepath = readline.question('> ');
let mailist = fs.readFileSync(filepath, 'utf-8');
mailist = mailist.split('\r\n');
if(mailist.length < 1){
    console.log(chalk.red('Error : you do not have any mail into the list.'));
} else {
    if(choice == "1"){
    for (i = 0; i < mailist.length; i++) {
        let mail = mailist[i];
        if(mail.includes('@gmail.com')){
            let doc = 'mail-lists/gmail.com.txt';
            if(!fs.readFileSync(doc, 'utf-8').includes(mail)){
                fs.appendFile(doc, mail + "\r\n");
            } else {
                console.log(chalk.red('-> ' + mail + ' already exists into ' + doc))
            }
        } else if(mail.includes('@hotmail.com')){
            let doc = 'mail-lists/hotmail.com.txt';
            if(!fs.readFileSync(doc, 'utf-8').includes(mail)){
                fs.appendFile(doc, mail + "\r\n");
            } else {
                console.log(chalk.red('-> ' + mail + ' already exists into ' + doc))
            }
        } else if(mail.includes('@laposte.net')){
            let doc = 'mail-lists/laposte.net.txt';
            if(!fs.readFileSync(doc, 'utf-8').includes(mail)){
                fs.appendFile(doc, mail + "\r\n");
            } else {
                console.log(chalk.red('-> ' + mail + ' already exists into ' + doc))
            }
        } else if(mail.includes('@free.fr')){
            let doc = 'mail-lists/free.fr.txt';
            if(!fs.readFileSync(doc, 'utf-8').includes(mail)){
                fs.appendFile(doc, mail + "\r\n");
            } else {
                console.log(chalk.red('-> ' + mail + ' already exists into ' + doc))
            }
        } else if(mail.includes('@orange.fr')){
            let doc = 'mail-lists/orange.fr.txt';
            if(!fs.readFileSync(doc, 'utf-8').includes(mail)){
                fs.appendFile(doc, mail + "\r\n");
            } else {
                console.log(chalk.red('-> ' + mail + ' already exists into ' + doc))
            }
        } else if(!mail.includes('@')){
            let doc = 'mail-lists/NOT-EMAIL.com.txt';
            if(!fs.readFileSync(doc, 'utf-8').includes(mail)){
                fs.appendFile(doc, mail + "\r\n");
            } else {
                console.log(chalk.red('-> ' + mail + ' already exists into ' + doc))
            }
        } else {
            let doc = 'mail-lists/others.txt';
            if(!fs.readFileSync(doc, 'utf-8').includes(mail)){
                fs.appendFile(doc, mail + "\r\n");
            } else {
                console.log(chalk.red('-> ' + mail + ' already exists into ' + doc))
            }
        }
        }
        console.log(chalk.green('Saved successfuly ! All mails are sorted'))
    }//autosorter 
    else if(choice == "2"){
        let domain = readline.question('Domain (with @, example : "@gmail.com") = ');
        for (i = 0; i < mailist.length; i++) {
            let mail = mailist[i];
            if(mail.includes(domain)){
                fs.appendFile('mail-lists/' + domain + ".txt", mail + "\r\n");
            }
            }
            console.log(chalk.green('Saved successfuly ! All mails are sorted for the domain : ' + domain));
            console.log();
    } else if(choice == "3"){
            function removeDuplicates(array) {
                return array.filter((a, b) => array.indexOf(a) === b)
            };
            let doc = 'mail-lists/cleared.txt';
            mailist.forEach(mail => {
                mail = mail.toLowerCase();
            })
            let removedlist = removeDuplicates(mailist);
            for(i = 0; i < removedlist.length; i++){
                if(removedlist[i].includes('@')){
                    fs.appendFile(doc, removedlist[i] + '\r\n');
                } else {
                    console.log('-> ' + removedlist[i] + ' is not an email adress.')
                }
            }
            console.log(chalk.green('Saved successfuly ! Duplicates are removed.'));
            console.log();
    }
}
} // choice /= 1/2/3
else {
    console.log(chalk.red("Please type 1, 2 or 3..."));
    process.exit();
}