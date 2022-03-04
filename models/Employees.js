const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Employees extends Model {
        static associate(models) {
            Employees.belongsTo(models.Companies, {foreignKey: 'company_id'})
        }
    }
    Employees.init(
        {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER(10),
                autoIncrement: true,
                allowNull: false,
                max: {
                    args: [10],
                    msg: "Maximum 10 characters allowed"
                },
                min: {
                    args: [1],
                    msg: "Minimum 1 characters required"
                }
            },
            name: {
                type: DataTypes.STRING(50),
                allowNull: false,
                defaultValue: "-",
                max: {
                    args: [50],
                    msg: "Maximum 50 characters allowed"
                },
                min: {
                    args: [3],
                    msg: "Minimum 3 characters required"
                }
            },
            email: {
                type: DataTypes.STRING(255),
                allowNull: false,
                defaultValue: "-",
                max: {
                    args: [255],
                    msg: "Maximum 255 characters allowed"
                },
                min: {
                    args: [5],
                    msg: "Minimum 5 characters required"
                }
            },
            phone_number: {
                type: DataTypes.STRING(16),
                allowNull: true,
                defaultValue: null,
                max: {
                    args: [16],
                    msg: "Maximum 16 characters allowed"
                },
                min: {
                    args: [8],
                    msg: "Minimum 8 characters required"
                }
            },
            jobtitle: {
                type: DataTypes.ENUM(["manager","director","staff"]),
                allowNull: false,
                defaultValue: "staff",
            },
            company_id: {
                type: DataTypes.STRING(10),
                allowNull: false,
                defaultValue: "-",
                max: {
                    args: [10],
                    msg: "Maximum 10 characters allowed"
                },
                min: {
                    args: [1],
                    msg: "Minimum 1 characters required"
                }
            },
        },
        {
            sequelize,
            modelName: 'Employees',
        }
    );
    return Employees;
};
