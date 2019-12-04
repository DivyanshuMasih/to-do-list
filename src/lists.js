import React,{ Component } from 'react';
class Lists extends Component
{
    createTasks(item)
    {
    return <div>
        
        <li key={item.key}>{item.text}</li>
        <ColoredLine color="white" />
    </div>
    }
    render()
    {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        return (
            
      <ul className="clr theList ull ">
            {listItems }
            
            </ul>
           
           
        );
        
    }

}

const ColoredLine = ({ color,h }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: .1
            
        }}
    />
  );
export default Lists;