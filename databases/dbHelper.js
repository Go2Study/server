/**
 * Created by cinjo on 10/26/2015.
 */
var db = require('node-mysql');

var go2studyDB = new db.DB({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'go2study'
});

module.exports = {
    createTest: function(cb) {
        go2studyDB.connect(function(conn, cb) {
            cps.seq([
                function(_, cb) {
                    User.Table.create(conn, {
                        first_name: 'Hannah',
                        last_name: 'Mckay',
                        gender: 'female'
                        // ....
                    }, cb);
                },
                function(user, cb) {  // user is an object of the class User.Row
                    console.log(user.get('first_name')); // print out 'Hannah'
                    cb();
                }
            ], cb);
        }, cb);
    },
    getTest: function(cb){
        go2studyDB.connect(function(conn, cb) {
            var o;
            cps.seq([
                function(_, cb) {
                    User.Table.find(conn, 'select * from users', cb);
                },
                function(users, cb) { // users is a list of user object of the class User.Row
                    console.log(users[0]);  // print the information of the first user
                    cb();
                }
            ], cb);
        }, cb);
    },
    addTest: function(cb){
        go2studyDB.connect(function(conn, cb) {
            go2studyDB.add({
                name: 'orders',
                idFieldName: 'order_id',
                Row: {
                    getFirstOrderItem: function(conn, cb) {
                        var me = this;

                        cps.seq([
                            function(_, cb) {
                                me.linkedBy(conn, 'items', cb);
                            },
                            function(items, cb) {
                                cb(null, items[0]);
                            }
                        ], cb);
                    }
                },
                Table: {
                    createOrderUsingCoupon: function(conn, dto, coupon, cb) {
                        dto['coupon_id'] = coupon.getId();
                        this.create(conn, dto, cb);
                    }
                }
            })
                .linkedBy({
                    name: 'items',
                    key: 'order_id',
                    table: 'order_items'
                })
                .linksTo({
                    name: 'user',
                    key: 'user_id',
                    table: 'users'
                })
                .linksTo({
                    name: 'coupon',
                    key: 'coupon_id',
                    table: 'coupons'
                })
                .linksTo({
                    name: 'credit_card',
                    key: 'credit_card_id',
                    table: 'credit_cards'
                })
            ;
        }, cb);
    }
};




