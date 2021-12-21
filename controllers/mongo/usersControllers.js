const users = require("../../models/mongo/users.js");

exports.insert = async (req, res, next) => {
    let data = new users({
        email: "gukatza08147@gmail.com",
        name: "พุฒิพงศ์",
        lastname: "โคคา",

    });

    data.seve();
    res.status(200).json({
        message: "บันทึกข้อมูลเรียบร้อยแล้ว"
    });
}