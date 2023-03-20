var output_text = document.querySelector('.display_joke');
var generate_btn = document.querySelector('.generate_btn');
var none = "none";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": "yIHv1qhNGwnJpw77m5tACYWdvymGmNNHOFi2gcFT"
    }
};
var apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1";

generate_btn.addEventListener("click", () => {
    styling();
    fetch(apiURL, options)
        .then((resp) => resp.json())
        .then((json) => output_text.innerHTML = json[0].joke)
        .then(() => re_style())
        .catch((error) => {
            output_text.innerHTML = "Something Went wrong!!Please check your connection or try again later";
            output_text.style.color = "red";
            re_style();
        })



});
function styling() {
    output_text.style.color = "black";
    output_text.innerHTML = "Updating.."
    generate_btn.disabled = true;
    generate_btn.textContent = "Please wait..";
}
function re_style() {
    generate_btn.disabled = false;
    generate_btn.textContent = "Tell me another Joke";
}
console.log(output_text);