// ===== Etsy POD 趋势分析应用 =====

// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

// 初始化应用
function initApp() {
    initNavigation();
    initDashboard();
    initCategoryPage();
    initStylesPage();
    initSeasonalPage();
    initCharts();
}

// ===== 导航功能 =====
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');
    const pageTitle = document.getElementById('pageTitle');
    
    const pageTitles = {
        dashboard: '仪表板',
        categories: '品类分析',
        styles: '风格趋势',
        seasonal: '季节趋势'
    };
    
    const pageSubtitles = {
        dashboard: 'Etsy POD 产品市场趋势概览',
        categories: '各品类详细数据和子品类分析',
        styles: '热门设计风格和颜色趋势',
        seasonal: '季节性热点和节日机会'
    };
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetPage = item.dataset.page;
            
            // 更新导航状态
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // 切换页面
            pages.forEach(page => page.classList.remove('active'));
            document.getElementById(targetPage).classList.add('active');
            
            // 更新标题
            pageTitle.textContent = pageTitles[targetPage];
            document.querySelector('.header-subtitle').textContent = pageSubtitles[targetPage];
        });
    });
}

// ===== 仪表板 =====
function initDashboard() {
    renderCategoryRanking();
    renderStyleRanking();
    renderGrowthRanking();
}

function renderCategoryRanking() {
    const container = document.getElementById('categoryRanking');
    const data = trendData.rankings.topCategories;
    
    container.innerHTML = data.map((item, index) => `
        <li class="ranking-item">
            <span class="ranking-position">${index + 1}</span>
            <span class="ranking-name">${item.name}</span>
            <span class="ranking-value positive">${item.value}</span>
        </li>
    `).join('');
}

function renderStyleRanking() {
    const container = document.getElementById('styleRanking');
    const data = trendData.rankings.topStyles;
    
    container.innerHTML = data.map((item, index) => `
        <li class="ranking-item">
            <span class="ranking-position">${index + 1}</span>
            <span class="ranking-name">${item.name}</span>
            <span class="ranking-value">${item.value}</span>
        </li>
    `).join('');
}

function renderGrowthRanking() {
    const container = document.getElementById('growthRanking');
    const data = trendData.rankings.fastestGrowing;
    
    container.innerHTML = data.map((item, index) => `
        <li class="ranking-item">
            <span class="ranking-position">${index + 1}</span>
            <span class="ranking-name">${item.name}</span>
            <span class="ranking-value positive">${item.value}</span>
        </li>
    `).join('');
}

// ===== 品类页面 =====
function initCategoryPage() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            showCategoryDetails(category);
        });
    });
}

function showCategoryDetails(categoryId) {
    const category = trendData.categories.find(c => c.id === categoryId);
    if (!category) return;
    
    const section = document.querySelector('.subcategory-section');
    section.querySelector('h3').textContent = `${category.name}细分趋势`;
    
    const grid = section.querySelector('.subcategory-grid');
    grid.innerHTML = category.subcategories.map(sub => `
        <div class="subcategory-item">
            <span class="subcategory-name">${sub.name}</span>
            <span class="subcategory-trend ${sub.growth >= 0 ? 'positive' : 'negative'}">
                ${sub.growth >= 0 ? '↑' : '↓'} ${Math.abs(sub.growth)}%
            </span>
            <div class="mini-bar">
                <div class="mini-fill" style="width: ${sub.popularity}%"></div>
            </div>
        </div>
    `).join('');
}

// ===== 风格页面 =====
function initStylesPage() {
    renderTagCloud();
    renderColorPalette();
    renderStyleCards();
}

function renderTagCloud() {
    const container = document.getElementById('tagCloud');
    const styles = trendData.styles;
    
    // 根据热度排序
    const sortedStyles = [...styles].sort((a, b) => b.popularity - a.popularity);
    
    container.innerHTML = sortedStyles.map((style, index) => {
        let sizeClass = 'size-sm';
        if (index < 2) sizeClass = 'size-xl';
        else if (index < 5) sizeClass = 'size-lg';
        else if (index < 8) sizeClass = 'size-md';
        
        return `<span class="tag ${sizeClass}" data-style="${style.name}">${style.name}</span>`;
    }).join('');
    
    // 添加点击事件
    container.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('click', () => {
            const styleName = tag.dataset.style;
            const styleData = styles.find(s => s.name === styleName);
            if (styleData) {
                alert(`${styleData.name}\n\n描述: ${styleData.description}\n热度: ${styleData.popularity}%\n增长: +${styleData.growth}%`);
            }
        });
    });
}

function renderColorPalette() {
    const container = document.getElementById('colorPalette');
    const colors = trendData.colors.slice(0, 6); // 显示前6个颜色
    
    container.innerHTML = colors.map(color => `
        <div class="color-item">
            <div class="color-swatch" style="background-color: ${color.hex}" title="${color.name}"></div>
            <span class="color-name">${color.name}</span>
            <span class="color-popularity">热度 ${color.popularity}%</span>
        </div>
    `).join('');
}

