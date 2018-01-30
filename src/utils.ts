export const showMessage = (message: string, elemSelector: string): void => {
    var elem = document.querySelector(elemSelector);
    if (elem) elem.innerHTML = message;
};
