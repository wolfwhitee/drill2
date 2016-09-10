var app;

app = angular.module('DrillApp');

app.factory('StatsFactory', function() {
  return {
    createStats: function() {
      var Stats;
      Stats = function() {
        this.correct = 0;
        this.partial = 0;
        this.incorrect = 0;
        this.score = 0;
        this.totalPoints = 0;
        this.totalQuestions = function() {
          return this.correct + this.incorrect + this.partial;
        };
        this.pcOfQuestions = function(num) {
          if (this.totalQuestions()) {
            return Math.round(num * 100 / this.totalQuestions());
          } else {
            return 0;
          }
        };
        this.pcScore = function() {
          if (this.totalPoints) {
            return Math.round(this.score * 100 / this.totalPoints);
          } else {
            return 0;
          }
        };
      };
      return new Stats();
    }
  };
});