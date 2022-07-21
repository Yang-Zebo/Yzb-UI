// 表格表单配置
export let option = {
    isShowForm: true,
    formSize: 'mini',
    btnLabelWidth: '100',
    border: true,
    column: [
        {
            prop: 'souhuo',
            label: '收获',
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
            label: '性别',
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
            label: '爱好',
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
            label: '地址',
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

// 表格行测试数据
export let tableData = [
    {
        id: 1,
        date: '2016-05-01',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
    },
    {
        id: 2,
        date: '2016-05-02',
        name: '王小虎2',
        address: '上海市普陀区金沙江路 1517 弄',
        tag: '公司'
    },
    {
        id: 3,
        date: '2016-05-02',
        name: '王小虎3',
        address: '上海市普陀区金沙江路 1519 弄',
        tag: '家'
    },
    {
        id: 4,
        date: '2016-05-03',
        name: '王小虎4',
        address: '上海市普陀区金沙江路 1516 弄',
        tag: '公司'
    },
    {
        id: 5,
        date: '2016-05-04',
        name: '王小虎5',
        address: '上海市普陀区金沙江路 1516 弄',
        tag: '公司'
    },
    {
        id: 6,
        date: '2016-05-04',
        name: '王小虎6',
        address: '上海市普陀区金沙江路 1516 弄',
        tag: '公司'
    },
    {
        id: 7,
        date: '2016-05-05',
        name: '王小虎7',
        address: '上海市普陀区金沙江路 1516 弄',
        tag: '公司'
    },
    {
        id: 8,
        date: '2016-05-06',
        name: '王小虎8',
        address: '上海市普陀区金沙江路 1516 弄',
        tag: '公司'
    },
    {
        id: 9,
        date: '2016-05-07',
        name: '王小虎9',
        address: '上海市普陀区金沙江路 1516 弄',
        tag: '公司'
    },
    {
        id: 10,
        date: '2016-05-07',
        name: '王小虎10',
        address: '上海市普陀区金沙江路 1516 弄',
        tag: '公司'
    }
]

// 表格列测试数据
export let tableCol = [
    {
        label: 'ID',
        prop: 'id'
    },
    {
        label: '日期',
        prop: 'date',
        sort: true
    },
    {
        label: '姓名',
        prop: 'name'
    },
    {
        label: '地址',
        prop: 'address'
    },
    {
        label: '标签',
        prop: 'tag',
        slot: true
    },
    {
        label: '操作',
        prop: 'operation',
        slot: true
    }
]

// 级联选择器数据
export let cascaderOptions = [
    {
        value: 'zhinan',
        label: '指南',
        children: [
            {
                value: 'shejiyuanze',
                label: '设计原则',
                children: [
                    {
                        value: 'yizhi',
                        label: '一致'
                    },
                    {
                        value: 'fankui',
                        label: '反馈'
                    },
                    {
                        value: 'xiaolv',
                        label: '效率'
                    },
                    {
                        value: 'kekong',
                        label: '可控'
                    }
                ]
            },
            {
                value: 'daohang',
                label: '导航',
                children: [
                    {
                        value: 'cexiangdaohang',
                        label: '侧向导航'
                    },
                    {
                        value: 'dingbudaohang',
                        label: '顶部导航'
                    }
                ]
            }
        ]
    },
    {
        value: 'zujian',
        label: '组件',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout 布局'
                    },
                    {
                        value: 'color',
                        label: 'Color 色彩'
                    },
                    {
                        value: 'typography',
                        label: 'Typography 字体'
                    },
                    {
                        value: 'icon',
                        label: 'Icon 图标'
                    },
                    {
                        value: 'button',
                        label: 'Button 按钮'
                    }
                ]
            },
            {
                value: 'form',
                label: 'Form',
                children: [
                    {
                        value: 'radio',
                        label: 'Radio 单选框'
                    },
                    {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                    },
                    {
                        value: 'input',
                        label: 'Input 输入框'
                    },
                    {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                    },
                    {
                        value: 'select',
                        label: 'Select 选择器'
                    },
                    {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                    },
                    {
                        value: 'switch',
                        label: 'Switch 开关'
                    },
                    {
                        value: 'slider',
                        label: 'Slider 滑块'
                    },
                    {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                    },
                    {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                    },
                    {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                    },
                    {
                        value: 'upload',
                        label: 'Upload 上传'
                    },
                    {
                        value: 'rate',
                        label: 'Rate 评分'
                    },
                    {
                        value: 'form',
                        label: 'Form 表单'
                    }
                ]
            },
            {
                value: 'data',
                label: 'Data',
                children: [
                    {
                        value: 'table',
                        label: 'Table 表格'
                    },
                    {
                        value: 'tag',
                        label: 'Tag 标签'
                    },
                    {
                        value: 'progress',
                        label: 'Progress 进度条'
                    },
                    {
                        value: 'tree',
                        label: 'Tree 树形控件'
                    },
                    {
                        value: 'pagination',
                        label: 'Pagination 分页'
                    },
                    {
                        value: 'badge',
                        label: 'Badge 标记'
                    }
                ]
            },
            {
                value: 'notice',
                label: 'Notice',
                children: [
                    {
                        value: 'alert',
                        label: 'Alert 警告'
                    },
                    {
                        value: 'loading',
                        label: 'Loading 加载'
                    },
                    {
                        value: 'message',
                        label: 'Message 消息提示'
                    },
                    {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                    },
                    {
                        value: 'notification',
                        label: 'Notification 通知'
                    }
                ]
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                    },
                    {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                    },
                    {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                    },
                    {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                    },
                    {
                        value: 'steps',
                        label: 'Steps 步骤条'
                    }
                ]
            },
            {
                value: 'others',
                label: 'Others',
                children: [
                    {
                        value: 'dialog',
                        label: 'Dialog 对话框'
                    },
                    {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                    },
                    {
                        value: 'popover',
                        label: 'Popover 弹出框'
                    },
                    {
                        value: 'card',
                        label: 'Card 卡片'
                    },
                    {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                    },
                    {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                    }
                ]
            }
        ]
    },
    {
        value: 'ziyuan',
        label: '资源',
        children: [
            {
                value: 'axure',
                label: 'Axure Components'
            },
            {
                value: 'sketch',
                label: 'Sketch Templates'
            },
            {
                value: 'jiaohu',
                label: '组件交互文档'
            }
        ]
    }
]

