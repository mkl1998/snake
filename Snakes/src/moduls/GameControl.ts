import Snake from "./Snake";
import Food from "./food";
import ScorePanel from "./scorePanel";


class GameControl{
    snake:Snake
    food:Food
    scorePanel:ScorePanel
    // 存储按键方向
    direction:string=''
    // 存储蛇是否存活
    isLive=true

    constructor(){
        this.food=new Food()
        this.snake=new Snake()
        this.scorePanel=new ScorePanel()
        this.init()
    }
    // 初始化
    init(){
        // 绑定按键按下事件
        document.addEventListener('keydown',this.keydownHandler.bind(this))
        this.run()
    }

    // 创建键盘按下响应函数
    keydownHandler(event:KeyboardEvent){
        this.direction=event.key
    }

    // 控制蛇移动
    run(){
        let X=this.snake.X
        let Y=this.snake.Y
        switch(this.direction){
            case 'ArrowUp':
            case 'Up':
                Y-=10
                break
            case 'ArrowDown':
            case 'Down':
                Y+=10
                break
            case 'ArrowLeft':
            case 'Left':
                X-=10
                break
            case 'ArrowRight':
            case 'Right':
                X+=10
                break
        }

        // 判断是否吃到食物
        if(this.checkEat(X,Y)){
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }

        try {
            this.snake.X=X
            this.snake.Y=Y
        } catch (error) {
            // 游戏结束
            alert('GAME OVER')
            this.isLive=false
        }

        this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30)
    }

    // 检查蛇是否吃到食物
    checkEat(X:number,Y:number){
        return X===this.food.X && Y===this.food.Y
    }
}

export default GameControl