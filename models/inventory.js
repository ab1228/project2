module.exports = function (sequelize, DataTypes) {
    var inventory = sequelize.define("inventory", {
        car_id = DataTypes.INTEGER,
        milesDriven: DataTypes.INTEGER,
        available: DataTypes.BOOLEAN,
    }, {
            freezeTableName: true
        })
    return inventory;
}