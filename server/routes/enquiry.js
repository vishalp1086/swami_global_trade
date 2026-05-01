const express = require("express");
const router = express.Router();
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    // ✅ Basic validation
    if (!data.name || !data.email) {
      return res.status(400).json({ error: "Name & Email required" });
    }

    await resend.emails.send({
      from: "onboarding@resend.dev", // default testing sender
      to: "info@swamiglobaltrade.com",
      subject: "New Enquiry from Website",

      html: `
        <h3>New Enquiry</h3>

        <p><b>Name:</b> ${data.name || ""}</p>
        <p><b>Company:</b> ${data.company || ""}</p>
        <p><b>Email:</b> ${data.email || ""}</p>
        <p><b>Phone:</b> ${data.phone || ""}</p>
        <p><b>Country:</b> ${data.country || ""}</p>
        <p><b>Products:</b> ${
          Array.isArray(data.products) ? data.products.join(", ") : ""
        }</p>
        <p><b>Enquiry Type:</b> ${data.enquiryType || ""}</p>
        <p><b>Quantity:</b> ${data.quantity || ""}</p>
        <p><b>Message:</b> ${data.message || ""}</p>
      `,
    });

    res.json({ success: true });

  } catch (error) {
    console.error("RESEND ERROR:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;