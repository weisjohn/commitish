
module.exports = function() {

    var str = (~~(Math.random(0) * 1e7)).toString(16);
    if (str.length < 6) {
        str += ~~(Math.random());
    }

    return str;
}