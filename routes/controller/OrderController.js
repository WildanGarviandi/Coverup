/**
 * Created by wildangarviandi on 5/26/16.
 */
var express = require("express");
var config = require("../../config");
var router = express.Router();
var db = require('../connectDB');

router.post("/set_order_master", function (req, res) {
    res.set("Content-Type", "application/json");

    console.log("keke : ", req.body.key_code + req.body.desc);
    db.one("INSERT INTO order_status_master (order_status_id, status_name) " +
        "VALUES (${key_code},${desc});SELECT count(*) FROM order_status_master;", {
        key_code:req.body.key_code,
        desc:req.body.desc
    })
        .then(function (data) {
            if (data && data.length > 0) {
                return res.status(200).send({
                    status:"Success",
                    message:data
                });
            }
        })
        .catch(function (err) {
            return res.status(500).send({
                status:"Error",
                message:err.message
            });
        });
});

router.get("/get_list_status", function(req, res){
    res.set("Content-Type", "application/json");

    db.one("")
});

module.exports = router;
