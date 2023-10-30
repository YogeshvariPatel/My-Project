// pie chart

      
var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
  width: 250,
  type: 'donut',
},

plotOptions: {
  pie: {
    startAngle: -90,
    endAngle: 270
  }
},
dataLabels: {
  enabled: false
},
fill: {
  type: 'gradient',
},

legend: {
  show: false,
},
// legend: {

//   formatter: function(val, opts) {
//     return val + " - " + opts.w.globals.series[opts.seriesIndex]
//   }
// },
title: {
  text: '',
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'top'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#pie"), options);
chart.render();



// audiences_metrics8

      
var options = {
  series: [{
 


   name: 'Revenue',
   data: [65, 76, 85, 101, 98, 87, 105, 91, 114, 94, 53, 39]


}],
  chart: {
  type: 'bar',
  height: 260
},
fill: {
  colors: ['#45CB85']
},

plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '10%',
    endingShape: 'rounded'
  },
},
dataLabels: {
  enabled: false,
},
stroke: {
  show: true,
  width: 1,
  colors: ['transparent']
},
xaxis: {
  categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec'],
},
yaxis: {
  labels:{
    show:false
  },

  title: {
    show: false,
  }
},
fill: {
  opacity: 5
},
tooltip: {
  y: {
    formatter: function (val) {
      return "$ " + val + " thousands"
    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#Metrics8"), options);
chart.render();







// audiences_metrics_charts
var options = {
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    height: 340,
    width:'100%',
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  
fill: {
  colors: ['#45CB85']
},
  
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  
  title: {
    text: 'Product Trends by Month',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#matric"), options);
  chart.render();



// bar chart chart
var options = {
    series: [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380, 600, 700, 1100 ]
  }],
    chart: {
    type: 'bar',
    height: 420
  },
  fill: {
    colors: ['#4b38b3']
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  grid:{
    show:false,
  },
  xaxis: {
    categories: ['India', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
      'United States', 'China', 'Germany', 'US', 'Dubai', 'Japan'
    ],
  }
  };

  var chart = new ApexCharts(document.querySelector("#bar"), options);
  chart.render();







