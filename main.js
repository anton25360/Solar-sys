var rings= document.querySelectorAll('.ring')

function showPlutoRing(){ rings[0].style.visibility= 'visible' }
function showNeptuneRing(){ rings[1].style.visibility= 'visible' }
function showUranusRing(){ rings[2].style.visibility= 'visible' }
function showSaturnRing(){ rings[3].style.visibility= 'visible' }
function showJupiterRing(){ rings[4].style.visibility= 'visible' }
function showMarsRing(){ rings[5].style.visibility= 'visible' }
function showEarthRing(){ rings[6].style.visibility= 'visible' }
function showVenusRing(){ rings[7].style.visibility= 'visible' }
function showMercuryRing(){ rings[8].style.visibility= 'visible' }

function hideRings() {
    rings.forEach(ring => {
        ring.style.visibility= 'hidden'
})}