const dummyData = {
    requestedActionOptions: ['New Employee', 'Dismissal', 'Demotion', 'Retired', 'Other'],
    positionInformation: [
        {
            id: 0,
            name: 'oldPosition',
            initialValue: '',
            label: 'Old Position #',
            type: 'text',
            associatedAction: ['New Employee', 'Dismissal'],
        },
        {
            id: 1,
            name: 'newPosition',
            initialValue: '',
            label: 'New Position #',
            type: 'text',
            associatedAction: ['New Employee', 'Demotion'],
        },
        {
            id: 2,
            name: 'incumbent',
            initialValue: '',
            label: 'Incumbent',
            type: 'text',
            associatedAction: ['New Employee', 'Dismissal', 'Retired'],
        },
        {
            id: 3,
            name: 'rate',
            initialValue: '',
            label: 'Rate',
            type: 'text',
            associatedAction: ['New Employee', 'Other'],
        },
        {
            id: 4,
            name: 'date',
            initialValue: '',
            label: 'Date',
            type: 'date',
            associatedAction: ['New Employee', 'Dismissal' ,'Other'],
        },
        {
            id: 5,
            name: 'email',
            initialValue: '',
            label: 'Email Address',
            type: 'email',
            associatedAction: ['New Employee', 'Other'],
        },
        {
            id: 6,
            name: 'test',
            initialValue: '',
            label: 'Test',
            type: 'text',
            associatedAction: ['New Employee', 'Other'],
        },
    ],
};

export default dummyData;