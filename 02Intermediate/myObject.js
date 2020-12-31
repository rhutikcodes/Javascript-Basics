let myVideo={
title:'Loops in javascript',
duration:12.04,
discription:'A very short discription',
videoCreator:'Rhutik'
}

// console.log(myVideo)

// console.log(myVideo.title)


let changeVideoLength=function(myObject){

    return {
        formatOne:`Time of this video is ${myObject.duration}`,
        formatTwo:`Time of this video is ${myObject.duration +2}`
    }

}

let adOne=changeVideoLength(myVideo)
console.log(adOne);
console.log(adOne.formatOne);
console.log(adOne.formatTwo);