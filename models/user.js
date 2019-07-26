module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        checkout: DataTypes.DATE,
        checkin: DataTypes.DATE,
        inventory_id: DataTypes.INTEGER,
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return user;
}