import { useState, useEffect } from 'react';

export const useOnLoadImages = (ref) => {
  // 初始 images 載入狀態為 false
  const [status, setStatus] = useState(false);

  useEffect(() => {
    // 更新 images 載入狀態的函式，接收 images 陣列，並在裡面使用 .complete property，來檢查 image 是否「完成載入」還沒會是 false，只有當收到的 images 陣列「都(.every)」完成載入，值才會是 true，不一樣的值觸發 re-render，最後傳出去的值變成 true，使用這個 hook 的元件也會收到 true 值
    const updateStatus = (images) => {
      setStatus(
        images.map((image) => image.complete).every((item) => item === true)
      );
    };

    // ref 不存在就可以直接 return 掉
    if (!ref.current) return;

    // 抓 ref 裡面所有的 img，並將 NodeList 改成陣列型別
    const imagesLoaded = Array.from(ref.current.querySelectorAll('img'));

    // 如果沒有任何 img 要載入，也可以說是 images 載入完成，更新 status 為 true
    if (imagesLoaded.length === 0) {
      setStatus(true);
      return;
    }

    // 在每個圖片上面綁監聽器，監聽 load 跟 error 事件，這兩個事件發生都代表著 .complete 為 true，就調用 updateStatus 更新現在整體的圖片載入狀況
    imagesLoaded.forEach((image) => {
      image.addEventListener('load', () => updateStatus(imagesLoaded), {
        once: true,
      });
      image.addEventListener('error', () => updateStatus(imagesLoaded), {
        once: true,
      });
    });
  }, [ref]);

  // 回傳 images 載入狀態
  return status;
};
