function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/red-character/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

//Make Aysnc, Accept time as a parameter
// invoke sleep(time) at the end of the function
// await to pause walkEast() until sleep(time) has resolved
// stop() after sleep has resolved
   async function walkEast(time) { //made the function async
        direction = 'east'
        element.src = `./assets/red-character/east.gif`
        await sleep(time) // awaits a certain amount of time walking East before returning a promise
        return stop()  // returns a promise of stopping
    }

  async function walkNorth(time) { //made function async
        direction = 'north'
        element.src = `./assets/red-character/north.gif`
        await sleep(time) // awaits a certain amount of time walking North before returning a promise
        return stop()  // returns a promise of stopping
    }

  async function walkWest(time) { //made function async
        direction = 'west'
        element.src = `./assets/red-character/west.gif`
        await sleep(time) // awaits a certain amount of time walking West before returning a promise
        return stop() // returns a promise of stopping
    }

   async function walkSouth(time) { //made function async
        direction = 'south'
        element.src = `./assets/red-character/south.gif`
        await sleep(time) // awaits a certain amount of time walking South before returning a promise
        return stop() // returns a promise of stopping
    }

        function stop() {
        direction = null
        element.src = `./assets/red-character/static.gif`
    }

   

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }
}

//define sleep function
//sleep is the equivalent to set time out
function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })  
}
