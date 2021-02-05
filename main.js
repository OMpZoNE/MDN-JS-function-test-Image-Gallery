const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 添加图片循环 */

for (let i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/pic"+i+".jpg");
    thumbBar.appendChild(newImage);
    newImage.onclick = function (e) {
        displayedImage.setAttribute
        //注意，e.target指的是newImage；我们希望把newImage的src传给displayedImage，所以可以这么写；
        ('src', e.target.src);
        //中文mdn文档说不能把displayedImage.setAttribute（"src",""）传入的变量携程newImage.getAttribute("src")，因为事件处理函数应用之前就已经结束循环了，这样最后得到的是最后一个src；但是英文文档未提及，且实际变成发现没有问题
    }
}

/* 编写 变暗/变量 按钮功能 */
btn.onclick = function () {    
    if (btn.getAttribute("class") === "dark") {
        btn.setAttribute('class', 'light');
        btn.textContent = "变亮";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }        
    else {
        btn.setAttribute('class', 'dark');
        btn.textContent = '变暗';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}

