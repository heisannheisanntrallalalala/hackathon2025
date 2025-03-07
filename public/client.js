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