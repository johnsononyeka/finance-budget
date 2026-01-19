const spendingCanvas = document.getElementById("spendingChart");
const networthCanvas = document.getElementById("networthChart");

function drawLine(canvas, data, color) {
  const ctx = canvas.getContext("2d");
  canvas.width = canvas.offsetWidth;
  canvas.height = 150;

  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();

  data.forEach((val, i) => {
    const x = (canvas.width / (data.length - 1)) * i;
    const y = canvas.height - val;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });

  ctx.stroke();
}

drawLine(spendingCanvas, [0, 10, 20, 55, 70, 120, 124, 123, 125, 126, 129, 130], "#f97316");
drawLine(networthCanvas, [1, 1, 14, 12, 28, 27, 42, 40, 58, 56, 70, 68, 85, 82, 95, 93, 110, 107, 120, 118, 140, 139], "#0ea5e9");
