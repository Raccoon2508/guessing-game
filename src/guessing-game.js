class GuessingGame {
    constructor() {
      this._curNum=null;
      this._minNum=null;
      this._maxNum=null;
      this._numArr=[];
      this.midInd=null;
      
      }

    setRange(min, max) {
      this._numArr=[];
      for(let i=min; i<=max;i++){
        this._numArr.push(i);}
      
      this._minNum=min; 
      this._maxNum=max;
      
     
        
    }

    guess() {
      this.midInd=Math.floor((this._numArr.length)/2);
      return this._numArr[this.midInd]; 

    }

    lower() {
      
      this.setRange(this._minNum, this._numArr[this.midInd]);
     
      

    }

    greater() {
     this.setRange(this._numArr[this.midInd],this._maxNum);

    }
}

module.exports = GuessingGame;
