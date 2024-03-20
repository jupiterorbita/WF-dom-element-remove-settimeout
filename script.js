function foo(elem) {
    elem.innerHTML = `<img src="./aaaa.png" alt="explosion">`;
    setTimeout(function () {

        elem.innerHTML = "☠️";


        setTimeout(() => {
            elem.remove();

        }, 1500);
    }, 800);
}

function resetMe() {
    location.reload();
}