export let option = {
    isShowForm: true,
    formSize: 'mini',
    column: [
        {
            prop: 'name',
            formLabel: '姓名',
            formLabelWidth: '100',
            type: 'select',
            dic: [
                {
                    label: '全部',
                    value: ''
                },
                {
                    label: '首个',
                    value: '1'
                }
            ]
        }
    ]
}