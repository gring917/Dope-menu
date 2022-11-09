import React from 'react'
class Button extends React.Component{
  render() {
    return(
     <div className='buttons'>
     　<div className="button_menu">
    　  <h2 className="button"><a href="https://godfield.net/">ホスト側でプレイ</a></h2>
    　  <h2 className="button"><a href="https://godfield.net/">ゲスト側でプレイ</a></h2>
    　  <h2 className="button"><a href="https://godfield.net/">カード・ルール説明</a></h2>
    　  <h2 className="button"><a href="https://godfield.net/">設定</a></h2>
     　</div>
    　  <h3>プライバシーポリシー</h3>
     </div>
   );
  }
}

export default Button;
