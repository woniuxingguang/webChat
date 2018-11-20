import styled from 'styled-components';
import Pic from './../../static/timg.jpg' 

export const Footer = styled.div`
	position:absolute;
	bottom: 30px;
	left: 50%;
	transform: translateX(-50%);
	color: #e3e3e3;
	font-size:12px;
`;
export const Wrapper = styled.div`
	display: flex;
	width: 1000px;
	height: 740px;
	background: rgb(238 238 238);
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
`;
export const Nav = styled.div`
	width: 280px;
	height: 100%;
	background: rgb(46 50 56);
	color: white;
	.search {
		position: absolute;
		left: 18px;
		top: 85px;
		font-size: 20px;
	}
`;
export const NavHeader = styled.div`
	display: flex;
	flex-driection: row;
	h3 {
		margin-top: 30px;
		margin-left: 10px;
	}
	.iconfont {	
		display: inline-block;	
		margin: 30px 20px 0 160px;
		color: #ccc;
	}

`;
export const HeadPic = styled.div`
	background: url(${Pic});
	width: 40px;
	height: 40px;
	background-size: contain;	
	margin: 20px 0 0 20px;
`;
export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 260px;
	height: 30px;
	margin: 20px 10px 0 10px;
	border: none;
	box-sizing: border-box;
	background: rgb(38 41 46);
	color: #fff;
	padding-left: 30px;
`;
export const NavTab = styled.div`
	border-bottom: 1px solid rgb(38 41 46);
	height: 40px;
	display: flex;
	justify-content: space-around;
	i {
		font-size: 20px;
		margin-top: 10px;
		margin-bottom: 10px;
		padding-right: 20px;
		border-right: 1px solid rgb(38 41 46);
		align-self: center;
	}
	.userlist {
		border-right: none;
	}
`;
export const NavItem = styled.div`
	border-bottom: 1px solid rgb(38 41 46);
	height: 60px;
	display: flex;
	padding-top: 20px;
	img {
		width: 40px;
		height: 40px;
		margin-left: 20px;
	}
	.title {		
		margin-left: 10px;
		h6 {
			font-size: 14px;
		}
		p{
			font-size: 13px;
			color: #989898;
		}
	}
	.time {
		margin-left: 20px;
		font-size: 13px;
		color: #6b6f7c;
	}
`;
export const Chat= styled.div`
	flex-grow: 1;
`;
export const ChatHeader = styled.div`
	height: 50px;
	width: 600px;
	border-bottom: 1px solid rgb(214 214 214);
	text-align:center;
	line-height: 50px;
	margin: 0 auto;
	i {
		font-size: 25px;
		margin-left: 10px;
	}
`;
export const ChatContent = styled.div`
	height: 510px;
`;
export const ChatFooter = styled.div`
	height: 180px;
	border-top: 1px solid rgb(214 214 214);
	div {
		margin-top: 5px;
	}
	i {
		font-size: 20px;
		margin: 10px;
	}
`;
export const ChatSend = styled.div`
	position: absolute;
	right: 15px;
	bottom: 15px;
	span{
		font-size: 12px;
		color: #888;
		margin-right: 7px;
	}
`;
export const Send = styled.button`
	width: 90px;
	height: 30px;
	border: 1px solid rgb(214 214 214);
	background: white;
	border-radius: 5px;
`;
