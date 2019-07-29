
// eslint-disable-next-line no-undef
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        checkout: DataTypes.DATE,
        checkin: DataTypes.DATE,
        inventory_id: DataTypes.INTEGER,
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
        // status: {
        //     type: Sequelize.ENUM("active", "inactive"),
        //     defaultValue: "active"
        // }

    });
    User.associate = function (models) {
        User.belongsTo(models.Inventory, {

            foreignKey: "inventory_id",
            targetKey: "id"

        })
    }
    return User;
}
