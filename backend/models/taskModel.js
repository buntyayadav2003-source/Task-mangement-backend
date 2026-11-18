const { sequelize } = require('../config/db');
const { DataTypes } = require('sequelize');

const Task = sequelize.define("Task", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    taskTitle: {
        type: DataTypes.STRING (100),
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    status: {
        type: DataTypes.ENUM('Pending', 'In Progress', 'Completed'),
        defaultValue: 'Pending'
    },

    priority: {
        type: DataTypes.ENUM('Low', 'Medium', 'High'),
        defaultValue: 'Medium'
    },

    department: {
        type: DataTypes.STRING,
        allowNull: true
    },

    startDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },

    endDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    }

}, {
    timestamps: true,
    tableName: 'tasks',
    createdAt: "created_at",
    updatedAt:"updated_at"
});

module.exports = Task;
