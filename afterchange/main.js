// 獲取圖片元素
var img = document.getElementById("dog");

// 設置初始位置
var x = 0;

// 設置移動速度
var speed = 0.5;

// 設置移動方向
var directionX = 1;


// 設置移動函數
function moveImage() {
    // 計算新的位置
    x = x + (speed * directionX);

    // 更新圖片位置
    img.style.left = x + "px";

    // 設置下一次移動
    window.requestAnimationFrame(moveImage);
}

// 開始移動
moveImage();
