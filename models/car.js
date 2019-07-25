module.exports = function(sequelize, DataTypes){
    var car = sequelize.define("Car",{
       make: DataTypes.STRING,
       model: DataTypes.STRING,
       year: DataTypes.INTEGER,
       marketCategory: DataTypes.STRING,
       vehicleSize: DataTypes.STRING,
       vehicleStyle: DataTypes.STRING
    })

    return car;
}