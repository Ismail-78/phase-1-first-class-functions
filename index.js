function receivesAFunction(spy) {
    return spy();
}
function returnsANamedFunction () {
    var fn = function () {}
    return fn;
}
function returnsAnAnonymousFunction () {
    return function () {
        return "name";
    }
}