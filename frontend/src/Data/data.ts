export const friends = [
    {id: '1', name: 'Azim'},
    {id: '2', name: 'Alok'},
    {id: '3', name: 'Lakshith'},
    {id: '4', name: 'Huzair'},
    {id: '5', name: 'deepak'},
    {id: '6', name: 'Samad'},
    {id: '7', name: 'Adnaan'},
]

export const groups = [
    {id: '1', grp_name: 'Goa Trip'},
    {id: '2', grp_name: 'Roomate'},
    {id: '3', grp_name: 'Office lunch'},
    {id: '4', grp_name: 'Road trip'},
    {id: '5', grp_name: 'Family expenses'},

]

export const users = [
    {
        id: '1',
        email: 'azimadamani.01@gmai.com',
        password: 'password',
        name: 'Azim Damani',
        phone_no: '9985700412',
        friends: ['2', '3', '4'], // friends id,
        groups: ['1', '2', '3'],
        total_balance: '2345',
        you_owe: '989',
        owes_you: '1276',
    }
]

export const group = [
    {
        id :'1',
        grp_name: 'goa',
        members: ['1', '2', '3', '4'],
        transactions: [
            {
                transaction_id: '1',
                date: '27-12-2024',
                title: 'breakfast',
                paid_by: ['1', '2'], // members id
                split_method: 'equally',
                amount: '1234',
                shares: [
                    {
                        member_id: '1',
                        amount_to_recieve: '123',
                        amount_to_give: '1234',
                    },
                    {
                        member_id: '2',
                        amount_to_recieve: '123',
                        amount_to_give: '1234',
                    },
                    {
                        member_id: '3',
                        amount_to_recieve: '123',
                        amount_to_give: '1234',
                    }
                ]
            },
            {
                transaction_id: '2',
                date: '27-12-2024',
                title: 'Dinner',
                paid_by: ['3'], // members id
                split_method: 'unequally',
                amount: '2345',
                shares: [
                    {
                        member_id: '1',
                        amount_to_recieve: '123',
                        amount_to_give: '1234',
                    },
                    {
                        member_id: '2',
                        amount_to_recieve: '123',
                        amount_to_give: '1234',
                    },
                    {
                        member_id: '3',
                        amount_to_recieve: '123',
                        amount_to_give: '1234',
                    }
                ]
            }
        ]
    }
]