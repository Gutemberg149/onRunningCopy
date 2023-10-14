import SubmitData from "../../../componentes/SubmitData";
import Order_ReturnTracker from "../Order_ReturnTracker";

const theme_Questions = [
  [
    { id: 1, title: "Purchase at a retailer (online or store) " },
    {
      id: 2,
      idTitle: 1,
      question: "Retailer",
      answer:
        "If you purchased through a retailer, please contact them directly to arrange a return.",
    },
  ],

  [
    { id: 3, title: "Purchase from On" },
    {
      id: 4,
      idTitle: 3,
      question: "Return or Exchange",
      answer: (
        <div>
          - Website orders: Enter your order number and the email address used
          to place the order so we can fetch your order details from our system.
          If you want to return an exchange order please contact us and we'll
          help you with your return.
          <br />
          <br />- On store purchases: Returns and exchanges for purchases made
          at an On store can be made either in store or by reaching out to us
          via our Contact Us form.,
          <br />
          <br />- Cyclon™ Products: Go to this page for more information on how
          to recycle, return or exchange.
          <br /> <br />
          <br />
          <SubmitData />
        </div>
      ),
    },
  ],
];

export default theme_Questions;
