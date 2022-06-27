let pref_App = "[" +  "Allstar" +"]";
setTimeout(() => {
    console.info(pref_App +" Loading Project...");
}, 1000);


/*



let x = document.body;
x.style.backgroundColor="Black";
//https://www.w3schools.com/jsref/met_document_createelement.asp

*/
let cssurl = 'http://127.0.0.1:5500/style.css';
//const css_loader = document.open(cssurl)//.join(';')

const styles = [
    'color: #00FF27',
    'background: #000',
    
].join(';');
setTimeout(() => {
    console.info("%c"+pref_App +" Loading Complete", styles);
}, 5000);
setTimeout(() => {
let bodytag = document.body;
bodytag.style.backgroundColor="black";
 const btn_black = document.createElement('button', cssurl);
document.body.appendChild(btn_black);
 btn_black.setAttribute("id", "black_btn");

 document.title="my first real app";
}, 4500);