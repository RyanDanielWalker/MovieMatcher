//MVP
// getting two users to match based on options chosen 
//Compile list of available streaming services
//Gather movies available from streaming services API
//Get movie information from imdb/rotten tomatoes API
//Object constructors for User 1 and User 2
//If movie gets a like from user1 and user2, movie is moved into object/array
//Display movies liked by both user1 and user2
//Display "Match" to user if same movie liked
//Stretch: be able to organize options by genre
//Stretch: be able to select which streaming service to choose from
//
// MONDAY:
// Decide on API 
//
//https://image.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg

//poster: hobbs and shaw https://image.tmdb.org/t/p/w500/qRyy2UmjC5ur9bDi3kpNNRCc5nc.jpg


user1 {
  likedMovies: []
}
user2 {
  likedMovies: []
}
matches {
  matchedMovies: []
}

apicall${ movieTitle }
return poster.jpg

movies{
  movieTitles: []
}

randomMovie(){
  //send random movie title to api call, maybe doesn't need to be random?
}

// This will allow 2 users each the chance to choose which movies they would want to watch,
// and which movies they would not want to watch, based on the movies available on selected streaming services.
// If they have both chosen the same movie they do want to watch, 
// they will get a "Match" (yes, it's Tinder for movies) 
// in an attempt to cut out the dreaded "What do you feel like watching?"   



//function to compare the two users
//
//
//
//tuesday:
// 1.click listener for yes button that also pushes movie info to user array
// 2. be able to switch users , and make sure both users start with the whole movieArray
// 3. beer