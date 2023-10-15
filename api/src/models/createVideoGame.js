const {DataTypes}= require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Videogame',{
        id:{type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4},
        name:{type: DataTypes.STRING, allowNull: false},
        description:{type: DataTypes.TEXT, allowNull: false},
        platforms:{type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false, defaultValue: [],},
        image:{type: DataTypes.STRING, allowNull: false},
        released:{type: DataTypes.DATEONLY, allowNull: false},
        rating:{type: DataTypes.FLOAT, allowNull: false},
        createdInDb:{type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true}

    },
    {timestamps: false})
};