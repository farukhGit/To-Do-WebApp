//defining the home action
module.exports.default = (req, res)=>{
    return res.render('home', {
        title : 'defaultTitle'
    });
}
module.exports.home = (req, res)=>{
return res.render('home', {
        title : 'HomeTitle'
    });
}

module.exports.secondAction = (req, res)=>{
    return res.send('<h2>Second Action in home_controller.</h2>');
}