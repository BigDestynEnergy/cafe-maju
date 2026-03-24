export default function CheckoutModal({ isOpen, onClose, order, onConfirm }) {

    if (!isOpen) return null;

    const total = order.reduce((acc, item) => acc + Number(item.price), 0);

    return (
        <div className="modal-overlay">
            <div className="modal">

                <h2>Confirm Your Order</h2>

                <div className="order-items">
                    {order.map((item, index) => (
                        <div key={index} className="order-row">
                            <span>{item.label}</span>
                            <span>MWK{item.price}</span>
                        </div>
                    ))}
                </div>

                <div className="total">
                    <strong>Total:</strong> MWK{total}
                </div>

                <div className="actions">
                    <button className="cancel" onClick={onClose}>Cancel</button>
                    <button className="confirm" onClick={onConfirm}>Confirm Order</button>
                </div>

            </div>
        </div>
    );
}