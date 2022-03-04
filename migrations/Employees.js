module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Employees', {
            id: {
                type: Sequelize.INTEGER(10),
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                unique: true,
            },
            name: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            phone_number: {
                type: Sequelize.STRING(16),
                allowNull: true,
            },
            jobtitle: {
                type: Sequelize.ENUM(["manager","director","staff"]),
                allowNull: false,
            },
            company_id: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Companies');
    },
};
