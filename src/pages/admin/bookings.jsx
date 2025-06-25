const bookings = [
    {
        bookingId: 101,
        roomId: 201,
        email: "user1@example.com",
        status: "approved",
        reason: "Team Meeting",
        start: new Date("2025-07-01T09:00:00Z"),
        end: new Date("2025-07-01T12:00:00Z"),
        timestamp: new Date("2025-06-25T10:15:00Z"),
        note: "Projector required"
    },
    {
        bookingId: 102,
        roomId: 202,
        email: "user2@example.com",
        status: "pending",
        reason: "Client Presentation",
        start: new Date("2025-07-03T14:00:00Z"),
        end: new Date("2025-07-03T16:00:00Z"),
        timestamp: new Date("2025-06-26T11:45:00Z"),
        note: "Need HDMI cable"
    },
    {
        bookingId: 103,
        roomId: 203,
        email: "user3@example.com",
        status: "rejected",
        reason: "Room not available",
        start: new Date("2025-07-05T10:00:00Z"),
        end: new Date("2025-07-05T12:00:00Z"),
        timestamp: new Date("2025-06-27T08:20:00Z"),
        note: "Try another room"
    }
];



export default function AdminBooking() {
    return (
        <div className="w-full p-4">
            <table className="w-full table-auto border border-gray-300">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="border px-4 py-2">Booking ID</th>
                        <th className="border px-4 py-2">Email</th>
                        <th className="border px-4 py-2">Start Date</th>
                        <th className="border px-4 py-2">End Date</th>
                        <th className="border px-4 py-2">Status</th>
                        <th className="border px-4 py-2">Reason</th>
                        <th className="border px-4 py-2">Timestamp</th>
                        <th className="border px-4 py-2">Note</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    bookings.map(
                        (booking)=>{
                            return(
                                <tr key={booking.bookingId}>
                                    <td>
                                        {booking.bookingId}
                                    </td>
                                    <td>
                                        {booking.roomId}
                                    </td>
                                    <td>
                                        {booking.email}
                                    </td>
                                    <td>
                                        {booking.start.toDateString()}
                                    </td>
                                    <td>
                                        {booking.end.toDateString()}
                                    </td>
                                    <td>
                                        {booking.status}
                                    </td>
                                    <td>
                                        {booking.reason}
                                    </td>
                                    <td>
                                        {booking.timestamp.toDateString()}
                                    </td>
                                    <td>
                                        {booking.note}
                                    </td>
                                    

                                </tr>
                            )
                        }
                    )
                   }
                </tbody>
            </table>
        </div>
    );
}
