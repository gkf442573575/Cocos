// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
import scoket from './socket.io';

const {
    ccclass,
    property
} = cc._decorator;

@ccclass
export default class LoginGame extends cc.Component {

    @property(cc.Button)
    private login_btn: cc.Button = null;
    @property(cc.EditBox)
    private inputNickname: cc.EditBox = null;
    
    public nickname: string = '';

    // LIFE-CYCLE CALLBACKS:
    // 登陆按钮点击事件
    login(event) {
        if(this.nickname){
            cc.log('去登陆');
        }else{
            cc.error('未输入昵称');
        }
    }
    // 输入框输入结束事件
    nameInput(event) {
        this.nickname = event.detail.string;
    }

    onLoad() {
        this.login_btn.node.on('click', this.login, this);
        this.inputNickname.node.on('editing-did-ended', this.nameInput, this);
        // let scoket = io('http://localhost:8080/');
    }

    start() {

    }

    // update (dt) {}
}