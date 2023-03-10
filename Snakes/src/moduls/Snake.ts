class Snake{
    head:HTMLElement
    body:HTMLCollection
    element:HTMLElement
    constructor(){
        this.element=document.getElementById('snake')!
        this.head=document.querySelector('#snake>div')!
        this.body=this.element.getElementsByTagName('div')!
    }

    // 蛇头坐标
    get X(){
        return this.head.offsetLeft
    }

    get Y(){
        return this.head.offsetTop
    }

    set X(value:number){
        if(this.X===value){
            return
        }
        // 蛇撞墙
        if(value<0 ||value>290){
            throw new Error('GAME OVER');  
        }

        if(this.body[1] && (this.body[1] as HTMLElement).offsetLeft===value){
            if(value>this.X){
                value=this.X-10
            }else{
                value=this.X+10
            }
        }

        // 移动身体
        this.moveBody()

        this.head.style.left=value+'px'

        this.checkHeadBody()
    }

    set Y(value:number){
        if(this.Y===value){
            return
        }
        // 蛇撞墙
        if(value<0 ||value>290){
            throw new Error('GAME OVER');  
        }

        if(this.body[1] && (this.body[1] as HTMLElement).offsetTop===value){
            if(value>this.Y){
                value=this.Y-10
            }else{
                value=this.Y+10
            }
        }

        // 移动身体
        this.moveBody()

        this.head.style.top=value+'px'

        this.checkHeadBody()
    }


    // 蛇添加身体
    addBody(){
        this.element.insertAdjacentHTML('beforeend','<div></div>')
    }

    // 移动身体
    moveBody(){
        for(let i=this.body.length-1;i>0;i--){
            let X=(this.body[i-1] as HTMLElement).offsetLeft
            let Y=(this.body[i-1] as HTMLElement).offsetTop;
            
            (this.body[i] as HTMLElement).style.left=X+'px';
            (this.body[i] as HTMLElement).style.top=Y+'px';
        }
    }

    // 检查头和身体是否相撞
    checkHeadBody(){
        for(let i=1;i<this.body.length;i++){
            let bd=this.body[i] as HTMLElement
            if(this.X===bd.offsetLeft && this.Y===bd.offsetTop){
                throw new Error('GAME OVER')
            }
        }
    }
}


export default Snake