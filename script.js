function analyzeURL() {

    let url = document.getElementById("urlInput").value.trim();

    let score = 0;

    if(url === ""){

        alert("Please enter a URL.");

        return;

    }

    let lower = url.toLowerCase();

    if(!lower.startsWith("https://"))
        score += 15;

    if(lower.includes("@"))
        score += 15;

    if(lower.includes("login"))
        score += 15;

    if(lower.includes("verify"))
        score += 15;

    if(lower.includes("bank"))
        score += 15;

    if(lower.includes("free"))
        score += 15;

    if(lower.includes("gift"))
        score += 15;

    if(lower.includes(".xyz") || lower.includes(".tk"))
        score += 20;

    let ipPattern = /(\d{1,3}\.){3}\d{1,3}/;

    if(ipPattern.test(lower))
        score += 20;

    if(score > 100)
        score = 100;

    let result = document.getElementById("result");

    if(score <= 20){

        result.innerHTML = `
            <h1>🟢</h1>
            <p class="safe">SAFE</p>
            <p class="score">Risk Score : ${score}%</p>
        `;

    }

    else if(score <= 50){

        result.innerHTML = `
            <h1>🟡</h1>
            <p class="moderate">MODERATE RISK</p>
            <p class="score">Risk Score : ${score}%</p>
        `;

    }

    else{

        result.innerHTML = `
            <h1>🔴</h1>
            <p class="danger">HIGH RISK</p>
            <p class="score">Risk Score : ${score}%</p>
        `;

    }

}