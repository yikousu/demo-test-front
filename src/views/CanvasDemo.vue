<template>
  <div class="demo-container">
    <button @click="goBack" class="back-button">返回主页</button>
    <canvas ref="canvasRef" width="500" height="300" class="canvas"></canvas>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";

const router = useRouter();

const goBack = () => {
  router.push("/");
};

// 创建一个 ref 用于获取 canvas 元素的引用
const canvasRef = ref(null);

const drawRect = () => {
  // 它的 .value 属性才是真正的 DOM 元素
  const canvas = canvasRef.value;
  //   拿到绘图上下文
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 100, 100);
};

const drawOther = () => {
  // 它的 .value 属性才是真正的 DOM 元素
  const canvas = canvasRef.value;
  //   拿到绘图上下文
  const ctx = canvas.getContext("2d");

  // 1. 绘制直线
  ctx.beginPath();
  ctx.moveTo(50, 50); // 起点
  ctx.lineTo(150, 50); // 终点
  ctx.strokeStyle = "green";
  ctx.lineWidth = 2;
  ctx.stroke();

  // 2. 绘制三角形
  ctx.beginPath();
  ctx.moveTo(200, 50);
  ctx.lineTo(250, 100);
  ctx.lineTo(150, 100);
  ctx.closePath(); // 闭合路径
  ctx.fillStyle = "orange";
  ctx.fill();

  // 3. 绘制圆形
  ctx.beginPath();
  ctx.arc(350, 75, 40, 0, Math.PI * 2); // (x, y, 半径, 起始角, 结束角)
  ctx.fillStyle = "purple";
  ctx.fill();

  // 4. 绘制半圆
  ctx.beginPath();
  ctx.arc(100, 200, 50, 0, Math.PI); // PI 表示180度
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 4;
  ctx.stroke();

  // 5. 绘制文本
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Canvas 基础绘图", 200, 200);
};
const drawBall = () => {
  // 获取 canvas DOM 元素
  const canvas = canvasRef.value;
  // 获取 2D 渲染上下文对象，用于绘制图形
  const ctx = canvas.getContext("2d");

  // 小球的初始位置
  let x = 100;
  let y = 100;

  // 小球的移动速度（dx 表示 x 轴方向每帧移动的像素，dy 表示 y 轴方向）
  let dx = 5;
  let dy = 5;

  // 小球的半径
  const radius = 20;

  // 定义绘制小球的方法
  const drawBall = () => {
    ctx.beginPath(); // 开始一条新路径
    ctx.arc(x, y, radius, 0, Math.PI * 2); // 画一个圆形（小球）
    ctx.fillStyle = "#007bff"; // 设置填充颜色
    ctx.fill(); // 填充路径
    ctx.closePath(); // 关闭路径
  };

  // 主绘图循环，每帧调用
  const draw = () => {
    // 清空画布（避免小球残影）
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 绘制当前帧的小球
    drawBall();

    // 碰到左右边界就反向
    if (x + dx > canvas.width - radius || x + dx < radius) {
      dx = -dx;
    }

    // 碰到上下边界就反向
    if (y + dy > canvas.height - radius || y + dy < radius) {
      dy = -dy;
    }

    // 更新小球位置
    x += dx;
    y += dy;

    // 递归调用 draw 实现动画效果
    requestAnimationFrame(draw);
  };

  // 启动动画循环
  draw();
};

onMounted(() => {
  drawOther();
  //   drawBall();
  //   drawRect();
});
</script>

<style scoped>
.demo-container {
  padding: 20px;
  text-align: center;
  height: 100vh;
  /* 让容器占满整个视口高度 */
  box-sizing: border-box;
  /* 防止 padding 导致溢出 */
  position: relative;
  /* 为了定位返回按钮 */
}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 8px 15px;
  cursor: pointer;
}

h1 {
  margin-top: 60px;
  /* 避免标题和返回按钮重叠 */
}

canvas {
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}
</style>
