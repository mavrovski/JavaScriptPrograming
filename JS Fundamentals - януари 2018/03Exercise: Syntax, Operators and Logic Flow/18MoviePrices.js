function ticketPrice(movie, dayOfWeek) {
    let movieInLower = movie.toLowerCase()
    let dayOfWeelInLower = dayOfWeek.toLowerCase()

    let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    let movies = ['the godfather', 'schindler\'s list', 'casablanca', 'the wizard of oz']
    price = 0;

    switch (dayOfWeelInLower) {
        case days[0]:
            if (movieInLower === movies[0]) {
                price = 12;
                console.log(price)
            }
            else if (movieInLower === movies[1]) {
                price = 8.50;
                console.log(price)
            }
            else if (movieInLower === movies[2]) {
                price = 8;
                console.log(price)
            }
            else if (movieInLower === movies[3]) {
                price = 10;
                console.log(price)
            }
            else console.log('error');
            break;
        case days[1]:
            if (movieInLower === movies[0]) {
                price = 10;
                console.log(price)
            }
            else if (movieInLower === movies[1]) {
                price = 8.50;
                console.log(price)
            }
            else if (movieInLower === movies[2]) {
                price = 8;
                console.log(price)
            }
            else if (movieInLower === movies[3]) {
                price = 10;
                console.log(price)
            }
            else console.log('error');
            break;
        case days[2]:
            if (movieInLower === movies[0]) {
                price = 15;
                console.log(price)
            }
            else if (movieInLower === movies[1]) {
                price = 8.50;
                console.log(price)
            }
            else if (movieInLower === movies[2]) {
                price = 8;
                console.log(price)
            }
            else if (movieInLower === movies[3]) {
                price = 10;
                console.log(price)
            }
            else console.log('error');
            break;
        case days[3]:
            if (movieInLower === movies[0]) {
                price = 12.50;
                console.log(price)
            }
            else if (movieInLower === movies[1]) {
                price = 8.50;
                console.log(price)
            }
            else if (movieInLower === movies[2]) {
                price = 8;
                console.log(price)
            }
            else if (movieInLower === movies[3]) {
                price = 10;
                console.log(price)
            }
            else console.log('error');
            break;
        case days[4]:
            if (movieInLower === movies[0]) {
                price = 15;
                console.log(price)
            }
            else if (movieInLower === movies[1]) {
                price = 8.50;
                console.log(price)
            }
            else if (movieInLower === movies[2]) {
                price = 8;
                console.log(price)
            }
            else if (movieInLower === movies[3]) {
                price = 10;
                console.log(price)
            }
            else console.log('error');
            break;
        case days[5]:
            if (movieInLower === movies[0]) {
                price = 25;
                console.log(price)
            }
            else if (movieInLower === movies[1]) {
                price = 15;
                console.log(price)
            }
            else if (movieInLower === movies[2]) {
                price = 10;
                console.log(price)
            }
            else if (movieInLower === movies[3]) {
                price = 15;
                console.log(price)
            }
            else console.log('error');
            break;
        case days[6]:
            if (movieInLower === movies[0]) {
                price = 30;
                console.log(price)
            }
            else if (movieInLower === movies[1]) {
                price = 15;
                console.log(price)
            }
            else if (movieInLower === movies[2]) {
                price = 10;
                console.log(price)
            }
            else if (movieInLower === movies[3]) {
                price = 15;
                console.log(price)
            }
            else console.log('error');
            break;
        default:
            console.log('error')
    }


}

ticketPrice('casablanca', 'sunday')