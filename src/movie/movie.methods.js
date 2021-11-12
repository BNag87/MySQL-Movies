//TO DO TODAY! 
//-FINISH CRUD OPERATIONS
//-GET A FOREIGN KEY TO WORK SOMEHOW WITH ANOTHER TABLE
//-ADD A USER TABLE, CONNECTED TO MOVIES, TO INDICATE WHO ADDED THAT RECORD

const Movie = require("./movie.model");

const addMovie = async (movieObj) => {
    // TO ADD A MOVIE: 
    //      addMovie ({title: "filmA", actor: "actorA"})
    // Use the above in the app.js file
    //!Dont forget to use yargs to pass data!
    try{
        console.log("\tBeginning Movie.sync...")
            await Movie.sync(); //creates the table
        console.log("\tSync done!")
        console.log("\tBeginning Movie.create(movieObj)...")
            await Movie.create(movieObj); //creates a record in the table
        console.log("Created a movie!")
    } catch(error) {
        console.log("=====Error=====\n---Fired in: 'addMovie'\n--- In file: 'movie.methods.ks': \n\t"+error)
    }
}

const barkFilms = async() =>{
try{
    const showAllMovies = await Movie.findAll();
    console.log("All films: ",  JSON.stringify(showAllMovies, null, 2));
}catch(error){
    console.log("=====Error=====\n---Fired in: 'barkFilms'\n--- In file: 'movie.methods.js': \n\t"+error)
}

}

const updateActor = async(movieObj) =>{
    try{
        //pass yargs as fields to update
        console.log("=====================================================>MovieObject:", movieObj)
        await Movie.update({actor: movieObj.update}, {where: {title: movieObj.filter}})
        
        }catch(error){
        console.log("=====Error=====\n---Fired in: 'updateActor'\n--- In file: 'movie.methods.js': \n\t"+error)
    }
    
    }

const deleteAll = async(movieObj) =>{
    try{
        //pass yargs as fields to update
        const showAllMovies = await Movie.destroy({where: {title: movieObj.title}})
        console.log("Movie (",movieObj.title,") was destroyed.");
    }catch(error){
            console.log("=====Error=====\n---Fired in: 'deleteAll'\n--- In file: 'movie.methods.js': \n\t"+error)
        }
        
        }

module.exports = {barkFilms, addMovie, updateActor, deleteAll}

