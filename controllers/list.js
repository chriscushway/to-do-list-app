exports.getIndex = (req, res, next) => {
    res.render('list', {
        pageTitle: 'to do list'
    });
}