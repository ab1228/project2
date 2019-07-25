-- // "use strict";

-- // module.exports = {
-- //     up: function (queryInterface, Sequelize) {
-- //         return queryInterface.bulkInsert("users",
-- //             [
-- //                 { name: "Teddy", checkout: 080120191000, checkin: 080620190300, inventory_id: 3, createdAt: Date.now(), updatedAt: Date.now() },
-- //                 { name: "Deepali", checkout: 080220190800, checkin: 080520190700, inventory_id: 1, createdAt: Date.now(), updatedAt: Date.now() },
-- //                 { name: "Alex", checkout: 073120191100, checkin: 080420191200, inventory_id: 2, createdAt: Date.now(), updatedAt: Date.now() },
-- //                 { name: "Helen", checkout: 080520190500, checkin: 080820191030, inventory_id: 6, createdAt: Date.now(), updatedAt: Date.now() },
-- //             ],
-- //             {});
-- //     },

-- //     down: function (queryInterface, Sequelize) {
-- //         return queryInterface.bulkDelete("users", null, {});
-- //     }
-- // };

-- -----------------------------------------------------
-- Seed before using Passport/passwords
-- -- -- -- -- --- -- --- -----------------------------

-- INSERT INTO users(name, checkout, checkin, inventory_id, createdAt, updatedAt)
-- VALUES
--     ("Teddy", "2019-08-01 10:00", "2019-08-06 03:00", 3, current_time(), current_time()),
--     ("Deepali", "2019-08-02 08:00", "2019-08-05 07:00", 1, current_time(), current_time()),
--     ("Alex", "2019-07-31 11:00", "2019-08-04 12:00", 2, current_time(), current_time()),
--     ("Helen", "2019-08-05 05:00", "2019-08-08 10:30", 6, current_time(), current_time())