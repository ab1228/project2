
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
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
    });
    User.associate = function (models) {
        User.belongsTo(models.Inventory,{
            
            foreignKey: "inventory_id",
            targetKey: "id"                
            
        })
}
    return User;
}
