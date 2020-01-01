//defining the home action
module.exports.home = (req, res)=>{
    return res.send('<h1>Figure out how to display an html page here.</h1>')
}

module.exports.secondAction = (req, res)=>{
    return res.send('<h2>Second Action in home_controller.</h2>');
}