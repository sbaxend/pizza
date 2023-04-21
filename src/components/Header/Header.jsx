import { useSelector } from 'react-redux';import { useSelector } from 'react-redux';

function Header() {
    const totalCost = useSelector(store => store.totalCost);
    const customersPizza = useSelector(store => store.customersPizza);

    const totalCost = useSelector(store => store.totalCost);
    const customersPizza = useSelector(store => store.customersPizza);

    // const costText = () => {
    //     customersPizza.length === 1 ? 'This pizza is yours for the low price of:' :
    //                                 'These pizzas are yours for the low price of:'
    // }

    return (
        <>
            <h1>
                {customersPizza.length === 1 ? 'This pizza is yours for the low price of:' :
                                    'These pizzas are yours for the low price of:'} {totalCost}
            </h1>
        </>
    )
}

export default Header