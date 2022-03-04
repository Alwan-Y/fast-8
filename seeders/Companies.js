module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'Companies',
            [
                {
                    id: '1',
                    company_name: 'PT ABC',
                    telephone_number: '08123412312',
                    is_active: false,
                    address: "Ditinggal",
                },
                {
                    id: '2',
                    company_name: 'PT BCD',
                    telephone_number: '08213123213',
                    is_active: false,
                    address: "Ditinggal asdasd",
                },
                {
                    id: '3',
                    company_name: 'PT CDE',
                    telephone_number: '08123123123',
                    is_active: true,
                    address: "Ditinggal asdadasd",
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Companies', null, {});
    },
};