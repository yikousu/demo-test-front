/**
 * 自定义指令
 */

// 可以通过插件的方法 把懒加载指令封装成插件
// main.js入口文件只需要负责注册插件即可  app.use(lazyPlug);

export const lazyPlug = {
  install(app) {
    // 全局的指令  可以局部
    app.directive("focus", {
      mounted(el) {
        el.focus();
      },
    });

    app.directive("draggable", {
      mounted(el) {
        // 设置 position: absolute，让元素可以自由定位（否则 left/top 无法生效）。
        // 设置 cursor: move，鼠标移动到元素上时变成拖拽手型。
        el.style.position = "absolute";
        el.style.cursor = "move";

        el.onmousedown = e => {
          const disX = e.clientX - el.offsetLeft;
          const disY = e.clientY - el.offsetTop;
          // 鼠标移动时，根据当前鼠标位置，动态设置元素的位置。
          const onMouseMove = e => {
            el.style.left = e.clientX - disX + "px";
            el.style.top = e.clientY - disY + "px";
          };

          // 鼠标抬起时取消监听
          const onMouseUp = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
          };
          document.addEventListener("mousemove", onMouseMove);
          document.addEventListener("mouseup", onMouseUp);
        };
      },
    });
  },
};
