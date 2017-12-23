'use strict';

new TableSort(document.getElementById('js-sorting'));

var scroll = new SmoothScroll('a[href*="#"]');


document.getElementById('submit').addEventListener('click', function() {
    event.preventDefault();

    var regexpTel = '^[-+]?[0-9]+$',
        regexpEmail = '.+\@.+\..+',
        regexpText = '^[^0-9]+$',
        tel = document.getElementById("tel"),
        email = document.getElementById("email"),
        name = document.getElementById("name"),
        surname = document.getElementById("surname"),
        btn = document.getElementById("submit"),
        validForm = true;

    tel.style.backgroundColor = "white";
    name.style.backgroundColor = "white";
    surname.style.backgroundColor = "white";
    email.style.backgroundColor = "white";

    try {
        if(!tel.value.match(regexpTel)){
            tel.style.backgroundColor = "pink";
            validForm = false;
        }
        if(!email.value.match(regexpEmail)){
            email.style.backgroundColor = "pink";
            validForm = false;
        }
        if(!name.value.match(regexpText)){
            name.style.backgroundColor = "pink";
            validForm = false;
        }
        if(!surname.value.match(regexpText)){
            surname.style.backgroundColor = "pink";
            validForm = false;
        }

    } catch(e) {
        alert(e);
    }
    if (validForm) {
        btn.disabled = true;
        var request = new XMLHttpRequest(),
            form = document.getElementById("registration");
        request.open('GET', '', true);

        request.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                // Success!
                var resp = this.response;

                setTimeout(function () {
                    form.innerHTML = '<div class="success-alert">Вы успешно всех порвали ;)</div>';
                    btn.style.display = 'none';
                }, 2000);

            } else {
                // We reached our target server, but it returned an error

            }
        };

        request.onerror = function() {
            // There was a connection error of some sort

        };

        request.send();
    } else console.log('invalid');

    return false;
});