module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define("User", {
        name: DataTypes.STRING,
        checkout: DataTypes.DATE,
        checkin: DataTypes.DATE,
        inventory_id: DataTypes.INTEGER
    })
    return user;
}