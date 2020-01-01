module.exports.profile = (req, res)=>{
    return res.end('<h1>User Profiles</h1>');
}

module.exports.profileDelete = (req, res)=>{
    return res.send('<h2>Press this button to delete your account from the database.</h2>');
}