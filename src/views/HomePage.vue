<template>
    <div class="home-page">
        <h2>✨ 测试 Demo 主页 ✨</h2>
        <div class="nav-card">
            <nav>
                <router-link to="/demo1">
                    <button>Demo 1</button>
                </router-link>
                <router-link to="/demo2">
                    <button>摄像头预览</button>
                </router-link>
                <router-link to="/piniaDemo">
                    <button>Pinia测试</button>
                </router-link>
                <router-link to="/elementsPlusDemo">
                    <button>ElementsPlus测试</button>
                </router-link>
                <router-link to="/axiosDemo">
                    <button>AxiosDemo测试</button>
                </router-link>
            </nav>
        </div>
    </div>
</template>

<script setup>
// 主页的逻辑（如果需要）可以写在这里
</script>

<style scoped>
.home-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center;  <-- 移除，不再垂直居中整体 */
    min-height: 100vh;
    padding: 20px;
    /* 调整整体内边距 */
    box-sizing: border-box;
    background: linear-gradient(135deg, #ece9e6 0%, #ffffff 100%);
    /* 更柔和的渐变 */
    font-family: "Poppins", sans-serif;
    /* 使用更现代的字体 */
}

h1 {
    font-size: 2.8em;
    /* 略微增大 */
    color: #2c3e50;
    /* 更改为深蓝灰色 */
    margin-top: 50px;
    /* 增加顶部间距，使其下移 */
    margin-bottom: 50px;
    /* 增加与导航卡片的间距 */
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    /* 调整阴影 */
    animation: fadeInDown 1s ease-out;
    /* 添加简单的进入动画 */
}

.nav-card {
    background-color: rgba(255, 255, 255, 0.7);
    /* 半透明白色背景 */
    padding: 30px 40px;
    /* 卡片内边距 */
    border-radius: 15px;
    /* 圆角 */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    /* 增强卡片阴影 */
    backdrop-filter: blur(5px);
    /* 毛玻璃效果 (需要浏览器支持) */
    animation: fadeInUp 1s ease-out 0.5s;
    /* 添加延迟进入动画 */
    animation-fill-mode: backwards;
    /* 动画开始前保持初始状态 */
}

nav {
    display: flex;
    gap: 25px;
    /* 增大按钮间距 */
    flex-wrap: wrap;
    justify-content: center;
}

a {
    text-decoration: none;
}

button {
    padding: 14px 30px;
    /* 增大按钮 */
    font-size: 1.1em;
    /* 增大字体 */
    font-weight: 600;
    /* 加粗字体 */
    color: #fff;
    background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
    /* 按钮渐变 */
    border: none;
    border-radius: 50px;
    /* 圆角更大，胶囊形状 */
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    /* 用于对齐图标和文字 */
    align-items: center;
    gap: 8px;
    /* 图标和文字间距 */
}

button:hover {
    background-image: linear-gradient(to right, #2575fc 0%, #6a11cb 100%);
    /* 悬停渐变反向 */
    transform: translateY(-3px) scale(1.05);
    /* 上移并放大 */
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

button:active {
    transform: translateY(0) scale(1);
    /* 点击时恢复 */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* 定义动画 */
@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
