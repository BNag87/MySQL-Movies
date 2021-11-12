require ("./db/connection");
const movieMethods = require("./movie/movie.methods")
// const { barkFilms } = require("./movie/movie.methods")
//  The above method is destructuring. Or getting individual parts out of something
const yargs = require("yargs");
const sequelize = require("./db/connection");

// console.log("\tYargs[3] provided: ", process.argv[3])
// console.log("\tYargs[4] provided: ", process.argv[4])

//need to use yargs to pass "add" from terminal
const app = () => {
    
    if (process.argv[2] === "add"){
        try{
        console.log("----→\tFiring addMovie...")
        movieMethods.addMovie({title: yargs.argv.title, actor: yargs.argv.actor})
        }
        catch (error){
            console.log("=====Error=====\n---Fired in: 'addMovie'\n--- Catch in 'app.js': \n\t"+error)
        }
    }

    else if (process.argv[2] === "barkFilms"){
            try{
            console.log("----→\tFiring barkFilms...")
            movieMethods.barkFilms()
            }
            catch (error){
                console.log("=====Error=====\n---Fired in: 'barkFilms'\n--- Catch in 'app.js': \n\t"+error)
            }
        }

    else if (process.argv[2] === "updateActor"){
            try{
            console.log("----→\tFiring updateActor...")
            movieMethods.updateActor({filter: yargs.argv.filter, update: yargs.argv.update})
            console.log("Updating film: \"",yargs.argv.filter ,"\" with actor \"",yargs.argv.update,"\"")
            }
            catch (error){
                console.log("=====Error=====\n---Fired in: 'barkFilms'\n--- Catch in 'app.js': \n\t"+error)
            }
        }

    else if (process.argv[2] === "deleteAll"){
            try{
            console.log("----→\tFiring deleteAll...")
            movieMethods.deleteAll({title: yargs.argv.title})
            }
            catch (error){
                console.log("=====Error=====\n---Fired in: 'deleteAll'\n--- Catch in 'app.js': \n\t"+error)
            }
        }

        else{
            console.log("Incorrect command. Please use [addFilm --title=\"x\" --\"actor=y\"], ['barkFilms'], ['updateActor'] or ['deleteAll']");
        }
};
// movieMethods.barkFilms() -USED TO GET METHOD OUT OF movieMethods
// barkFilms() -USED IF DESTRUCTURING HAPPENED ON #2/#3

app();