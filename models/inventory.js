module.exports = function (sequelize, DataTypes) {
    var Inventory = sequelize.define("Inventory", {
        make:  {
            type: DataTypes.STRING,
            allowNull: false 
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        available: DataTypes.BOOLEAN,
        // car_id: DataTypes.INTEGER
    }, {
            freezeTableName: true
        });


    Inventory.associate = function (models) {
        Inventory.belongsTo(models.Car, {
            foreignKey: {
                allowNull: false
            }
        })
    };
    
    return Inventory;
}

