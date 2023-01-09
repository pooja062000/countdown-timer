let element = document.querySelector('.element')

        let countTill = new Date("june 23 2023 10:00:00").getTime()

        setInterval(() => {

            let nowTime = new Date().getTime()
            let time = countTill - nowTime
            let days = Math.floor(time / (1000 * 60 * 60 * 24))
            let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
            let seconds = Math.floor((time % (1000 * 60)) / 1000)

            console.log(nowTime)

            document.querySelector('#day').innerText = days
            document.querySelector('#hour').innerText = hours
            document.querySelector('#minute').innerText = minutes
            document.querySelector('#second').innerText = seconds

            // element.innerHTML = days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds '

            if (time < 0) {
                element.innerHTML = "Time is up!!!"
            }

        }, 1000);
