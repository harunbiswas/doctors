import CommonHero from "../../layouts/frontend/basic/CommonHero";
import BookingForm from "../../layouts/frontend/booking/BookingForm";
import Header from "../../layouts/headers/Header";

export default function BookingAppointment() {
  return (
    <>
      <Header />
      <div className="booking-appointment">
        <CommonHero />
        <BookingForm />
      </div>
    </>
  );
}
