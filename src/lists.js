import React,{ Component } from 'react';
class Lists extends Component
{
    createTasks(item)
    {
    return <li key={item.key}>{item.text}</li>
    }
    render()
    {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        return (
          
        <ul type="circle" className="theList">
            {listItems}
            </ul>
           
        );
    }

}
export default Lists;