const getMeals = ()=>{
    fetch("https://backendimg.onrender.com/get_meal_submissions")
    .then(x => x.json())
    .then(y => {
        console.log(y)
        let t = document.getElementById("table")
        head = ""
        Object.keys(y.data[0]).forEach(k=>head+=`<th>${k.toUpperCase()}</th>`)
        t.innerHTML = `<tr>${head}</tr>`
        y.data.forEach(d=>{
            let row=""
            Object.keys(d).forEach(k=>row+=`<td>${d[k]}</td>`)
            t.innerHTML += `<tr>${row}</tr>`
        })
    });
} 

const getSubNewsletter = ()=>{
    fetch("https://backendimg.onrender.com/subcemails")
    .then(x => x.json())
    .then(y => {
        console.log(y)
        let t = document.getElementById("table")
        head = ""
        Object.keys(y.emails[0]).forEach(k=>head+=`<th>${k.toUpperCase()}</th>`)
        t.innerHTML = `<tr>${head}</tr>`
        y.emails.forEach(d=>{
            let row=""
            Object.keys(d).forEach(k=>row+=`<td>${d[k]}</td>`)
            t.innerHTML += `<tr>${row}</tr>`
        })
    });
} 

const getRecommendations = ()=>{
    fetch("https://backendimg.onrender.com/getmessages")
    .then(x => x.json())
    .then(y => {
        console.log(y)
        let t = document.getElementById("table")
        head = ""
        Object.keys(y.messages[0]).forEach(k=>head+=`<th>${k.toUpperCase()}</th>`)
        t.innerHTML = `<tr>${head}</tr>`
        y.messages.forEach(d=>{
            let row=""
            Object.keys(d).forEach(k=>row+=`<td>${d[k]}</td>`)
            t.innerHTML += `<tr>${row}</tr>`
        })
    });
} 