export let option = {
    isShowForm: true,
    formSize: 'mini',
    btnLabelWidth: '100',
    column: [
        {
            prop: 'souhuo',
            formLabel: '收获',
            formLabelWidth: '100',
            type: 'select',
            dic: [
                {
                    label: '全部',
                    value: ''
                },
                {
                    label: '一个',
                    value: '1'
                },
                {
                    label: '两个',
                    value: '2'
                }
            ]
        },
        {
            prop: 'sex',
            formLabel: '性别',
            formLabelWidth: '100',
            type: 'radio',
            dic: [
                {
                    label: '男',
                    value: '1'
                },
                {
                    label: '女',
                    value: '0'
                }
            ]
        },
        {
            prop: 'hobby',
            formLabel: '爱好',
            formLabelWidth: '100',
            type: 'checkbox',
            dic: [
                {
                    label: '篮球',
                    value: '1'
                },
                {
                    label: '排球',
                    value: '2'
                },
                {
                    label: '足球',
                    value: '3'
                }
            ]
        },
        {
            prop: 'adress',
            formLabel: '地址',
            formLabelWidth: '100',
            type: 'cascader',
            dic: [
                {
                    label: '福建',
                    value: 'fujian',
                    children: [
                        {
                            label: '漳州',
                            value: 'zhangzhou'
                        },
                        {
                            label: '厦门',
                            value: 'xiamen'
                        },
                    ]
                },
                {
                    label: '浙江',
                    value: 'zhejiang',
                    children: [
                        {
                            label: '杭州',
                            value: 'hangzhou'
                        },
                        {
                            label: '绍兴',
                            value: 'shaoxing'
                        },
                    ]
                }
            ]
        }
    ]
}