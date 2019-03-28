console.clear();
// 觀光計程車 
let tourxhr = new XMLHttpRequest();
tourxhr.open('get', 'https://data.kcg.gov.tw/dataset/be1d960a-fdad-4fcb-83c8-68414b35e37c/resource/b4ae6503-46b3-46c5-8489-d8baa2c2e27e/download/sightseeingtaxi.json', true);

tourxhr.send(null);
tourxhr.onload = function () {
    // console.log('WOuuDK')
    let str = JSON.parse(tourxhr.responseText)
    let taxiTeamLen = str.taxiTeam.length
    // let taxiName = str.taxiTeam[i].name    
    let taxiTitle = document.getElementById('taxiTitle')
    let taxinfo = document.getElementById('taxinfo')

    let tourbtnSm = document.getElementById('tourbtn-sm')
    let tourbtn = document.getElementById('tourbtn')
    tourbtn.addEventListener('click', updateList, false)
    tourbtnSm.addEventListener('click', updateList, false)
    //點擊事件
    function updateList(e) {
        let pha = ''
        let tourtable = document.getElementById('tourtable')
        if (tourtable.style.display == "none") {
            tourtable.style.display = "block"
        } else {
            tourtable.style.display = "none"
        }
        taxiTitle.innerHTML = '<tr><th scope="col">#</th><th scope="col">合法車隊名稱</th><th scope="col" class="texi-contact">連絡電話 (手機撥打市話請加區碼 07)</th></tr>'
        for (let i = 1; i < taxiTeamLen; i++) {

            pha += '<tbody><tr><th scope="row">' + (i - 1) + '</th><td>' + str.taxiTeam[i].name + '</td><td>' + str.taxiTeam[i].carTel + '</td></tr></tbody>'
        }
        taxinfo.innerHTML = pha
    }
}

// 無障礙計程車
let freexhr = new XMLHttpRequest()
freexhr.open('get', 'https://data.kcg.gov.tw/dataset/b66c782f-88bd-42aa-a4c7-ae73d8520881/resource/d8495772-4113-4ad0-a593-f5b1fd7caf0c/download/accessibletaxi.json', true);

freexhr.send(null);
freexhr.onload = function () {
    // console.log('QQII')
    let data = JSON.parse(freexhr.responseText)
    let freetaxiLen = data.taxiTeam.length

    let freeTitle = document.getElementById('freetxTitle')
    let freeinfo = document.getElementById('freetxInfo')

    let freebtnSm = document.getElementById('freebtn-sm')
    let freebtn = document.getElementById('freebtn')
    freebtn.addEventListener('click', showtoggle, false)
    freebtnSm.addEventListener('click', showtoggle, false)
    //點擊事件
    function showtoggle(e) {
        let frz = ''
        let freetable = document.getElementById('freetable')
        if (freetable.style.display == "none") {
            freetable.style.display = "block"
        } else {
            freetable.style.display = "none"
        }
        freeTitle.innerHTML = '<tr><th scope="col">#</th><th scope="col">合法車隊名稱</th><th scope="col" >連絡電話 (手機撥打市話請加區碼 07)</th></tr>'
        for (let i = 1; i < freetaxiLen; i++) {
            frz += '<tbody><tr><th scope="row">' + (i - 1) + '</th><td>' + data.taxiTeam[i].name + '</td><td>' + data.taxiTeam[i].carTel + '</td></tr></tbody>'
        }
        freeinfo.innerHTML = frz
    }
}