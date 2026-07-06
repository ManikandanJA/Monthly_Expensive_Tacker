import { jsPDF } from "jspdf";

import "./MyBookings.css";
function MyBookings() {
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  const cancel = (index) => {
    const data = [...bookings];
    data.splice(index, 1);
    localStorage.setItem("bookings", JSON.stringify(data));
    window.location.reload();
  };

 const downloadPDF = (b) => {
  const doc = new jsPDF();

  const days =
    (new Date(b.endDate) - new Date(b.startDate)) /
    (1000 * 60 * 60 * 24);

  const amount = days * b.price;

  doc.text("Vehicle Rental Receipt", 20, 20);

  doc.text(`Name: ${b.username}`, 20, 40);
  doc.text(`Phone: ${b.phone}`, 20, 50);

  doc.text(`Vehicle: ${b.name}`, 20, 60);
  doc.text(`Type: ${b.type}`, 20, 70);

  doc.text(`Dates: ${b.startDate} to ${b.endDate}`, 20, 80);

  // 🔥 ALWAYS CORRECT
  doc.text(`Amount: ₹${amount}`, 20, 90);

  doc.save("booking.pdf");
};

  return (
    <div className="bookings">
      <h2>My Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        bookings.map((b, i) => (
          <div key={i} className="booking-card">

            <h3>{b.name} ({b.type})</h3>

            <p><strong>Name:</strong> {b.username}</p>
            <p><strong>Phone:</strong> {b.phone}</p>

            <p><strong>Dates:</strong> {b.startDate} to {b.endDate}</p>
            <p><strong>Amount:</strong> ₹{b.total}</p>

            <button onClick={() => cancel(i)}>Cancel</button>

            <button
              style={{ marginLeft: "10px", background: "green" }}
              onClick={() => downloadPDF(b)}
            >
              Download PDF
            </button>

          </div>
        ))
      )}
    </div>
  );
}

export default MyBookings;