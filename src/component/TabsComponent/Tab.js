import { PureComponent } from 'react'

export class Tab extends PureComponent {
    clickHandler = () => {
        console.log(this.props.number);
        this.props.changeActiveTab(this.props.number);
    }
    render() {
        
        return (
            <div block='TabsComponent' elem='Tab' onClick={this.clickHandler}>{this.props.data.name}</div>
        )
    }
}

export default Tab;