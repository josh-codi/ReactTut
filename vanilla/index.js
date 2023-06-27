let app = document.getElementById('app')
let obj = document.getElementById('obj')
let rect = app.getBoundingClientRect()
let hnd = document.getElementById('hnd')


function disBtnCor (cor1, cor2){
    return Math.sqrt((cor2[0]-cor1[0])*(cor2[0]-cor1[0]) + (cor2[1]-cor1[1])*(cor2[1]-cor1[1]))
}

function getAngle (d, r1, r2){
    let num = (r1*r1) + (r2*r2) - (d*d)
    let denum = 2*r1*r2
    let ans = Math.acos(num/denum)

    return ans*180/3.142857142857143

}
let cor = []

window.addEventListener('click', (e)=>{
    if(cor.length<3){
        obj.style.left = (hnd.offsetLeft - 10)+ 'px'
        obj.style.top = (hnd.offsetTop - 10)+ 'px'
        // console.log(e.offsetX, e.offsetY)

        cor.push([e.clientX, e.clientY])
    }else{
        let d = (disBtnCor(cor[0], cor[1])).toFixed(3)
        let r1 = (disBtnCor(cor[0], cor[2])).toFixed(3)
        let r2= (disBtnCor(cor[1], cor[2])).toFixed(3)

        let currentAlt = cor[2][1]
        let initAlt = cor[0][1]
        let desAlt = cor[1][1]
        console.log(currentAlt, initAlt, desAlt)

        let angle = getAngle(d, r1, r2)
        if(initAlt < currentAlt && initAlt < desAlt){
            angle = angle -60
            console.log('here')
        }
        else if(initAlt < currentAlt){
            angle = angle-30
            console.log('jfkd')
        }
        else if(initAlt > currentAlt && desAlt < initAlt){
            angle = angle+30
        }
        console.log('checking', initAlt, currentAlt, desAlt)
        hnd.style.transform = `rotate(${angle}deg)`
        console.log(d, r1, r2, angle)
    }
})

document.addEventListener('click', (event) => {
    if(cor.length < 1){
        const x = event.clientX;
        const y = event.clientY;
        const stickX = hnd.getBoundingClientRect().x;
        const stickY = hnd.getBoundingClientRect().y;
        const radians = Math.atan2(y - stickY, x - stickX);
        const degrees = radians * 180 / Math.PI;
        hnd.style.transform = `rotate(${degrees}deg)`;}
        // hnd.classList.add('rotate');
        // hnd.style.setProperty('--angle', `${degrees}deg`);
});



function getAngle2 (d, r1, r2){
    let avR = (r1+r2)/2
    return (2 * Math.asin(d/(2*avR)) * (180/(22/7))).toFixed(3)
}

function getAngle3 (d, r1, r2){
    let t = r2/d
    return Math.asin(t)
}