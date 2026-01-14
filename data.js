// ===== Etsy POD 趋势数据 =====

const trendData = {
    // 品类数据
    categories: [
        {
            id: 'apparel',
            name: 'T恤设计',
            icon: '👕',
            growth: 23,
            monthlyVolume: '12.5K',
            popularity: 85,
            subcategories: [
                { name: '图案T恤', growth: 28, popularity: 90 },
                { name: '文字T恤', growth: 18, popularity: 75 },
                { name: '复古风T恤', growth: 35, popularity: 68 },
                { name: '极简T恤', growth: 22, popularity: 82 }
            ]
        },
        {
            id: 'hoodie',
            name: '连帽卫衣',
            icon: '🧥',
            growth: 18,
            monthlyVolume: '8.2K',
            popularity: 72,
            subcategories: [
                { name: '图案卫衣', growth: 20, popularity: 78 },
                { name: '纯色定制', growth: 12, popularity: 65 }
            ]
        },
        {
            id: 'mug',
            name: '马克杯',
            icon: '☕',
            growth: 15,
            monthlyVolume: '9.8K',
            popularity: 78,
            subcategories: [
                { name: '搞笑文字杯', growth: 25, popularity: 85 },
                { name: '职业主题杯', growth: 18, popularity: 72 },
                { name: '宠物照片杯', growth: 42, popularity: 65 }
            ]
        },
        {
            id: 'sticker',
            name: '贴纸',
            icon: '🏷️',
            growth: 32,
            monthlyVolume: '15.2K',
            popularity: 88,
            subcategories: [
                { name: '可爱卡通贴纸', growth: 38, popularity: 92 },
                { name: '励志文字贴纸', growth: 28, popularity: 78 },
                { name: '植物花卉贴纸', growth: 35, popularity: 85 }
            ]
        },
        {
            id: 'poster',
            name: '海报/艺术打印',
            icon: '🖼️',
            growth: 20,
            monthlyVolume: '7.5K',
            popularity: 68,
            subcategories: [
                { name: '极简线条画', growth: 28, popularity: 82 },
                { name: '复古海报', growth: 22, popularity: 75 },
                { name: '数字插画', growth: 35, popularity: 70 }
            ]
        },
        {
            id: 'tote',
            name: '帆布包',
            icon: '👜',
            growth: 25,
            monthlyVolume: '6.3K',
            popularity: 65,
            subcategories: [
                { name: '文艺插画包', growth: 30, popularity: 72 },
                { name: '环保标语包', growth: 28, popularity: 68 }
            ]
        },
        {
            id: 'phone-case',
            name: '手机壳',
            icon: '📱',
            growth: 12,
            monthlyVolume: '5.8K',
            popularity: 58,
            subcategories: [
                { name: '艺术设计壳', growth: 15, popularity: 62 },
                { name: '个性定制壳', growth: 18, popularity: 55 }
            ]
        },
        {
            id: 'pet',
            name: '宠物用品',
            icon: '🐕',
            growth: 45,
            monthlyVolume: '4.2K',
            popularity: 55,
            subcategories: [
                { name: '宠物服装', growth: 52, popularity: 60 },
                { name: '宠物项圈', growth: 38, popularity: 50 }
            ]
        }
    ],

    // 设计风格数据
    styles: [
        { name: '极简主义', popularity: 92, growth: 18, description: '简洁线条、大量留白、单色或双色设计' },
        { name: '复古怀旧', popularity: 85, growth: 22, description: '80/90年代元素、做旧效果、复古配色' },
        { name: '可爱卡通', popularity: 88, growth: 28, description: '萌系插画、圆润线条、明快色彩' },
        { name: '手写字体', popularity: 78, growth: 15, description: '手写风格文字、书法元素、个性签名' },
        { name: '自然植物', popularity: 75, growth: 25, description: '花卉、叶子、自然元素、有机形状' },
        { name: '几何图形', popularity: 70, growth: 12, description: '抽象几何、规则图案、对称设计' },
        { name: '波西米亚', popularity: 65, growth: 20, description: '民族风、波西米亚图案、流苏元素' },
        { name: '赛博朋克', popularity: 58, growth: 35, description: '霓虹色彩、科技感、未来主义' },
        { name: '水彩风格', popularity: 62, growth: 18, description: '水彩渲染、柔和色彩、艺术感' },
        { name: '线条艺术', popularity: 72, growth: 20, description: '单线描绘、连续线条、简约人像' }
    ],

    // 流行颜色
    colors: [
        { name: '薰衣草紫', hex: '#B57EDC', popularity: 88 },
        { name: '珊瑚橙', hex: '#FF7F50', popularity: 82 },
        { name: '鼠尾草绿', hex: '#9DC183', popularity: 78 },
        { name: '奶油白', hex: '#FFFDD0', popularity: 75 },
        { name: '焦糖棕', hex: '#C68E17', popularity: 72 },
        { name: '天空蓝', hex: '#87CEEB', popularity: 70 },
        { name: '玫瑰粉', hex: '#FF66B2', popularity: 68 },
        { name: '深邃黑', hex: '#1a1a1a', popularity: 85 },
        { name: '米色', hex: '#F5F5DC', popularity: 65 },
        { name: '森林绿', hex: '#228B22', popularity: 62 },
        { name: '落日红', hex: '#E75480', popularity: 58 },
        { name: '海军蓝', hex: '#000080', popularity: 55 }
    ],

    // 季节性数据
    seasonal: {
        timeline: [
            { month: '1月', event: '新年', active: true },
            { month: '2月', event: '情人节', upcoming: true },
            { month: '3月', event: '春季', active: false },
            { month: '4月', event: '复活节', active: false },
            { month: '5月', event: '母亲节', active: false },
            { month: '6月', event: '父亲节', active: false },
            { month: '7月', event: '夏季', active: false },
            { month: '8月', event: '返校季', active: false },
            { month: '9月', event: '秋季', active: false },
            { month: '10月', event: '万圣节', active: false },
            { month: '11月', event: '感恩节', active: false },
            { month: '12月', event: '圣诞节', active: false }
        ],
        upcomingEvents: [
            { name: '情人节', date: '2月14日', daysUntil: 31, icon: '💕' },
            { name: '春季系列', date: '3月1日', daysUntil: 46, icon: '🌸' },
            { name: '复活节', date: '4月20日', daysUntil: 96, icon: '🐰' },
            { name: '母亲节', date: '5月11日', daysUntil: 117, icon: '💐' }
        ],
        monthlyTrends: [
            { month: '1月', apparel: 65, home: 70, accessories: 55, stickers: 80 },
            { month: '2月', apparel: 75, home: 85, accessories: 70, stickers: 90 },
            { month: '3月', apparel: 70, home: 65, accessories: 60, stickers: 75 },
            { month: '4月', apparel: 68, home: 72, accessories: 65, stickers: 78 },
            { month: '5月', apparel: 80, home: 90, accessories: 75, stickers: 85 },
            { month: '6月', apparel: 85, home: 75, accessories: 80, stickers: 70 },
            { month: '7月', apparel: 90, home: 60, accessories: 85, stickers: 65 },
            { month: '8月', apparel: 75, home: 80, accessories: 70, stickers: 88 },
            { month: '9月', apparel: 70, home: 75, accessories: 65, stickers: 82 },
            { month: '10月', apparel: 85, home: 88, accessories: 90, stickers: 95 },
            { month: '11月', apparel: 80, home: 85, accessories: 88, stickers: 90 },
            { month: '12月', apparel: 95, home: 95, accessories: 92, stickers: 88 }
        ]
    },

    // 排行榜数据
    rankings: {
        topCategories: [
            { name: '贴纸', value: '+32%' },
            { name: '帆布包', value: '+25%' },
            { name: 'T恤设计', value: '+23%' },
            { name: '海报打印', value: '+20%' },
            { name: '连帽卫衣', value: '+18%' }
        ],
        topStyles: [
            { name: '极简主义', value: '92%' },
            { name: '可爱卡通', value: '88%' },
            { name: '复古怀旧', value: '85%' },
            { name: '手写字体', value: '78%' },
            { name: '自然植物', value: '75%' }
        ],
        fastestGrowing: [
            { name: '宠物用品', value: '+45%' },
            { name: '可爱卡通贴纸', value: '+38%' },
            { name: '复古风T恤', value: '+35%' },
            { name: '赛博朋克风格', value: '+35%' },
            { name: '植物花卉贴纸', value: '+35%' }
        ]
    },

    // 趋势图表数据
    chartData: {
        labels: ['8月', '9月', '10月', '11月', '12月', '1月'],
        datasets: {
            apparel: [65, 70, 85, 80, 95, 88],
            home: [60, 75, 88, 85, 95, 82],
            accessories: [55, 65, 90, 88, 92, 78]
        }
    },

    // 饼图数据
    pieData: {
        labels: ['服装类', '贴纸文具', '家居装饰', '配件类', '其他'],
        values: [30, 25, 20, 15, 10]
    }
};

// 导出数据（如果使用模块）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = trendData;
}
