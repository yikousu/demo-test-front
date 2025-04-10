<template>
  <div class="demo-container">
    <button @click="goBack" class="back-button">返回主页</button>
    <h2>🎥 摄像头预览</h2>

    <video ref="videoRef" autoplay playsinline class="video-preview"></video>

    <div class="controls">
      <button v-if="!isCameraOn" @click="startCamera" class="btn start-btn">启动摄像头</button>
      <button v-else @click="stopCamera" class="btn stop-btn">关闭摄像头</button>
    </div>
    <!--如果 errorMsg 为真（即有错误信息）： 渲染结果是 <p class="status error">摄像头访问被拒绝</p> -->
    <p class="status" :class="{ error: errorMsg }">
      {{ errorMsg || (isCameraOn ? "摄像头已开启 ✅" : "摄像头未开启 ❌") }}
    </p>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const videoRef = ref(null);
const isCameraOn = ref(false);
const errorMsg = ref("");
let stream = null;

const goBack = () => {
  router.push("/");
};

const startCamera = async () => {
  errorMsg.value = "";
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.value.srcObject = stream;
    isCameraOn.value = true;
  } catch (error) {
    errorMsg.value = "无法访问摄像头，请检查权限或设备。";
    console.error("摄像头启动失败:", error);
  }
};

const stopCamera = () => {
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    videoRef.value.srcObject = null;
    isCameraOn.value = false;
  }
};

// 组件卸载时自动关闭摄像头
onBeforeUnmount(() => {
  stopCamera();
});
</script>

<style scoped>
.demo-container {
  padding: 20px;
  text-align: center;
  height: 100vh;
  box-sizing: border-box;
  background-color: #f9f9fb;
  position: relative;
}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 8px 15px;
  border: none;
  background-color: #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.video-preview {
  width: 60%;
  max-width: 400px;
  margin: 20px auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: black;
}

.controls {
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  margin: 0 10px;
}

.start-btn {
  background-color: #4caf50;
  color: white;
}

.stop-btn {
  background-color: #f44336;
  color: white;
}

.status {
  margin-top: 15px;
  font-size: 14px;
  color: #666;
}

.status.error {
  color: red;
}
</style>
