import React from "react";
import './lobbyPage.css';
import CodeBlockList from '../../comps/codeBlocks/codeBlockList';
import { useNavigate } from "react-router-dom";

function LobbyPage(){

 // const isStudent = true; {/*need to create field*/}

  //navigate to new code block page
  const navigate = useNavigate();
  const navigateToNewCodeBlock = () => navigate('/newCodeBlock');

  return (
    <div>
          <div className="header">
            <h2>Choose code block:</h2> 
            <button className="addNewCB" onClick={navigateToNewCodeBlock}>  {/*add code block manually*/}
              <h4>Add new code block</h4>
            </button>
          </div> {/*display all existing code blocks*/}
            <CodeBlockList/>
          </div> 
  )}

export default LobbyPage;