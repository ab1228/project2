"use strict";

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert("users",
            [
                { name: "Teddy", checkout: 080120191000, checkin: 080620190300, inventory_id: 3, createdAt: Date.now(), updatedAt: Date.now() },
                { name: "Deepali", checkout: 080220190800, checkin: 080520190700, inventory_id: 1, createdAt: Date.now(), updatedAt: Date.now() },
                { name: "Alex", checkout: 073120191100, checkin: 080420191200, inventory_id: 2, createdAt: Date.now(), updatedAt: Date.now() },
                { name: "Helen", checkout: 080520190500, checkin: 080820191030, inventory_id: 6, createdAt: Date.now(), updatedAt: Date.now() },
            ],
            {});
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete("users", null, {});
    }
};