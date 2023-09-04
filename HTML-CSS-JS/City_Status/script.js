function displayStats(){
    const input = document.getElementById("input")
    const city = input.options[input.SelectedIndex].value
    console.log(city)
    let population = 0,literacyRate = 0, language=''
    switch(city){
        case 'Chennai':
            population = 11933000
            literacyRate = 90.18
            language = Tamil 
            break
        case 'Mumbai':
            population = 21297000
            literacyRate = 89.21
            language = Hindi 
            break
        case 'Kolkata':
            population = 15333000
            literacyRate = 86.31
            language = Bengali
            break 
        case 'Hyderabad':
            population = 10801000
            literacyRate = 83.26
            language = Telugu
            break    
    }
    let text = `The Indian city of ${city} has a population of ${population}.
    Language spoken is ${language} and literacy rate is ${literacyRate}%.`
    document.getElementById('result').innerHTML = text
}