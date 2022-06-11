module.exports = function (target, src) {
    return {
        Action: "Load",
        Target: target,
        FromFile: src
    }
}