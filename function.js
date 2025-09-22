function generatePassword() {
    // Get user inputs
    var name = "Alen";
    var bday = "2001";
    var symbol = "#";
    var hobby = "Reading";

    const nameInput = document.getElementById("name").value.trim();
    const bdayInput = document.getElementById("birthyear").value.trim();
    const symbolInput = document.getElementById("symbol").value.trim();
    const hobbyInput = document.getElementById("hobby").value.trim();
    
    if (nameInput) {
        name = nameInput.replace(/\s+/g, '');
    }
    if (bdayInput) {
        const year = parseInt(bdayInput, 10);
        if (year >= 1950 && year <= 2025) {
            bday = year.toString();
        } else {
            bday = "2001";
        }
    }
    if (symbolInput && /^[^a-zA-Z0-9\s]+$/.test(symbolInput))
        symbol = symbolInput;
    else
        symbol = "#";

    if (hobbyInput)
        hobby = hobbyInput.replace(/\s+/g, '');

    // Clear previous outputs
    var outputList = document.querySelector(".output");
    outputList.innerHTML = "";

    // Generate password list
    let passwords = [];

    // Simple combos
    passwords.push(name + symbol + bday);
    passwords.push(hobby + bday + symbol);
    passwords.push(name.charAt(0).toUpperCase() + hobby + symbol + bday.slice(-2));

    // Fancy mixes
    passwords.push(symbol + name.toLowerCase() + hobby.charAt(0).toUpperCase() + bday);
    passwords.push(name.slice(-2) + hobby + symbol.repeat(2) + bday);
    passwords.push(hobby.toUpperCase() + symbol + bday + name);

    // Random shuffly thing for extra spice
    let allChars = name + hobby + bday + symbol;
    let shuffled = allChars.split('').sort(() => 0.5 - Math.random()).join('');
    passwords.push(shuffled);

    // Populate into HTML list
    passwords.forEach(pw => {
        let li = document.createElement("li");
        li.textContent = pw;
        outputList.appendChild(li);
    });
}