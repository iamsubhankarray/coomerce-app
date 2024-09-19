const jwt = require('jsonwebtoken');
const cookie = require("cookie-parser");

 const userAuth = (req, res, next) => {
    try {
        // Access the token from cookies
        const token = req.cookies.token;

        // Check if token exists
        if (!token) {
            return res.status(401).send("Unauthorized access: No token provided");
        }

        // Verify the token
        const verify = jwt.verify(token, "iamtheknight");

        // If verification is successful, proceed to the next middleware
        if (verify) {
            next();
        }
    } catch (error) {
        // If verification fails or any other error occurs
        res.status(401).send("Unauthorized access");
        console.log(error);
    }
};
module.exports = userAuth
