
const DEFAULT_STATE = {
    userList: [{
        id: '1',
        hoTen: 'Thanh Dat Le',
        phoneNumber: '085512123123',
        email: 'Datle@gmail.com',
    },
    {
        id: '2',
        hoTen: 'Yume Nishimiya',
        phoneNumber: '09004111996',
        email: 'yumeNishi04111996@gmailcom',
    },
    ],
    selectedUsers: null,
};

export const userReducer = (state = DEFAULT_STATE, {type, payload})=>{
    switch(type){



        default:
            return state
    };
};