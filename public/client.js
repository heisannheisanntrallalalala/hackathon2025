window.onload = () => {
    /*document.getElementById("test").oninput = () => {
        console.log(document.getElementById("test").value);
    };*/
    const e = document.getElementById("test");
    e.addEventListener("keydown", (o) => {
        const value = o.code;
        if (value === "Enter") {
            console.log(document.getElementById("test").value);
        }
    });
};



const validIngredients = [
    "eple", "appelsin", "banan", "jordbær", "blåbær", "sitron", "lime",
    "tomat", "agurk", "gulrot", "løk", "hvitløk", "potet", "brokkoli", "paprika", "spinat", "salat",
    "kylling", "kalkun", "biff", "svinekjøtt", "lammekjøtt", "laks", "torsk", "reker", "egg",
    "melk", "yoghurt", "fløte", "smør", "ost", "cottage cheese",
    "pasta", "ris", "brød", "mel", "sukker", "salt", "pepper", "olivenolje", "rapsolje",
    "bønner", "kikerter", "linser", "mais", "erter"
];