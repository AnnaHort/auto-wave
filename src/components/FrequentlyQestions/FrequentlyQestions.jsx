import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    FrequentlyQestionsContainer,
  FrequentlyQestionsList,
  FrequentlyQestionsListEl,
  FrequentlyQestionsText,
  FrequentlyQestionsTitle,
} from './FrequentlyQestions.styled';

export const FrequentlyQestions = () => {
  return (
    <FrequentlyQestionsContainer>
      <FrequentlyQestionsTitle>
        Frequently Asked Questions
      </FrequentlyQestionsTitle>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{fontSize:"20px"}}
        >
          What do I need to rent a car?
        </AccordionSummary>
        <AccordionDetails>
          <p style={{marginBottom:"8px"}}>
            To book your car, all you need is a credit or debit card. When you
            pick the car up, you'll need:
          </p>

          <FrequentlyQestionsList>
            <FrequentlyQestionsListEl>
              <FrequentlyQestionsText>
                Your voucher / eVoucher, to show that you've paid for the car.
              </FrequentlyQestionsText>
            </FrequentlyQestionsListEl>
            <FrequentlyQestionsListEl>
              <FrequentlyQestionsText>
                The main driver's credit / debit card, with enough available
                funds for the car's deposit.
              </FrequentlyQestionsText>
            </FrequentlyQestionsListEl>
            <FrequentlyQestionsListEl>
              <FrequentlyQestionsText>
                Each driver's full, valid driving licence, which they've held
                for at least 12 months (often 24).
              </FrequentlyQestionsText>
            </FrequentlyQestionsListEl>
            <FrequentlyQestionsListEl>
              <FrequentlyQestionsText>
                Your passport and any other ID the car hire company needs to
                see.
              </FrequentlyQestionsText>
            </FrequentlyQestionsListEl>
          </FrequentlyQestionsList>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          How old do I have to be to rent a car?
        </AccordionSummary>
        <AccordionDetails>
          For most car rental companies, the age requirement is between 21 and
          70 years old. If you're under 25 or over 70, you might have to pay an
          additional fee.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Can I book a rental car for someone else?
        </AccordionSummary>
        <AccordionDetails>
          Yes, as long as they meet these requirements. Just fill in their
          details while you're making the reservation.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          How do I find the cheapest car rental deal
        </AccordionSummary>
        <AccordionDetails>
          We work with all the major international car hire brands (and lots of
          smaller local companies) to bring you a huge choice of cars at the
          very best prices. That's how we can find you cheap car hire deals at
          over 60,000 locations worldwide. To compare prices and find your ideal
          car at an unbeatable price, just use our search form.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          What should I look for when I'm choosing a car?
        </AccordionSummary>
        <AccordionDetails>
          <FrequentlyQestionsList>
            <FrequentlyQestionsListEl>
              <FrequentlyQestionsText>
                Space: You'll enjoy your rental far more if you choose a car
                with plenty of room for your passengers and luggage.
              </FrequentlyQestionsText>
            </FrequentlyQestionsListEl>
            <FrequentlyQestionsListEl>
              <FrequentlyQestionsText>
                Fuel policy: Not planning on driving much? A Like for like fuel
                policy can save you a lot of money.
              </FrequentlyQestionsText>
            </FrequentlyQestionsListEl>
            <FrequentlyQestionsListEl>
              <FrequentlyQestionsText>
                Location: You can't beat an 'on-airport' pick-up for
                convenience, but an 'off-airport' pick-up with a shuttle bus can
                be much cheaper.
              </FrequentlyQestionsText>
            </FrequentlyQestionsListEl>
          </FrequentlyQestionsList>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Are all fees included in the rental price?
        </AccordionSummary>
        <AccordionDetails>
          The vast majority of our rentals include Theft Protection, Collision
          Damage Waiver (CDW), local taxes, airport surcharges and any road
          fees. You'll pay for any ‘extras' when you pick your car up, along
          with any young driver, additional driver or one-way fees – but we'll
          explain any additional costs before you book your car (and taking your
          own child seats or GPS can be an easy way to reduce your costs). For
          more details on what's included, just check the Ts&Cs of any car
          you're looking at.
        </AccordionDetails>
      </Accordion>
    </FrequentlyQestionsContainer>
  );
};

export default FrequentlyQestions;
