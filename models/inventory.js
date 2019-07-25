module.exports = function (sequelize, DataTypes) {
    var Inventory = sequelize.define("Inventory", {
        milesDriven: DataTypes.INTEGER,
        available: DataTypes.BOOLEAN,
        car_id: DataTypes.INTEGER
    }, {
            freezeTableName: true
        });


    Inventory.associate = function (models) {
        Inventory.belongsTo(models.User, {
            foreignkey: {
                allowNull: false
            }
        });
        Inventory.hasMany(models.Car, {
            foreignkey: {
                allowNull: false
            }
        })
    };
    return Inventory;
}

