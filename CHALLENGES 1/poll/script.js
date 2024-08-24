
const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript",
        "1: Python", 
        "2: Rust",
        "3: C++"],
    answers: new Array(4).fill(0), 
    
    registerNewAnswer(){
        let message =(`${poll.question} \n ${poll.options.join(`\n`)}\n`)
        let answer = prompt(message)

        if (answer >= 0 && answer <= 3) {
            poll.answers[answer]++
            display()
        }
        else{
            alert("Invalid answer")
        }
    }
    };


    function display() {
        for(let i=0;i<4;i++){
            console.log(` ${poll.options[i]}: ${poll.answers[i]} votes`)
        }
    }
    poll.registerNewAnswer();

