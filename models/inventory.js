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


   
    
    return Inventory;
}

