const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Companies extends Model {
        static associate(models) {
            Companies.hasMany(models.Employees, {foreignKey: 'company_id'})
        }
    }
    Companies.init(
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
            company_name: {
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
            telephone_number: {
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
            is_active: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            address: {
                type: DataTypes.STRING(50),
                allowNull: false,
                defaultValue: "-",
                max: {
                    args: [50],
                    msg: "Maximum 50 characters allowed"
                },
                min: {
                    args: [10],
                    msg: "Minimum 10 characters required"
                }
            },
        },
        {
            sequelize,
            modelName: 'Companies',
        }
    );
    return Companies;
};
