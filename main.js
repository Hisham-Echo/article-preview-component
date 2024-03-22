/**
 * ## The challenge

Your challenge is to build out this article preview component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

The only JavaScript you'll need for this challenge is to initiate the share options when someone clicks the share icon.

Your users should be able to: 

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon
Want some support on the challenge? [Join our community](https://www.frontendmentor.io/community) and ask questions in the **#help** channel.
 */

let person = document.getElementById("p");
let social = document.getElementById("s");
let shareBtn = document.getElementById("switch");
// initial condition
social.style.display = "none";
console.log(window.innerWidth);

shareBtn.addEventListener("click", (e) => {
    if (social.style.display == "none") {
        // share Button
        shareBtn.style.backgroundColor = "var(--Desaturated-Dark-Blue)";
        shareBtn.children[0].style =
            "filter: brightness(5);-webkit-filter: brightness(5);";
        // person
        if (window.innerWidth <= 876) {
            person.style.display = "none";
            social.parentElement.style.backgroundColor =
                "var(--Very-Dark-Grayish-Blue)";
        }
        // Hidden overlay
        social.style.display = "flex";
    }
    // switch back
    else {
        // share Button
        shareBtn.style.backgroundColor = "var(--Light-Grayish-Blue)";
        shareBtn.children[0].style =
            "filter: brightness(1);-webkit-filter: brightness(1);";
        // Hidden overlay
        social.style.display = "none";
        // person
        person.style.display = "flex";

        social.parentElement.style.backgroundColor = "white";
        return;
    }
});
