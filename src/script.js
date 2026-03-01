export function start() {
  bar1 = document.querySelectorAll('.comp-bar')
  console.log(bar1)
  let evmin = bar1[0]
  let evhour = bar1[1]
  let evtmr = bar1[2]
  let evmon = bar1[3]
  let evchr = bar1[4]
  let evapr = bar1[5]
  let evleap = bar1[6]

  textR = document.querySelectorAll('.event-textR')
  let txmin = textR[0]
  let txhour = textR[1]
  let txtmr = textR[2]
  let txmon = textR[3]
  let txchr = textR[4]
  let txapr = textR[5]
  let txleap = textR[6]
  let txHailey = textR[7]
  let txUniverse = textR[8]

  function updateMin(d) {
    let seconds = d.getSeconds()
    evmin.style.width = (seconds / 0.6).toString() + '%'
    txmin.innerHTML = (60 - seconds).toString() + '</span>' + ' Seconds Left'
  }

  function updateHour(d) {
    let minutes = d.getMinutes()
    evhour.style.width = (minutes / 0.6).toString() + '%'
    txhour.innerHTML = (60 - minutes).toString() + ' Minutes Left'
  }

  function updateTmr(d) {
    let minutes = d.getMinutes()
    let hours = d.getHours()
    evtmr.style.width = ((hours * 60 + minutes) / 14.4).toString() + '%'
    txtmr.innerHTML = (24 - hours).toString() + ' Hours Left'
  }

  function updateMon(d) {
    let year = d.getFullYear()
    let month = d.getMonth()
    let totalDays = new Date(year, month, 0).getDate()
    let days = d.getDate()
    evmon.style.width = ((days * 100) / totalDays).toString() + '%'
    txmon.innerHTML = (totalDays - days).toString() + ' Days Left'
  }

  function updateChr(d) {
    const chrYear = d.getFullYear()
    if (d.getMonth() === 11 && d.getDate() > 25) {
      chrYear++
    }
    let chrDay = new Date(chrYear, 11, 25)
    let timeDiff = chrDay.getTime() - d.getTime()
    let dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
    evchr.style.width = (((31536000000 - timeDiff) * 100) / 31536000000).toString() + '%'
    txchr.innerHTML = dayDiff.toString() + ' Days Left'
  }

  function updateApr() {
    Math.random()
    evapr.style.width = Math.floor(Math.random() * 100).toString() + '%'
    txapr.innerHTML = Math.floor(Math.random() * 366).toString() + ' Days Left'
  }

  function updateLeap(d) {
    let leap = false
    let year = d.getFullYear()
    if (year % 100 == 0) {
      leap = false
    } else if (year % 4 == 0) {
      if (d.getTime > Date(year, 1, 29)) {
        leap = false
      } else {
        leap = true
      }
    }

    while (!leap) {
      year++
      if (year % 100 == 0) {
        leap = false
      } else if (year % 4 == 0) {
        leap = true
      }
    }

    let leapDay = new Date(year, 1, 29)
    let timeDiff = leapDay.getTime() - d.getTime()
    let dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
    evleap.style.width = (((126230400000 - timeDiff) * 100) / 126230400000).toString() + '%'
    txleap.innerHTML = dayDiff.toString() + ' Days Left'
  }

  // let start = false

  // startbtn.addEventListener('click', function(){
  //     startbtn.style.scale = 0.08;
  //     startbtn.style.top = "-6vh";
  //     startbtn.style.backgroundColor = "#DEDEDE"
  //     startbtn.style.border = "0.5rem #DEDEDE solid"
  //     console.log(startbtn.style.scale)
  // })

  const HALLEY_LAST_RETURN = new Date('1986-02-09T00:00:00Z')
  const HALLEY_ORBIT_YEARS = 75.32 // average orbital period
  function updateHalley(d) {
    const nextReturn = getNextHalleyReturn(d)

    const diffMs = nextReturn - d
    const daysLeft = Math.ceil(diffMs / (1000 * 60 * 60 * 24))

    txHailey.innerHTML = `${daysLeft} Days Left`
  }

  function getNextHalleyReturn(now) {
    let returnDate = new Date(HALLEY_LAST_RETURN)

    while (returnDate <= now) {
      returnDate = new Date(
        returnDate.getTime() + HALLEY_ORBIT_YEARS * 365.25 * 24 * 60 * 60 * 1000,
      )
    }

    return returnDate
  }

  const UNIVERSE_DEATH_YEARS = 1e100
  const DAYS_PER_YEAR = 365.25
  const TOTAL_UNIVERSE_DAYS = UNIVERSE_DEATH_YEARS * DAYS_PER_YEAR

  const UNIVERSE_START_MS = Date.now()

  function updateUniverseDeath(d) {
    const elapsedMs = d.getTime() - UNIVERSE_START_MS
    const elapsedDays = elapsedMs / 86400000

    const remainingDays = TOTAL_UNIVERSE_DAYS - elapsedDays

    const logDays = Math.log10(remainingDays).toFixed(2)

    txUniverse.innerHTML = `~10<sup>${logDays}</sup> Days Left`
  }

  setInterval(() => {
    const d = new Date()
    updateMin(d)
    updateHour(d)
    updateTmr(d)
    updateMon(d)
    updateChr(d)
    updateApr()
    updateLeap(d)
    updateHalley(d)
    updateUniverseDeath(d)
  }, 1000)
}
