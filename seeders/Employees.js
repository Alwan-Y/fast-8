module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'Employees',
            [
                {
                    id: '1',
                    name: 'Albert',
                    email: 'albert@gmail.com',
                    phone_number: '08549446464131',
                    jobtitle: 'manager',
                    company_id: '1'
                },
                {
                    id: '2',
                    name: 'Stev',
                    email: 'Stev@gmail.com',
                    phone_number: '08549446464131',
                    jobtitle: 'director',
                    company_id: '1'
                },
                {
                    id: '3',
                    name: 'Jhon',
                    email: 'Jhon@gmail.com',
                    phone_number: '08549446464131',
                    jobtitle: 'director',
                    company_id: '2'
                },
                {
                    id: '4',
                    name: 'Lex',
                    email: 'Lex@gmail.com',
                    phone_number: '08549446464131',
                    jobtitle: 'manager',
                    company_id: '2'
                },
                {
                    id: '5',
                    name: 'Hana',
                    email: 'Hana@gmail.com',
                    phone_number: '08549446464131',
                    jobtitle: 'manager',
                    company_id: '3'
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Employees', null, {});
    },
};