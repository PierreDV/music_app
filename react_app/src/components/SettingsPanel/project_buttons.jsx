import React from 'react';

class ProjectButtons extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ProjectButtons';
    }
    render() {
        return(<div className="projbuttons">
          <div id="playbutton">PLAY</div>
          <div id="savebutton">SAVE</div>
        </div>)
    }
}

export default ProjectButtons;