function nowPlaying(trackInfo) {

    let trackName = trackInfo[0]
    let artistName = trackInfo[1]
    let duration = trackInfo[2]

    console.log(`Now Playing: ${artistName} - ${trackName} [${duration}]`)
}

nowPlaying(['Number One', 'Nelly', '4:09'])
