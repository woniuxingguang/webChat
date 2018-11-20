import React from 'react';
import { 
	Main,
	Wrapper,
	Nav,
	NavHeader,
	HeadPic,
	NavSearch,
	NavTab,
	NavItem,
	Chat,
	ChatHeader,
	ChatContent,
	ChatFooter,
	ChatSend,
	Send,
	Footer
 } from './style.js';

export default class Layout extends React.Component {
	render(){
		return(
			<div>
				<Wrapper>
					<Nav>
						<NavHeader>
							<HeadPic/>
							<h3>珊</h3>
							<i className="iconfont">&#xe6b8;</i>
						</NavHeader>
						<NavSearch/>
						<i className="iconfont search">&#xe66b;</i>
						<NavTab>
							<i className="iconfont">&#xe60f;</i>
							<i className="iconfont">&#xe60e;</i>
							<i className="iconfont userlist">&#xe655;</i>
						</NavTab>
						<NavItem>
							<img src="./list/1.png" alt="" />
							<div className="title">
								<h6>H5自学团—正式开团</h6>
								<p>[3条]ORANGE:打卡</p>
							</div>
							<div className="time">13:00</div>
						</NavItem>
					</Nav>
					<Chat>
						<ChatHeader>
							H5自学团——正式开团
							<i className="iconfont">&#xe600;</i>
						</ChatHeader>
						<ChatContent></ChatContent>
						<ChatFooter>
							<div>
								<i className="iconfont">&#xe63d;</i>
								<i className="iconfont">&#xe6f5;</i>
								<i className="iconfont">&#xe7e0;</i>
							</div>					
							<ChatSend>
								<span>按下Ctrl+Enter换行</span>
								<Send>发送</Send>
							</ChatSend>
						</ChatFooter>
					</Chat>
				</Wrapper>
				<Footer>
					<span>© 1998 - 2018 Tencent Inc. All Rights Reserved  |  帮助</span>
				</Footer>
			</div>
			
		)
	}
}