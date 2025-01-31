 let rdm = 1 + Math.floor(Math.random() * 50)
        let ir = document.getElementsByTagName("input")[0]
        let sr = document.getElementsByTagName("span")[0]
        let hr = document.getElementById("try")
        let guessleft = 10
        let lr = [
            "Too low, try again!",
            "Your guess is too low. Guess higher!",
            "Not quite, guess a higher number!",
            "The number is higher. Keep guessing!"
        ]
        let hir = [
            "Too high, try again!",
            "Your guess is too high. Guess lower!",
            "Not quite, guess a lower number!",
            "The number is lower. Keep guessing!"
        ]

        function fun() {
            if (isNaN(ir.value)) {
                alert("Please enter a valid number.")
                return
            }
            else if (ir.value > 50 || ir.value < 1) {
                alert("Enter a number between 1 to 50")
                return
            }

            if (ir.value < rdm) {
                let low = lr[Math.floor(Math.random() * lr.length)]
                hr.innerHTML = low
                guessleft--
                sr.innerHTML = guessleft

            }
            else if (ir.value > rdm) {
                let high = hir[Math.floor(Math.random() * hir.length)]
                hr.innerHTML = high
                guessleft--
                sr.innerHTML = guessleft
            }
            else {
                hr.innerHTML = "Woohoo! You got it! Well done! 🎉🎉"
            }

            if (guessleft <= 0) {
                hr.innerHTML = "Game Over! The correct number was " + rdm + ". 😢";
                setTimeout(() => {
                    window.location.reload()
                }, 200)
            }
        }

        function hint() {
            if (rdm >= 1 && rdm <= 15) {
                alert("Hmm... it's closer to the lower end of the scale... 🤔")
            } else if (rdm >= 16 && rdm <= 35) {
                alert("Not too high, not too low. Somewhere in between the extremes... 😏")
            } else if (rdm >= 36 && rdm <= 50) {
                alert("I’m living in the high zone, just shy of the peak! 🔥")
            }
        }
