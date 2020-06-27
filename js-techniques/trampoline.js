const a = x => {
    if(x > 500000) {
        console.log(x);
        return;
    }
    return ()=> a(x + 1); // you return a function, it hasn't been called yet
};

const trampoline = fn => (...args) => {
    let result = fn(...args);
    //repeatedly call the function till you hit your base case
    while (typeof result === 'function') {
        result = result();
    }

    return result;
};

const t = trampoline(a);
t(1);
