burger = document.querySelector('.burger');

function action() {
    burger.addEventListener('click', () => {
    burger.classList.toggle('burgerMove');
 });
}
action();
