// ////////////////////////////
// Unnecessary for our project
// ///////////////////////////

// module.exports = function(sequelize, DataTypes){
//     var Car = sequelize.define("Car",{
//        make: DataTypes.STRING,
//        model: DataTypes.STRING,
//        year: DataTypes.INTEGER,
//        marketCategory: DataTypes.STRING,
//        vehicleSize: DataTypes.STRING,
//        vehicleStyle: DataTypes.STRING
//     });

//     Car.associate = function(models) {
//         Car.hasMany(models.Inventory,{
//             onDelete: "cascade"
//         });
//     };
    
//     return Car;
// }