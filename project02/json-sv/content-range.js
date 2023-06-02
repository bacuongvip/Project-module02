module.exports = (req, res, next) => {
    res.header('Access-Control-Expose-Headers', 'Content-Range')
    res.header('Content-Range', 'products 0-52/52')

    next()
}