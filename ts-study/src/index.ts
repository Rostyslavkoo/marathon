interface Rect {
  readonly id:string
  color?:string
  size:{
    width:number
    height:number
  }
}

const rect1:Rect = {
  id:'1',
  size:{
    height:1,
    width:1
  },
  color:'ccc'
}

const rect3 = {} as Rect
const rect4  = <Rect>{}


interface RectWithArea extends Rect {
  getArea: () => number
}
const rect10:RectWithArea = {
  id:'1',
  size:{
    height:1,
    width:1
  },
  getArea():number{
    return 1
  }
}

interface IClock {
  time:Date
  setTime(date:Date):void
}
class Clock implements IClock{
  time:Date = new Date
  setTime(date: Date): void {
    
  }
}
interface Styles {
  [key:string]:string | number
}
const css:Styles = {
  border: '1px solid black',
  marginTop:'2px',
  borderRadous:'5px',
  borderRadois:5
}
