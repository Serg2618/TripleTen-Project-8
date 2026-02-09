## Draken Sprint-Project 8 — Functional Flow & Requirements
Urban route test from **“East”** to **“1300 Street”**, including taxi ordering, add-ons, payment, messaging, and vehicle confirmation.

---

### Required System Flow

1. **User Information Initialization**
   * The system must allow input of **address** and **phone number**.
   * The **phone number must be saved** and remain reusable across the entire project flow.
   * Previously saved phone numbers should auto-populate when applicable.

2. **Payment Method Setup**
   * The system must support **credit card payment**.
   * All required credit card fields must be fillable.
   * Entered card details must be **validated**, **stored**, and **visibly confirmed** in the UI.
   * The payment method must remain active and selectable for the order.

3. **Driver Messaging**
   * The system must allow the user to **write a message to the driver**.
   * The message content (e.g., *“get some whiskey”*) must be:
     * Successfully entered
     * Stored in the system
     * Associated with the current ride request

4. **Supportive Items Selection**
   * The system must provide selectable options for:
     * **Blanket**
     * **Handkerchiefs**
   * When selected, the corresponding toggle/button must:
     * Change state to **checked**
     * Persist as selected for the order

5. **Additional Items Ordering**
   * The system must allow ordering **Ice Cream** using a **“+” increment button**.
   * Pressing “+” twice must:
     * Increase the item count to **2**
     * Correctly reflect the quantity in the order summary

6. **Order Confirmation & Vehicle Assignment**
   * After all required fields and selections are completed, the system must enable the button:
     * **“Enter the number and order”**
   * Upon activation:
     * A **short countdown** must begin
     * After the countdown, the system must display:
       * **Assigned car model**
       * **Vehicle details**
       * **Order confirmation information**

### Expected Outcome
* All steps must execute without errors.
* All user inputs and selections must persist correctly through the flow.
* The final screen must clearly present the vehicle model and order details.

