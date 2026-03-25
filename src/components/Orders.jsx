import '../styles/orders.css'
export default function Orders({list, openSidebar, setList}){

     const formatMWK = (num) => `MWK${num.toLocaleString()}`;

    function increaseQty(index){
  setList(prev => prev.map((item, i) => 
    i === index ? {...item, quantity: item.quantity + 1} : item
  ))
}

function decreaseQty(index){
  setList(prev => prev.map((item, i) => 
    i === index && item.quantity > 1
      ? {...item, quantity: item.quantity - 1}
      : item
  ))
}

function deleteItem(index){
  setList(prev => prev.filter((_, i) => i !== index))
}

const generateWhatsAppMessage = (order, total) => {
  let message = "🛒 *Cafe Maju Order*\n\n";

  order.forEach((item) => {
    message += `• ${item.label} x${item.quantity} - ${formatMWK(item.price * item.quantity)}\n`;
  });

  message += `\n💰 *Total:* ${formatMWK(total)}\n\n`;
  message += `👤 Name: \n⏰ Pickup Time: `;

  return encodeURIComponent(message);
};

  const sendToWhatsApp = () => {
    if (list.length === 0) return;

    const phone = "265998833172";
    const message = generateWhatsAppMessage(list, total);

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    setTimeout(() => {
  setList([]);
  openSidebar(false);
}, 1000);
  };

const total = list.reduce((acc, item) => acc + item.price * item.quantity, 0)
return(
    <div className="orders-page">
        <div className="order-card">
            <div className="close" 
            onClick={()=>openSidebar(false)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
            </div>
            <h2>Orders</h2>
            {list.length === 0 ? <span>You have no orders</span> :
             <div className='orders'>
                {list.map((item, i) => {

                    return(
                        <div className="card" key={i}>
                            <span>{item.label}</span>
                            <span>MWK {item.price.toLocaleString()}</span>
                            <div className="add">
                                <span
                                className='decrease'
                                onClick={()=>decreaseQty(i)}>-</span>
                                
                                <span className='qua'>{item.quantity}</span>
                               
                                <svg
                                onClick={()=>increaseQty(i)}
                                xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                            <div className="del" onClick={()=>deleteItem(i)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
                            </div>
                            </div>
                        </div>
                    )
                })}
                <span>Total: MWK{formatMWK(total)}</span>
                <div className="btn" 
                
                onClick={sendToWhatsApp}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
                    <span>Order Via Whatsapp</span>
                </div>
            </div>}
        </div>
    </div>
)
}