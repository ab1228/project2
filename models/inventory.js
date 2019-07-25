module.exports = function (sequelize, DataTypes) {
    var inventory = sequelize.define("inventory", {
        milesDriven: DataTypes.INTEGER,
        available: DataTypes.BOOLEAN,
        car_id: DataTypes.INTEGER
    }, {
            freezeTableName: true
        })
    return inventory;
}