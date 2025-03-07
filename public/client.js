window.onload = () => {
    /*document.getElementById("test").oninput = () => {
        console.log(document.getElementById("test").value);
    };*/

    window.smoothScroll = function(targetId) {
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    }
    
    const e = document.getElementById("test");
    e.addEventListener("keydown", (o) => {
        const value = o.code;
        if (value === "Enter") {
            console.log(document.getElementById("test").value);

            const xhr = new XMLHttpRequest();
            xhr.open("POST", "/api/test", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify({ message: document.getElementById("test").value }));

            document.getElementById("test").value = "";

            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        const data = JSON.parse(xhr.responseText);
                        document.getElementById("response").innerText += data.message + "\n";
                    } else {
                        console.error("Error:", xhr.status);
                    }
                }
            }
        }
    });
};