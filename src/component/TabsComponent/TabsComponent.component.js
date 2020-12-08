import { PureComponent } from 'react'
import Tab from './Tab'
import './TabsComponent.style'

export class TabsComponent extends PureComponent {
    state = {
        activeTab: 0
    }
    changeActiveTab = (number) => {
        this.setState({
            activeTab: number
        })
    }

    renderTabs() {
        return (
            <>
                {this.props.tabsObjects.map((e, i) => { return <Tab data={e} number={i} key={`${i}-tabs-${e.name}`} changeActiveTab={this.changeActiveTab} /> })}
            </>
        )
    }
    renderContentBlock() {
        return (
            <div>{this.props.tabsObjects[this.state.activeTab].tabData}</div>
        )
    }
    render() {
        return (
            <div>
                <div block='TabsComponent' elem='Tabs'>{this.renderTabs()}</div>
                <div block='TabsComponent' elem='Content'>{this.renderContentBlock()}</div>
            </div>
        )
    }
}

export default TabsComponent;