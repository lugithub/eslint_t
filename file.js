alert('hi');

var hello_world = 'foo';

function a(x) {               /*error Function 'a' has a complexity of 3.*/
    if (true) {
        return x;
    } else if (false) {
        return x+1;
    } else {
        return 4; // 3rd path
    }
}

let foo = () => {
    if (true) {
        return x;
    } else if (false) {
        return x+1;
    } else {
        return 4; // 3rd path
    }
}