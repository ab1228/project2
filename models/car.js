module.exports = function(sequelize, DataTypes){
    var car = sequelize.define("Car",{
       make: DataTypes.STRING,
       model: DataTypes.STRING,
       year: DataTypes.INTEGER,
       engineFuelType: DataTypes.STRING,
       engineHP: DataTypes.INTEGER,
       engineCylinders: DataTypes.INTEGER,
       transmissionType: DataTypes.STRING,
       drivenWheels: DataTypes.STRING,
       numberOfDoors: DataTypes.INTEGER,
       marketCategory: DataTypes.STRING,
       vehicleSize: DataTypes.STRING,
       vehicleStyle: DataTypes.STRING,
       highwayMPG: DataTypes.INTEGER,
       cityMPG: DataTypes.INTEGER,
       popularity: DataTypes.INTEGER,
       msrp: DataTypes.INTEGER
    })

    return car;
}