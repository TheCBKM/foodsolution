# Chart.JS Responsive Dashboard Widget
 _A Pen created at CodePen.io. Original URL: [https://codepen.io/klesht/pen/aOWKQN](https://codepen.io/klesht/pen/aOWKQN).

 Having some fun experimenting with [Chart.JS](http://www.chartjs.org/).  This concept for a responsive dashboard widget features a line chart accompanied by some progress meters for expanded data.

A seemingly simple chart, highlighting a single data point presented a unique challenge.  Chart.JS provides a tooltip function, but by default there is no direct control for a targeted selection.  Tooltips are either all on, or all off.  To resolve this issue, and highlight a single data point, onAnimationComplete is used to fire a function that uses an if statement to select a point at a specified label.