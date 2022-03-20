/* chart.js chart examples */

// chart colors
var colors = ['#007bff','#28a745','#333333','#c3e6cb','#dc3545','#6c757d'];

/* 3 donut charts */
var donutOptions = {
  cutoutPercentage: 60, 
  legend: {position:'bottom', padding:5, labels: {pointStyle:'circle', usePointStyle:true, fontSize: 20, fontColor: 'white'},  pointRadius: 10},
  
};

// donut 1
var chDonutData1 = {
    labels: ['Nitrogen', 'Phosphorus', 'Potassium'],
    datasets: [
      {
        backgroundColor: colors.slice(0,3),
        borderWidth: 2,
        borderRadius: 5,
        data: [74, 11, 40],
        
      }
    ]
};

var chDonut1 = document.getElementById("chDonut1");
if (chDonut1) {
  new Chart(chDonut1, {
      type: 'pie',
      data: chDonutData1,
      options: donutOptions
  });
}


