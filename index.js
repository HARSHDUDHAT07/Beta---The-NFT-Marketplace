//Get elements from the DOM
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

//Toggle open/close menu
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});
// import { Alchemy } from "alchemy-sdk";
// import { Alchemy } from "alchemy-sdk";
// Alchemy().nft.getNftsForOwner("0xshah.eth").then(console.log);