function renderStyleCards() {
    const container = document.getElementById('styleCards');
    const styles = trendData.styles.slice(0, 6); // 显示前6个风格
    
    container.innerHTML = styles.map(style => `
        <div class="style-card-item">
            <h4>${style.name}</h4>
            <p>${style.description}</p>
            <div class="style-stat">
                <span>热度: ${style.popularity}%</span>
                <span class="style-growth">+${style.growth}%</span>
            </div>
        </div>
    `).join('');
}

// ===== 季节页面 =====
function initSeasonalPage() {
    renderTimeline();
    renderUpcomingEvents();
}

function renderTimeline() {
    const container = document.getElementById('seasonalTimeline');
    const timeline = trendData.seasonal.timeline;
    
    container.innerHTML = timeline.map(item => `
        <div class="timeline-item ${item.active ? 'active' : ''} ${item.upcoming ? 'upcoming' : ''}">
            <div class="timeline-dot"></div>
            <span class="timeline-month">${item.month}</span>
            <span class="timeline-event">${item.event}</span>
        </div>
    `).join('');
}

function renderUpcomingEvents() {
    const container = document.getElementById('upcomingEvents');
    const events = trendData.seasonal.upcomingEvents;
    
    container.innerHTML = events.map(event => `
        <div class="event-card">
            <div class="event-icon">${event.icon}</div>
            <div class="event-name">${event.name}</div>
            <div class="event-date">${event.date}</div>
            <div class="event-countdown">${event.daysUntil}天后</div>
        </div>
    `).join('');
}

// ===== 图表初始化 =====
function initCharts() {
    initTrendChart();
    initPieChart();
    initSeasonalChart();
}

function initTrendChart() {
    const ctx = document.getElementById('trendChart');
    if (!ctx) return;
    
    const data = trendData.chartData;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [
                {
                    label: '服装',
                    data: data.datasets.apparel,
                    borderColor: '#8b5cf6',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: '#8b5cf6'
                },
                {
                    label: '家居',
                    data: data.datasets.home,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: '#3b82f6'
                },
                {
                    label: '配件',
                    data: data.datasets.accessories,
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: '#10b981'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#1a1a25',
                    titleColor: '#fff',
                    bodyColor: '#a0a0b0',
                    borderColor: '#2a2a35',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.y}%`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        color: '#606070'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        color: '#606070',
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    min: 40,
                    max: 100
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
}

function initPieChart() {
    const ctx = document.getElementById('pieChart');
    if (!ctx) return;
    
    const data = trendData.pieData;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: data.labels,
            datasets: [{
                data: data.values,
                backgroundColor: [
                    '#8b5cf6',
                    '#3b82f6',
                    '#10b981',
                    '#f59e0b',
                    '#ec4899'
                ],
                borderColor: '#0a0a0f',
                borderWidth: 3,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#a0a0b0',
                        padding: 16,
                        font: {
                            size: 12
                        },
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: '#1a1a25',
                    titleColor: '#fff',
                    bodyColor: '#a0a0b0',
                    borderColor: '#2a2a35',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.parsed}%`;
                        }
                    }
                }
            }
        }
    });
}

function initSeasonalChart() {
    const ctx = document.getElementById('seasonalChart');
    if (!ctx) return;
    
    const data = trendData.seasonal.monthlyTrends;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(d => d.month),
            datasets: [
                {
                    label: '服装',
                    data: data.map(d => d.apparel),
                    backgroundColor: '#8b5cf6',
                    borderRadius: 4
                },
                {
                    label: '家居',
                    data: data.map(d => d.home),
                    backgroundColor: '#3b82f6',
                    borderRadius: 4
                },
                {
                    label: '配件',
                    data: data.map(d => d.accessories),
                    backgroundColor: '#10b981',
                    borderRadius: 4
                },
                {
                    label: '贴纸',
                    data: data.map(d => d.stickers),
                    backgroundColor: '#f59e0b',
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    align: 'end',
                    labels: {
                        color: '#a0a0b0',
                        padding: 16,
                        font: {
                            size: 11
                        },
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: '#1a1a25',
                    titleColor: '#fff',
                    bodyColor: '#a0a0b0',
                    borderColor: '#2a2a35',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.y}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#606070'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        color: '#606070'
                    },
                    min: 0,
                    max: 100
                }
            }
        }
    });
}

// ===== 搜索功能 =====
document.querySelector('.search-box input').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase().trim();
    if (query.length < 2) return;
    
    // 在品类中搜索
    const matchedCategories = trendData.categories.filter(cat => 
        cat.name.toLowerCase().includes(query) ||
        cat.subcategories.some(sub => sub.name.toLowerCase().includes(query))
    );
    
    // 在风格中搜索
    const matchedStyles = trendData.styles.filter(style =>
        style.name.toLowerCase().includes(query) ||
        style.description.toLowerCase().includes(query)
    );
    
    // 简单显示搜索结果（实际应用中可以做更好的UI）
    if (matchedCategories.length > 0 || matchedStyles.length > 0) {
        console.log('搜索结果:', { 
            categories: matchedCategories.map(c => c.name), 
            styles: matchedStyles.map(s => s.name) 
        });
    }
});

// ===== 更新时间 =====
function updateTimestamp() {
    const now = new Date();
    const formatted = now.toISOString().split('T')[0];
    document.getElementById('updateTime').textContent = formatted;
}
updateTimestamp();
