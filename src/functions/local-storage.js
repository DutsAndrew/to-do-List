export {
    checkIfStorageIsAvailable,
}

function checkIfStorageIsAvailable() {
    if (storageAvailable('localStorage')) {
        console.log('Local Storage is working');
      }
      else {
        alert("There is a problem with your browser, local storage is not accessible, and anything you create will not be saved in this session");
      }
}

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        let x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
