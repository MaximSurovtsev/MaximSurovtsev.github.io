document.addEventListener('DOMContentLoaded', function() {
    var flagBtn = document.getElementById('flag-btn');
    var langModal = document.querySelector('.flags_modal');
    var header = document.querySelector('.wrapper');
    var recovery = document.querySelector('.recovery');
    var passLogTitle = document.querySelector('.js-password-login-title');
    var email = document.querySelector('.email');
    var imei = document.querySelector('.imei');
    var demo = document.querySelector('.demo');
    var form = document.querySelector('.callback');
    var passLog = document.querySelector('.js-password-login-text');
    var resets = document.querySelectorAll('.reset');

    var buttonsList = {};
    var overlaysList = {};
    var buttons = document.querySelectorAll(".button");
    var modals = document.querySelectorAll(".modal");

    for (var i = buttons.length - 1; i >= 0; i--) {
        if (buttonsList[buttons[i].dataset.open] == undefined) {
            buttonsList[buttons[i].dataset.open] = [buttons[i]];
        } else {
            buttonsList[buttons[i].dataset.open].push(buttons[i]);
        }
    }

    for (var i = modals.length - 1; i >= 0; i--) {
        overlaysList[modals[i].dataset.modal] = modals[i];
    }
    (function() {
        var _loop = function _loop(key) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = buttonsList[key][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var button = _step.value;

                    button.addEventListener('click', function(e) {
                        overlaysList[key].style.display = 'flex';
                        setTimeout(function() {
                            overlaysList[key].classList.add('modal-overlay__open');
                        }, 10);
                    });
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            overlaysList[key].addEventListener('click', function(e) {
                if (e.target == overlaysList[key]) {
                    overlaysList[key].classList.add('modal-overlay__close');
                    setTimeout(function() {
                        overlaysList[key].style.display = 'none';
                        overlaysList[key].classList.remove('modal-overlay__close');
                        overlaysList[key].classList.remove('modal-overlay__open');
                    }, 100);
                }
            });
        };

        for (var key in buttonsList) {
            _loop(key);
        }
    })();
    // _____________________
    function isDescendant(parent, child) {
        var node = child;
        while (node != null) {
            if (node == parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }

    function showModal() {
        var posx = flagBtn.getBoundingClientRect().x;
        var width = flagBtn.clientWidth;
        var modalWidth = langModal.offsetWidth;
        langModal.style.left = posx + width / 2 - modalWidth / 2 + 'px';
        console.log('123');
    }

    window.addEventListener('resize', function() {
        showModal();
    });
    // _____________________
    document.body.addEventListener('click', function(e) {
        if (!isDescendant(flagBtn, e.target) && !isDescendant(langModal, e.target) && langModal.classList.contains("visibity")) {
            langModal.classList.remove('opacity');
            setTimeout(function() {
                langModal.classList.remove('visibity');
            }, 10);
        }
    });
    flagBtn.addEventListener('click', function() {
        if (langModal.classList.contains("visibity")) {
            langModal.classList.remove('opacity');
            setTimeout(function() {
                langModal.classList.remove('visibity');
            }, 10);
        } else {
            // showModal();
            var posx = flagBtn.getBoundingClientRect().left;
            var width = flagBtn.clientWidth;
            var modalWidth = langModal.offsetWidth;
            langModal.style.left = posx + width / 2 - modalWidth / 2 + 'px';
            console.log(flagBtn.getBoundingClientRect().x + 'px');
            console.log(flagBtn.getBoundingClientRect().left);
            langModal.classList.add('visibity');
            langModal.classList.add('opacity');
        }
    });

    recovery.addEventListener('click', function() {
        if (email.getAttribute('type') == 'hidden') {
            recovery.textContent = recovery.textContent.slice(0, -5) + 'IMEI';
            passLogTitle.textContent = passLogTitle.textContent.slice(0, -6) + 'ю почту';
            email.setAttribute('type', 'text');
            imei.setAttribute('type', 'hidden');
        } else {
            recovery.textContent = recovery.textContent.slice(0, -4) + 'Email';
            passLogTitle.textContent = passLogTitle.textContent.slice(0, -7) + 'й IMEI';
            email.setAttribute('type', 'hidden');
            imei.setAttribute('type', 'text');
        }
    });
    (function() {
        var _loop2 = function _loop2(r) {
            r.addEventListener('click', function() {
                var t = passLog.textContent;
                passLog.textContent = r.getAttribute('data-reset') == 'password' ? t.slice(0, -6) + "пароля" : t.slice(0, -6) + "логина";
            });
        };

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = resets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var r = _step2.value;

                _loop2(r);
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
    })();
    demo.addEventListener('click', function() {
        if (form['Login'].value == 'demo') {
            demo.textContent = 'Демо-вход';
            form['Login'].value = '';
            form['Password'].value = '';
        } else {
            demo.textContent = 'Сброс';
            form['Login'].value = 'demo';
            form['Password'].value = 'password';
        }
    });
    var successModal = document.querySelector('.modal-overlay__success');
    var failureModal = document.querySelector('.modal-overlay__failure');
    failureModal.addEventListener('click', function(e) {
        if (e.target == failureModal) {
            failureModal.classList.add('modal-overlay__close');
            setTimeout(function() {
                failureModal.style.display = 'none';
                failureModal.classList.remove('modal-overlay__close');
                failureModal.classList.remove('modal-overlay__open');
            }, 100);
        }
    });
    // Функция удачного ответа сервера
    var success = function success() {
        successModal.style.display = 'flex';
        setTimeout(function() {
            successModal.classList.add('modal-overlay__open');
        }, 10);
        setTimeout(function() {
            successModal.classList.add('modal-overlay__close');
            setTimeout(function() {
                successModal.style.display = 'none';
                successModal.classList.remove('modal-overlay__close');
                successModal.classList.remove('modal-overlay__open');
            }, 100);
        }, 700);
    };
    // Функция неудачного ответа сервера
    var failure = function failure() {
        failureModal.style.display = 'flex';
        setTimeout(function() {
            failureModal.classList.add('modal-overlay__open');
        }, 10);
    };
    var cookieButton = document.querySelector('.basic-btn__cookie');
    var cookie = document.querySelector('.cookie');
    cookieButton.addEventListener('click', function(e) {
        e.preventDefault();
        cookie.classList.add('modal-overlay__close');
        setTimeout(function() {
            cookie.style.display = 'none';
            cookie.classList.remove('modal-overlay__close');
        }, 300);
    });
});