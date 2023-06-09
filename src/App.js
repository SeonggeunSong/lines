/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import React from 'react';
// UI 기본 구성을 위해 3개의 영역으로 이미지를 분할하여 화면에 표시하는 방법으로 진행
// 1. System 이름,  2. System 대표 이미지, 3. 개발 Process flow 이미지
import mainUI from './LINES_Main.jpg';
import mainDEJ from './LINES_DEJ.jpg';
import mainLG from './BG_LG_Color.jpg';

function App(){

  const containerStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: 'gray',
  };

  const MainimageStyle = {
    width: 'auto',  // auto로 지정해야 화면 Size 변경에 적용됨
    height: 'auto',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // position: 'absolute',
    objectPosition: 'center',
    display: 'block',
    margin: 0,
    padding: 0,
    border: 'none',
  };

  // 시스템 내부에 있는 각 시스템에 대한 URL 정보
  const initiativeOpenURL = () => {
      window.open('http://collab.lge.com/main/display/DEVOPS/Initiative+Manager', '_blank');
  };
  const initialModelOpenURL = () => {
    window.open('http://collab.lge.com/main/pages/viewpage.action?pageId=1629829381', '_blank');
  };

  const programGoverningOpenURL = () => {
    window.open('http://collab.lge.com/main/pages/viewpage.action?spaceKey=DEVOPS&title=2023+SW+Program+Management', '_blank');
  };
  const qaEventOpenURL = () => {
    window.open('http://collab.lge.com/main/pages/viewpage.action?pageId=1711358546', '_blank');
  };
  const productionIssueOpenURL = () => {
    window.open('http://collab.lge.com/main/pages/viewpage.action?pageId=1845886116', '_blank');
  };
  const modifyModelOpenURL = () => {
    window.open('http://collab.lge.com/main/pages/viewpage.action?pageId=1597462496', '_blank');
  };
  const qaCapaOpenURL = () => {
    window.open('http://10.157.92.247:3001/', '_blank');
  };
  const releaseTimelineOpenURL = () => {
    window.open('http://collab.lge.com/main/display/WOSTVBUILD/Release+Timeline', '_blank');
  };
  const eventLeadingOpenURL = () => {
    window.open('http://collab.lge.com/main/pages/viewpage.action?pageId=1597462496', '_blank');
  };
  const ecoManagementOpenURL = () => {
    window.open('http://collab.lge.com/main/pages/viewpage.action?pageId=806100256', '_blank');
  };
  const fieldIssueOpenURL = () => {
    window.open('http://collab.lge.com/main/pages/viewpage.action?pageId=1630851683', '_blank');
  };
  const ecoChangeOpenURL = () => {
    window.open('http://baas.lge.com/cms#/dashBoard', '_blank');
  };

  return(
    <div style={containerStyle}>
      <img src={mainLG} style ={MainimageStyle} /> 
      <img src={mainUI} style ={MainimageStyle} />
      <img src={mainDEJ} style ={MainimageStyle} />

      <button onClick={initiativeOpenURL} className="whatsNew_button"> What's new?  </button>
      <button onClick={initiativeOpenURL} className="initiative_button"> Initiative Management  </button>
      <button onClick={initialModelOpenURL} className="initialModel_button"> Initial Development Management </button>
      <button onClick={programGoverningOpenURL} className="programGoverning_button"> Program Governing </button>
      <button onClick={qaEventOpenURL} className="qaEventManagement_button"> QA Event Management </button>
      <button onClick={productionIssueOpenURL} className="productionIssue_button"> Production Issue Management </button>
      <button onClick={modifyModelOpenURL} className="modifyModel_button"> Modify Developemnt Management </button>
      <button onClick={qaCapaOpenURL} className="qaCapa_button"> QA CAPA Management </button>
      <button onClick={releaseTimelineOpenURL} className="buildReuire_button"> Rlease TimeLine </button>
      <button onClick={eventLeadingOpenURL} className="eventLeading_button"> Event Leading Management </button>
      <button onClick={ecoManagementOpenURL} className="ecoManagement_button"> ECO Management </button>
      <button onClick={fieldIssueOpenURL} className="fieldIssueManagement_button"> Hawk Eye </button>
      <button onClick={ecoChangeOpenURL} className="ecoChangeManagement_button"> 양산 변경 심의회 </button>

    </div>
  ); 

}


export default App;
