class ScorePanel{
    score=0
    level=1
    scoreEle:HTMLElement
    levelEle:HTMLElement
    constructor(){
        this.scoreEle=document.getElementById('score')!
        this.levelEle=document.getElementById('level')!
    }
    // 加分方法
    addScore(){
        this.score++
        this.scoreEle.innerHTML=this.score+''
        if(this.score%10===0){
            this.addLevel()
        }
    }

    // 升级方法
    addLevel(){
        if(this.level<10){
            this.levelEle.innerHTML=++this.level+''
        }
    }
}


export default ScorePanel