// 表单列测试数据
export let formFile = {
    size: 'small',
    options: [
        {
            prop: 'name',
            label: '姓名',
            placeholder: '请输入姓名',
            rules: [
                { required: true, message: '请输入姓名', trigger: 'blur' },
                { min: 2, max: 8 ,message: '长度在2-8个字符', trigger: 'blur' },
            ]
        },
        {
            prop: 'age',
            label: '年龄',
            placeholder: '请输入年龄'
        },
        {
            prop: 'adress',
            label: '住址',
            placeholder: '请输入住址'
        },
        {
            prop: 'type',
            label: '类别',
            placeholder: '请选择',
            slot: true
        },
        {
            prop: 'sex',
            label: '性别',
            placeholder: '请选择',
            rules: [ { required: true, message: '请选择性别', trigger: 'change' }],
            slot: true
        },
        {
            prop: 'button',
            slot: true
        }
    ]
}

// 表格校验规则数据
export let formTableRules = {
    id: [
        {
            required: true,
            trigger: 'blur',
            message: '请输入'
        }
    ],
    date: [
        {
            required: true,
            trigger: 'blur',
            message: '请输入'
        }
    ],
    name: [
        {
            required: true,
            trigger: 'blur',
            message: '请输入'
        }
    ],
    address: [
        {
            required: true,
            trigger: 'blur',
            message: '请输入'
        }
    ],
    tag: [
        {
            required: true,
            trigger: 'blur',
            message: '请输入'
        }
    ]
}

// 下拉列表数据
export let selectOptions = [
    {
        label: '女',
        value: '0'
    },
    {
        label: '男',
        value: '1'
    },
    {
        label: '不明',
        value: '2'
    }
]