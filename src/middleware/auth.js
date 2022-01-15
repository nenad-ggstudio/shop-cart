const middlewareDecode = (req, res, next) => {
    const token = req.header('userid-key');

    if(!token){
        return res.status(400).json({
            msg: 'No token. Authorization deined'
        });
    }
    // ako token postoji, treba da se upise u req objekat da bi kontroleri imali pristup do njega

    next();
}   

module.exports = {
    middlewareDecode
}