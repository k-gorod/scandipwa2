import TabsComponent from 'Component/TabsComponent/TabsComponent.component';
import { PureComponent } from 'react'
import './ProductInfo.style';

export class ProductInfo extends PureComponent {

    render() {
        const data = this.props.data;
        const arrOfTabs = ["ABOUT", "DETAILS", "REVIEWS"];
        console.log(data);
        return (
            <div block='ProductInfo'>
                <TabsComponent
                    tabsObjects={
                        arrOfTabs.map((tab, i) => {
                            return {
                                name: tab,
                                type: tab === "ABOUT" ? 'text' : 'array',
                                tabData: i === 0 ? /*data.description.html*/ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptate doloribus voluptatem? Fuga rem facere laborum aspernatur incidunt. Quas doloribus, soluta, aut" 
                                : i === 1 ? /*data.attributes*/"Attributes" : data.reviews
                            }
                        })
                    }
                />
            </div>
        )
    }
}
export default ProductInfo;