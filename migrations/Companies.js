module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Companies', {
            id: {
                type: Sequelize.INTEGER(10),
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                unique: true,
            },
            company_name: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            telephone_number: {
                type: Sequelize.STRING(16),
                allowNull: true,
            },
            is_active: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            address: {
                type: Sequelize.STRING(50),
                allowNull: false,
            }, 
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Companies');
    },
};
