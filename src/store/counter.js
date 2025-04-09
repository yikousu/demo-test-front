import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
    // ①定义变量
    const count = ref(0);

    // ②定义修改方法的变量
    const increment = () => {
        count.value++;
    };

    return {
        count,
        increment,
    };
});
